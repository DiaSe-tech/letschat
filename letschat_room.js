function getData() {firebase.database().ref("/").on('value',
 function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

var firebaseConfig = {
      apiKey: "AIzaSyANhAWD8wUGBT_MNFqBSHlK0sqVa1QABlw",
      authDomain: "letschat-c6c3c.firebaseapp.com",
      databaseURL: "https://letschat-c6c3c-default-rtdb.firebaseio.com",
      projectId: "letschat-c6c3c",
      storageBucket: "letschat-c6c3c.appspot.com",
      messagingSenderId: "119818060614",
      appId: "1:119818060614:web:1e360e437e7513c72ddb47"
    };
    
    // Initialize Firebase
  firebase. initializeApp(firebaseConfig);