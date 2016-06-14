var inputObject = {};
var messagesArray= []
var cleared = false;
var inputText = document.getElementById("input");
var clearMessagesButton = document.getElementById("clearMessagesButton");
var chatty = (function(originalFunction) {

    inputText.addEventListener('keydown', function(e){
			var key = e.which||e.keyCode;
			if (key === 13){
				if (cleared===true){
					counter = 0;
					counter ++;
					messagesArray.push(inputText.value);
					input.value = "";
          outputDiv.innerHTML = ""
  				for (let i =0; i < messagesArray.length; i++){
            outputDiv.innerHTML +=
      	 `
      	<div id = "message--${counter}">${messagesArray[i]}
        <button id="deleteButton--${counter}">delete</button>
        </div>`
      }
  				
		} else {
          inputObject.name = input.value;
          messagesArray.push(inputObject);
          input.value = ''
          for (let i =0; i < messagesArray.length; i++){
            outputDiv.innerHTML +=
         `
        <div id = "message--${counter}">${messagesArray[i].name}
        <button id="deleteButton--${counter}">delete</button>
        </div>
        `
        return inputObject
          }
  
				}
			}
    })
  clearMessagesButton.addEventListener('click', function(){
  	 cleared = true;
     messagesArray = []
  	 outputDiv.innerHTML = "";
  	 return cleared;
  	})
  return originalFunction;

}(chatty || {}))
