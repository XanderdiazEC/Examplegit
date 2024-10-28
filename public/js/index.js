// Import necessary Firebase functions
import { auth } from './firebase.js';
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    getRedirectResult,
    signInWithRedirect,
    RecaptchaVerifier,
    signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Google provider
const provider = new GoogleAuthProvider();

// Error handling function
function handleError(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Error: ${errorMessage}`);
    console.error(`Error Code: ${errorCode}`);
}

// Email/password authentication
document.getElementById("sign-in-2").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            console.log("User:", userCredential.user);
            window.location.href = "home.html";
        })
        .catch(handleError);
});

// Google authentication
document.getElementById("google-signin").addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User:", result.user);
            alert("Login with Google successful!");
            window.location.href = "home.html";
        })
        .catch(handleError);
});

// Password reset functionality
document.getElementById("reset-password").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    if (!email) {
        alert("Please enter your email.");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password recovery email sent!");
        })
        .catch(handleError);
});

// Google redirection handling
getRedirectResult(auth)
    .then((result) => {
        if (result) {
            alert("Google login successful!");
            console.log("User:", result.user);
            window.location.href = "home.html";
        }
    })
    .catch(handleError);

// Phone number authentication setup
window.onload = function () {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'normal' // Change to 'invisible' or 'normal' based on preference
    }, auth);
};

// Phone number authentication
document.getElementById("phone-signin").addEventListener("click", function () {
    // Show reCAPTCHA before prompting for the phone number
    document.getElementById("recaptcha-container").classList.remove("d-none");

    const phoneNumber = prompt("Please, enter your phone number with the country code:");
    if (!phoneNumber) {
        alert("Please enter a valid phone number.");
        return;
    }

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            const code = prompt("Please enter the verification code sent to your phone:");
            return confirmationResult.confirm(code);
        })
        .then((result) => {
            alert("Login successful!");
            console.log("User:", result.user);
            window.location.href = "home.html";
        })
        .catch(handleError);
});
