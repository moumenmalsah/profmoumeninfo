// ============================================
// Pr. Moumen — Interactivity
// ============================================

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Projects data
const projects = [
  {
    title: "Plateforme E-Learning",
    desc: "Application web pour cours en ligne avec quiz interactifs, destinée aux étudiants marocains.",
    tags: ["PHP", "MySQL", "JS"],
    icon: "🎓",
    color: "linear-gradient(135deg,#1f4eb8,#13327a)"
  },
  {
    title: "Système de gestion scolaire",
    desc: "Outil de gestion des notes, présences et emplois du temps pour établissements.",
    tags: ["Python", "Django", "PostgreSQL"],
    icon: "📊",
    color: "linear-gradient(135deg,#c14a2b,#8a3220)"
  },
  {
    title: "App Recettes Marocaines",
    desc: "Application mobile recensant les meilleures recettes traditionnelles du Maroc.",
    tags: ["Flutter", "Firebase"],
    icon: "🍲",
    color: "linear-gradient(135deg,#e8a13a,#b87a20)"
  },
  {
    title: "Chatbot IA en Darija",
    desc: "Assistant conversationnel comprenant le dialecte marocain pour l'éducation.",
    tags: ["Python", "NLP", "TensorFlow"],
    icon: "🤖",
    color: "linear-gradient(135deg,#2e8b6a,#1c5a44)"
  },
  {
    title: "Site web médina de Fès",
    desc: "Site touristique présentant la médina de Fès avec carte interactive.",
    tags: ["HTML", "CSS", "Leaflet"],
    icon: "🕌",
    color: "linear-gradient(135deg,#1f4eb8,#2e8b6a)"
  },
  {
    title: "Visualiseur d'algorithmes",
    desc: "Outil pédagogique pour visualiser les algorithmes de tri et de recherche.",
    tags: ["JavaScript", "Canvas"],
    icon: "⚙️",
    color: "linear-gradient(135deg,#13327a,#c14a2b)"
  }
];

const grid = document.getElementById('projectsGrid');
grid.innerHTML = projects.map(p => `
  <article class="project-card reveal">
    <div class="project-thumb" style="background:${p.color};color:#fff">${p.icon}</div>
    <div class="project-body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>
  </article>
`).join('');

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .project-card, .skill-card').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

// Contact form (front-end only)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', e => {
  e.preventDefault();
  status.textContent = "✓ Merci ! Votre message a été envoyé. شكراً";
  form.reset();
  setTimeout(() => status.textContent = '', 5000);
});
