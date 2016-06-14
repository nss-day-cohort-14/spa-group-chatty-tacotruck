var chatty = (function(messages) {
    
    document.querySelector("body").addEventListener("click", function(){
        var numberToDel = event.target.parentNode.id;
    var divToDel = document.getElementById(numberToDel)
    numberToDel = numberToDel.split("--");

    if (numberToDel[0] === "message") {
        divToDel.remove()
    }


        })
    

    return messages;

}(chatty || {}))