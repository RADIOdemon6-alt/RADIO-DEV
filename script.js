window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const body = document.body;

  // إخفاء الصفحة مؤقتًا إذا أحببت
  body.style.visibility = "hidden";

  // مدة الانترو
  setTimeout(() => {
    // تلاشي الانترو تدريجيًا
    intro.style.transition = "opacity 0.5s ease";
    intro.style.opacity = "0";

    // بعد التلاشي، إزالة العنصر وإظهار الصفحة
    setTimeout(() => {
      intro.style.display = "none";
      body.style.visibility = "visible";
    }, 500); // مدة تلاشي الانترو
  }, 2500); // مدة 2.5 ثانية للتشويش
});
