// Current day state
let currentDay = 1;
const maxDays = 30;
let showAllCards = false; // View mode: false = current only, true = show all

// Ramadan 2026 start date: February 18, 2026
const ramadanStartDate = new Date(2026, 1, 18); // Month is 0-indexed (1 = February)

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

// Check if we are currently IN Ramadan (not before, not after)
function isInRamadan() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const ramadanStart = new Date(ramadanStartDate);
  ramadanStart.setHours(0, 0, 0, 0);

  const ramadanEnd = new Date(ramadanStartDate);
  ramadanEnd.setDate(ramadanEnd.getDate() + maxDays);
  ramadanEnd.setHours(0, 0, 0, 0);

  return today >= ramadanStart && today < ramadanEnd;
}

// Prayer times for each day of Ramadan 2026 in Jerusalem
// Ramadan 2026 starts February 18
const prayerTimes = {
  1: {
    fajr: "4:59",
    dhuhr: "12:01",
    asr: "15:11",
    maghrib: "17:36",
    isha: "19:06",
  },
  2: {
    fajr: "4:58",
    dhuhr: "12:00",
    asr: "15:11",
    maghrib: "17:36",
    isha: "19:06",
  },
  3: {
    fajr: "4:57",
    dhuhr: "12:00",
    asr: "15:12",
    maghrib: "17:37",
    isha: "19:07",
  },
  4: {
    fajr: "4:56",
    dhuhr: "12:00",
    asr: "15:12",
    maghrib: "17:38",
    isha: "19:08",
  },
  5: {
    fajr: "4:55",
    dhuhr: "12:00",
    asr: "15:13",
    maghrib: "17:39",
    isha: "19:09",
  },
  6: {
    fajr: "4:54",
    dhuhr: "12:00",
    asr: "15:13",
    maghrib: "17:40",
    isha: "19:10",
  },
  7: {
    fajr: "4:53",
    dhuhr: "12:00",
    asr: "15:14",
    maghrib: "17:41",
    isha: "19:11",
  },
  8: {
    fajr: "4:52",
    dhuhr: "12:00",
    asr: "15:14",
    maghrib: "17:41",
    isha: "19:11",
  },
  9: {
    fajr: "4:51",
    dhuhr: "12:00",
    asr: "15:15",
    maghrib: "17:42",
    isha: "19:12",
  },
  10: {
    fajr: "4:50",
    dhuhr: "11:59",
    asr: "15:15",
    maghrib: "17:43",
    isha: "19:13",
  },
  11: {
    fajr: "4:49",
    dhuhr: "11:59",
    asr: "15:16",
    maghrib: "17:44",
    isha: "19:14",
  },
  12: {
    fajr: "4:48",
    dhuhr: "11:59",
    asr: "15:16",
    maghrib: "17:44",
    isha: "19:14",
  },
  13: {
    fajr: "4:47",
    dhuhr: "11:59",
    asr: "15:16",
    maghrib: "17:45",
    isha: "19:15",
  },
  14: {
    fajr: "4:46",
    dhuhr: "11:59",
    asr: "15:17",
    maghrib: "17:46",
    isha: "19:16",
  },
  15: {
    fajr: "4:44",
    dhuhr: "11:58",
    asr: "15:17",
    maghrib: "17:47",
    isha: "19:17",
  },
  16: {
    fajr: "4:43",
    dhuhr: "11:58",
    asr: "15:17",
    maghrib: "17:47",
    isha: "19:17",
  },
  17: {
    fajr: "4:42",
    dhuhr: "11:58",
    asr: "15:18",
    maghrib: "17:48",
    isha: "19:18",
  },
  18: {
    fajr: "4:41",
    dhuhr: "11:58",
    asr: "15:18",
    maghrib: "17:49",
    isha: "19:19",
  },
  19: {
    fajr: "4:40",
    dhuhr: "11:57",
    asr: "15:18",
    maghrib: "17:50",
    isha: "19:20",
  },
  20: {
    fajr: "4:38",
    dhuhr: "11:57",
    asr: "15:19",
    maghrib: "17:50",
    isha: "19:20",
  },
  21: {
    fajr: "4:37",
    dhuhr: "11:57",
    asr: "15:19",
    maghrib: "17:51",
    isha: "19:21",
  },
  22: {
    fajr: "4:36",
    dhuhr: "11:57",
    asr: "15:19",
    maghrib: "17:52",
    isha: "19:22",
  },
  23: {
    fajr: "4:35",
    dhuhr: "11:56",
    asr: "15:20",
    maghrib: "17:52",
    isha: "19:22",
  },
  24: {
    fajr: "4:33",
    dhuhr: "11:56",
    asr: "15:20",
    maghrib: "17:53",
    isha: "19:23",
  },
  25: {
    fajr: "4:32",
    dhuhr: "11:56",
    asr: "15:20",
    maghrib: "17:54",
    isha: "19:24",
  },
  26: {
    fajr: "4:31",
    dhuhr: "11:56",
    asr: "15:20",
    maghrib: "17:55",
    isha: "19:25",
  },
  27: {
    fajr: "4:29",
    dhuhr: "11:55",
    asr: "15:21",
    maghrib: "17:55",
    isha: "19:25",
  },
  28: {
    fajr: "4:28",
    dhuhr: "11:55",
    asr: "15:21",
    maghrib: "17:56",
    isha: "19:26",
  },
  29: {
    fajr: "4:27",
    dhuhr: "11:55",
    asr: "15:21",
    maghrib: "17:57",
    isha: "19:27",
  },
  30: {
    fajr: "4:25",
    dhuhr: "11:54",
    asr: "15:21",
    maghrib: "17:57",
    isha: "19:27",
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

  // Mark expired activities (no auto-check)
  markExpiredActivities(currentMinutes, times);

  // Highlight the current prayer card
  if (currentPrayer) {
    const currentCard = document.querySelector(`.prayer-card.${currentPrayer}`);
    if (currentCard) currentCard.classList.add("current-prayer");
  }

  // Update view based on mode
  updateCardVisibility();
}

// Mark expired activities (change color only, no auto-check)
function markExpiredActivities(currentMinutes, times) {
  // Only mark expired if we're actually IN Ramadan AND viewing today
  if (!isInRamadan()) {
    return;
  }

  const actualRamadanDay = calculateRamadanDay();
  if (currentDay !== actualRamadanDay) {
    // Don't mark expired if viewing past or future days
    return;
  }

  const prayers = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

  prayers.forEach((prayer) => {
    const prayerTime = timeToMinutes(times[prayer]);
    const beforeEndTime = prayerTime;
    const afterEndTime = prayerTime + 30;

    // Check "before" activity
    const beforeItem = document.querySelector(
      `[data-prayer="${prayer}"][data-time="before"]`,
    );
    const beforeCheckbox = beforeItem?.querySelector(".activity-checkbox");

    if (beforeItem && beforeCheckbox && currentMinutes >= beforeEndTime) {
      // Time has passed - mark as expired and disable checkbox
      if (!beforeCheckbox.checked) {
        beforeItem.classList.add("expired");
        beforeCheckbox.disabled = true;
        addMissedMessage(beforeItem);
      } else {
        beforeItem.classList.remove("expired");
      }
    } else if (beforeItem) {
      beforeItem.classList.remove("expired");
      if (beforeCheckbox) beforeCheckbox.disabled = false;
      removeMissedMessage(beforeItem);
    }

    // Check "after" activity
    const afterItem = document.querySelector(
      `[data-prayer="${prayer}"][data-time="after"]`,
    );
    const afterCheckbox = afterItem?.querySelector(".activity-checkbox");

    if (afterItem && afterCheckbox && currentMinutes >= afterEndTime) {
      // Time has passed - mark as expired and disable checkbox
      if (!afterCheckbox.checked) {
        afterItem.classList.add("expired");
        afterCheckbox.disabled = true;
        addMissedMessage(afterItem);
      } else {
        afterItem.classList.remove("expired");
      }
    } else if (afterItem) {
      afterItem.classList.remove("expired");
      if (afterCheckbox) afterCheckbox.disabled = false;
      removeMissedMessage(afterItem);
    }
  });
}

// Add missed message to activity item
function addMissedMessage(activityItem) {
  if (!activityItem.querySelector(".missed-message")) {
    const message = document.createElement("div");
    message.className = "missed-message";
    message.textContent = "⏰ فاتك الوقت، لكن استمر بباقي النشاطات";
    activityItem.appendChild(message);
  }
}

// Remove missed message from activity item
function removeMissedMessage(activityItem) {
  const message = activityItem.querySelector(".missed-message");
  if (message) {
    message.remove();
  }
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
    updateDatePicker();
  }
});

// Next day
document.getElementById("nextDay").addEventListener("click", () => {
  if (currentDay < maxDays) {
    currentDay++;
    saveDay();
    updateDayDisplay();
    updateDatePicker();
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

// Date Picker functionality
const datePicker = document.getElementById("datePicker");

// Function to convert Ramadan day to actual date
function ramadanDayToDate(day) {
  const date = new Date(ramadanStartDate);
  date.setDate(date.getDate() + (day - 1));
  return date;
}

// Function to format date for input[type="date"]
function formatDateForInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Update date picker when day changes
function updateDatePicker() {
  const selectedDate = ramadanDayToDate(currentDay);
  datePicker.value = formatDateForInput(selectedDate);
}

// Handle date picker change
datePicker.addEventListener("change", (e) => {
  const selectedDate = new Date(e.target.value + "T00:00:00");
  const ramadanStart = new Date(ramadanStartDate);
  ramadanStart.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);

  const diffTime = selectedDate - ramadanStart;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays >= 0 && diffDays < maxDays) {
    currentDay = diffDays + 1;
    saveDay();
    updateDayDisplay();
    updateDatePicker();
  }
});

// Initialize on page load
loadDay();
updateDatePicker();
