// جلب عناصر الانترو
const intro = document.getElementById('intro');
const noiseAudio = new Audio('/assets/Media/noise.mp3'); // حط مسار صوت النيوس الصحيح

// تشغيل الصوت عند تحميل الصفحة
window.addEventListener('load', () => {
  // تشغيل الصوت بصوت منخفض (يمكن تغييره حسب الرغبة)
  noiseAudio.volume = 0.4;
  noiseAudio.play().catch(e => console.log("Autoplay prevented:", e));

  // الانترو يختفي بعد 3 ثواني
  setTimeout(() => {
    // اختفاء الانترو
    intro.style.opacity = '0';
    intro.style.visibility = 'hidden';
    intro.style.pointerEvents = 'none';

    // إيقاف صوت النيوس
    noiseAudio.pause();
    noiseAudio.currentTime = 0;
  }, 3000); // 3000ms = 3 ثواني
});
