var firebaseConfig = {
      apiKey: "AIzaSyAqAK85jbcVmN7Qn7ReBzQ398OV0qaQNds",
      authDomain: "kwitter-d249d.firebaseapp.com",
      databaseURL: "https://kwitter-d249d-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-d249d",
      storageBucket: "kwitter-d249d.appspot.com",
      messagingSenderId: "736746265927",
      appId: "1:736746265927:web:143b006bf85671fffd0062"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
