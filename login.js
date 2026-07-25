/* =========================================================
   LOGIN — FIREBASE AUTH (Google + correo/contraseña)
   No hace falta tocar este archivo. Toda la configuración
   se edita en firebase-config.js
   ========================================================= */

import {
  firebaseConfig,
  ALLOWED_EMAIL_DOMAIN,
  REDIRECT_AFTER_LOGIN,
} from "./firebase-config.js";

/* Nota: la versión del SDK está fijada acá (10.12.2) porque los
   imports de JS deben usar una ruta literal, no una variable.
   Si necesitás otra versión, cambiala en las 2 líneas de abajo
   y también en FIREBASE_SDK_VERSION dentro de firebase-config.js
   (solo a modo de referencia). */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* ---------------------- INIT ---------------------- */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence).catch(() => {
  /* si falla, Firebase usa la persistencia por defecto */
});

/* ---------------------- DOM REFS ---------------------- */
const viewSignedOut = document.getElementById("viewSignedOut");
const viewSignedIn = document.getElementById("viewSignedIn");

const googleBtn = document.getElementById("googleSignInBtn");
const googleLabel = document.getElementById("googleBtnLabel");
const googleSpinner = document.getElementById("googleBtnSpinner");

const signOutBtn = document.getElementById("signOutBtn");
const errorBox = document.getElementById("loginError");
const successBox = document.getElementById("loginSuccess");

const continueBtn = document.getElementById("continueBtn");
continueBtn.href = REDIRECT_AFTER_LOGIN;

const userAvatar = document.getElementById("userAvatar");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

/* --- tabs / modo (iniciar sesión vs. crear cuenta) --- */
const tabs = document.querySelectorAll(".login-tab");
const formTitle = document.getElementById("formTitle");
const formSub = document.getElementById("formSub");
const confirmField = document.getElementById("confirmField");
const confirmInput = document.getElementById("confirmInput");
const emailSubmitLabel = document.getElementById("emailSubmitLabel");
const forgotBtn = document.getElementById("forgotBtn");

/* --- formulario de correo --- */
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const emailSubmitBtn = document.getElementById("emailSubmitBtn");
const emailSubmitSpinner = document.getElementById("emailSubmitSpinner");

let mode = "signin"; // "signin" | "signup"

/* ---------------------- CONFIG CHECK ----------------------
   Si todavía no se cargó firebaseConfig real, avisamos en
   pantalla en vez de fallar en silencio.
------------------------------------------------------------- */
const configIsPlaceholder = Object.values(firebaseConfig).some(
  (v) => typeof v === "string" && v.includes("PEGAR")
);

if (configIsPlaceholder) {
  showError(
    "Firebase todavía no está configurado. Completá firebase-config.js con los datos de tu proyecto."
  );
  disableForm(true);
}

/* ---------------------- TABS ---------------------- */
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    mode = tab.dataset.mode;
    tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
    hideMessages();

    if (mode === "signup") {
      formTitle.textContent = "Creá tu cuenta";
      formSub.textContent = "Registrate con Google o con tu correo institucional.";
      confirmField.hidden = false;
      confirmInput.required = true;
      emailSubmitLabel.textContent = "Crear cuenta";
      passwordInput.autocomplete = "new-password";
      forgotBtn.hidden = true;
    } else {
      formTitle.textContent = "Bienvenido/a de nuevo";
      formSub.textContent = "Accedé con tu cuenta de Google o con tu correo y contraseña.";
      confirmField.hidden = true;
      confirmInput.required = false;
      emailSubmitLabel.textContent = "Iniciar sesión";
      passwordInput.autocomplete = "current-password";
      forgotBtn.hidden = false;
    }
  });
});

/* ---------------------- SIGN IN CON GOOGLE ---------------------- */
googleBtn.addEventListener("click", async () => {
  if (configIsPlaceholder) return;
  setGoogleLoading(true);
  hideMessages();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!checkAllowedDomain(user.email)) {
      await signOut(auth);
      setGoogleLoading(false);
      return;
    }
    // onAuthStateChanged se encarga de actualizar la UI
  } catch (err) {
    setGoogleLoading(false);
    showError(friendlyError(err.code));
  }
});

/* ---------------------- FORMULARIO DE CORREO ---------------------- */
emailForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (configIsPlaceholder) return;
  hideMessages();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (mode === "signup" && password !== confirmInput.value) {
    showError("Las contraseñas no coinciden.");
    return;
  }

  setEmailLoading(true);

  try {
    if (mode === "signup") {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (!checkAllowedDomain(result.user.email)) {
        await signOut(auth);
        setEmailLoading(false);
        return;
      }
    } else {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (!checkAllowedDomain(result.user.email)) {
        await signOut(auth);
        setEmailLoading(false);
        return;
      }
    }
    // onAuthStateChanged se encarga de actualizar la UI
  } catch (err) {
    setEmailLoading(false);
    showError(friendlyError(err.code));
  }
});

/* ---------------------- OLVIDÉ MI CONTRASEÑA ---------------------- */
forgotBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  if (!email) {
    showError("Escribí tu correo arriba y volvé a tocar \"¿Olvidaste tu contraseña?\".");
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    showSuccess("Te enviamos un correo para restablecer tu contraseña.");
  } catch (err) {
    showError(friendlyError(err.code));
  }
});

/* ---------------------- SIGN OUT ---------------------- */
signOutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
  } catch (err) {
    showError("No se pudo cerrar la sesión. Probá de nuevo.");
  }
});

/* ---------------------- AUTH STATE ---------------------- */
onAuthStateChanged(auth, (user) => {
  setGoogleLoading(false);
  setEmailLoading(false);

  if (user) {
    // Ya hay sesión iniciada: vamos directo al aula virtual,
    // sin mostrar ninguna pantalla intermedia.
    window.location.href = REDIRECT_AFTER_LOGIN;
    return;
  }

  viewSignedOut.hidden = false;
  viewSignedIn.hidden = true;
});

/* ---------------------- HELPERS ---------------------- */
function checkAllowedDomain(email) {
  if (ALLOWED_EMAIL_DOMAIN && !(email || "").endsWith("@" + ALLOWED_EMAIL_DOMAIN)) {
    showError(`Usá tu cuenta institucional (@${ALLOWED_EMAIL_DOMAIN}) para ingresar.`);
    return false;
  }
  return true;
}

function setGoogleLoading(isLoading) {
  googleBtn.disabled = isLoading;
  googleLabel.textContent = isLoading ? "Conectando…" : "Continuar con Google";
  googleSpinner.hidden = !isLoading;
}

function setEmailLoading(isLoading) {
  emailSubmitBtn.disabled = isLoading;
  emailSubmitSpinner.hidden = !isLoading;
}

function disableForm(disabled) {
  googleBtn.disabled = disabled;
  emailSubmitBtn.disabled = disabled;
  googleBtn.style.opacity = disabled ? ".55" : "";
  emailSubmitBtn.style.opacity = disabled ? ".55" : "";
}

function showError(msg) {
  successBox.hidden = true;
  errorBox.textContent = msg;
  errorBox.hidden = false;
}

function showSuccess(msg) {
  errorBox.hidden = true;
  successBox.textContent = msg;
  successBox.hidden = false;
}

function hideMessages() {
  errorBox.hidden = true;
  successBox.hidden = true;
}

function friendlyError(code) {
  const map = {
    "auth/popup-closed-by-user": "Cerraste la ventana de Google antes de terminar. Intentá de nuevo.",
    "auth/popup-blocked": "El navegador bloqueó la ventana emergente. Habilitá los pop-ups para este sitio.",
    "auth/cancelled-popup-request": "Ya había una ventana de inicio de sesión abierta.",
    "auth/network-request-failed": "Falló la conexión. Revisá tu internet e intentá de nuevo.",
    "auth/unauthorized-domain": "Este dominio no está autorizado en Firebase (Authentication → Settings → Authorized domains).",
    "auth/email-already-in-use": "Ya existe una cuenta con ese correo. Probá iniciar sesión.",
    "auth/invalid-email": "El correo no es válido.",
    "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
    "auth/user-not-found": "No encontramos una cuenta con ese correo.",
    "auth/wrong-password": "La contraseña es incorrecta.",
    "auth/invalid-credential": "Correo o contraseña incorrectos.",
    "auth/missing-password": "Ingresá tu contraseña.",
    "auth/too-many-requests": "Demasiados intentos. Esperá un momento y volvé a intentar.",
  };
  return map[code] || "No se pudo completar la operación. Intentá de nuevo.";
}
