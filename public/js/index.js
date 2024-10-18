// Importar las funciones necesarias de Firebase
import { auth } from './firebase.js'; // Asegúrate de que la ruta sea correcta
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, getRedirectResult, signInWithRedirect } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Google provider
const provider = new GoogleAuthProvider();

// Sign in with Email and Password
document.getElementById("sign-in-2").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please put your password and email");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signed in successfully!");
            const user = userCredential.user;
            console.log("User:", user);
            window.location.href = "home.html";
        })
        .catch(handleError);
});

// Google Sign-in
document.getElementById("google-signin").addEventListener("click", function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert("Google Sign-in successful!");
            console.log("User:", user);
            window.location.href = "home.html";
        })
        .catch(handleError);
});

// Password Reset
document.getElementById("reset-password").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    if (!email) {
        alert("Please put your email.");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent!");
        })
        .catch(handleError);
});

// Manejo de redirección
getRedirectResult(auth)
    .then((result) => {
        if (result) {
            const user = result.user;
            alert("Google Sign-in successful!");
            console.log("User:", user);
            window.location.href = "home.html";
        }
    })
    .catch(handleError);

// Función para manejar errores
function handleError(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Error: ${errorMessage}`);
    console.error(`Error Code: ${errorCode}`);
}

