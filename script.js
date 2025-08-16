// Intro Animation
window.addEventListener("load", () => {
  const body = document.body;
  const intro = document.getElementById("intro");

  // نخلي البادي مخفي في البداية
  body.classList.add("hidden");

  // مدة الانترو (2.5 ثانية حسب طلبك)
  setTimeout(() => {
    // إزالة الانترو تدريجيًا
    intro.style.opacity = "0";
    intro.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      intro.style.display = "none"; // اخفاء كامل
      // إظهار الصفحة كاملة
      body.classList.remove("hidden");
    }, 500); // الانتظار لتأثير الاختفاء
  }, 2500);
});
