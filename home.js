/* =========================================================
   LICENCIATURA EN LOGÍSTICA · Plan 2025 · ECONET
   -----------------------------------------------------------
   CÓMO CONECTAR CADA MATERIA (para las cátedras):
   Buscá el código de la materia dentro del array MATERIAS
   y reemplazá su campo "url" (que dice
   "PEGAR-ENLACE-DEL-AULA-VIRTUAL-AQUI") por el enlace real
   del aula virtual, sitio o carpeta de Drive de esa cátedra.
   La materia 2273 (Envases y Embalajes) ya está conectada
   como ejemplo, apuntando a envases.html.
   ========================================================= */

const PLACEHOLDER = "PEGAR-ENLACE-DEL-AULA-VIRTUAL-AQUI";

const ICON = {
  credit: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M9 12h6M12 9v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

/* ---------------------- DATOS: 40 MATERIAS ----------------------
   cursar / aprobar: "-" si no tiene correlativas
------------------------------------------------------------------- */
const MATERIAS = [
  // ---------------- AÑO 1 · CUATRIMESTRE 1 ----------------
  { code:"2170", name:"Introducción a la Logística", year:1, semester:1, troncal:true,  credits:6,  hours:60, cursar:"-", aprobar:"-", url: PLACEHOLDER },
  { code:"2171", name:"Administración", year:1, semester:1, troncal:false, credits:5, hours:60, cursar:"-", aprobar:"-", url: PLACEHOLDER },
  { code:"2172", name:"Cálculo en Entornos Logísticos", year:1, semester:1, troncal:false, credits:5, hours:45, cursar:"-", aprobar:"-", url: PLACEHOLDER },
  { code:"2173", name:"Comunicación Estratégica y Digital", year:1, semester:1, troncal:false, credits:5, hours:60, cursar:"-", aprobar:"-", url: PLACEHOLDER },
  { code:"2174", name:"Fundamentos Contables en Entorno Digital", year:1, semester:1, troncal:false, credits:4, hours:45, cursar:"-", aprobar:"-", url: PLACEHOLDER },

  // ---------------- AÑO 1 · CUATRIMESTRE 2 ----------------
  { code:"2175", name:"Logística I — Cadena de Suministro", year:1, semester:2, troncal:true, credits:6, hours:50, cursar:"170", aprobar:"170", url: PLACEHOLDER },
  { code:"2176", name:"Álgebra en Entornos Logísticos", year:1, semester:2, troncal:false, credits:5, hours:45, cursar:"172", aprobar:"172", url: PLACEHOLDER },
  { code:"2177", name:"Fundamentos de Economía", year:1, semester:2, troncal:false, credits:7, hours:70, cursar:"173", aprobar:"173", url: PLACEHOLDER },
  { code:"2178", name:"Fundamentos del Derecho Público y Privado", year:1, semester:2, troncal:false, credits:4, hours:45, cursar:"173", aprobar:"173", url: PLACEHOLDER },
  { code:"2179", name:"Portugués I", year:1, semester:2, troncal:false, credits:3, hours:45, cursar:"-", aprobar:"-", url: PLACEHOLDER },

  // ---------------- AÑO 2 · CUATRIMESTRE 1 ----------------
  { code:"2270", name:"Logística II — Demanda y Gestión de Compras", year:2, semester:1, troncal:true, credits:7, hours:50, cursar:"-", aprobar:"171-175", url: PLACEHOLDER },
  { code:"2271", name:"Estadística Aplicada a la Logística", year:2, semester:1, troncal:false, credits:6, hours:60, cursar:"172", aprobar:"172", url: PLACEHOLDER },
  { code:"2272", name:"Física Aplicada a la Logística", year:2, semester:1, troncal:false, credits:5, hours:60, cursar:"176", aprobar:"176", url: PLACEHOLDER },
  { code:"2273", name:"Envases y Embalajes", year:2, semester:1, troncal:false, credits:5, hours:60, cursar:"177", aprobar:"175-177", url:"envases.html" },
  { code:"2274", name:"Portugués II", year:2, semester:1, troncal:false, credits:3, hours:50, cursar:"179", aprobar:"179", url: PLACEHOLDER },

  // ---------------- AÑO 2 · CUATRIMESTRE 2 ----------------
  { code:"2275", name:"Logística III — Operación de Almacenes", year:2, semester:2, troncal:true, credits:8, hours:60, cursar:"270", aprobar:"270-272-273", url: PLACEHOLDER },
  { code:"2276", name:"Administración de Operaciones", year:2, semester:2, troncal:false, credits:4, hours:50, cursar:"270", aprobar:"171", url: PLACEHOLDER },
  { code:"2277", name:"Comercialización", year:2, semester:2, troncal:false, credits:4, hours:60, cursar:"177", aprobar:"177", url: PLACEHOLDER },
  { code:"2278", name:"Gestión de Costos", year:2, semester:2, troncal:false, credits:4, hours:60, cursar:"270", aprobar:"174-270", url: PLACEHOLDER },
  { code:"2279", name:"Investigación Operativa Aplicada a la Logística", year:2, semester:2, troncal:false, credits:4, hours:60, cursar:"176-271", aprobar:"176-271", url: PLACEHOLDER },

  // ---------------- AÑO 3 · CUATRIMESTRE 1 ----------------
  { code:"2370", name:"Logística IV — Transporte", year:3, semester:1, troncal:true, credits:11, hours:90, cursar:"273-275-278", aprobar:"273-275-278", url: PLACEHOLDER },
  { code:"2371", name:"Geografía e Integración Territorial", year:3, semester:1, troncal:false, credits:2, hours:40, cursar:"276", aprobar:"276", url: PLACEHOLDER },
  { code:"2372", name:"Inglés I", year:3, semester:1, troncal:false, credits:2, hours:40, cursar:"-", aprobar:"-", url: PLACEHOLDER },
  { code:"2373", name:"Laboratorio de Sistemas Logísticos", year:3, semester:1, troncal:false, credits:4, hours:70, cursar:"175-271-277", aprobar:"175-277", url: PLACEHOLDER },
  { code:"2374", name:"Práctica Profesional I — Almacenes", year:3, semester:1, troncal:false, credits:4, hours:70, cursar:"1er y 2do año completo", aprobar:"370-371-372-373", url: PLACEHOLDER },

  // ---------------- AÑO 3 · CUATRIMESTRE 2 ----------------
  { code:"2375", name:"Logística V — Distribución", year:3, semester:2, troncal:true, credits:14, hours:80, cursar:"-", aprobar:"370", url: PLACEHOLDER },
  { code:"2376", name:"Comercio Internacional", year:3, semester:2, troncal:false, credits:8, hours:60, cursar:"277-370", aprobar:"370", url: PLACEHOLDER },
  { code:"2377", name:"Derecho del Transporte", year:3, semester:2, troncal:false, credits:8, hours:60, cursar:"178-273-370", aprobar:"178-370", url: PLACEHOLDER },
  { code:"2378", name:"Inglés II", year:3, semester:2, troncal:false, credits:7, hours:70, cursar:"372", aprobar:"372", url: PLACEHOLDER },
  { code:"2379", name:"Espacio Electivo", year:3, semester:2, troncal:false, credits:8, hours:60, cursar:"-", aprobar:"-", url: PLACEHOLDER },

  // ---------------- AÑO 4 · CUATRIMESTRE 1 ----------------
  { code:"2470", name:"Logística VI — Gestión de Operaciones", year:4, semester:1, troncal:true, credits:8, hours:60, cursar:"-", aprobar:"276-375", url: PLACEHOLDER },
  { code:"2471", name:"Administración Financiera", year:4, semester:1, troncal:false, credits:6, hours:60, cursar:"278", aprobar:"278", url: PLACEHOLDER },
  { code:"2472", name:"Economía Regional", year:4, semester:1, troncal:false, credits:5, hours:60, cursar:"177-371", aprobar:"177-371", url: PLACEHOLDER },
  { code:"2473", name:"Formulación de Proyectos", year:4, semester:1, troncal:false, credits:8, hours:60, cursar:"276-278-377", aprobar:"276-278-279", url: PLACEHOLDER },
  { code:"2474", name:"Sistemas de Información Geográfica", year:4, semester:1, troncal:false, credits:7, hours:60, cursar:"371-373", aprobar:"371-373", url: PLACEHOLDER },

  // ---------------- AÑO 4 · CUATRIMESTRE 2 ----------------
  { code:"2475", name:"Proyecto Integrador Logístico", year:4, semester:2, troncal:false, credits:10, hours:60, cursar:"-", aprobar:"Todas las materias", url: PLACEHOLDER },
  { code:"2476", name:"Ambiente y Sostenibilidad", year:4, semester:2, troncal:false, credits:8, hours:60, cursar:"474", aprobar:"375", url: PLACEHOLDER },
  { code:"2477", name:"Gestión de las Personas", year:4, semester:2, troncal:false, credits:6, hours:60, cursar:"171-470", aprobar:"171-470", url: PLACEHOLDER },
  { code:"2478", name:"Práctica Profesional II", year:4, semester:2, troncal:false, credits:13, hours:80, cursar:"470", aprobar:"370-374-376", url: PLACEHOLDER },
  { code:"2479", name:"Régimen Impositivo", year:4, semester:2, troncal:false, credits:4, hours:45, cursar:"473", aprobar:"471", url: PLACEHOLDER },
];

const YEAR_FILTERS = [
  { key: "all", label: "Todas" },
  { key: "1", label: "1° Año" },
  { key: "2", label: "2° Año" },
  { key: "3", label: "3° Año" },
  { key: "4", label: "4° Año" },
];

const REGIMEN = [
  { year:"2° Año", text:"Haber aprobado 6 asignaturas de 1er año, incluidas las troncales (Introducción a la Logística y Logística I)." },
  { year:"3° Año", text:"Haber completado 1er año y 6 asignaturas de 2do año, incluidas las troncales (Logística II — Demanda y Gestión de Compras, y Logística III — Operación de Almacenes)." },
  { year:"4° Año", text:"Haber completado 1er y 2do año, y 6 asignaturas de 3er año, incluidas las troncales (Logística IV — Transporte, y Logística V — Distribución)." },
];

/* =========================================================
   STATE
   ========================================================= */
let activeYear = "all";
let onlyTroncal = false;
let searchTerm = "";

/* =========================================================
   RENDER: SUBJECT CARD
   ========================================================= */
function buildSubjectCard(m){
  const isPending = !m.url || m.url === PLACEHOLDER;
  return `
    <article class="subject-card ${m.troncal ? "is-troncal" : ""}">
      <div class="subject-card__top">
        <span class="subject-card__code">#${m.code}</span>
        ${m.troncal ? '<span class="subject-card__troncal">TRONCAL</span>' : ""}
      </div>
      <h3 class="subject-card__name">${m.name}</h3>
      <div class="subject-card__meta">
        <span>${ICON.credit} ${m.credits} créditos</span>
        <span>${ICON.clock} ${m.hours} hs</span>
      </div>
      <div class="subject-card__correl">
        <span><b>Para cursar:</b> ${m.cursar === "-" ? "sin correlativas" : m.cursar}</span>
        <span><b>Para aprobar:</b> ${m.aprobar === "-" ? "sin correlativas" : m.aprobar}</span>
      </div>
      <a class="subject-card__cta"
         href="${isPending ? "#" : m.url}"
         ${isPending ? 'data-pending="true"' : (m.url.startsWith("http") ? 'target="_blank" rel="noopener"' : "")}>
        <span>Ir a la materia</span>
        ${ICON.arrow}
      </a>
    </article>`;
}

/* =========================================================
   RENDER: YEAR SECTIONS (grouped)
   ========================================================= */
function renderYearSections(list){
  const wrap = document.getElementById("yearSections");
  const empty = document.getElementById("emptyState");

  if (!list.length){
    wrap.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  const years = [1, 2, 3, 4];
  let html = "";

  years.forEach(y => {
    const subjectsInYear = list.filter(m => m.year === y);
    if (!subjectsInYear.length) return;

    const totalCredits = MATERIAS.filter(m => m.year === y).reduce((s, m) => s + m.credits, 0);

    html += `
      <div class="year-block">
        <div class="year-block__head">
          <span class="year-block__badge">${y}°</span>
          <div>
            <div class="year-block__title">Año ${y}</div>
            <div class="year-block__sub">${totalCredits} créditos totales · 10 materias</div>
          </div>
          <div class="year-block__line"></div>
        </div>
        ${[1, 2].map(s => {
          const subs = subjectsInYear.filter(m => m.semester === s);
          if (!subs.length) return "";
          return `
            <div class="semester-block">
              <span class="semester-block__title">Cuatrimestre ${s}</span>
              <div class="subject-grid">
                ${subs.map(buildSubjectCard).join("")}
              </div>
            </div>`;
        }).join("")}
      </div>`;
  });

  wrap.innerHTML = html;
}

function applyFilters(){
  const filtered = MATERIAS.filter(m => {
    const matchesYear = activeYear === "all" || String(m.year) === activeYear;
    const matchesTroncal = !onlyTroncal || m.troncal;
    const haystack = (m.code + " " + m.name).toLowerCase();
    const matchesSearch = haystack.includes(searchTerm.toLowerCase());
    return matchesYear && matchesTroncal && matchesSearch;
  });
  renderYearSections(filtered);
}

function renderYearChips(){
  const row = document.getElementById("yearChips");
  row.innerHTML = YEAR_FILTERS.map(f => `
    <button class="chip ${f.key === "all" ? "is-active" : ""}" data-filter="${f.key}">${f.label}</button>
  `).join("");
}

function initToolbar(){
  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchTerm = e.target.value.trim();
    applyFilters();
  });

  document.getElementById("yearChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll("#yearChips .chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeYear = chip.dataset.filter;
    applyFilters();
  });

  const toggle = document.getElementById("troncalToggle");
  toggle.addEventListener("click", () => {
    onlyTroncal = !onlyTroncal;
    toggle.dataset.active = onlyTroncal;
    applyFilters();
  });
}

/* =========================================================
   RENDER: REGIMEN
   ========================================================= */
function renderRegimen(){
  document.getElementById("regimenGrid").innerHTML = REGIMEN.map(r => `
    <article class="regimen-card">
      <div class="regimen-card__year">${r.year}</div>
      <p>${r.text}</p>
    </article>
  `).join("");
}

/* =========================================================
   PENDING-LINK CLICK GUARD
   ========================================================= */
function initPendingGuard(){
  document.addEventListener("click", (e) => {
    const el = e.target.closest('[data-pending="true"]');
    if (!el) return;
    e.preventDefault();
    showToast("Esta materia todavía no tiene aula virtual conectada.");
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
   NAV
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
  renderYearChips();
  renderYearSections(MATERIAS);
  renderRegimen();

  initToolbar();
  initPendingGuard();
  initNav();
  initScrollProgress();
  animateCounters();
});
