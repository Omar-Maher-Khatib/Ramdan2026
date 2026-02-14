// ==========================================
// إعداد القائمة الجانبية - للاستخدام في جميع الصفحات
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  setupSideNavbar();
});

function setupSideNavbar() {
  const menuToggle = document.getElementById("menuToggle");
  const sideNavbar = document.getElementById("sideNavbar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  if (!menuToggle || !sideNavbar || !overlay || !closeBtn) {
    return; // إذا لم توجد العناصر، لا تفعل شيء
  }

  // فتح القائمة
  function openMenu() {
    sideNavbar.classList.add("active");
    overlay.classList.add("active");
    menuToggle.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // إغلاق القائمة
  function closeMenu() {
    sideNavbar.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.classList.remove("active");
    document.body.style.overflow = "";
  }

  // إضافة مستمعات الأحداث
  menuToggle.addEventListener("click", () => {
    if (sideNavbar.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  // إغلاق القائمة عند الضغط على ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sideNavbar.classList.contains("active")) {
      closeMenu();
    }
  });

  // إغلاق القائمة عند النقر على أي رابط
  const menuLinks = sideNavbar.querySelectorAll(".navbar-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
}
