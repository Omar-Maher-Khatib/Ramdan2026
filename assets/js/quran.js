// ==========================================
// وِردي القرآني - Quran Reading Tracker
// ==========================================

const QURAN_PAGES = 604;
const RAMADAN_DAYS = 30;

// تاريخ بداية رمضان 1447 هـ (تقريبي)
const RAMADAN_START = new Date(2026, 1, 18); // 18 فبراير 2026

// صفحات بداية كل جزء (مصحف المدينة المنورة)
const JUZ_START_PAGES = [
  1, 22, 42, 62, 82, 102, 122, 142, 162, 182, 202, 222, 242, 262, 282, 302, 322,
  342, 362, 382, 402, 422, 442, 462, 482, 502, 522, 542, 562, 582,
];

const STORAGE_KEY = "quranTracker";

// حالة التطبيق
let state = {
  goal: 0,
  currentKhatma: 1,
  currentPage: 0,
  completedKhatmas: 0,
};

// ==========================================
// التهيئة (Initialization)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();

  if (state.goal > 0) {
    showDashboard();
  } else {
    showSetup();
  }

  setupEventListeners();
});

// ==========================================
// إدارة الحالة (State Management)
// ==========================================
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      state = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Error loading state:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Error saving state:", e);
  }
}

// ==========================================
// مستمعات الأحداث (Event Listeners)
// ==========================================
function setupEventListeners() {
  // اختيار عدد الختمات
  document.querySelectorAll(".khatma-card").forEach((card) => {
    card.addEventListener("click", () => {
      const count = parseInt(card.dataset.count);
      state.goal = count;
      state.currentKhatma = 1;
      state.currentPage = 0;
      state.completedKhatmas = 0;
      saveState();
      showDashboard();
    });
  });

  // تغيير الهدف
  document.getElementById("changeGoalBtn").addEventListener("click", () => {
    showSetup();
  });

  // أزرار +/-
  document.getElementById("pageMinus").addEventListener("click", () => {
    const input = document.getElementById("pageInput");
    const val = parseInt(input.value) || 1;
    if (val > 1) input.value = val - 1;
  });

  document.getElementById("pagePlus").addEventListener("click", () => {
    const input = document.getElementById("pageInput");
    const val = parseInt(input.value) || 0;
    if (val < QURAN_PAGES) input.value = val + 1;
  });

  // التحقق من الإدخال
  document.getElementById("pageInput").addEventListener("input", (e) => {
    let val = parseInt(e.target.value);
    if (val > QURAN_PAGES) e.target.value = QURAN_PAGES;
    if (val < 1 && e.target.value !== "") e.target.value = 1;
  });

  // التحديث بضغط Enter
  document.getElementById("pageInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      updateProgress();
    }
  });

  // زر التحديث
  document
    .getElementById("updateBtn")
    .addEventListener("click", updateProgress);

  // زر إعادة التعيين
  document.getElementById("resetBtn").addEventListener("click", () => {
    if (
      confirm("هل أنت متأكد من إعادة التعيين؟\nسيتم مسح كل التقدم المحفوظ.")
    ) {
      localStorage.removeItem(STORAGE_KEY);
      state = {
        goal: 0,
        currentKhatma: 1,
        currentPage: 0,
        completedKhatmas: 0,
      };
      showSetup();
    }
  });

  // إغلاق نافذة الاحتفال
  document.getElementById("celebrationBtn").addEventListener("click", () => {
    document.getElementById("celebrationModal").classList.remove("active");
  });
}

// ==========================================
// التنقل بين الأقسام (Navigation)
// ==========================================
function showSetup() {
  document.getElementById("setupSection").style.display = "block";
  document.getElementById("dashboardSection").style.display = "none";
}

function showDashboard() {
  document.getElementById("setupSection").style.display = "none";
  document.getElementById("dashboardSection").style.display = "block";
  updateDashboard();
}

// ==========================================
// تحديث التقدم (Update Progress)
// ==========================================
function updateProgress() {
  const input = document.getElementById("pageInput");
  let page = parseInt(input.value);

  if (isNaN(page) || page < 1) page = 1;
  if (page > QURAN_PAGES) page = QURAN_PAGES;

  state.currentPage = page;

  // التحقق من اكتمال الختمة
  if (page >= QURAN_PAGES) {
    state.completedKhatmas++;

    if (state.completedKhatmas < state.goal) {
      // انتقال للختمة التالية
      state.currentKhatma++;
      state.currentPage = 0;
      saveState();
      updateDashboard();
      showCelebration(
        "🎉",
        "ما شاء الله! أتممت الختمة رقم " + state.completedKhatmas,
        "استمر في ختمتك التالية، بارك الله فيك!",
      );
      return;
    } else {
      // اكتمال جميع الختمات
      saveState();
      updateDashboard();
      showCelebration(
        "🎊",
        "الله أكبر!",
        "أتممت جميع الختمات! تقبل الله منك وجعله في ميزان حسناتك",
      );
      return;
    }
  }

  saveState();
  updateDashboard();
}

// ==========================================
// تحديث لوحة التحكم (Update Dashboard)
// ==========================================
function updateDashboard() {
  const totalPages = state.goal * QURAN_PAGES;
  const totalRead = state.completedKhatmas * QURAN_PAGES + state.currentPage;
  const daysRemaining = getDaysRemaining();
  const pagesPerDay = Math.ceil(totalPages / RAMADAN_DAYS);
  const progressPercent =
    totalPages > 0 ? Math.round((totalRead / totalPages) * 100) : 0;

  // نص الهدف
  const goalTexts = ["", "ختمة واحدة", "ختمتان", "3 ختمات", "4 ختمات"];
  document.getElementById("goalText").textContent =
    goalTexts[state.goal] || state.goal + " ختمات";

  // الإحصائيات
  document.getElementById("pagesPerDay").textContent = pagesPerDay;
  document.getElementById("daysRemaining").textContent = daysRemaining;
  document.getElementById("totalRead").textContent = totalRead;
  document.getElementById("completedKhatmas").textContent =
    state.completedKhatmas + "/" + state.goal;

  // حلقة التقدم
  const circumference = 2 * Math.PI * 90; // r = 90
  const offset = circumference * (1 - progressPercent / 100);
  const ring = document.getElementById("progressRing");
  ring.style.strokeDashoffset = offset;
  document.getElementById("progressPercent").textContent =
    progressPercent + "%";

  // معلومات الختمة الحالية
  document.getElementById("currentKhatmaNum").textContent = state.currentKhatma;
  document.getElementById("totalKhatmas").textContent = state.goal;
  document.getElementById("currentPageDisplay").textContent = state.currentPage;

  // شريط تقدم الختمة
  const khatmaProgress = (state.currentPage / QURAN_PAGES) * 100;
  document.getElementById("khatmaProgressBar").style.width =
    khatmaProgress + "%";

  // حقل الإدخال
  const pageInput = document.getElementById("pageInput");
  pageInput.value = state.currentPage > 0 ? state.currentPage : 1;

  // ورد اليوم
  updateTodayReading(pagesPerDay, totalRead, totalPages);

  // شبكة الأجزاء
  updateJuzGrid();
}

// ==========================================
// ورد اليوم (Today's Reading)
// ==========================================
function updateTodayReading(pagesPerDay, totalRead, totalPages) {
  const dayOfRamadan = getDayOfRamadan();

  // الصفحة التالية المطلوب قراءتها
  const fromPage = state.currentPage + 1;
  const toPage = Math.min(state.currentPage + pagesPerDay, QURAN_PAGES);

  document.getElementById("fromPage").textContent = Math.min(
    fromPage,
    QURAN_PAGES,
  );
  document.getElementById("toPage").textContent = toPage;

  // حالة التقدم مقارنة بالجدول
  const statusEl = document.getElementById("todayStatus");

  // الصفحات المتوقع قراءتها حتى اليوم
  const pagesPerDayTotal = Math.ceil(totalPages / RAMADAN_DAYS);
  const expectedByToday = Math.min(pagesPerDayTotal * dayOfRamadan, totalPages);
  const diff = totalRead - expectedByToday;

  if (state.completedKhatmas >= state.goal) {
    statusEl.textContent = "🎊 ما شاء الله! أتممت جميع الختمات";
    statusEl.className = "today-status ahead";
  } else if (diff > pagesPerDayTotal) {
    statusEl.textContent =
      "🚀 ما شاء الله! أنت متقدم بـ " + diff + " صفحة على الجدول";
    statusEl.className = "today-status ahead";
  } else if (diff >= 0) {
    statusEl.textContent = "✨ أنت على المسار الصحيح، بارك الله فيك!";
    statusEl.className = "today-status on-track";
  } else {
    statusEl.textContent =
      "⏰ متأخر بـ " + Math.abs(diff) + " صفحة، لا تستسلم واستعن بالله!";
    statusEl.className = "today-status behind";
  }
}

// ==========================================
// تتبع الأجزاء (Juz Grid)
// ==========================================
function updateJuzGrid() {
  const grid = document.getElementById("juzGrid");
  grid.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    const juzBox = document.createElement("div");
    juzBox.className = "juz-box";

    const juzStart = JUZ_START_PAGES[i];
    const juzEnd = i < 29 ? JUZ_START_PAGES[i + 1] - 1 : QURAN_PAGES;

    // تحديد حالة الجزء
    if (state.currentPage >= juzEnd) {
      juzBox.classList.add("completed");
    } else if (state.currentPage >= juzStart) {
      juzBox.classList.add("current");
    }

    juzBox.innerHTML =
      '<div class="juz-num">' +
      (i + 1) +
      "</div>" +
      '<div class="juz-label">الجزء</div>';

    grid.appendChild(juzBox);
  }
}

// ==========================================
// حسابات التاريخ (Date Calculations)
// ==========================================
function getDayOfRamadan() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(RAMADAN_START);
  start.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

  // قبل رمضان = يوم 1، بعد رمضان = 30
  return Math.max(1, Math.min(diffDays, RAMADAN_DAYS));
}

function getDaysRemaining() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const endDate = new Date(RAMADAN_START);
  endDate.setDate(endDate.getDate() + RAMADAN_DAYS);
  endDate.setHours(0, 0, 0, 0);

  const diffTime = endDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return Math.max(0, Math.min(diffDays, RAMADAN_DAYS));
}

// ==========================================
// نافذة الاحتفال (Celebration Modal)
// ==========================================
function showCelebration(icon, title, text) {
  document.getElementById("celebrationIcon").textContent = icon;
  document.getElementById("celebrationTitle").textContent = title;
  document.getElementById("celebrationText").textContent = text;
  document.getElementById("celebrationModal").classList.add("active");
}
