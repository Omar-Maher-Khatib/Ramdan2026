// ==========================================
// تحميل الصفحة
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initializeHomePage();
  setupCardAnimations();
  setupAccessibility();
  checkRamadanStatus();
});

// ==========================================
// تهيئة الصفحة الرئيسية
// ==========================================
function initializeHomePage() {
  console.log("🌙 تم تحميل الصفحة الرئيسية بنجاح");

  // إضافة تأثيرات الدخول للبطاقات
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

// ==========================================
// إعداد الرسوم المتحركة للبطاقات
// ==========================================
function setupCardAnimations() {
  const cards = document.querySelectorAll(".feature-card");

  cards.forEach((card) => {
    // تأثير عند التمرير فوق البطاقة
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    // تأثير عند النقر
    card.addEventListener("click", function (e) {
      // إضافة تأثير النبض
      this.style.animation = "none";
      setTimeout(() => {
        this.style.animation = "";
      }, 10);

      // إنشاء دوائر متموجة عند النقر
      createRipple(e, this);
    });
  });
}

// ==========================================
// إنشاء تأثير الموجة عند النقر
// ==========================================
function createRipple(event, element) {
  const ripple = document.createElement("span");
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(148, 137, 121, 0.4);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
    `;

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// إضافة CSS للموجة
const style = document.createElement("style");
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .feature-card {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// ==========================================
// إعداد إمكانية الوصول
// ==========================================
function setupAccessibility() {
  const cards = document.querySelectorAll(".feature-card");

  cards.forEach((card) => {
    // إضافة دعم لوحة المفاتيح
    card.setAttribute("tabindex", "0");

    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });

    // إضافة تركيز بصري
    card.addEventListener("focus", function () {
      this.style.outline = "3px solid var(--primary-color)";
      this.style.outlineOffset = "4px";
    });

    card.addEventListener("blur", function () {
      this.style.outline = "none";
    });
  });
}

// ==========================================
// التحقق من حالة رمضان
// ==========================================
function checkRamadanStatus() {
  const ramadanStartDate = new Date(2026, 1, 18); // 18 فبراير 2026
  const ramadanEndDate = new Date(2026, 2, 20); // 20 مارس 2026 (تقريبي)
  const today = new Date();

  const ramadanCard = document.querySelector(".ramadan-schedule");

  if (today >= ramadanStartDate && today <= ramadanEndDate) {
    // نحن في رمضان
    addRamadanBadge(ramadanCard, "جاري الآن");
  } else if (today < ramadanStartDate) {
    // قبل رمضان
    const daysUntil = Math.ceil(
      (ramadanStartDate - today) / (1000 * 60 * 60 * 24),
    );
    addRamadanBadge(ramadanCard, `بعد ${daysUntil} يوم`);
  }
}

function addRamadanBadge(card, text) {
  if (!card) return;

  const badge = document.createElement("div");
  badge.className = "status-badge";
  badge.textContent = text;
  badge.style.cssText = `
        position: absolute;
        top: 15px;
        left: 15px;
        background: linear-gradient(135deg, #d4af37, #f4d03f);
        color: #222831;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.85em;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        z-index: 10;
    `;

  card.appendChild(badge);
}

// ==========================================
// تتبع الإحصائيات (اختياري)
// ==========================================
function trackFeatureClick(featureName) {
  console.log(`✅ تم الضغط على: ${featureName}`);
  // يمكن إضافة تتبع إحصائيات هنا إذا لزم الأمر
}

// إضافة مستمعات للتتبع
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("click", function () {
    const featureName = this.querySelector(".card-title").textContent;
    trackFeatureClick(featureName);
  });
});

// ==========================================
// معالجة الأخطاء
// ==========================================
window.addEventListener("error", (e) => {
  console.error("حدث خطأ في الصفحة الرئيسية:", e.message);
});

// ==========================================
// رسالة ترحيب في وحدة التحكم
// ==========================================
console.log(
  "%c🌙 التطبيق الإسلامي الشامل",
  "font-size: 20px; color: #DFD0B8; font-weight: bold;",
);
console.log("%cرمضان مبارك 1447 - 2026", "font-size: 14px; color: #948979;");
