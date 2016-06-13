var chatty = (function(messages) {

	var userInput = document.getElementById("userInput")
	var userOutputDiv = document.getElementById("userOutputDiv")
	var submitButton = document.getElementById("button").addEventListener("click", addMessage());
	var counter = 0;

	function addMessage() {
		counter ++;
		var card = `<div class="cards"><p>${userInput}</p><button id="card--${counter}">Delete</button></div>`
	}

	return messages;

}(chatty || {}))

