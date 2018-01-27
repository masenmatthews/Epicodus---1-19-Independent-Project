// back end
var mainArray = [];
var beepBoop = [];

var beepBoop = function(mainArray) {
for (var index = 0; index <= mainArray.length; index += 1) {
  if (mainArray[index] === 0) {
    mainArray.push("Beep!");
  } else if (mainArray[index] === 1) {
    mainArray.push("Boop!");
  } else if (mainArray[index] === 3) {
    mainArray.push("Sorry, Dave. I can't do that!");
  } else {
    mainArray.push(mainArray[index]);
  }
    return mainArray;
  }
};

// UI
$(document).ready(function() {
  $("form#entry-form").submit(function(event) {
    event.preventDefault();
    beepBoop(mainArray);
    var mainArray = $("#num-entry").val();
    $("#result-well").text($(mainArray));
    this.reset();
  });
});
