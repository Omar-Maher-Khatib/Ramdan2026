// Current day state
let currentDay = 1;
const maxDays = 30;
let showAllCards = false; // View mode: false = current only, true = show all

// Ramadan 2026 start date: February 17, 2026
const ramadanStartDate = new Date(2026, 1, 17); // Month is 0-indexed (1 = February)

// Calculate current Ramadan day based on today's date
function calculateRamadanDay() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to midnight

  const ramadanStart = new Date(ramadanStartDate);
  ramadanStart.setHours(0, 0, 0, 0);

  // Calculate difference in days
  const diffTime = today - ramadanStart;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Day 1 to 30 of Ramadan
  if (diffDays >= 0 && diffDays < maxDays) {
    return diffDays + 1;
  }

  // If before Ramadan, return day 1
  if (diffDays < 0) {
    return 1;
  }

  // If after Ramadan, return day 30
  return maxDays;
}

// Prayer times for each day of Ramadan 2026 in Jerusalem
// Ramadan 2026 starts February 17
const prayerTimes = {
  1: {
    fajr: "5:15",
    dhuhr: "12:30",
    asr: "3:45",
    maghrib: "6:15",
    isha: "7:30",
  },
  2: {
    fajr: "5:14",
    dhuhr: "12:30",
    asr: "3:46",
    maghrib: "6:16",
    isha: "7:31",
  },
  3: {
    fajr: "5:13",
    dhuhr: "12:30",
    asr: "3:47",
    maghrib: "6:17",
    isha: "7:32",
  },
  4: {
    fajr: "5:12",
    dhuhr: "12:30",
    asr: "3:48",
    maghrib: "6:18",
    isha: "7:33",
  },
  5: {
    fajr: "5:11",
    dhuhr: "12:30",
    asr: "3:49",
    maghrib: "6:19",
    isha: "7:34",
  },
  6: {
    fajr: "5:10",
    dhuhr: "12:31",
    asr: "3:50",
    maghrib: "6:20",
    isha: "7:35",
  },
  7: {
    fajr: "5:09",
    dhuhr: "12:31",
    asr: "3:51",
    maghrib: "6:21",
    isha: "7:36",
  },
  8: {
    fajr: "5:08",
    dhuhr: "12:31",
    asr: "3:52",
    maghrib: "6:22",
    isha: "7:37",
  },
  9: {
    fajr: "5:07",
    dhuhr: "12:31",
    asr: "3:53",
    maghrib: "6:23",
    isha: "7:38",
  },
  10: {
    fajr: "5:06",
    dhuhr: "12:31",
    asr: "3:54",
    maghrib: "6:24",
    isha: "7:39",
  },
  11: {
    fajr: "5:05",
    dhuhr: "12:31",
    asr: "3:55",
    maghrib: "6:25",
    isha: "7:40",
  },
  12: {
    fajr: "5:04",
    dhuhr: "12:31",
    asr: "3:56",
    maghrib: "6:26",
    isha: "7:41",
  },
  13: {
    fajr: "5:03",
    dhuhr: "12:31",
    asr: "3:57",
    maghrib: "6:27",
    isha: "7:42",
  },
  14: {
    fajr: "5:02",
    dhuhr: "12:31",
    asr: "3:58",
    maghrib: "6:28",
    isha: "7:43",
  },
  15: {
    fajr: "5:01",
    dhuhr: "12:31",
    asr: "3:59",
    maghrib: "6:29",
    isha: "7:44",
  },
  16: {
    fajr: "5:00",
    dhuhr: "12:31",
    asr: "4:00",
    maghrib: "6:30",
    isha: "7:45",
  },
  17: {
    fajr: "4:59",
    dhuhr: "12:31",
    asr: "4:01",
    maghrib: "6:31",
    isha: "7:46",
  },
  18: {
    fajr: "4:58",
    dhuhr: "12:31",
    asr: "4:02",
    maghrib: "6:32",
    isha: "7:47",
  },
  19: {
    fajr: "4:57",
    dhuhr: "12:31",
    asr: "4:03",
    maghrib: "6:33",
    isha: "7:48",
  },
  20: {
    fajr: "4:56",
    dhuhr: "12:31",
    asr: "4:04",
    maghrib: "6:34",
    isha: "7:49",
  },
  21: {
    fajr: "4:55",
    dhuhr: "12:31",
    asr: "4:05",
    maghrib: "6:35",
    isha: "7:50",
  },
  22: {
    fajr: "4:54",
    dhuhr: "12:31",
    asr: "4:06",
    maghrib: "6:36",
    isha: "7:51",
  },
  23: {
    fajr: "4:53",
    dhuhr: "12:31",
    asr: "4:07",
    maghrib: "6:37",
    isha: "7:52",
  },
  24: {
    fajr: "4:52",
    dhuhr: "12:31",
    asr: "4:08",
    maghrib: "6:38",
    isha: "7:53",
  },
  25: {
    fajr: "4:51",
    dhuhr: "12:31",
    asr: "4:09",
    maghrib: "6:39",
    isha: "7:54",
  },
  26: {
    fajr: "4:50",
    dhuhr: "12:31",
    asr: "4:10",
    maghrib: "6:40",
    isha: "7:55",
  },
  27: {
    fajr: "4:49",
    dhuhr: "12:30",
    asr: "4:11",
    maghrib: "6:41",
    isha: "7:56",
  },
  28: {
    fajr: "4:48",
    dhuhr: "12:30",
    asr: "4:12",
    maghrib: "6:42",
    isha: "7:57",
  },
  29: {
    fajr: "4:47",
    dhuhr: "12:30",
    asr: "4:13",
    maghrib: "6:43",
    isha: "7:58",
  },
  30: {
    fajr: "4:46",
    dhuhr: "12:30",
    asr: "4:14",
    maghrib: "6:44",
    isha: "7:59",
  },
};

// Convert time string to minutes since midnight
function timeToMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}

// Subtract 1 hour from time
function subtractHour(timeStr) {
  let minutes = timeToMinutes(timeStr) - 60;
  if (minutes < 0) minutes += 24 * 60;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}:${m.toString().padStart(2, "0")}`;
}

// Add 1 hour to time
function addHour(timeStr) {
  let minutes = timeToMinutes(timeStr) + 60;
  if (minutes >= 24 * 60) minutes -= 24 * 60;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}:${m.toString().padStart(2, "0")}`;
}

// Format time for display
function formatTime(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const period = hours >= 12 ? "م" : "ص";
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

// Update prayer times on cards
function updatePrayerTimes() {
  const times = prayerTimes[currentDay];

  // Update displayed times
  document.querySelector(".prayer-card.fajr .prayer-time").textContent =
    formatTime(times.fajr);
  document.querySelector(".prayer-card.dhuhr .prayer-time").textContent =
    formatTime(times.dhuhr);
  document.querySelector(".prayer-card.asr .prayer-time").textContent =
    formatTime(times.asr);
  document.querySelector(".prayer-card.maghrib .prayer-time").textContent =
    formatTime(times.maghrib);
  document.querySelector(".prayer-card.isha .prayer-time").textContent =
    formatTime(times.isha);

  // Update time badges
  document.querySelector(
    '[data-prayer="fajr"][data-time="before"] .time-badge',
  ).textContent = formatTime(subtractHour(times.fajr));
  document.querySelector(
    '[data-prayer="fajr"][data-time="after"] .time-badge',
  ).textContent = formatTime(times.fajr);

  document.querySelector(
    '[data-prayer="dhuhr"][data-time="before"] .time-badge',
  ).textContent = formatTime(subtractHour(times.dhuhr));
  document.querySelector(
    '[data-prayer="dhuhr"][data-time="after"] .time-badge',
  ).textContent = formatTime(times.dhuhr);

  document.querySelector(
    '[data-prayer="asr"][data-time="before"] .time-badge',
  ).textContent = formatTime(subtractHour(times.asr));
  document.querySelector(
    '[data-prayer="asr"][data-time="after"] .time-badge',
  ).textContent = formatTime(times.asr);

  document.querySelector(
    '[data-prayer="maghrib"][data-time="before"] .time-badge',
  ).textContent = formatTime(subtractHour(times.maghrib));
  document.querySelector(
    '[data-prayer="maghrib"][data-time="after"] .time-badge',
  ).textContent = formatTime(times.maghrib);

  document.querySelector(
    '[data-prayer="isha"][data-time="before"] .time-badge',
  ).textContent = formatTime(subtractHour(times.isha));
  document.querySelector(
    '[data-prayer="isha"][data-time="after"] .time-badge',
  ).textContent = formatTime(times.isha);
}

// Highlight current activity based on time
function highlightCurrentActivity() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const times = prayerTimes[currentDay];

  // Remove all highlights first
  document.querySelectorAll(".activity-item").forEach((item) => {
    item.classList.remove("current-activity");
  });

  // Remove current prayer highlight
  document.querySelectorAll(".prayer-card").forEach((card) => {
    card.classList.remove("current-prayer");
  });

  // Check each prayer time window
  const prayers = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
  let currentPrayer = null;

  for (const prayer of prayers) {
    const prayerTime = timeToMinutes(times[prayer]);
    const beforeTime = prayerTime - 60;
    const afterTime = prayerTime + 30; // 30 minutes after prayer

    // Check if we're in "before" window
    if (currentMinutes >= beforeTime && currentMinutes < prayerTime) {
      const beforeItem = document.querySelector(
        `[data-prayer="${prayer}"][data-time="before"]`,
      );
      if (beforeItem) beforeItem.classList.add("current-activity");
      currentPrayer = prayer;
      break;
    }

    // Check if we're in "after" window (30 minutes after prayer starts)
    if (currentMinutes >= prayerTime && currentMinutes < afterTime) {
      const afterItem = document.querySelector(
        `[data-prayer="${prayer}"][data-time="after"]`,
      );
      if (afterItem) afterItem.classList.add("current-activity");
      currentPrayer = prayer;
      break;
    }
  }

  // Highlight the current prayer card
  if (currentPrayer) {
    const currentCard = document.querySelector(`.prayer-card.${currentPrayer}`);
    if (currentCard) currentCard.classList.add("current-prayer");
  }

  // Update view based on mode
  updateCardVisibility();
}

// Update card visibility based on view mode
function updateCardVisibility() {
  const container = document.getElementById("prayerCards");
  if (showAllCards) {
    container.classList.remove("current-only");
  } else {
    container.classList.add("current-only");
  }
}

// Toggle view mode
document.getElementById("toggleView").addEventListener("click", () => {
  showAllCards = !showAllCards;
  const viewText = document.getElementById("viewText");
  const viewIcon = document.getElementById("viewIcon");

  if (showAllCards) {
    viewText.textContent = "عرض الحالي فقط";
    viewIcon.textContent = "🎯";
  } else {
    viewText.textContent = "عرض الجميع";
    viewIcon.textContent = "📋";
  }

  updateCardVisibility();
});

// Load saved day from localStorage
function loadDay() {
  // First check if user manually selected a day
  const saved = localStorage.getItem("currentRamadanDay");
  const lastAutoUpdate = localStorage.getItem("lastAutoUpdate");
  const today = new Date().toDateString();

  // If it's a new day, auto-update to current Ramadan day
  if (lastAutoUpdate !== today) {
    currentDay = calculateRamadanDay();
    localStorage.setItem("currentRamadanDay", currentDay.toString());
    localStorage.setItem("lastAutoUpdate", today);
  } else if (saved) {
    // Use saved day if it's the same day
    currentDay = parseInt(saved);
    if (currentDay < 1) currentDay = 1;
    if (currentDay > maxDays) currentDay = maxDays;
  } else {
    // First time loading
    currentDay = calculateRamadanDay();
    localStorage.setItem("lastAutoUpdate", today);
  }

  updateDayDisplay();
}

// Save current day to localStorage
function saveDay() {
  localStorage.setItem("currentRamadanDay", currentDay.toString());
}

// Update day display
function updateDayDisplay() {
  document.getElementById("currentDay").textContent = currentDay;
  updatePrayerTimes();
  loadCheckboxStates();
  highlightCurrentActivity();
}

// Previous day
document.getElementById("prevDay").addEventListener("click", () => {
  if (currentDay > 1) {
    currentDay--;
    saveDay();
    updateDayDisplay();
  }
});

// Next day
document.getElementById("nextDay").addEventListener("click", () => {
  if (currentDay < maxDays) {
    currentDay++;
    saveDay();
    updateDayDisplay();
  }
});

// Save checkbox state
function saveCheckboxState(prayer, time, checked) {
  const key = `day${currentDay}_${prayer}_${time}`;
  localStorage.setItem(key, checked ? "true" : "false");
}

// Load checkbox states for current day
function loadCheckboxStates() {
  const checkboxes = document.querySelectorAll(".activity-checkbox");
  checkboxes.forEach((checkbox) => {
    const activityItem = checkbox.closest(".activity-item");
    const prayer = activityItem.dataset.prayer;
    const time = activityItem.dataset.time;
    const key = `day${currentDay}_${prayer}_${time}`;
    const saved = localStorage.getItem(key);
    checkbox.checked = saved === "true";
  });

  // Update card completion status
  updateCardCompletionStatus();
}

// Check if all activities in a prayer card are completed
function updateCardCompletionStatus() {
  const prayers = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

  prayers.forEach((prayer) => {
    const beforeKey = `day${currentDay}_${prayer}_before`;
    const afterKey = `day${currentDay}_${prayer}_after`;

    const beforeChecked = localStorage.getItem(beforeKey) === "true";
    const afterChecked = localStorage.getItem(afterKey) === "true";

    const card = document.querySelector(`.prayer-card.${prayer}`);
    if (card) {
      if (beforeChecked && afterChecked) {
        card.classList.add("completed");
      } else {
        card.classList.remove("completed");
      }
    }
  });
}

// Add event listeners to all checkboxes
document.querySelectorAll(".activity-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    const activityItem = e.target.closest(".activity-item");
    const prayer = activityItem.dataset.prayer;
    const time = activityItem.dataset.time;
    saveCheckboxState(prayer, time, e.target.checked);
    updateCardCompletionStatus();
  });
});

// Update current activity every minute
setInterval(highlightCurrentActivity, 60000);

// Initialize on page load
loadDay();
