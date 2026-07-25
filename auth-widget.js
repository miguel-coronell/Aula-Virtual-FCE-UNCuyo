/* =========================================================
   WIDGET DE SESIÓN — para usar en cualquier página del sitio
   -----------------------------------------------------------
   Incluí en el <head> de la página: auth-widget.css
   Incluí antes de </body>, en este orden:
     <script type="module" src="firebase-config.js"></script>
     <script type="module" src="auth-widget.js"></script>
   Y en el nav, agregá un contenedor vacío:
     <div class="nav__auth" id="navAuth"></div>
   Este script lo completa solo según el estado de sesión.

   NOTA: esta página se considera PROTEGIDA. Si no hay sesión
   iniciada, se redirige automáticamente a login.html en vez
   de mostrar el contenido. Para que no se vea un "flash" del
   contenido antes de redirigir, el <html> de la página debe
   tener la clase "auth-checking" (ver index.html), que este
   script quita recién cuando confirma que hay usuario.
   ========================================================= */

import { firebaseConfig } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const LOGIN_PAGE = "login.html";
const navAuth = document.getElementById("navAuth");

function revealPage() {
  document.documentElement.classList.remove("auth-checking");
}

const configIsPlaceholder = Object.values(firebaseConfig).some(
  (v) => typeof v === "string" && v.includes("PEGAR")
);

if (configIsPlaceholder) {
  // Firebase todavía no está configurado: no podemos exigir login,
  // así que mostramos el sitio igual para no dejar a nadie afuera.
  if (navAuth) renderSignedOut();
  revealPage();
} else {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = LOGIN_PAGE;
      return;
    }

    if (navAuth) renderSignedIn(user, auth);
    revealPage();
  });
}

function renderSignedOut() {
  navAuth.innerHTML = `
    <a href="login.html" class="btn btn--ghost nav__login">
      <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Iniciar sesión
    </a>`;
}

function renderSignedIn(user, auth) {
  const photo = user.photoURL || "";
  const name = (user.displayName || user.email || "Usuario").split(" ")[0];

  navAuth.innerHTML = `
    <div class="nav__user">
      ${photo ? `<img class="nav__avatar" src="${photo}" alt="${name}">` : ""}
      <span class="nav__username">${name}</span>
      <button class="nav__logout" id="navLogoutBtn" type="button" aria-label="Cerrar sesión">
        <svg viewBox="0 0 24 24" fill="none" width="15" height="15"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>`;

  document.getElementById("navLogoutBtn").addEventListener("click", async () => {
    await signOut(auth);
  });
}
