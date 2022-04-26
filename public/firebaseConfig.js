  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyARxb6i1VWYKXIe4z34WD3RzpJgrNEO2_s",
    authDomain: "webb-app-project.firebaseapp.com",
    databaseURL: "https://webb-app-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "webb-app-project",
    storageBucket: "webb-app-project.appspot.com",
    messagingSenderId: "1002811107913",
    appId: "1:1002811107913:web:9a9197f0e396025cda6d98"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

//html elemnets
const loginForm = document.getElementById('loginForm');

//code
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log('hej')
  signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
  .then((cred)=>{
    return cred.user.getIdToken()
  })
  .then((token)=>{
    console.log(token)
    document.cookie = `Bearer ${token};`
    window.location.href = '/profile';
  })
  .catch((err)=>{
    if(err)throw err
  })
})