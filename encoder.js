var letters = {
66:"b"
};

  $("#inputArea").keydown(function(e) {
    if ($("input:checked").val() == "echo")  {
      $("#textArea").append(translation[e.keycode]);
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
