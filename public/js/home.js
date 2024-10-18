// Importar las funciones necesarias de Firebase
import { auth } from './firebase.js';
import { signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Función para cerrar sesión
document.getElementById("sign-out").addEventListener("click", function() {
    signOut(auth).then(() => {
        // Cerrado de sesión exitoso
        alert("Successfully signed out!");
        // Redirigir a la página de inicio de sesión (o donde desees)
        window.location.href = "index.html"; // Cambia a tu página de inicio de sesión
    }).catch((error) => {
        // Ocurrió un error al cerrar sesión
        alert(`Error: ${error.message}`);
    });
});
