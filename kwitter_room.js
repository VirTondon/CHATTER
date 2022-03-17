
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDoliSR9oRB8hgpaV8PuQWN95j2q56FLwY",
      authDomain: "kwitter-7f61c.firebaseapp.com",
      databaseURL: "https://kwitter-7f61c-default-rtdb.firebaseio.com",
      projectId: "kwitter-7f61c",
      storageBucket: "kwitter-7f61c.appspot.com",
      messagingSenderId: "160158598253",
      appId: "1:160158598253:web:6924b5ed6700eb64bfab64",
      measurementId: "G-QVNQ854W5C"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
     
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name",room_name);

        window.location= "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      });});}



      getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}