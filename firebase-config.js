/* =========================================================
   FIREBASE — CONFIGURACIÓN DEL PROYECTO
   -----------------------------------------------------------
   ÚNICO ARCHIVO QUE NECESITÁS EDITAR PARA CONECTAR FIREBASE.

   Pasos:
   1) Entrá a https://console.firebase.google.com
   2) Creá un proyecto (o usá uno existente).
   3) Andá a "Compilación" → "Authentication" → pestaña
      "Sign-in method" → habilitá los proveedores:
        • "Google"
        • "Correo electrónico/contraseña"
   4) Andá a ⚙️ Configuración del proyecto → en "Tus apps"
      agregá una app Web (ícono </>). Firebase te va a mostrar
      un objeto firebaseConfig como el de abajo: copialo y
      pegalo reemplazando el que está de ejemplo.
   5) En Authentication → Settings → "Authorized domains"
      agregá el dominio donde vas a alojar este sitio
      (por ejemplo: tu-usuario.github.io o tu dominio propio).
      "localhost" ya viene autorizado por defecto para pruebas.
   ========================================================= */

export const firebaseConfig = {
   apiKey: "AIzaSyDjotASl6iJ_ut95LnarjTa1hzWSa853qE",
    authDomain: "aula-virtual-uncuyo.firebaseapp.com",
    projectId: "aula-virtual-uncuyo",
    storageBucket: "aula-virtual-uncuyo.firebasestorage.app",
    messagingSenderId: "946708159923",
    appId: "1:946708159923:web:97a4762ecda089e7d63fc6",
    measurementId: "G-Q7MPEYCQ7B"
};

 


/* Versión del SDK de Firebase a usar en todos los archivos.
   Si Firebase lanza una versión más nueva, solo cambiás esto. */
export const FIREBASE_SDK_VERSION = "10.12.2";

/* Restringir el login a un dominio de correo institucional.
   Ejemplo: "fce.uncu.edu.ar" — dejar en null para permitir
   cualquier cuenta de Google. */
export const ALLOWED_EMAIL_DOMAIN = null; // ej: "fce.uncu.edu.ar"

/* Página a la que se redirige después de iniciar sesión. */
export const REDIRECT_AFTER_LOGIN = "index.html";


