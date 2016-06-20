var chatty = (function(messages) {
  document.querySelector("#deletebutton").addEventListener("click", function(){
    messages = chatty.getMessages();
    var numberToDel = event.target.parentNode.id;
    var divToDel = document.getElementById(numberToDel);
    numberToDel = numberToDel.split("--");
    var index = numberToDel[1]-1;
    if (numberToDel[0] === "message") {
      divToDel.remove();
    };
    messages.splice(index,1)
  });
  return messages;
}(chatty || {}));