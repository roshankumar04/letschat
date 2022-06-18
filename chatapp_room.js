
  var firebaseConfig = {
      apiKey: "AIzaSyCv5fL0W7h7myFFNosHORxtEJyI93IjIbw",
      authDomain: "kwitter-c3991.firebaseapp.com",
      databaseURL: "https://kwitter-c3991-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3991",
      storageBucket: "kwitter-c3991.appspot.com",
      messagingSenderId: "948139408516",
      appId: "1:948139408516:web:8acb8d0f4ac62fe5e4d6d1"
    };
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

      function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
        });
        localStorage.setItem("move_name",move_name);
        window.location="chatapp_page.html";

      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name="+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",room_name);
  window.location="chatapp_page.html";
}