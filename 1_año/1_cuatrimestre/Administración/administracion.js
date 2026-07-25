/* =========================================================
   ADMINISTRACIÓN — EN CONSTRUCCIÓN
   Nav, scroll, cerrar sesión (Firebase) y chatbot guiado.
   La configuración de Firebase se edita en firebase-config.js
   ========================================================= */

import { firebaseConfig } from "../../../firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* ---------------------- FIREBASE ---------------------- */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* ---------------------- NAV (burger) ---------------------- */
function initNav(){
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  if (!burger || !links) return;

  burger.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", isOpen);
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------- SCROLL PROGRESS + TO TOP ---------------------- */
function initScrollProgress(){
  const bar = document.getElementById("scrollProgress");
  const toTop = document.getElementById("toTop");
  if (!bar || !toTop) return;

  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + "%";
      toTop.classList.toggle("is-visible", scrollTop > 500);
    },
    { passive: true }
  );

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------------------- TOAST ---------------------- */
let toastTimer = null;
function showToast(msg){
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

/* ---------------------- CERRAR SESIÓN ---------------------- */
function initLogout(){
  const logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) return;

  logoutBtn.addEventListener("click", async () => {
    logoutBtn.disabled = true;
    try {
      await signOut(auth);
      window.location.href = "../../../login.html";
    } catch (err) {
      logoutBtn.disabled = false;
      showToast("No se pudo cerrar la sesión. Probá de nuevo.");
    }
  });
}

/* =========================================================
   CHATBOT
   ========================================================= */
const MENU_ROOT = [
  { id: "aulas", label: "📚 ¿Qué aulas están disponibles?" },
  { id: "cuando", label: "🗓️ ¿Cuándo estará lista la administración?" },
  { id: "plan", label: "📖 Ver el plan de estudios completo" },
  { id: "contacto", label: "✉️ Contactar al equipo" },
];

const RESPONSES = {
  aulas: {
    text: 'Por ahora hay <strong>2 aulas virtuales</strong> conectadas y disponibles: <strong>2177 · Fundamentos de Economía</strong> y <strong>2273 · Envases y Embalajes</strong>. El resto de las materias todavía no tiene aula cargada — las vamos sumando a medida que cada cátedra nos comparte el enlace.',
  },
  cuando: {
    text: "Todavía no tenemos una fecha exacta para el panel de administración — lo estamos armando de a poco. Mientras tanto podés seguir usando el resto del aula virtual sin problema.",
  },
  plan: {
    text: "Te llevo al plan de estudios completo con las 40 materias organizadas por año 👇",
    redirect: "../../../index.html#materias",
  },
  contacto: {
    text: 'Podés escribirnos a <strong>licenciatura-logistica@fce.uncu.edu.ar</strong>, llamarnos al <strong>+54 9 261 679 6043</strong> o mandarnos un WhatsApp directo desde el botón del menú.',
  },
};

const KEYWORD_RULES = [
  { test: /aula|disponib|conectad|cátedra|catedra/i, id: "aulas" },
  { test: /cuando|fecha|list[oa]|termin|falta/i, id: "cuando" },
  { test: /plan|materia|carrera|cuatrimestre/i, id: "plan" },
  { test: /contact|mail|correo|whatsapp|telefono|teléfono|escrib/i, id: "contacto" },
];

let chatStarted = false;

function initChatbot(){
  const launcher = document.getElementById("chatbotLauncher");
  const closeBtn = document.getElementById("chatbotClose");
  const win = document.getElementById("chatbotWindow");
  const messages = document.getElementById("chatbotMessages");
  const form = document.getElementById("chatbotForm");
  const input = document.getElementById("chatbotInput");

  if (!launcher || !win || !messages || !form || !input) return;

  function openChat(){
    win.classList.add("is-open");
    launcher.setAttribute("aria-expanded", "true");
    if (!chatStarted){
      chatStarted = true;
      greet();
    }
    input.focus();
  }

  function closeChat(){
    win.classList.remove("is-open");
    launcher.setAttribute("aria-expanded", "false");
  }

  launcher.addEventListener("click", () => {
    win.classList.contains("is-open") ? closeChat() : openChat();
  });
  closeBtn.addEventListener("click", closeChat);

  function scrollToBottom(){
    messages.scrollTop = messages.scrollHeight;
  }

  function addUserBubble(text){
    const el = document.createElement("div");
    el.className = "chatbot__bubble chatbot__bubble--user";
    el.textContent = text;
    messages.appendChild(el);
    scrollToBottom();
  }

  function addBotBubble(html){
    const el = document.createElement("div");
    el.className = "chatbot__bubble chatbot__bubble--bot";
    el.innerHTML = html;
    messages.appendChild(el);
    scrollToBottom();
  }

  function addOptions(list){
    const wrap = document.createElement("div");
    wrap.className = "chatbot__options";
    list.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chatbot__chip";
      btn.textContent = opt.label;
      btn.addEventListener("click", () => handleOption(opt));
      wrap.appendChild(btn);
    });
    messages.appendChild(wrap);
    scrollToBottom();
  }

  function showTyping(){
    const el = document.createElement("div");
    el.className = "chatbot__typing";
    el.id = "chatbotTyping";
    el.innerHTML = "<span></span><span></span><span></span>";
    messages.appendChild(el);
    scrollToBottom();
    return el;
  }

  function respond(id, { silentUser } = {}){
    const data = RESPONSES[id];
    if (!data) return;
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      addBotBubble(data.text);
      if (data.redirect){
        setTimeout(() => { window.location.href = data.redirect; }, 900);
      }
      setTimeout(() => addOptions(MENU_ROOT), 250);
    }, 550);
  }

  function handleOption(opt){
    addUserBubble(opt.label.replace(/^[^\s]+\s/, ""));
    respond(opt.id);
  }

  function greet(){
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      addBotBubble("¡Hola! 👋 Soy el asistente del Aula Virtual. El panel de administración está en construcción, pero puedo ayudarte con esto:");
      addOptions(MENU_ROOT);
    }, 500);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addUserBubble(text);
    input.value = "";

    const match = KEYWORD_RULES.find((rule) => rule.test.test(text));
    if (match){
      respond(match.id);
    } else {
      const typing = showTyping();
      setTimeout(() => {
        typing.remove();
        addBotBubble("No entendí bien tu consulta 🤔 Elegí alguna de estas opciones:");
        addOptions(MENU_ROOT);
      }, 550);
    }
  });
}

/* ---------------------- INIT ---------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initScrollProgress();
  initLogout();
  initChatbot();
});
