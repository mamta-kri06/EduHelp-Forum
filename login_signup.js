document.getElementById('signup2-btn').addEventListener('click',function(){
    document.getElementById('signup').style.display="inline";
    document.getElementById('login').style.display="none";
})
document.getElementById('login2-btn').addEventListener('click',function(){
    document.getElementById('signup').style.display="none";
    document.getElementById('login').style.display="inline";
})



//setting firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBT9i4oxvP_jqjpeijAiqbTWMxU5S5LnrA",
    authDomain: "signup-85723.firebaseapp.com",
    projectId: "signup-85723",
    storageBucket: "signup-85723.appspot.com",
    messagingSenderId: "403863388478",
    appId: "1:403863388478:web:a20bc4d5fbee515d17ac6f"
  });
  const db = firebaseApp.firestore();
  var auth = firebaseApp.auth();
  
  //signup
  const signUp=()=>{
      const email=document.getElementById('signup-email').value;
      const password=document.getElementById('signup-password').value;
      firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      alert('Siggned up successfully.')
              window.location.replace('index.html'); 
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      document.getElementById('errorMessage').innerText = errorMessage;
      alert('Error')
          
      // ..
    });
  }
  
  
  //signin function
  const signIn=()=>{
      const email=document.getElementById('login-email').value;
      const password=document.getElementById('login-password').value;
  
      firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location.href="index.html"
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Error')

    });
  }


