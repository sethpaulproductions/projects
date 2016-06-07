



function writeUserData() {

  var myFirebase = new Firebase('https://event-database-755cd.firebaseio.com/');
  var usernameInput = document.querySelector('#username');
  var textInput = document.querySelector('#text');
  var postButton = document.querySelector('#post');

  var msgUser = usernameInput.value;
  var msgText = textInput.value;
  //myFirebase.set(msgUser + " says: " + msgText);
  myFirebase.push({username:msgUser, text:msgText});
  textInput.value = "";
  startListening(myFirebase);

}


function startListening(myFirebase) {
  //var myFirebase = new Firebase('https://event-database-755cd.firebaseio.com/');  
  myFirebase.on('child_added', function(snapshot) {
    var msg = snapshot.val();

    var msgUsernameElement = document.createElement("b");
    msgUsernameElement.textContent = msg.username;

    var msgTextElement = document.createElement("p");
    msgTextElement.textContent = msg.text;

    var msgElement = document.createElement("div");
    msgElement.appendChild(msgUsernameElement);
    msgElement.appendChild(msgTextElement);

    document.getElementById("results").appendChild(msgElement);
  });
}
