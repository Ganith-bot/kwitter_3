
 var firebaseConfig = {
      apiKey: "AIzaSyCg-IVPtcFTTiyypJ_S6nZcYOjObCfBymA",
      authDomain: "kwitter-5e3ef.firebaseapp.com",
      databaseURL: "https://kwitter-5e3ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-5e3ef",
      storageBucket: "kwitter-5e3ef.appspot.com",
      messagingSenderId: "561505273610",
      appId: "1:561505273610:web:79d8a0ec1c60608f071cf3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    function logout1(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_tag");
          window.location="index.html";
    }
    user1 = localStorage.getItem("user_name");
    document.getElementById("Welcome!").innerHTML="Welcome " + user1 + "!";
    function enter_room(){
         room = document.getElementById("room_id").value;
         firebase.database().ref("/").child(room).update({
               purpose : "creating room"
         });
         localStorage.setItem("room_tag", room);
         window.location="kwitter_page.html";
         
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("name_1", name);
      window.location = "kwitter_page.html";
}

function logout1(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_tag");
      window.location="index.html";
}