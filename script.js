window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const body = document.body;

  // الصفحة مخفية افتراضيًا
  body.style.opacity = '0';
  body.style.transition = 'opacity 0.5s ease';

  // إنشاء الصوت
  const noiseAudio = new Audio('/assets/Media/noise.opus'); // ضع المسار الصحيح
  noiseAudio.loop = true;
  noiseAudio.volume = 0.25;

  // لتجاوز حظر المتصفح: شغل الصوت عند أي تفاعل
  function startNoise() {
    noiseAudio.play().catch(err => console.log("Audio play error:", err));
  }

  window.addEventListener('click', startNoise, { once: true });
  window.addEventListener('keydown', startNoise, { once: true });

  // بعد انتهاء الانميشن (3 ثواني)
  setTimeout(() => {
    intro.style.display = 'none'; // اخفاء الانترو
    body.style.opacity = '1';     // اظهار الصفحة
    noiseAudio.pause();            // ايقاف الصوت
  }, 3000); // مدة الانميشن 3 ثواني
});
