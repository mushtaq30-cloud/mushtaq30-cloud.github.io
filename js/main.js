const cur = document.getElementById('pointer');
const ring = document.getElementById('pointer-ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';
});

(function loop() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a,button,.stile,.cert,.aw-card,.e-tab,.clink').forEach((el) => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
});

/* NAV */
window.addEventListener('scroll', () => document.getElementById('nav').classList.toggle('stuck', scrollY > 80));

/* SCROLL REVEAL */
const ro = new IntersectionObserver(
  (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis'); }),
  { threshold: 0.1 },
);
document.querySelectorAll('.rev,.revL,.revR').forEach((el) => ro.observe(el));

/* SKILLS FILTER */
const tiles = document.querySelectorAll('.stile');
setTimeout(() => tiles.forEach((t, i) => setTimeout(() => t.classList.add('sh'), i * 35)), 400);
document.querySelectorAll('.stab').forEach((btn) => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.stab').forEach((b) => b.classList.remove('on'));
    this.classList.add('on');
    const f = this.dataset.f;
    tiles.forEach((t) => {
      const show = f === 'all' || t.dataset.c === f;
      t.style.display = show ? '' : 'none';
      if (show) t.classList.add('sh');
    });
  });
});

/* EXPERIENCE TABS */
document.querySelectorAll('.e-tab').forEach((tab) => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.e-tab').forEach((t) => t.classList.remove('on'));
    document.querySelectorAll('.e-panel').forEach((p) => p.classList.remove('on'));
    this.classList.add('on');
    document.getElementById(this.dataset.p).classList.add('on');
  });
});

/* TOAST */
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.transform = 'translateY(0)';
  t.style.opacity = '1';
  setTimeout(() => {
    t.style.transform = 'translateY(90px)';
    t.style.opacity = '0';
  }, 3000);
}

document.querySelectorAll('.resume-link').forEach((el) => el.addEventListener('click', (e) => {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = 'files/Mushtaq_Resume.pdf';
  link.download = 'Mushtaq_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  try {
    const k = 'rdl';
    localStorage.setItem(k, (parseInt(localStorage.getItem(k) || '0', 10) + 1).toString());
  } catch { /* ignore */ }

  toast('✓ Resume download started!');
}));

/* VISIT COUNT */
try {
  const k = 'vc';
  localStorage.setItem(k, (parseInt(localStorage.getItem(k) || '0', 10) + 1).toString());
} catch { /* ignore */ }

