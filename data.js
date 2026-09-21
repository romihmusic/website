/* ============================================================
   ROMIH SITE CONTENT
   ============================================================
   This is the ONLY file you should need to edit for day-to-day
   updates — new shows, new photos, new links, upcoming dates.
   You never need to touch index.html, styles.css, or script.js.

   After you save changes here (and upload any new photos to the
   /images folder), commit + push to GitHub — your live site
   updates automatically within a minute or two.

   Rules to keep this file from breaking:
   - Every item needs a comma after it, EXCEPT the very last one
     in a list.
   - Always keep text inside quotes: "like this"
   - Keep every { has a matching }, every [ has a matching ]
   ============================================================ */


/* ---------- PERMANENT LINKS ----------
   These are the circular icons at the top (Instagram, SoundCloud,
   YouTube, Collective, Email). They never change based on the toggle.
   Just replace the "#" with your real links. The email one is
   already set to open a message to romihmusic@gmail.com. */
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/romihmusic/",
  soundcloud: "https://soundcloud.com/romihmusic",
  youtube: "https://www.youtube.com/@Romihmusic",
  collective: "https://www.usbcheck.co/",
  email: "mailto:romihmusic@gmail.com",
};


/* ---------- HEADER PHOTO STRIP ----------
   The scrollable photos at the top of the page. Add/remove/reorder
   freely — just list the image file paths in the order you want
   them to appear.

   TO ADD A NEW HEADER PHOTO:
   1. Upload the photo file into the /images/hero folder (in GitHub,
      use "Add file" → "Upload files").
   2. Add its filename to this list below, e.g. "images/hero/hero-09.jpg" */
const HERO_PHOTOS = [
  "images/hero/hero-01.jpg",
  "images/hero/hero-02.jpg",
  "images/hero/hero-03.jpg",
  "images/hero/hero-04.jpg",
  "images/hero/hero-05.jpg",
  "images/hero/hero-06.jpg",
  "images/hero/hero-07.jpg",
  "images/hero/hero-08.jpg",
];


/* ---------- SHOW ARCHIVE ----------
   Filtered by the chain (⛓️) / bow (🎀) toggle. Each show is one
   entry below.

   TO ADD A NEW SHOW:
   1. In /images/shows, create a new folder for the show (any name,
      no spaces — e.g. "warehouse-night-aug-2026").
   2. Upload that show's photo(s) into the new folder.
   3. Copy one of the blocks below, paste it inside the [ ] as a
      new entry, and fill in:
        title   -> show name
        venue   -> venue name
        city    -> "City, State"
        mood    -> "chain" or "bow"
        photos  -> list of image paths in that show's folder
                   (first one is used as the cover photo)
        media   -> list of {label, url} links for this show
                   (SoundCloud, YouTube, etc. — add as many as you have,
                   or leave the list empty: media: [] ) */
const SHOWS = [
  {
    title: "Sweeter Days Radio",
    venue: "Better Days",
    city: "Portland, OR",
    mood: "bow",
    photos: ["images/shows/sweeter-days-radio/cover.png"],
    media: [
      { label: "YouTube", url: "https://youtu.be/9TY_Y5FzZR0?si=m6xnwDLsVXFcYtNY" },
    ],
  },
  {
    title: "DJ Mandy Support",
    venue: "45 East",
    city: "Portland, OR",
    mood: "bow",
    photos: ["images/shows/dj-mandy-support/cover.jpg"],
    media: [
      { label: "SoundCloud", url: "https://soundcloud.com/romihmusic/bounce-feels-like-us-dj-mandy-support-45-east-2025" },
    ],
  },
  {
    title: "Cassian Support",
    venue: "REALM",
    city: "Portland, OR",
    mood: "bow",
    photos: ["images/shows/cassian-support/cover.jpg"],
    media: [],
  },
  {
    title: "KSHMR Support",
    venue: "45 East",
    city: "Portland, OR",
    mood: "bow",
    photos: ["images/shows/kshmr-support/cover.jpg"],
    media: [],
  },
  {
    title: "Tabor Dance",
    venue: "Mt. Tabor",
    city: "Portland, OR",
    mood: "bow",
    photos: ["images/shows/tabor-dance/cover.jpg"],
    media: [],
  },
  {
    title: "Sweet Girl's Club",
    venue: "Brooklyn Carretta",
    city: "Portland, OR",
    mood: "bow",
    photos: ["images/shows/sweet-girls-club/cover.png"],
    media: [],
  },
   {
    title: "Lotus: A High Speed Event",
    venue: "Wonderlove",
    city: "Portland, OR",
    mood: "chain",
    photos: ["images/shows/lotus-high-speed-event/cover.png"],
    media: [
      { label: "YouTube", url: "https://youtu.be/Dw81X5UWCsM?si=1-PwzrRGJonzH8Fc" },
    ],
  },
  {
    title: "No Wrong Moves - Halloween",
    venue: "REALM",
    city: "Portland, OR",
    mood: "chain",
    photos: ["images/shows/no-wrong-moves-halloween/cover.png"],
    media: [
      { label: "SoundCloud", url: "https://soundcloud.com/romihmusic/no-wrong-moves-halloween-edition-realm-2025" },
    ],
  },
  {
    title: "JOSHWA, ero808 Support - Valentine's Day (Romih b2b CHILLS)",
    venue: "REALM",
    city: "Portland, OR",
    mood: "chain",
    photos: ["images/shows/joshwa-ero808-valentines-day/cover.png"],
    media: [
      { label: "YouTube", url: "https://youtu.be/QqFRMcjR6ug?si=d5yb_nunS6tbUbvG" },
    ],
  },
  {
    title: "Rave on a Plane",
    venue: "Airplane Home",
    city: "Hillsboro, OR",
    mood: "chain",
    photos: ["images/shows/rave-on-a-plane/cover.JPG"],
    media: [],
  },
  {
    title: "Taurus Party - Birthday Set",
    venue: "Wonderlove",
    city: "Portland, OR",
    mood: "chain",
    photos: ["images/shows/taurus-party-birthday-set/cover.JPEG"],
    media: [],
  },
  {
    title: "Anime K-Rave",
    venue: "Elevate",
    city: "Portland, OR",
    mood: "chain",
    photos: ["images/shows/anime-k-rave/cover.JPG"],
    media: [],
  },
];


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
