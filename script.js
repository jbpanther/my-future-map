// ============================================================
// AOS (Animate On Scroll) — initialize
// ============================================================
AOS.init({ duration: 800, once: true });

// ============================================================
// HERO TYPING ANIMATION
// ============================================================
const tagline = "Where will I go from here?";
const el = document.getElementById('hero-tagline');
let i = 0;

function type() {
  if (i < tagline.length) {
    el.textContent += tagline.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}

// Start after a short delay so the page loads first
setTimeout(type, 600);

// ============================================================
// LEAFLET MAP
// ============================================================
const map = L.map('map-container').setView([20, 0], 2);

// CartoDB Voyager — warm, illustrated tile style
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
  maxZoom: 18
}).addTo(map);

// ============================================================
// MAP MARKERS
// ============================================================

// -- Hometown: McLean, VA --
L.marker([38.9339, -77.1773])
  .addTo(map)
  .bindPopup(
    '<b>McLean, VA</b><br>' +
    'My Hometown. It\'s a place that is still important to me, but I will likely spend less time here going into the future.'
  );

// -- Boston College, Boston, MA --
L.marker([42.3355, -71.1685])
  .addTo(map)
  .bindPopup(
    '<b>Boston College</b><br>' +
    'I could certainly see myself returning to Boston for grad school one day, or to settle down after my time in NYC.'
  );

// -- Penn Station, New York City, NY --
L.marker([40.7506, -73.9971])
  .addTo(map)
  .bindPopup(
    '<b>New York City, NY</b><br>' +
    'This is my next move, where I will be immediately after I graduate.'
  );

// -- Sloane Square, London, UK --
L.marker([51.4924, -0.1565])
  .addTo(map)
  .bindPopup(
    '<b>London, UK</b><br>' +
    'Long-term, I would love to live or go to school abroad, specifically in London since it is my favorite city.'
  );
