// business

// user
$(document).ready(function() {
  $("form#entry-form").submit(function(event) {
    event.preventDefault();
    var value = $("#num-entry").val();
  });
});
