var counter = null;
var outputDiv = document.getElementById("userOutputDiv");
var chatty = (function() {
  var messages = [];
  return{
    getMessages: function(){
    return messages
  },
  loadMessagesPage: function(callbackFunction) {
    // to create message array from messages object
    var fiveMessagesRequest = new XMLHttpRequest ();
    fiveMessagesRequest.open("GET", "messages.json");
    fiveMessagesRequest.send();
    fiveMessagesRequest.addEventListener("load", function(){
      messages = JSON.parse(event.target.responseText).messages;
      callbackFunction(messages)
    })
  }
  

}
return chatty

    }())
chatty.loadMessagesPage(populateMessagesDiv)

function populateMessagesDiv() {
  messages = chatty.getMessages();
  var outputDiv = document.getElementById("userOutputDiv");
  for (var i=0; i<messages.length; i++) {
      counter++
      outputDiv.innerHTML += `
      <div id = "message--${counter}" class="message-card">${messages[i].name}
        <button id="deleteButton--${counter}">delete</button>
      </div>
    `
    };  
}
