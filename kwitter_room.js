const firebaseConfig = {
      apiKey: "AIzaSyCj2ZKi6TR4bPt3yeWvkwLm7TUldAls66I",
      authDomain: "kwitter-3a554.firebaseapp.com",
      databaseURL: "https://kwitter-3a554-default-rtdb.firebaseio.com",
      projectId: "kwitter-3a554",
      storageBucket: "kwitter-3a554.appspot.com",
      messagingSenderId: "354578526970",
      appId: "1:354578526970:web:feb58e0883aa92b5b80f43",
      measurementId: "G-YBP21EV3SW"
    };
    
    // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//     const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name=document.getElementById("room_name").value;
console.log(room_name)
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}