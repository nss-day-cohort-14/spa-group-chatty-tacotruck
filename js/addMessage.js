var cleared = false;
var input = document.getElementById("input");
var users = document.querySelector('.userSelect')
var chatty = (function(originalFunction) {

input.addEventListener('keydown', function(e){
	var key = e.which||e.keyCode;
	if (key === 13){
      var inputObject = {"user": users.value, "message": input.value};
      counter ++;
      messages = chatty.getMessages();
      messages.push(inputObject);
      outputDiv.innerHTML = ''
      populateMessagesDiv();
      input.value = ''

			// }
		}
  })
  clearMessagesButton.addEventListener('click', function(){
    cleared = true;
    messages.length = 0;
    counter = 0;
    outputDiv.innerHTML = "";
    console.log("messages",messages );
    return cleared;
    })

  users.addEventListener('change', function(){
    console.log("messages",messages );
  })

  return originalFunction;

}(chatty || {}))
