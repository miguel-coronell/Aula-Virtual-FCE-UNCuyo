/* =========================================================
   AUTH GUARD (OPCIONAL)
   -----------------------------------------------------------
   Incluí este script en cualquier página que quieras proteger
   (por ejemplo index.html o envases.html) agregando, justo
   antes de </body>, junto a los demás <script>:

     <script type="module" src="firebase-config.js"></script>
     <script type="module" src="auth-guard.js"></script>

   Qué hace:
   - Si no hay sesión iniciada, redirige automáticamente a
     login.html.
   - Si hay sesión, busca un elemento con id="userBadge" en la
     página (si existe) y le muestra el nombre/foto del usuario
     más un botón para cerrar sesión. Es opcional: si el
     elemento no existe, el guard igual funciona.

   Para usar el badge de usuario, agregá esto en el <nav> de
   tu página (podés copiar el bloque tal cual):

     <div id="userBadge" class="user-badge" hidden>
       <img id="userBadgeAvatar" alt="">
       <span id="userBadgeName"></span>
       <button id="userBadgeSignOut" type="button">Salir</button>
     </div>
   ========================================================= */

import { firebaseConfig } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const LOGIN_PAGE = "login.html";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = LOGIN_PAGE;
    return;
  }

  const badge = document.getElementById("userBadge");
  if (!badge) return;

  const avatar = document.getElementById("userBadgeAvatar");
  const name = document.getElementById("userBadgeName");
  const signOutBtn = document.getElementById("userBadgeSignOut");

  if (avatar) avatar.src = user.photoURL || "";
  if (name) name.textContent = user.displayName || user.email || "Usuario";
  badge.hidden = false;

  if (signOutBtn) {
    signOutBtn.addEventListener("click", async () => {
      await signOut(auth);
      window.location.href = LOGIN_PAGE;
    });
  }
});
