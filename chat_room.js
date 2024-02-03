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
user_name = localStorage.getItem("room_name");

function getData() {firebase.database().ref("/").on(value, function(snapshot) {document.getElementById("output").innerHTML
firebase_message_id = chidkey;
message_data = childData;}
)};

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "</h4>";
message_with_tag = "<h4> class='message_h4'>" + message + "</h4>";
like_button = "<button class=btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>Likes :"+ like +"</button>"

row = name_with_tag + message_with_tag +like_button;
document.getElementById("output").innerHTML += row;

getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}

function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;
    console.log(update_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}