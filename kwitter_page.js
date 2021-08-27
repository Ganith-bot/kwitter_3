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

  user_19 = localStorage.getItem("user_name");
  room_19 = localStorage.getItem("room_tag");
function logout1(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_tag");
    window.location="index.html";
}

function send_msg(){
    msg19 = document.getElementById("msg_by_user").value;
    firebase.database().ref(room_19).push({
name:user_19,message:msg19,like:0
    });
    document.getElementById("msg_by_user").value = "";
}

function getData() { firebase.database().ref("/"+room_19).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose")
{ firebase_message_id = childKey;

message_data = childData;
console.log(message_data);
console.log(firebase_message_id);

name99 = message_data['name'];
msg99 = message_data['message'];
like99 = message_data['like'];
div09 = "<span>"+name99+"<img src='tick.png' class='tick101' stlye='width:20px; '></span>";
msg66 = "<h2 class='msgg'>"+msg99+"</h2>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like99+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like99 +"</span></button><hr>";
row = div09 + msg66 + like_button;
document.getElementById("output").innerHTML = row;
} }); }); } 
getData();