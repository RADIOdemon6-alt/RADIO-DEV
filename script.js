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

  // اجعل الانترو يظهر ويختفي مع ظهور الصفحة
  intro.style.display = 'flex';
  setTimeout(() => {
    intro.style.opacity = '0'; // اختفاء الانترو تدريجيًا
    setTimeout(() => {
      intro.style.display = 'none'; // اخفاء الانترو نهائيًا
      body.style.opacity = '1';     // اظهار الصفحة
      noiseAudio.pause();            // ايقاف الصوت بعد انتهاء الانترو
    }, 500); // نفس مدة الانتقال التدريجي
  }, 3000); // مدة الانترو 3 ثواني
});
