var letters = {
66:"b"
};

  $("#inputArea").keydown(function(e) {
      var inputText = document.getElementById("inputText").value;
   document.getElementById("textArea").innerHTML = inputText;
});
