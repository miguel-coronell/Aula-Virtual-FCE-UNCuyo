

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
