var counter = null;
var chatty = (function(messages) {
  var outputDiv = document.getElementById("userOutputDiv");
  var messages = [];
  var fiveMessagesRequest = new XMLHttpRequest ();
  fiveMessagesRequest.open("GET", "messages.json");
  fiveMessagesRequest.send();
  fiveMessagesRequest.addEventListener("load", loadMessagesPage);
  function loadMessagesPage() {
    // to create message array from messages object
    messages = JSON.parse(event.target.responseText).messages;
    for (var i=0; i<messages.length; i++) {
      counter++
      outputDiv.innerHTML += `
      <div id = "message--${counter}">${messages[i].name}
        <button id="deleteButton">delete</button>
      </div>
    `
    };  
  };
  return{
   getMessages: function() {
    return messages
  }  
}

return chatty
    

    
}(chatty || {}))