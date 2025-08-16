window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const body = document.body;
  
  // الصفحة مخفية افتراضياً
  body.style.opacity = '0';
  body.style.transition = 'opacity 0.5s ease';

  // إنشاء صوت التشويش
  const noiseAudio = new Audio('/assets/Media/noise.opus'); // ضع مسار الصوت الصحيح
  noiseAudio.volume = 0.25;

  // نبدأ الصوت عند أي تفاعل من المستخدم
  function startIntro() {
    noiseAudio.play().catch(err => console.log("Audio play error:", err));
  }

  window.addEventListener('click', startIntro, { once: true });
  window.addEventListener('keydown', startIntro, { once: true });

  // بعد انتهاء انيميشن الانترو من CSS
  intro.addEventListener('animationend', () => {
    intro.style.display = 'none'; // اخفاء الانترو
    body.style.opacity = '1';     // اظهار الصفحة
    noiseAudio.pause();            // ايقاف الصوت
  });
});
