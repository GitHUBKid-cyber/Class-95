
var firebaseConfig = {
      apiKey: "AIzaSyAtjROPZ9cesw4oDDrpXvmHtS3N-K__BmY",
      authDomain: "akshaj-rali-kwitter.firebaseapp.com",
      databaseURL: "https://akshaj-rali-kwitter-default-rtdb.firebaseio.com",
      projectId: "akshaj-rali-kwitter",
      storageBucket: "akshaj-rali-kwitter.appspot.com",
      messagingSenderId: "949537303920",
      appId: "1:949537303920:web:90678e28e6674e4049f3b5"
    };
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML =
    "Welcome " + user_name + "!";
    firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database(). ref("/").child(room_name).update({
                purpose : "adding room name"
          });

             localStorage.setItem("room_name", room_name);

             window.location = "kwitter_page.html"; 
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) ' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}