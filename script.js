// Intro Animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
  }, 2500); // مدة 2.5 ثانية للتشويش
});
document.addEventListener("mousemove", e => {
  document.body.style.setProperty('--x', e.clientX + "px");
  document.body.style.setProperty('--y', e.clientY + "px");
});
