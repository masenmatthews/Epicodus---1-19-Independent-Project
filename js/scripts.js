var figures = "";

$(document).ready(function() {
  $("form#entryForm").submit(function(event) {
  event.preventDefault();
    figures = $("input#numEntry").val();
    var figureArray = Array.from(figures);
    
  });
});
