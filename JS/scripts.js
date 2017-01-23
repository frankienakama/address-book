//BUSINESS LOGIC

//USER INTERFACE
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();



    $("input#firstInput").val("");
    $("input#lastInput").val("");
  });
});
