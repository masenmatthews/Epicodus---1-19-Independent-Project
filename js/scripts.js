var figures = "";
var beep = ("beep!");
var boop = ("boop!");
var sorry = ("Sorry, Dave. I can't do that!");
var tryagain = ("Try again!");

$(document).ready(function() {
  $("form#entryForm").submit(function(event) {
  event.preventDefault();
    figures = $("input#numEntry").val();
    var figuresArray = [];
    figuresArray.push(figures);
    for (var index = 0; index <= figuresArray.length; index += 0) {
      if(figuresArray[index] === 0) {
      figuresArray[index] = (beep);
    }
      else if(figuresArray[index] === 1) {
      figuresArray[index] = (boop);
    }
      else if(figuresArray[index] === 3) {
      figuresArray[index] = (sorry);
    }
      else {
      figuresArray[index] = (tryagain);
    }
  }
  var result=figuresArray.push("");
  $("#resultWell").text();
  });
});
