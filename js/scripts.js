var inputValue = "";

$(document).ready(function() {
  $("form#mainForm").submit(function(event) {
  event.preventDefault();
  inputValue = $("#inputNumber").val();

  });
});
