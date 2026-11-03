const LANGS = ['fr', 'pt', 'en'];
const CONTACT_EMAIL = 'contact@tatianaconsulting.com';
let lang = 'fr';
try { lang = localStorage.getItem('lang') || (navigator.language || 'fr').slice(0, 2); } catch (e) {}
if (!LANGS.includes(lang)) lang = 'fr';

const tr = k => T[k][LANGS.indexOf(lang)];
const parts = k => tr(k).split('|');
const el = (tag, txt, cls) => { const e = document.createElement(tag); if (txt) e.textContent = txt; if (cls) e.className = cls; return e; };
const icon = name => { const i = document.createElement('i'); i.dataset.lucide = name || 'sparkles'; return i; };
const icons = n => (n.dataset.ic || '').split(',');
const withIcon = (name, txt, tag = 'span') => { const e = el(tag); e.append(icon(name), document.createTextNode(txt)); return e; };

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: '0px 0px -40px 0px' });

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(n => n.textContent = tr(n.dataset.i18n));
  document.querySelectorAll('[data-ph]').forEach(n => n.placeholder = tr(n.dataset.ph));
  document.querySelectorAll('[data-chips]').forEach(n => n.replaceChildren(...parts(n.dataset.chips).map(t => el('span', t))));
  document.querySelectorAll('[data-steps]').forEach(n => n.replaceChildren(...parts(n.dataset.steps).map(t => el('span', t))));
  document.querySelectorAll('[data-icons]').forEach(n => {
    const ic = icons(n);
    n.replaceChildren(...parts(n.dataset.icons).map((t, i) => withIcon(ic[i], t)));
  });
  document.querySelectorAll('[data-cities]').forEach(n => n.replaceChildren(...parts(n.dataset.cities).map(t => withIcon('map-pin', t))));
  document.querySelectorAll('[data-routes]').forEach(n => n.replaceChildren(...parts(n.dataset.routes).map(t => withIcon('arrow-left-right', t))));
  document.querySelectorAll('[data-cards]').forEach(n => {
    const ic = icons(n);
    n.replaceChildren(...parts(n.dataset.cards).map((t, i) => {
      const [title, desc] = t.split('::');
      const c = el('div', '', 'card');
      c.style.transitionDelay = (i % 4) * 80 + 'ms';
      const box = el('div', '', 'ico'); box.append(icon(ic[i]));
      c.append(el('b', String(i + 1).padStart(2, '0'), 'num'), box, el('h3', title));
      if (desc) c.append(el('p', desc));
      return c;
    }));
  });
  document.querySelectorAll('[data-dl]').forEach(n => {
    n.replaceChildren(...parts(n.dataset.dl).flatMap(l => [el('dt', l), el('dd', tr('todo_fill'), 'todo')]));
  });
  document.querySelectorAll('[data-doors]').forEach(n => {
    const ic = icons(n);
    n.replaceChildren(...parts(n.dataset.doors).map((t, i) => {
      const a = withIcon(ic[i], t, 'a'); a.href = '#f'; a.style.transitionDelay = (i % 4) * 70 + 'ms';
      a.onclick = () => { document.getElementById('subj').selectedIndex = i; };
      return a;
    }));
  });
  const s = document.getElementById('subj'); const cur = s.selectedIndex;
  s.replaceChildren(...parts('c_l').map(t => { const o = el('option', t); o.value = t; return o; }));
  s.selectedIndex = Math.max(cur, 0);
  // bandeau défilant
  const words = [...parts('e_l'), ...parts('h_worlds')];
  document.getElementById('marq').replaceChildren(...[...words, ...words].map(w => el('span', w)));
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.l === lang));
  renderCredits();
  renderEvents();
  renderPartners();
  renderVideos();
  renderAwards();
  lucide.createIcons();
  document.querySelectorAll('.card:not(.in),.doors a:not(.in)').forEach(n => io.observe(n));
}

// ── crédits photo : une mention visible sur chaque image ──
const creditOf = key => (key in CREDITS ? CREDITS[key] : null);
function fillCredit(n, key) {
  const c = creditOf(key);
  n.classList.toggle('todo-cr', !c);
  n.replaceChildren(icon('camera'), document.createTextNode(c || tr('cr_todo')));
}
function renderCredits() {
  document.querySelectorAll('[data-credit]').forEach(n => fillCredit(n, n.dataset.credit));
}

// ── rencontres récentes (affiches expliquées) ──
function renderEvents() {
  const g = document.getElementById('events'); const L = LANGS.indexOf(lang);
  g.replaceChildren(...EVENTS.map((e, i) => {
    const c = el('article', '', 'ev rv'); c.style.transitionDelay = i * 90 + 'ms';
    const w = el('div', '', 'evi'); const im = document.createElement('img'); im.src = `assets/img/${e.img}.jpg`; im.alt = e.t[L]; im.loading = 'lazy';
    const cr = el('span', '', 'credit'); fillCredit(cr, e.img.split('/').pop()); w.append(im, cr);
    const b = el('div', '', 'evb');
    const d = el('span', '', 'chip static'); d.append(icon('calendar-days'), document.createTextNode(e.d[L]));
    const pl = el('p', '', 'evp'); pl.append(icon('map-pin'), document.createTextNode(e.p[L]));
    b.append(d, el('h4', e.t[L]), pl, el('p', e.x[L]));
    c.append(w, b); return c;
  }));
  g.querySelectorAll('.rv').forEach(n => io.observe(n));
}

// ── partenaires ──
function renderPartners() {
  const g = document.getElementById('partners'); const L = LANGS.indexOf(lang);
  const tiles = PARTNERS.map(p => {
    if (p.img) {
      const a = el('div', '', 'p-feat rv in');
      const w = el('div', '', 'pimg'); const im = document.createElement('img'); im.src = `assets/img/${p.img}.jpg`; im.alt = p.name;
      const cr = el('span', '', 'credit'); fillCredit(cr, p.img.split('/').pop()); w.append(im, cr);
      const t = el('div'); const ch = el('span', '', 'chip static'); ch.append(icon('handshake'), document.createTextNode(tr('part_feat')));
      t.append(ch, el('h4', p.name), el('p', p.sub[L])); a.append(w, t); return a;
    }
    const a = p.url ? el('a', '', 'p-tile logo') : el('div', '', 'p-tile logo');
    if (p.url) { a.href = p.url; a.target = '_blank'; a.rel = 'noopener'; }
    if (p.logo) { const im = document.createElement('img'); im.src = p.logo; im.alt = p.name; im.style.maxHeight = '70px'; a.append(im); } else a.append(el('b', p.name));
    return a;
  });
  const ph = Array.from({ length: PARTNER_PLACEHOLDERS }, () => { const t = el('div', '', 'p-tile'); t.append(icon('image-plus'), el('span', tr('part_ph'))); return t; });
  g.replaceChildren(...tiles, ...ph);
}
document.getElementById('partnerCta').onclick = () => { document.getElementById('subj').selectedIndex = 1; };

// ── vidéos (YouTube, Vimeo ou MP4) ──
function renderVideos() {
  const g = document.getElementById('videoGrid'); const L = LANGS.indexOf(lang);
  if (!VIDEOS.length) {
    const c = el('div', '', 'v-card ph'); c.append(icon('clapperboard'), el('span', tr('vid_ph')));
    g.replaceChildren(c); return;
  }
  g.replaceChildren(...VIDEOS.map(v => {
    const c = el('div', '', 'v-card'); const title = v.title ? v.title[L] : '';
    if (v.type === 'mp4') {
      const vd = document.createElement('video'); vd.controls = true; vd.preload = 'metadata'; vd.src = v.src; if (v.poster) vd.poster = v.poster; c.append(vd);
    } else {
      const thumb = document.createElement('img');
      thumb.src = v.poster || (v.type === 'youtube' ? `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg` : '');
      thumb.alt = title;
      const b = el('button', '', 'play'); b.type = 'button'; b.setAttribute('aria-label', title || 'Play');
      const sp = el('span'); sp.append(icon('play')); b.append(sp);
      b.onclick = () => {
        const f = document.createElement('iframe');
        f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; f.allowFullscreen = true;
        f.src = v.type === 'youtube' ? `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0` : `https://player.vimeo.com/video/${v.id}?autoplay=1`;
        c.replaceChildren(f);
      };
      c.append(thumb, b);
    }
    if (title) c.append(el('span', title, 'vt'));
    return c;
  }));
}

// ── distinctions & reconnaissances ──
function renderAwards() {
  const g = document.getElementById('awardGrid'); const L = LANGS.indexOf(lang);
  if (!AWARDS.length) {
    const c = el('div', '', 'award-ph'); c.append(icon('award'), el('span', tr('aw_ph'), 'todo'));
    g.replaceChildren(c); return;
  }
  g.replaceChildren(...AWARDS.map(a => {
    const c = el('article', '', 'award-card');
    const w = el('div', '', 'awi'); const im = document.createElement('img'); im.src = a.img; im.alt = a.t[L];
    w.append(im);
    if (a.credit) { const cr = el('span', '', 'credit'); fillCredit(cr, a.credit); w.append(cr); }
    const b = el('div', '', 'awb');
    if (a.d) { const d = el('span', '', 'chip static'); d.append(icon('award'), document.createTextNode(a.d)); b.append(d); }
    b.append(el('h4', a.t[L]), el('p', a.x[L]));
    c.append(w, b); return c;
  }));
}

document.querySelectorAll('.rv').forEach(n => io.observe(n));
document.querySelectorAll('.lang button').forEach(b => b.onclick = () => {
  lang = b.dataset.l; try { localStorage.setItem('lang', lang); } catch (e) {} render();
});
const nav = document.getElementById('nav');
document.getElementById('mb').onclick = () => nav.classList.toggle('open');
nav.querySelectorAll('a').forEach(a => a.onclick = () => nav.classList.remove('open'));

// compteurs animés
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  cio.unobserve(e.target);
  const end = +e.target.dataset.count; let n = 0;
  const t = setInterval(() => { e.target.textContent = ++n; if (n >= end) clearInterval(t); }, 1400 / end);
}), { threshold: .6 });
document.querySelectorAll('[data-count]').forEach(n => cio.observe(n));

// scroll : en-tête, barre de progression, parallaxe
const header = document.getElementById('top'), bar = document.getElementById('progress');
const par = [...document.querySelectorAll('.parallax')];
let tick = false;
function onScroll() {
  const y = scrollY;
  header.classList.toggle('solid', y > 40);
  bar.style.width = (y / (document.documentElement.scrollHeight - innerHeight) * 100) + '%';
  par.forEach(p => {
    const r = p.getBoundingClientRect();
    if (r.bottom < -200 || r.top > innerHeight + 200) return;
    const off = Math.max(-50, Math.min(50, (r.top + r.height / 2 - innerHeight / 2) * -(+p.dataset.speed)));
    p.style.transform = `translateY(${off.toFixed(1)}px)`;
  });
  tick = false;
}
addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });

document.getElementById('f').onsubmit = e => {
  e.preventDefault();
  const f = e.target;
  const body = `${f.m.value}\n\n— ${f.n.value} (${f.e.value})`;
  location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(f.s.value)}&body=${encodeURIComponent(body)}`;
};
render();
onScroll();
