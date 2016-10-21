var letters = {
65:"a",
66:"b",
67:"c",
68:"d",
};

  $("#inputArea").keydown(function(e) {
    if ($("input:checked").val() == "echo")  {
       $("#textArea").append(String.fromCharCode(event.which));
    }

if ($("input:checked").val() == "shiftcipher")  {

}


if ($("input:checked").val() == "heiroglyphics")  {
$("#textArea").append("<img src = 'images/heiroglyphics" + something + ".gif'>")

}

if ($("input:checked").val() == "runes") {

}


});
$("#translationInputText").keydown(function(e) {
  if (e.KeyCode == 13) {

  }
});
