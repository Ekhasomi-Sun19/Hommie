// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js'
    
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'

const signUpPageLink = document.querySelector('#signup-page-link');
const loginPageLink = document.querySelector('#login-page-link');
const wrapper = document.querySelector('.wrapper');

const signUpButton = document.querySelector('#signup-button');
const signUpEmail = document.querySelector('#signup-email');
const signUpPassword = document.querySelector('#signup-password');
const signUpName = document.querySelector('#signup-name');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJDG980Lck6r83x-sGCaRnG3DZKlCoxJ0",
    authDomain: "login-signup-6addf.firebaseapp.com",
    projectId: "login-signup-6addf",
    storageBucket: "login-signup-6addf.appspot.com",
    messagingSenderId: "703250225593",
    appId: "1:703250225593:web:fbe60bb325d8cd941bfe68"
};
        
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = app.auth();
var auth = ""
signUpPageLink.addEventListener('click',function(){
    wrapper.style.top = '-100%';
})

loginPageLink.addEventListener('click',function(){
    wrapper.style.top = '0%';
})

signUpButton.addEventListener('click',function(){
    auth = getAuth(app);
    createUserWithEmailAndPassword(auth, signUpEmail.value , signUpPassword.value)
    .then((userCredential)=>{
        var user = userCredential.user;
        console.log(user);
    })
    .catch((e)=>{
        console.log(e.message);
    })
})