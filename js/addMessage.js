var inputText = document.getElementById("input")
var chatty = (function(originalFunction) {
    inputText.addEventListener("change", function() {
        var inputObject = {}
				var messagesArray = chatty.getMessages();
        inputObject.name = input.value;
        messagesArray.push(inputObject);
        input.value = ""
        console.log(messagesArray);
        outputDiv.innerHTML = ""
        populateMessagesDiv(messagesArray);

    });

    
    return originalFunction;

}(chatty || {}))