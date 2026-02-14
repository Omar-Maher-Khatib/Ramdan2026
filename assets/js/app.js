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

// Add 30 minutes to time
function addHalfHour(timeStr) {
  let minutes = timeToMinutes(timeStr) + 30;
  if (minutes >= 24 * 60) minutes -= 24 * 60;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}:${m.toString().padStart(2, "0")}`;
}

// Subtract 30 minutes from time
function subtractHalfHour(timeStr) {
  let minutes = timeToMinutes(timeStr) - 30;
  if (minutes < 0) minutes += 24 * 60;
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
  // Fajr: before (1 hour), after (30 min after)
  const fajrBefore = document.querySelector(
    '[data-prayer="fajr"][data-time="before"] .time-badge',
  );
  const fajrAfter = document.querySelector(
    '[data-prayer="fajr"][data-time="after"] .time-badge',
  );
  if (fajrBefore) fajrBefore.textContent = formatTime(subtractHour(times.fajr));
  if (fajrAfter) fajrAfter.textContent = formatTime(addHalfHour(times.fajr));

  // Dhuhr: before (1 hour), after
  const dhuhrBefore = document.querySelector(
    '[data-prayer="dhuhr"][data-time="before"] .time-badge',
  );
  const dhuhrAfter = document.querySelector(
    '[data-prayer="dhuhr"][data-time="after"] .time-badge',
  );
  if (dhuhrBefore)
    dhuhrBefore.textContent = formatTime(subtractHour(times.dhuhr));
  if (dhuhrAfter) dhuhrAfter.textContent = formatTime(times.dhuhr);

  // Asr: before (30 min), after
  const asrBefore = document.querySelector(
    '[data-prayer="asr"][data-time="before"] .time-badge',
  );
  const asrAfter = document.querySelector(
    '[data-prayer="asr"][data-time="after"] .time-badge',
  );
  if (asrBefore)
    asrBefore.textContent = formatTime(subtractHalfHour(times.asr));
  if (asrAfter) asrAfter.textContent = formatTime(times.asr);

  // Maghrib: before only (1 hour)
  const maghribBefore = document.querySelector(
    '[data-prayer="maghrib"][data-time="before"] .time-badge',
  );
  if (maghribBefore)
    maghribBefore.textContent = formatTime(subtractHour(times.maghrib));

  // Isha: after only
  const ishaAfter = document.querySelector(
    '[data-prayer="isha"][data-time="after"] .time-badge',
  );
  if (ishaAfter) ishaAfter.textContent = formatTime(times.isha);
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

  // Define time windows for each prayer based on new structure
  const prayerWindows = {
    fajr: {
      before: {
        start: timeToMinutes(times.fajr) - 60,
        end: timeToMinutes(times.fajr),
      },
      after: {
        start: timeToMinutes(times.fajr),
        end: timeToMinutes(times.fajr) + 60, // 30 min activity + 30 min window
      },
    },
    dhuhr: {
      before: {
        start: timeToMinutes(times.dhuhr) - 60,
        end: timeToMinutes(times.dhuhr),
      },
      after: {
        start: timeToMinutes(times.dhuhr),
        end: timeToMinutes(times.dhuhr) + 30,
      },
    },
    asr: {
      before: {
        start: timeToMinutes(times.asr) - 30,
        end: timeToMinutes(times.asr),
      },
      after: {
        start: timeToMinutes(times.asr),
        end: timeToMinutes(times.asr) + 30,
      },
    },
    maghrib: {
      before: {
        start: timeToMinutes(times.maghrib) - 60,
        end: timeToMinutes(times.maghrib),
      },
    },
    isha: {
      after: {
        start: timeToMinutes(times.isha),
        end: timeToMinutes(times.isha) + 30,
      },
    },
  };

  let currentPrayer = null;

  // Check each prayer
  for (const prayer in prayerWindows) {
    const windows = prayerWindows[prayer];

    // Check "before" window if exists
    if (
      windows.before &&
      currentMinutes >= windows.before.start &&
      currentMinutes < windows.before.end
    ) {
      const beforeItem = document.querySelector(
        `[data-prayer="${prayer}"][data-time="before"]`,
      );
      if (beforeItem) beforeItem.classList.add("current-activity");
      currentPrayer = prayer;
      break;
    }

    // Check "after" window if exists
    if (
      windows.after &&
      currentMinutes >= windows.after.start &&
      currentMinutes < windows.after.end
    ) {
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

  // Define end times for each prayer's activities
  const expiryTimes = {
    fajr: {
      before: timeToMinutes(times.fajr), // Ends at prayer time
      after: timeToMinutes(times.fajr) + 60, // Ends 1 hour after prayer
    },
    dhuhr: {
      before: timeToMinutes(times.dhuhr), // Ends at prayer time
      after: timeToMinutes(times.dhuhr) + 30, // Ends 30 min after prayer
    },
    asr: {
      before: timeToMinutes(times.asr), // Ends at prayer time
      after: timeToMinutes(times.asr) + 30, // Ends 30 min after prayer
    },
    maghrib: {
      before: timeToMinutes(times.maghrib), // Ends at prayer time
    },
    isha: {
      after: timeToMinutes(times.isha) + 30, // Ends 30 min after prayer
    },
  };

  // Check each prayer's activities
  for (const prayer in expiryTimes) {
    const expiryTime = expiryTimes[prayer];

    // Check "before" activity if exists
    if (expiryTime.before !== undefined) {
      const beforeItem = document.querySelector(
        `[data-prayer="${prayer}"][data-time="before"]`,
      );
      const beforeCheckbox = beforeItem?.querySelector(".activity-checkbox");

      if (beforeItem && beforeCheckbox && currentMinutes >= expiryTime.before) {
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
    }

    // Check "after" activity if exists
    if (expiryTime.after !== undefined) {
      const afterItem = document.querySelector(
        `[data-prayer="${prayer}"][data-time="after"]`,
      );
      const afterCheckbox = afterItem?.querySelector(".activity-checkbox");

      if (afterItem && afterCheckbox && currentMinutes >= expiryTime.after) {
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
    }

    // Check custom activities for this prayer
    const customActivities = document.querySelectorAll(
      `[data-prayer="${prayer}"].custom-activity-item`,
    );
    customActivities.forEach((customItem) => {
      const timing = customItem.dataset.timing || "after";
      const checkbox = customItem.querySelector(".activity-checkbox");

      let expiryMinutes;
      if (timing === "before") {
        expiryMinutes = expiryTime.before;
      } else {
        expiryMinutes = expiryTime.after;
      }

      if (expiryMinutes !== undefined && checkbox) {
        if (currentMinutes >= expiryMinutes) {
          // Time has passed
          if (!checkbox.checked) {
            customItem.classList.add("expired");
            checkbox.disabled = true;
            addMissedMessage(customItem);
          } else {
            customItem.classList.remove("expired");
          }
        } else {
          customItem.classList.remove("expired");
          checkbox.disabled = false;
          removeMissedMessage(customItem);
        }
      }
    });
  }
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
  // Load only fixed activities (before/after)
  const checkboxes = document.querySelectorAll(
    ".fixed-activity .activity-checkbox",
  );
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
    const card = document.querySelector(`.prayer-card.${prayer}`);
    if (!card) return;

    // Get all checkboxes in this card (fixed + custom)
    const allCheckboxes = card.querySelectorAll(".activity-checkbox");
    let allChecked = true;

    // Check if all checkboxes are checked
    allCheckboxes.forEach((checkbox) => {
      if (!checkbox.checked) {
        allChecked = false;
      }
    });

    // Only mark as completed if there are checkboxes and all are checked
    if (allCheckboxes.length > 0 && allChecked) {
      card.classList.add("completed");
    } else {
      card.classList.remove("completed");
    }
  });
}

// Add event listeners to all fixed activity checkboxes
document
  .querySelectorAll(".fixed-activity .activity-checkbox")
  .forEach((checkbox) => {
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

// ============================================
// CUSTOM ACTIVITIES MANAGEMENT
// ============================================

// Store custom activities per day and prayer
let customActivitiesCounter = 0;

// Load custom activities from localStorage
function loadCustomActivities() {
  const prayers = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
  prayers.forEach((prayer) => {
    const key = `customActivities_day${currentDay}_${prayer}`;
    const savedActivities = localStorage.getItem(key);

    const container = document.querySelector(
      `.custom-activities-container[data-prayer="${prayer}"]`,
    );

    if (container) {
      container.innerHTML = ""; // Clear existing
    }

    if (savedActivities) {
      const activities = JSON.parse(savedActivities);
      activities.forEach((activity) => {
        addCustomActivityToDOM(
          prayer,
          activity.text,
          activity.id,
          activity.timing || "after",
        );
      });
    }
  });
}

// Save custom activities to localStorage
function saveCustomActivities(prayer) {
  const container = document.querySelector(
    `.custom-activities-container[data-prayer="${prayer}"]`,
  );
  const activities = [];

  container.querySelectorAll(".custom-activity-item").forEach((item) => {
    const id = item.dataset.activityId;
    const text = item.querySelector(".activity-text").textContent;
    const checked = item.querySelector(".activity-checkbox").checked;
    const timing = item.dataset.timing || "after"; // قبل أو بعد
    activities.push({ id, text, checked, timing });
  });

  const key = `customActivities_day${currentDay}_${prayer}`;
  localStorage.setItem(key, JSON.stringify(activities));
}

// Add custom activity to DOM
function addCustomActivityToDOM(
  prayer,
  text,
  activityId = null,
  timing = "after",
) {
  const id = activityId || `custom_${Date.now()}_${customActivitiesCounter++}`;
  const container = document.querySelector(
    `.custom-activities-container[data-prayer="${prayer}"]`,
  );

  const activityDiv = document.createElement("div");
  activityDiv.className = "custom-activity-item activity-item";
  activityDiv.dataset.activityId = id;
  activityDiv.dataset.prayer = prayer;
  activityDiv.dataset.time = "custom";
  activityDiv.dataset.timing = timing; // حفظ التوقيت

  const checkboxId = `${prayer}_custom_${id}`;

  // حساب الوقت لعرضه
  const times = prayerTimes[currentDay];
  let timeText = "";
  if (timing === "before") {
    timeText = formatTime(subtractHour(times[prayer]));
  } else {
    timeText = formatTime(times[prayer]);
  }

  const timingLabel = timing === "before" ? "قبل الصلاة" : "بعد الصلاة";

  activityDiv.innerHTML = `
    <div class="activity-actions">
      <button class="edit-activity-btn" onclick="editCustomActivity('${prayer}', '${id}')" title="تعديل">
        ✎
      </button>
      <button class="delete-activity-btn" onclick="deleteCustomActivity('${prayer}', '${id}')" title="حذف">
        ✕
      </button>
    </div>
    <input type="checkbox" class="activity-checkbox" id="${checkboxId}" />
    <label for="${checkboxId}" class="activity-content">
      <span class="time-badge">${timeText}</span>
      <span class="activity-text">${timingLabel}: ${text}</span>
    </label>
  `;

  container.appendChild(activityDiv);

  // Load checkbox state
  const checkboxStateKey = `day${currentDay}_${prayer}_custom_${id}`;
  const savedState = localStorage.getItem(checkboxStateKey);
  if (savedState === "true") {
    activityDiv.querySelector(".activity-checkbox").checked = true;
  }

  // Add checkbox event listener
  const checkbox = activityDiv.querySelector(".activity-checkbox");
  checkbox.addEventListener("change", (e) => {
    const key = `day${currentDay}_${prayer}_custom_${id}`;
    localStorage.setItem(key, e.target.checked ? "true" : "false");
    updateCardCompletionStatus();
  });
}

// Delete custom activity
function deleteCustomActivity(prayer, activityId) {
  const container = document.querySelector(
    `.custom-activities-container[data-prayer="${prayer}"]`,
  );
  const activityItem = container.querySelector(
    `.custom-activity-item[data-activity-id="${activityId}"]`,
  );

  if (activityItem) {
    activityItem.remove();
    saveCustomActivities(prayer);

    // Remove checkbox state from localStorage
    const checkboxStateKey = `day${currentDay}_${prayer}_custom_${activityId}`;
    localStorage.removeItem(checkboxStateKey);

    updateCardCompletionStatus();
  }
}

// Edit custom activity
function editCustomActivity(prayer, activityId) {
  const container = document.querySelector(
    `.custom-activities-container[data-prayer="${prayer}"]`,
  );
  const activityItem = container.querySelector(
    `.custom-activity-item[data-activity-id="${activityId}"]`,
  );

  if (activityItem) {
    const activityTextElement = activityItem.querySelector(".activity-text");
    const fullText = activityTextElement.textContent;
    // Extract text without timing label (after ": ")
    const text = fullText.includes(": ") ? fullText.split(": ")[1] : fullText;
    const timing = activityItem.dataset.timing || "after";

    showAddActivityModal(prayer, activityId, text, timing);
  }
}

// Show modal to add activity
function showAddActivityModal(
  prayer,
  editId = null,
  editText = "",
  editTiming = "after",
) {
  const isEditMode = editId !== null;
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${isEditMode ? "✎ تعديل النشاط" : "➕ إضافة نشاط جديد"}</h2>
      </div>
      <div class="modal-body">
        <label for="activityInput">اسم النشاط:</label>
        <input type="text" id="activityInput" placeholder="مثال: قراءة جزء من القرآن" value="${editText}" autofocus />
        
        <label for="timingSelect" style="margin-top: 15px;">التوقيت:</label>
        <div class="timing-options">
          <label class="timing-option">
            <input type="radio" name="timing" value="before" id="timingBefore" ${editTiming === "before" ? "checked" : ""} />
            <span>قبل الصلاة</span>
          </label>
          <label class="timing-option">
            <input type="radio" name="timing" value="after" id="timingAfter" ${editTiming === "after" ? "checked" : ""} />
            <span>بعد الصلاة</span>
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button class="modal-btn modal-btn-primary" id="saveActivityBtn">
          ${isEditMode ? "تحديث" : "حفظ"}
        </button>
        <button class="modal-btn modal-btn-secondary" id="cancelActivityBtn">
          إلغاء
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const input = overlay.querySelector("#activityInput");
  const saveBtn = overlay.querySelector("#saveActivityBtn");
  const cancelBtn = overlay.querySelector("#cancelActivityBtn");

  // Focus input
  setTimeout(() => input.focus(), 100);

  // Save on Enter key
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      saveBtn.click();
    }
  });

  // Save button
  saveBtn.addEventListener("click", () => {
    const text = input.value.trim();
    const timing = overlay.querySelector('input[name="timing"]:checked').value;
    if (text) {
      if (isEditMode) {
        // Edit existing activity
        const activityItem = document.querySelector(
          `.custom-activity-item[data-activity-id="${editId}"]`,
        );
        if (activityItem) {
          // Remove old activity
          activityItem.remove();
          // Add updated activity with same ID
          addCustomActivityToDOM(prayer, text, editId, timing);
          saveCustomActivities(prayer);
        }
      } else {
        // Add new activity
        addCustomActivityToDOM(prayer, text, null, timing);
        saveCustomActivities(prayer);
      }
      overlay.remove();
    } else {
      input.focus();
    }
  });

  // Cancel button
  cancelBtn.addEventListener("click", () => {
    overlay.remove();
  });

  // Close on overlay click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });

  // Close on Escape key
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") {
        overlay.remove();
      }
    },
    { once: true },
  );
}

// Add event listeners to all "Add Activity" buttons
document.querySelectorAll(".add-activity-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const prayer = btn.dataset.prayer;
    showAddActivityModal(prayer);
  });
});

// Override updateDayDisplay to include loading custom activities
const originalUpdateDayDisplay = updateDayDisplay;
updateDayDisplay = function () {
  originalUpdateDayDisplay();
  loadCustomActivities();
};

// Load custom activities on initial load
loadCustomActivities();
