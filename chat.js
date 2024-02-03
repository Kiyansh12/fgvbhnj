// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyCYzGAgoeEY8b0dfMUTnblmKwdtzxj0dPM",
    authDomain: "lets-chat-web-app-3d9dc.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-3d9dc-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-3d9dc",
    storageBucket: "lets-chat-web-app-3d9dc.appspot.com",
    messagingSenderId: "933593628074",
    appId: "1:933593628074:web:e8ca60b53d5eabf167bfd3"
  };
  
  // Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");


document.getElementById("user_name").value;



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}

function getData() {firebase.database().ref("/").on(value, function(snapshot) {document.getElementById("output").innerHTML
Room_names = childKey;

console.log("Room Name - " + Room_names);
row = "<div> class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#" + Room_names + "</div><hr>";         
document.getElementById("output").innerHTML += row;

});};
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_room.html";
}

function Logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "kwitter.html";
}



