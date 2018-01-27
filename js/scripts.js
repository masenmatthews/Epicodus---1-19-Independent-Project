// back end
var mainArray = [];

var beepBoopArray = function() {
var i = 0;
for (var i = 0; i <= beepBoopArray.length; i += 1) {
  if (beepBoopArray[i] === 0) {
    mainArray.push("Beep!");
  } else if (beepBoopArray[i] === 1) {
    mainArray.push("Boop!");
  } else if (beepBoopArray[i] === 3) {
    mainArray.push("Sorry, Dave. I can't do that!");
  } else {
    mainArray.push(beepBoopArray);
  }
  return mainArray;
  }
};

// UI
$(document).ready(function() {
  $("form#entry-form").submit(function(event) {
    event.preventDefault();
    beepBoopArray();
    var mainArray = $("#num-entry").val();
    $("#result-well").text($("<h1>" + mainArray + "</h1>"));
  });
});
