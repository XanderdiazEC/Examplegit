// Import firebase
import { auth } from './firebase.js';
import { signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Logout function
document.getElementById("sign-out").addEventListener("click", function() {
    signOut(auth).then(() => {
        // Logout succesful
        alert("Successfully signed out!");
        // To index
        window.location.href = "index.html";
    }).catch((error) => {
        // Error logout
        alert(`Error: ${error.message}`);
    });
});
