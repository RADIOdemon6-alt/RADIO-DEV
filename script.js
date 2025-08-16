window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const body = document.body;

  // إنشاء صوت التشويش
  const noiseAudio = new Audio('/assets/Media/noise.opus'); // ضع مسار الصوت الصحيح
  noiseAudio.volume = 0.25;
  
  // تشغيل الصوت
  noiseAudio.play().catch(err => console.log("Audio play error:", err));

  // الصفحة مخفية افتراضياً
  body.style.opacity = '0';
  body.style.transition = 'opacity 0.5s ease';

  // مدة الانميشن = 3 ثواني
  setTimeout(() => {
    // اخفاء الانترو
    intro.style.display = 'none';

    // اظهار الصفحة
    body.style.opacity = '1';

    // ايقاف الصوت
    noiseAudio.pause();
  }, 3000); // 3000ms = 3 ثواني
});
