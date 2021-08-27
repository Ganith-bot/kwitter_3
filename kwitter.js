function login1(){
    var user_name1 = document.getElementById("username").value;
    localStorage.setItem("user_name", user_name1);
    window.location="kwitter_room.html";
}