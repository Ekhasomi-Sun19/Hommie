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
// const app = initializeApp(firebaseConfig);
// const auth = firebase.auth();

signUpPageLink.addEventListener('click',function(){
    wrapper.style.top = '-100%';
})

loginPageLink.addEventListener('click',function(){
    wrapper.style.top = '0%';
})

signUpButton.addEventListener('click',function(){
    auth.createUserWithEmailAndPassword(signUpEmail.value , signUpPassword.value)
    .then((userCredential)=>{
        var user = userCredential.user;
        console.log(user);
    })
    .catch((e)=>{
        console.log(e.message);
    })
})