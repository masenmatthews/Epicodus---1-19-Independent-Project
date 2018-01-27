// back end
var mainArray = [];
var beepBoopArray = function() {
for (var index = 0; index <= beepBoopArray.length; index += 1) {
  mainArray.push(beepBoopArray);
}
if (beepBoopArray[index] === 0) {
    $("#result-well").text("Beep!");
  } else if (beepBoopArray[index] === 1) {
    $("#result-well").text("Boop!");
  } else if (beepBoopArray[index] === 3) {
    $("#result-well").text("Sorry, Dave. I can't do that!");
  } else {
    mainArray.push(beepBoopArray);
  }
  return mainArray;
};

// UI
$(document).ready(function() {
  $("form#entry-form").submit(function(event) {
    event.preventDefault();
    var emptyArray = $("#num-entry").val();
    $("#result-well").text($(mainArray).val());
  });
});
