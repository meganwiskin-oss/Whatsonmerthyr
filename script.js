// What's on Merthyr — Interactive Content

// === DATA (from master content, v2, and free content zips) ===

const FREE_EVENTS = [
  { date: "2026-09-18", time: "09:45", name: "Sewing Group", venue: "Dowlais Library", category: "craft" },
  { date: "2026-09-18", time: "14:00", name: "Dowlais Hookers", venue: "Dowlais Library", category: "craft" },
  { date: "2026-09-18", time: "15:30", name: "Family Games", venue: "Merthyr Central Library", category: "family" },
  { date: "2026-09-19", time: "09:30", name: "Beginners Yoga", venue: "Merthyr Central Library", category: "wellbeing" },
  { date: "2026-09-19", time: "11:00", name: "Daffodil Wellbeing Wales", venue: "Merthyr Central Library", category: "wellbeing" },
  { date: "2026-09-21", time: "09:30", name: "Monday Memories", venue: "Merthyr Central Library", category: "history" },
  { date: "2026-09-21", time: "10:00", name: "Baby Yoga Dowlais", venue: "Dowlais Library", category: "family" },
  { date: "2026-09-21", time: "10:30", name: "Digital Photo Skills", venue: "Dowlais Library", category: "learning" },
  { date: "2026-09-21", time: "16:00", name: "Treharris Games Club", venue: "Treharris Library", category: "family" },
  { date: "2026-09-22", time: "10:00", name: "Art Journaling", venue: "Aberfan Library", category: "wellbeing" },
  { date: "2026-09-22", time: "10:30", name: "Gardening Club", venue: "Merthyr Central Library", category: "community" },
  { date: "2026-09-22", time: "11:00", name: "Credit Union", venue: "Treharris Library", category: "support" },
  { date: "2026-09-22", time: "11:00", name: "Treharris Digital Skills", venue: "Treharris Library", category: "learning" },
  { date: "2026-09-23", time: "10:00", name: "Treharris Craft Club", venue: "Treharris Library", category: "craft" },
  { date: "2026-09-23", time: "10:00", name: "Knitting4Gifting", venue: "Dowlais Library", category: "community" },
  { date: "2026-09-23", time: "10:30", name: "Toddler Time", venue: "Merthyr Central Library", category: "family" },
  { date: "2026-09-23", time: "10:30", name: "Aberfan Digital Drop-In", venue: "Aberfan Library", category: "learning" },
  { date: "2026-09-23", time: "14:00", name: "Dowlais Visual Art Group", venue: "Dowlais Library", category: "art" },
  { date: "2026-09-23", time: "10:00", name: "Cuppa with a Copper", venue: "Treharris Library", category: "community" },
  { date: "2026-09-24", time: "09:00", name: "Sunrise Haven Family Support", venue: "Merthyr Central Library", category: "support" },
  { date: "2026-09-24", time: "10:30", name: "Toddler Time", venue: "Aberfan Library", category: "family" },
  { date: "2026-09-25", time: "11:00", name: "Aberfan60 Free Film Screening", venue: "Aberfan Library", category: "heritage" },
];

const WALKS = [
  { name: "Cyfarthfa Lake Circular Walk", category: "Walk", desc: "Scenic circular walk around Cyfarthfa Lake in Cyfarthfa Park.", source: "visitmerthyr.co.uk" },
  { name: "Cyfarthfa Park Perimeter Walk", category: "Walk", desc: "Perimeter route through 160 acres of historic parkland.", source: "visitmerthyr.co.uk" },
  { name: "Cyfarthfa Park Geocache Trail", category: "Family/Adventure", desc: "Free GPS treasure hunt with five hidden geocaches. Suitable for all ages.", source: "visitmerthyr.co.uk" },
  { name: "Llwyn-Onn Reservoir Walk", category: "Walk/Nature", desc: "Peaceful reservoir route with scenic water and hill views.", source: "visitmerthyr.co.uk" },
  { name: "Taff Trail — Merthyr Section", category: "Walking/Cycling", desc: "14-mile traffic-free section between Abercynon and Pontsticill.", source: "visitmerthyr.co.uk" },
  { name: "Trevithick Trail", category: "Heritage/Walking", desc: "Follow the route of the 1804 Penydarren locomotive journey.", source: "visitmerthyr.co.uk" },
  { name: "Pontsarn Gorge / Viaduct Walk", category: "Walk/Nature", desc: "Stone viaduct arches crossing a lush valley above woodland and water.", source: "visitmerthyr.co.uk" },
  { name: "Gethin Woodlands & Webber's Pond", category: "Woodland/Nature", desc: "Woodland paths, water and outdoor adventure scenery.", source: "visitmerthyr.co.uk" },
  { name: "Merthyr Town Centre Self-Guided Trails", category: "Heritage/Walking", desc: "Themed trails exploring local people, industrial heritage, architecture and women in Merthyr history.", source: "visitmerthyr.co.uk" },
  { name: "Pontsticill Reservoir Loop", category: "Hiking", desc: "8.4 mile reservoir shoreline route alongside Brecon Mountain Railway. ~3h 50m.", source: "user research" },
  { name: "Llwyn-on Reservoir Loop", category: "Walking", desc: "3.4 mile relatively flat reservoir route with scenic water views.", source: "user research" },
  { name: "Pontsarn Viaduct – Morlais Quarry Loop", category: "Hiking/Heritage", desc: "8.4 mile route through industrial heritage landscapes. ~3h 40m.", source: "user research" },
];

const TIMELINE = [
  { era: "Prehistory", text: "Evidence of prehistoric activity includes Neolithic and Bronze Age finds and Iron Age hillforts." },
  { era: "Roman period", text: "A Roman fort was established at Penydarren on the route between Cardiff and Brecon." },
  { era: "1760s onward", text: "Iron production expanded rapidly, transforming the valley and attracting workers." },
  { era: "1804", text: "Richard Trevithick's Penydarren locomotive made a pioneering steam-powered journey hauling iron on rails." },
  { era: "1831", text: "The Merthyr Rising became a major working-class uprising associated with wages, unemployment and industrial conditions." },
  { era: "19th century", text: "Merthyr became a major international ironmaking centre and a diverse industrial community." },
  { era: "Modern era", text: "Industry declined, while parks, heritage, community life and outdoor recreation became increasingly important parts of Merthyr's identity." },
];

const HISTORIC_SITES = [
  { name: "Cyfarthfa Ironworks", type: "Industrial heritage", desc: "Surviving blast-furnace remains from one of the world's major ironworks.", access: "Open-air site from the Swansea Road area.", warnings: "Uneven ground, historic masonry, use care around fenced areas" },
  { name: "Trevithick Tunnel", type: "Railway heritage", desc: "A heritage feature linked to the 1804 Penydarren locomotive journey.", access: "Follow the Trevithick Trail on foot or bike.", warnings: "Check trail conditions, stay on designated paths" },
  { name: "Pont-y-Cafnau Bridge", type: "Industrial engineering", desc: "A 1793 cast-iron bridge associated with Cyfarthfa Ironworks.", access: "Outdoor landmark near the Cyfarthfa industrial landscape.", warnings: "Take care near roads and river" },
  { name: "Cefn Coed Viaduct", type: "Railway heritage", desc: "1860s curved railway viaduct now part of the Taff Trail.", access: "Access via the Taff Trail.", warnings: "Slippery/muddy conditions possible" },
  { name: "Pontsarn Viaduct", type: "Railway heritage", desc: "Historic viaduct overlooking Pontsarn Gorge and woodland.", access: "Accessible via the Taff Trail.", warnings: "Mud, steep ground, water safety" },
  { name: "Morlais Castle", type: "Medieval heritage", desc: "Fragments of a medieval hilltop castle with dramatic views.", access: "Outdoor hilltop site; check access and weather.", warnings: "Uneven terrain, exposed hilltop, do not climb ruins" },
  { name: "Pontmorlais Heritage Quarter", type: "Town heritage", desc: "Historic streets, landmarks and public art in the former commercial heart of Merthyr.", access: "Explore on foot and combine with town heritage trails.", warnings: "Normal town-centre pedestrian/traffic safety" },
  { name: "Penywern Ponds", type: "Industrial landscape/nature", desc: "Historic ponds linked to the Dowlais Ironworks, now used for wildlife and recreation.", access: "Outdoor public landscape; check local conditions.", warnings: "Water safety, muddy/uneven ground" },
  { name: "Cyfarthfa Park", type: "Historic park", desc: "160 acres of parkland with lake, woodland walks, gardens and family spaces.", access: "Open park; surfaced paths available in parts.", warnings: "Natural paths can be muddy" },
];

const WHATS_ON = [
  {
    name: "Spooksville at Dowlais",
    desc: "Family Halloween event with free admission. Ghostly donkey rides, free petting farm, free hocus pocus tribute, games, stalls and photo opportunities. Kiddies rides from £1.",
    date: "24 Oct 2026, 12:00–17:00",
    venue: "Dowlais Community Centre, Station Road, Dowlais, CF48 3LP",
    image: "assets/dowlais_spooksville.png",
    badge: "Free admission",
    status: "pending"
  },
  {
    name: "Becca's Besties Women's Support Group",
    desc: "A free, welcoming space for women to connect, share and uplift one another.",
    date: "Every Wednesday, 18:00–20:00",
    venue: "Dowlais Engine House",
    image: "assets/beccas_besties.png",
    badge: "Free",
    status: "pending"
  },
  {
    name: "Know Your Place",
    desc: "Exhibition by Beth Leahy and Eleanor Whiteman responding to Crawshay family portraits and highlighting hidden stories of women in Merthyr's nineteenth-century history.",
    date: "1 Apr – 30 Sep 2026",
    venue: "Cyfarthfa Castle Museum & Art Gallery",
    image: null,
    badge: "Free exhibition",
    status: "verified"
  },
  {
    name: "Aberfan 60 — The Days After",
    desc: "Chuck Rapoport photographs documenting Aberfan community life, remembrance and resilience.",
    date: "12 Sep – 1 Nov 2026",
    venue: "Cyfarthfa Castle Museum & Art Gallery",
    image: null,
    badge: "Free exhibition",
    status: "verified"
  },
];

const CAVES = [
  { name: "Ogof-y-Ci / Dog Cave", access: "Cambrian Cave Registry records entrances in Nant Glais Nature Reserve, approached across fields via a stile near Llwyn-y-Ci/Llwyncilsanws Farm. Check current access arrangements before visiting.", warnings: ["specialist caving site", "stream cave", "flood/wet conditions", "SSSI conservation", "do not explore alone"] },
  { name: "Ogof Cneuen", access: "Registry describes approach via the dry bed of Nant Glais from the stile near Llwyn-y-Ci/Llwyncilsanws Farm; check access first.", warnings: ["specialist site", "SSSI", "uneven terrain", "do not enter without appropriate competence/equipment"] },
  { name: "Ogof Rhyd Sych / Dryford Cave", access: "Registry describes walking about 0.5 miles up the river bank from Aberglais Bridge.", warnings: ["active stream", "liable to flood", "tight rift", "strong draught", "SSSI", "underground rescue risk"] },
  { name: "Other recorded caves", access: "The Cambrian Cave Registry lists many additional Merthyr cave features. Do not turn registry entries into casual tourist destinations; access, stability, flooding and conservation restrictions vary.", warnings: ["access, stability, flooding and conservation restrictions vary"] },
];

const IDEAS = [
  { icon: "🧺", idea: "Cyfarthfa lake walk + picnic", for: "Solo / Couple / Friends" },
  { icon: "🚴", idea: "Taff Trail walk or cycle", for: "Solo / Couple / Friends" },
  { icon: "🌉", idea: "Pontsarn Viaduct + woodland walk", for: "Solo / Couple / Friends" },
  { icon: "🏛️", idea: "Merthyr town heritage trail", for: "Solo / Couple / Friends" },
  { icon: "🗺️", idea: "Cyfarthfa Geocache Trail", for: "Couple / Friends / Family" },
  { icon: "🏰", idea: "Morlais Castle viewpoint walk", for: "Solo / Couple / Friends" },
  { icon: "📚", idea: "Free library social groups", for: "Solo / Friends" },
  { icon: "🧭", idea: "Compass Community Hub course or workshop", for: "Solo / Friends" },
];

// === RENDER FUNCTIONS ===

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;
  grid.innerHTML = FREE_EVENTS.map(e => `
    <div class="event-card" data-category="${e.category}">
      <div class="event-date">${formatDate(e.date)} · ${e.time}</div>
      <div class="event-name">${e.name}</div>
      <div class="event-venue">📍 ${e.venue}</div>
      <span class="card-badge badge-free">FREE</span>
      <span class="card-badge badge-category" style="margin-left:0.4rem;">${e.category}</span>
    </div>
  `).join('');
}

function renderWalks() {
  const grid = document.getElementById('walksGrid');
  if (!grid) return;
  grid.innerHTML = WALKS.map(w => `
    <div class="walk-card">
      <h3>${w.name}</h3>
      <p>${w.desc}</p>
      <div class="walk-meta">📁 ${w.category} · Source: ${w.source}</div>
      <span class="card-badge badge-free" style="margin-top:0.5rem;">FREE</span>
    </div>
  `).join('');
}

function renderTimeline() {
  const el = document.getElementById('timeline');
  if (!el) return;
  el.innerHTML = TIMELINE.map(t => `
    <div class="timeline-item">
      <div class="timeline-era">${t.era}</div>
      <div class="timeline-text">${t.text}</div>
    </div>
  `).join('');
}

function renderHistoric() {
  const grid = document.getElementById('historicGrid');
  if (!grid) return;
  grid.innerHTML = HISTORIC_SITES.map(h => `
    <div class="historic-card">
      <h3>${h.name}</h3>
      <span class="card-badge badge-free">FREE</span>
      <span class="card-badge badge-category" style="margin-left:0.4rem;">${h.type}</span>
      <p style="margin-top:0.5rem;">${h.desc}</p>
      <p style="font-size:0.85rem;"><strong>Access:</strong> ${h.access}</p>
      <p class="warnings">⚠️ ${h.warnings}</p>
    </div>
  `).join('');
}

function renderWhatsOn() {
  const grid = document.getElementById('whatsOnGrid');
  if (!grid) return;
  grid.innerHTML = WHATS_ON.map(e => `
    <div class="card">
      ${e.image ? `<img class="card-image" src="${e.image}" alt="${e.name}" loading="lazy">` : ''}
      <div class="card-body">
        <span class="card-badge ${e.status === 'verified' ? 'badge-verified' : 'badge-pending'}">${e.status === 'verified' ? '✓ Verified' : '⏳ Pending Review'}</span>
        <span class="card-badge badge-free" style="margin-left:0.4rem;">${e.badge}</span>
        <h3>${e.name}</h3>
        <p>${e.desc}</p>
        <div style="margin-top:auto;font-size:0.85rem;color:var(--muted);">
          <div><strong>📅 ${e.date}</strong></div>
          <div>📍 ${e.venue}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCaves() {
  const grid = document.getElementById('cavesGrid');
  if (!grid) return;
  grid.innerHTML = CAVES.map(c => `
    <div class="cave-card">
      <h3>${c.name}</h3>
      <p style="font-size:0.88rem;">${c.access}</p>
      <div class="cave-warnings">
        ${c.warnings.map(w => `<span class="cave-warn-tag">⚠️ ${w}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderIdeas() {
  const grid = document.getElementById('ideasGrid');
  if (!grid) return;
  grid.innerHTML = IDEAS.map(i => `
    <div class="idea-card">
      <div class="idea-icon">${i.icon}</div>
      <h3>${i.idea}</h3>
      <div class="idea-for">${i.for}</div>
      <span class="card-badge badge-free" style="margin-top:0.5rem;">FREE</span>
    </div>
  `).join('');
}

// === FILTERING ===

function setupFilters() {
  const chips = document.querySelectorAll('.filter-chip');
  const searchInput = document.getElementById('searchInput');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      applyFilter(chip.dataset.filter, searchInput.value);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const activeChip = document.querySelector('.filter-chip.active');
      applyFilter(activeChip ? activeChip.dataset.filter : 'all', searchInput.value);
    });
  }
}

function applyFilter(filter, query) {
  query = (query || '').toLowerCase().trim();
  const allCards = document.querySelectorAll('.event-card, .walk-card, .historic-card, .idea-card, .card');

  allCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const category = (card.dataset.category || '').toLowerCase();
    let matchesFilter = true;
    let matchesQuery = query === '' || text.includes(query);

    if (filter !== 'all') {
      const filterMap = {
        free: text.includes('free'),
        family: text.includes('family') || category.includes('family'),
        friends: text.includes('friends') || text.includes('friend'),
        couples: text.includes('couple'),
        solo: text.includes('solo'),
        outdoors: text.includes('outdoor') || text.includes('walk') || text.includes('trail') || text.includes('park') || text.includes('nature') || text.includes('woodland') || text.includes('reservoir'),
        indoors: text.includes('library') || text.includes('indoor') || text.includes('museum') || text.includes('community centre') || text.includes('engine house'),
        events: text.includes('event') || card.classList.contains('event-card') || card.classList.contains('card'),
        walks: text.includes('walk') || text.includes('trail') || text.includes('hiking') || card.classList.contains('walk-card'),
      };
      matchesFilter = filterMap[filter] || false;
    }

    card.style.display = (matchesFilter && matchesQuery) ? '' : 'none';
  });
}

// === INIT ===

document.addEventListener('DOMContentLoaded', function() {
  renderEvents();
  renderWalks();
  renderTimeline();
  renderHistoric();
  renderWhatsOn();
  renderCaves();
  renderIdeas();
  setupFilters();

  // Mobile nav
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle) {
    navToggle.addEventListener('click', () => mainNav.classList.toggle('active'));
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mainNav.classList.remove('active'));
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#contact') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Scroll animations
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('.card, .feature-card, .event-card, .walk-card, .historic-card, .idea-card, .support-card, .cave-card, .timeline-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }
});
