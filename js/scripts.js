// business
var beepBoop = function(value) {
  var mainArray = [];
  for (var i = 0; i <= value; i+=1) {
  if (i % 3 === 0 && i != 0) {
      mainArray.push("Sorry, Dave. I can't do that!");
  } else if (i === 1) {
      mainArray.push("Boop!");
  } else if (i === 0) {
      mainArray.push("Beep");
  } else {
      mainArray.push(i);
    }
  };
  return mainArray;
};

// user
$(document).ready(function() {
  $("form#entry-form").submit(function(event) {
    event.preventDefault();
    var inputValue = $("#num-entry").val();
    var display = beepBoop(inputValue);
    $("#result-well").text(display);
    console.log(display);
  });
});
