window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const body = document.body;

  // إظهار الانترو
  intro.style.display = "flex";
  intro.style.opacity = "1";

  // مدة الانترو
  setTimeout(() => {
    intro.style.transition = "opacity 0.5s ease";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      body.style.visibility = "visible"; // إظهار الصفحة بعد الانترو
    }, 500);
  }, 2500); // 2.5 ثانية للتشويش
});
