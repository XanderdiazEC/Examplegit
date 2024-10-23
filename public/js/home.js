// Import firebase
import { auth } from './firebase.js';
import { signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Logout function
document.getElementById("sign-out").addEventListener("click", function() {
    signOut(auth).then(() => {
        // Logout succesful
        alert("Successfully signed out!");
        // Redirigir a la página de inicio de sesión (o donde desees)
        window.location.href = "index.html"; // Cambia a tu página de inicio de sesión
    }).catch((error) => {
        // Error logout
        alert(`Error: ${error.message}`);
    });
});
