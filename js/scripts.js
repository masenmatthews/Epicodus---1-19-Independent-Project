// business
var mainArray = [];

var beepBoop = function(value) {
  if (value === 0) {
      return "Beep!";
  } else if (value === 1) {
      return "Boop!";
  } else if (value === 3) {
      return "Sorry, Dave. I can't do that!";
  } else {
      return value;
    }
}

// user
$(document).ready(function() {
  $("form#entry-form").submit(function(event) {
    event.preventDefault();
    var inputValue = $("#num-entry").val();
    for (var i = 0; i < inputValue.length; i ++) {
      mainArray.push(beepBoop(i));
    }
     $("#result-well").text(mainArray);
  });
});
