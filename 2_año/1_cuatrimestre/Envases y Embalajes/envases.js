/* =========================================================
   ENVASES Y EMBALAJES · Plan 2025 · ECONET
   -----------------------------------------------------------
   CÓMO EDITAR LOS ENLACES (para la cátedra):
   1) Grabaciones de clase: ya están cargadas con los enlaces
      de Google Drive originales del curso. Para reemplazar
      alguna, editá el campo "recordings" de la clase.
   2) PDF / PPTX: buscá el texto exacto
         "PEGAR-ENLACE-DE-GOOGLE-DRIVE-AQUI"
      en este archivo y reemplazalo por el enlace de Drive
      (compartido como "Cualquiera con el enlace puede ver").
      El botón pasa de ámbar punteado a sólido automáticamente.
   3) Para agregar una clase nueva, copiá un objeto del array
      CLASES y completá sus campos.
   ========================================================= */

const PLACEHOLDER = "PEGAR-ENLACE-DE-GOOGLE-DRIVE-AQUI";

/* ---------------------- ICONOS SVG ---------------------- */
const ICON = {
  check: `<svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" stroke="none"/></svg>`,
  survey: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 11l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2"/></svg>`,
  pdf: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v13m0 0-4-4m4 4 4-4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  ppt: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  form: `<svg viewBox="0 0 24 24" fill="none"><path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="2"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 3v5h5" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

/* ---------------------- DATOS: CLASES ---------------------- */
const CLASES = [
  {
    unit: "Unidad 1 y 2",
    tagKey: "u1-2",
    title: "Envase — Concepto, evolución, tipos y funciones",
    date: "17 mar 2026",
    topics: [
      "UNIDAD 1: ENVASE — concepto, evolución, tipos y funciones",
      "UNIDAD 2: EMBALAJE — concepto, evolución, tipos y función",
    ],
    note: "Resumen: PPT explicado en clase.",
    recordings: [
      { label: "Grabación 1", url: "https://drive.google.com/file/d/11zHuWNQ-Dub6QJNN82kHQIoPyxigAAd3/view?usp=drive_web" },
      { label: "Grabación 2", url: "https://drive.google.com/file/d/1LCr99MTShnARYEf_ZTM0jl3Ud9ypVpNk/view?usp=drive_web" },
    ],
    survey: "https://forms.gle/NgrRQSR9HJdargx2A",
    files: [
      { label: "Unidad_1-2_Resumen.pdf", type: "pdf", url: PLACEHOLDER },
    ],
  },
  {
    unit: "Unidad 1 y 2",
    tagKey: "u1-2",
    title: "Envase y Embalaje — Guía de Trabajo Final",
    date: "31 mar 2026",
    topics: [
      "UNIDAD 1: ENVASE — concepto, evolución, tipos y funciones",
      "UNIDAD 2: EMBALAJE — concepto, evolución, tipos y función",
    ],
    note: "Guía de Trabajo Final: documento adjunto.",
    recordings: [
      { label: "Grabación", url: "https://drive.google.com/file/d/1UVlnaZM3-A3jXLayCPv8IqErgMcpwe4k/view?usp=sharing" },
    ],
    survey: null,
    extraLinks: [
      { label: "Formulario: conformación de grupos", url: "https://forms.gle/wTzfvGR4mwruRhC18" },
    ],
    files: [
      { label: "Guía de Trabajo Final.pdf", type: "pdf", url: PLACEHOLDER },
    ],
  },
  {
    unit: "Unidad 3",
    tagKey: "u3",
    title: "Materiales y tecnologías de envase y embalaje",
    date: "17 mar 2026",
    topics: [
      "UNIDAD 3: materiales — madera, vidrio, metal, papel y cartón, plástico",
      "Actualidad y tendencias en catálogo de materiales",
      "Tecnologías de conformación",
    ],
    note: "Resumen: PPT explicado en clase.",
    recordings: [
      { label: "Grabación 1", url: "https://drive.google.com/file/d/1SkiwSCu4Gcq7nO_hMlSwC5QlpZY4IidN/view?usp=drive_link" },
      { label: "Grabación 2", url: "https://drive.google.com/file/d/1XNPgDygjAXhnv5eWMlDcJogsw2JRxLOU/view?usp=drive_link" },
    ],
    survey: "https://forms.gle/EwKxDKDSou6dy2Ux5",
    files: [
      { label: "1. Materiales - Envase, Embalaje y Manejo de Materiales.pdf", type: "pdf", url: PLACEHOLDER },
    ],
  },
  {
    unit: "Unidad 4",
    tagKey: "u4",
    title: "Ley de Etiquetado Frontal (Ley 27.642)",
    date: "14 abr 2026",
    topics: [
      "Ley de Etiquetado Frontal",
      "Promoción de la alimentación saludable — Ley 27.642",
    ],
    note: "Resumen: PPT explicado en clase.",
    recordings: [
      { label: "Grabación", url: "https://drive.google.com/file/d/1Psp_zjEr35Y-wu9GAEJ2jVaCT12aoz3f/view?usp=drive_link" },
    ],
    survey: "https://forms.gle/2Ti1BnWrbXkDFhLg9",
    files: [
      { label: "1. Etiquetado Frontal - Envase, Embalaje y Manejo de Materiales.pptx", type: "ppt", url: PLACEHOLDER },
    ],
  },
  {
    unit: "Unidad 5",
    tagKey: "u5",
    title: "Envases, embalajes y marketing nacional e internacional",
    date: "12 may 2026",
    topics: [
      "Envases y embalajes en el marketing nacional e internacional de productos",
    ],
    note: "Resumen: PPT explicado en clase.",
    recordings: [
      { label: "Grabación", url: "https://drive.google.com/file/d/1xPiLzWE4JrpIvAy6Wun1YAWQ2rLT7DLI/view?usp=drive_link" },
    ],
    survey: "https://forms.gle/eX5XMsDvjbNLzTY19",
    extraLinks: [
      { label: "Inscripción visita COFARMEN — 26/05/26, 14 a 16 h (Rodríguez Peña 4176, Maipú)", url: "https://forms.gle/TS5vr53FfBDLgggJA" },
    ],
    files: [
      { label: "2. Envases y Embalajes y Marketing Nacional e Internacional.pptx", type: "ppt", url: PLACEHOLDER },
    ],
  },
  {
    unit: "Repaso",
    tagKey: "repaso",
    title: "Clase de repaso general",
    date: "19 may 2026",
    topics: [
      "Repaso general de las unidades vistas hasta el momento",
    ],
    note: null,
    recordings: [
      { label: "Grabación", url: "https://drive.google.com/file/d/1O_EqSeb97EFbTBRakC3IaArvA1uAIk3e/view?usp=sharing" },
    ],
    survey: "https://forms.gle/bMdqocaJbSTvm6gz7",
    files: [],
  },
];

const FILTERS = [
  { key: "all", label: "Todas" },
  { key: "u1-2", label: "Unidad 1 y 2" },
  { key: "u3", label: "Unidad 3" },
  { key: "u4", label: "Unidad 4" },
  { key: "u5", label: "Unidad 5" },
  { key: "repaso", label: "Repaso" },
];

/* ---------------------- DATOS: EVALUACIONES ---------------------- */
const EVALS = [
  {
    title: "Cuestionario Unidad I y II",
    dates: "Abrió: 21 abr 2026, 12:00 · Cerró: 21 abr 2026, 23:59",
    tags: ["10 preguntas", "3 intentos", "60 min", "Mínimo 60 pts"],
  },
  {
    title: "Cuestionario Final",
    dates: "Abrió: 9 jun 2026, 09:00 · Cerró: 16 jun 2026, 20:00",
    tags: ["5 preguntas", "3 intentos", "60 min", "Mínimo 60 pts"],
  },
];

/* ---------------------- DATOS: BIBLIOGRAFÍA ---------------------- */
const ARTICULOS = [
  "Dialnet — Los envases y embalajes como fuente de ventajas competitivas.pdf",
  "El Envase — García.pdf",
  "Empaques y embalajes.pdf",
  "Envases V. C. — García.pdf",
  "Estudio de recomendaciones logísticas.pdf",
  "Fundamentos de envases y embalajes.pdf",
  "Mejora — García.pdf",
].map(name => ({ label: name, url: PLACEHOLDER }));

const MATERIAL_ESTUDIO = [
  { label: "Ballou, R. — Logística: administración de la cadena de suministro", url: "https://drive.google.com/file/d/1v_iQxvdDl6mFqkrkNsSlLfF4TQdjCwBn/view?usp=sharing" },
  { label: "Giovannetti", url: "https://drive.google.com/file/d/1RSYei42f4NR27K-UlzHRZxImDCpXXRhd/view?usp=sharing" },
  { label: "Pau Cos y Navascués", url: "https://drive.google.com/file/d/1SlMZfxwf96cF_lxkuoGrHTTt2R3lA1Tc/view?usp=sharing" },
];

const RESUMENES = [
  { label: "Resúmenes Unidad I a VI (carpeta completa)", url: PLACEHOLDER },
];

/* =========================================================
   RENDER: CLASES
   ========================================================= */
function fileIcon(type){
  if (type === "ppt") return ICON.ppt;
  return ICON.pdf;
}

function buildFileButton(file){
  const isPending = !file.url || file.url === PLACEHOLDER;
  return `
    <a class="btn-pdf"
       href="${isPending ? "#" : file.url}"
       target="_blank" rel="noopener"
       data-filename="${file.label}"
       ${isPending ? 'data-pending="true"' : ""}>
      ${fileIcon(file.type)}
      <span>${file.type === "ppt" ? "Descargar PPTX" : "Descargar PDF"}</span>
    </a>`;
}

function renderClasesGrid(list){
  const grid = document.getElementById("clasesGrid");
  const empty = document.getElementById("emptyState");

  if (!list.length){
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  grid.innerHTML = list.map(c => `
    <article class="class-card" data-tag="${c.tagKey}">
      <div class="class-card__tape" aria-hidden="true"></div>
      <div class="class-card__head">
        <div>
          <div class="class-card__unit">${c.unit}</div>
          <h3>${c.title}</h3>
        </div>
        <span class="class-card__date">${c.date}</span>
      </div>
      <div class="class-card__perf"></div>
      <div class="class-card__body">
        <ul class="class-card__topics">
          ${c.topics.map(t => `<li>${ICON.check}<span>${t}</span></li>`).join("")}
        </ul>

        ${c.note ? `<p class="class-card__note">${c.note}</p>` : ""}

        ${(c.extraLinks || []).map(l => `<p class="class-card__note"><a href="${l.url}" target="_blank" rel="noopener" style="text-decoration:underline;">${l.label}</a></p>`).join("")}

        <div class="class-card__actions">
          ${c.recordings.map(r => `
            <a class="btn-sm btn-video" href="${r.url}" target="_blank" rel="noopener">
              ${ICON.play}<span>${r.label}</span>
            </a>`).join("")}

          ${c.survey ? `
            <a class="btn-sm btn-survey" href="${c.survey}" target="_blank" rel="noopener">
              ${ICON.survey}<span>Encuesta de clase</span>
            </a>` : ""}

          ${c.files.map(buildFileButton).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderChips(){
  const row = document.getElementById("chipsRow");
  row.innerHTML = FILTERS.map(f => `
    <button class="chip ${f.key === "all" ? "is-active" : ""}" data-filter="${f.key}">${f.label}</button>
  `).join("");
}

/* =========================================================
   RENDER: EVALUACIONES
   ========================================================= */
function renderEvals(){
  const grid = document.getElementById("evalsGrid");
  grid.innerHTML = EVALS.map(e => `
    <article class="eval-card">
      <div class="eval-card__icon">${ICON.survey}</div>
      <h3>${e.title}</h3>
      <div class="eval-card__dates">${ICON.clock.replace('width="', 'style="width:12px;height:12px;vertical-align:-2px" width="')} ${e.dates}</div>
      <div class="eval-card__tags">
        ${e.tags.map(t => `<span>${t}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

/* =========================================================
   RENDER: BIBLIOGRAFÍA
   ========================================================= */
function buildBiblioItem(item){
  const isPending = !item.url || item.url === PLACEHOLDER;
  return `
    <a class="biblio-item" href="${isPending ? "#" : item.url}" target="_blank" rel="noopener" ${isPending ? 'data-pending="true"' : ""}>
      <span class="biblio-item__icon">${ICON.doc}</span>
      <span class="biblio-item__text">
        <strong>${item.label}</strong>
        <span>Abrir en Google Drive</span>
      </span>
    </a>`;
}

function renderBiblio(){
  document.getElementById("articulosList").innerHTML = ARTICULOS.map(buildBiblioItem).join("");
  document.getElementById("materialList").innerHTML = MATERIAL_ESTUDIO.map(buildBiblioItem).join("");
  document.getElementById("resumenesList").innerHTML = RESUMENES.map(buildBiblioItem).join("");
}

/* =========================================================
   FILTER + SEARCH LOGIC
   ========================================================= */
let activeFilter = "all";
let searchTerm = "";

function applyFilters(){
  const filtered = CLASES.filter(c => {
    const matchesFilter = activeFilter === "all" || c.tagKey === activeFilter;
    const haystack = (c.title + " " + c.unit + " " + c.date + " " + c.topics.join(" ")).toLowerCase();
    const matchesSearch = haystack.includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  renderClasesGrid(filtered);
}

function initToolbar(){
  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchTerm = e.target.value.trim();
    applyFilters();
  });

  document.getElementById("chipsRow").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeFilter = chip.dataset.filter;
    applyFilters();
  });
}

/* =========================================================
   PENDING-LINK CLICK GUARD (toast instead of dead link)
   ========================================================= */
function initPendingGuard(){
  document.addEventListener("click", (e) => {
    const el = e.target.closest('[data-pending="true"]');
    if (!el) return;
    e.preventDefault();
    showToast("Este documento todavía no tiene enlace de Google Drive cargado.");
  });
}

/* =========================================================
   COPY-TO-CLIPBOARD LINKS
   ========================================================= */
function initCopyLinks(){
  document.querySelectorAll(".link-copy").forEach(link => {
    link.addEventListener("click", (e) => {
      const text = link.dataset.copy;
      if (text && navigator.clipboard){
        navigator.clipboard.writeText(text).then(() => {
          showToast("Enlace copiado: " + text);
        }).catch(() => {});
      }
    });
  });
}

/* =========================================================
   TOAST
   ========================================================= */
let toastTimer = null;
function showToast(msg){
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

/* =========================================================
   NAV: burger + scroll progress + sticky shadow
   ========================================================= */
function initNav(){
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", isOpen);
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

function initScrollProgress(){
  const bar = document.getElementById("scrollProgress");
  const toTop = document.getElementById("toTop");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";

    toTop.classList.toggle("is-visible", scrollTop > 500);
  }, { passive: true });

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   HERO STAT COUNTERS
   ========================================================= */
function animateCounters(){
  const nums = document.querySelectorAll(".hero__ticketnum");
  const duration = 900;

  nums.forEach(el => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const start = performance.now();

    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderChips();
  renderClasesGrid(CLASES);
  renderEvals();
  renderBiblio();

  initToolbar();
  initPendingGuard();
  initCopyLinks();
  initNav();
  initScrollProgress();
  animateCounters();
});
