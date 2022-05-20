var firebaseConfig = {
      apiKey: "AIzaSyAXIIMQq9qqxSLYd2sVJc_Yea__EF0o63o",
      authDomain: "practice-activity-6674d.firebaseapp.com",
      databaseURL: "https://practice-activity-6674d-default-rtdb.firebaseio.com",
      projectId: "practice-activity-6674d",
      storageBucket: "practice-activity-6674d.appspot.com",
      messagingSenderId: "950940935253",
      appId: "1:950940935253:web:c860e55b20e103f74ba0dc"
  };
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}
