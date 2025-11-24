let loveCount = 0;

// Language toggle
function setLanguage(lang) {
  document.querySelectorAll('.lang-en').forEach(el => el.style.display = (lang==='en') ? '' : 'none');
  document.querySelectorAll('.lang-ru').forEach(el => el.style.display = (lang==='ru') ? '' : 'none');
}

// Virtual Hug/Kiss
function sendHug() { loveCount += 1; document.getElementById('loveCount').innerText = loveCount; createHeart('💖'); }
function sendKiss() { loveCount += 2; document.getElementById('loveCount').innerText = loveCount; createHeart('😘'); }

// Floating hearts (used by buttons and list clicks)
function createHeart(symbol) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = symbol;
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
  document.body.appendChild(heart);
  setTimeout(()=> heart.remove(), 5000);
}

// Constant Heart Spawner (Runs in the background)
function spawnHearts() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '❤️';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(spawnHearts, 1000); 

// Bunny pet
let bunnyHunger = 0;
function feedBunny() { bunnyHunger = Math.max(bunnyHunger - 1, 0); alert("🐰 Yum! Bunny is happier 💖"); }

// Mini-game placeholder
function catchHeartGame() { alert("Mini-game coming soon! 🐰💌"); }

// Birthday Easter egg
function checkBirthday() {
  const today = new Date();
  if (today.getDate() === 20 && today.getMonth() === 8) { alert("🎉 Happy Birthday Mishka! 💖"); } // Month 8 is September (0-indexed)
}
window.onload = checkBirthday;
