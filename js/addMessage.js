var chatty = (function(messages) {


	var inputText = document.getElementById("userInput")
	inputText.addEventListener("change", function() {
		var input = inputText.value;
		var messagesArray = chatty.getMessages();
		console.log(messagesArray)
	});

	

    return messages;

}(chatty || {}))

