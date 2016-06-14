var inputObject = {};
var messagesArray;
var cleared = false;
var inputText = document.getElementById("input");
var clearMessagesButton = document.getElementById("clearMessagesButton");
var chatty = (function(originalFunction) {

    inputText.addEventListener('keydown', function(e){
			var key = e.which||e.keyCode;
			if (key === 13){
				if (cleared===true){
					messagesArray = [];
					counter = 0;
					counter ++
					inputObject.name = input.value;
					messagesArray.push(inputObject);
					input.value = "";
  				outputDiv.innerHTML = `
      	<div id = "message--${counter}">${inputObject.name}
        	<button id="deleteButton--${counter}">delete</button>
      	</div>
    		`
		} else {
					messagesArray = chatty.getMessages();
					populateOnEnter();
				}
			}
    })
  clearMessagesButton.addEventListener('click', function(){
  	 cleared = true;
  	 outputDiv.innerHTML = "";
  	 return cleared;
  	})
  return originalFunction;

}(chatty || {}))

function populateOnEnter(){
	counter = 0;
	inputObject.name = input.value;
	console.log("inputObject",inputObject );
  messagesArray.push(inputObject);
  console.log("messagesArray", messagesArray );
  input.value = "";
  outputDiv.innerHTML = "";
  populateMessagesDiv(messagesArray);
}