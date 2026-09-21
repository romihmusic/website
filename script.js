/* ============================================================
   ROMIH SITE LOGIC — you shouldn't need to edit this file.
   All editable content lives in data.js.
   ============================================================ */

/* ---------------- permanent links ---------------- */
document.getElementById('linkInstagram').href = SOCIAL_LINKS.instagram;
document.getElementById('linkSoundcloud').href = SOCIAL_LINKS.soundcloud;
document.getElementById('linkYoutube').href = SOCIAL_LINKS.youtube;
document.getElementById('linkCollective').href = SOCIAL_LINKS.collective;
document.getElementById('linkEmail').href = SOCIAL_LINKS.email;

/* ---------------- header photo strip ---------------- */
function initPhotoStrip(){
  const strip = document.getElementById('photoStrip');
  const dotsContainer = document.getElementById('stripDots');
  const imgs = [];

  HERO_PHOTOS.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Romih photo ${i + 1}`;
    img.loading = i === 0 ? 'eager' : 'lazy';
    strip.appendChild(img);
    imgs.push(img);

    if(HERO_PHOTOS.length > 1){
      const dot = document.createElement('button');
      dot.className = 'strip-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Jump to photo ${i + 1}`);
      dot.addEventListener('click', () => {
        img.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
      dotsContainer.appendChild(dot);
    }
  });

  if(HERO_PHOTOS.length > 1){
    let ticking = false;
    const updateActiveDot = () => {
      const center = strip.scrollLeft + strip.clientWidth / 2;
      let closest = 0, closestDist = Infinity;
      imgs.forEach((img, i) => {
        const imgCenter = img.offsetLeft + img.offsetWidth / 2;
        const dist = Math.abs(imgCenter - center);
        if(dist < closestDist){ closestDist = dist; closest = i; }
      });
      document.querySelectorAll('.strip-dot').forEach((d, i) => d.classList.toggle('active', i === closest));
    };
    strip.addEventListener('scroll', () => {
      if(!ticking){
        requestAnimationFrame(() => { updateActiveDot(); ticking = false; });
        ticking = true;
      }
    });
  }
}
initPhotoStrip();

/* ---------------- render shows ---------------- */
const showGrid = document.getElementById('showGrid');
let currentMood = 'chain';

function renderShows(){
  showGrid.innerHTML = '';
  const filtered = SHOWS.filter(s => s.mood === currentMood);
  if(filtered.length === 0){
    showGrid.innerHTML = '<p class="no-shows">No shows here yet — check the other side.</p>';
    return;
  }
  filtered.forEach((show, i) => {
    const card = document.createElement('div');
    card.className = 'show-card';
    card.style.animationDelay = (i * 0.06) + 's';

    const cover = document.createElement('div');
    cover.className = 'show-cover';
    if(show.photos.length){
      cover.innerHTML = `<img src="${show.photos[0]}" alt="${show.title}">`;
      if(show.photos.length > 1){
        cover.innerHTML += `<span class="photo-count">+${show.photos.length - 1}</span>`;
      }
      cover.addEventListener('click', () => openLightbox(show, 0));
    } else {
      cover.innerHTML = `<div class="show-cover-empty">No photos yet</div>`;
    }

    const info = document.createElement('div');
    info.className = 'show-info';
    const mediaHtml = show.media.map(m =>
      `<a class="media-chip" href="${m.url}" target="_blank" rel="noopener">${m.label} ↗</a>`
    ).join('');
    info.innerHTML = `
      <div class="show-title">${show.title}</div>
      <div class="show-meta">${show.venue} · ${show.city}</div>
      <div class="show-media">${mediaHtml}</div>
    `;

    card.appendChild(cover);
    card.appendChild(info);
    showGrid.appendChild(card);
  });
}

/* ---------------- toggle ---------------- */
const toggle = document.getElementById('dualityToggle');
const caption = document.getElementById('dualityCaption');
toggle.addEventListener('click', () => {
  const soft = currentMood === 'chain';
  currentMood = soft ? 'bow' : 'chain';
  document.body.classList.toggle('mood-soft', soft);
  toggle.setAttribute('aria-pressed', String(soft));
  caption.textContent = soft ? 'Showing bow nights.' : 'Showing chain nights.';
  renderShows();
});

/* ---------------- lightbox ---------------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
let activeShow = null, activeIndex = 0;

function openLightbox(show, index){
  activeShow = show; activeIndex = index;
  updateLightbox();
  lightbox.classList.add('open');
}
function updateLightbox(){
  lightboxImg.src = activeShow.photos[activeIndex];
  lightboxCaption.textContent = `${activeShow.title} — photo ${activeIndex + 1} of ${activeShow.photos.length}`;
}
document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
document.getElementById('lightboxPrev').addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + activeShow.photos.length) % activeShow.photos.length;
  updateLightbox();
});
document.getElementById('lightboxNext').addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % activeShow.photos.length;
  updateLightbox();
});
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', (e) => {
  if(!lightbox.classList.contains('open')) return;
  if(e.key === 'Escape') lightbox.classList.remove('open');
  if(e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
  if(e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
});

/* ---------------- upcoming ---------------- */
const upcomingSection = document.querySelector('.upcoming-section');
const upcomingList = document.getElementById('upcomingList');

if(UPCOMING.length === 0){
  upcomingSection.style.display = 'none';
} else {
  UPCOMING.forEach(u => {
    const li = document.createElement('li');
    li.className = 'upcoming-item';
    li.innerHTML = `
      <div class="upcoming-date"><div class="day">${u.day}</div><div class="mon">${u.mon}</div></div>
      <div class="upcoming-details">
        <div class="upcoming-venue">${u.venue}</div>
        <div class="upcoming-city">${u.city}</div>
      </div>
      <a class="ticket-link" href="${u.url}" target="_blank" rel="noopener">Tickets</a>
    `;
    upcomingList.appendChild(li);
  });
}

renderShows();
