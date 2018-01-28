// business
var beepBoop = function(value) {
  var mainArray = [];
  for (var i = 0; i <= value.length; i++) {
  if (value === 3) {
      mainArray.push("Sorry, Dave!");
  } else if (value === 1) {
      mainArray.push("Boop!");
  } else if (value === 0) {
      mainArray.push("beep");
  } else {
      return mainArray;
    }
  };
};

// user
$(document).ready(function() {
  $("form#entry-form").submit(function(event) {
    event.preventDefault();
    var value = $("#num-entry").val();
    mainArray.push(value);
    beepBoop(mainArray);
    $("#result-well").text(mainArray);
    console.log(mainArray);
  });
});
