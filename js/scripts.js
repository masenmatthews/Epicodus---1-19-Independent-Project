// business
var mainArray = [];

var beepBoop = function(value) {
  for (var i = 0; i <= value; i++) {
  if (value === 3) {
      mainArray.push("Sorry, Dave!");
  } else if (value === 1) {
      mainArray.push("Boop!");
  } else if (value === 0) {
      mainArray.push("Beep");
  } else {
      return value;
    }
  };
};

// user
$(document).ready(function() {
  $("form#entry-form").submit(function(event) {
    event.preventDefault();
    var inputValue = $("#num-entry").val();
    beepBoop(inputValue);
    mainArray.push(inputValue);
    $("#result-well").text(mainArray);
  });
    console.log(mainArray);
});
