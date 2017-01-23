//BUSINESS LOGIC
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
//USER INTERFACE
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var firstnameField = $("input#firstInput").val();
    var lastNameField = $("input#lastInput").val();

    var friendList = new Contact(firstnameField, lastNameField);

    $("ul#contacts").append("<li>"+ friendList.firstName + friendList.lastName + "</li>");

    $("#contacts").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(friendList.firstName);
      $(".first-name").text(friendList.firstName);
      $(".last-name").text(friendList.lastName);
    });

    $("input#firstInput").val("");
    $("input#lastInput").val("");
  });
});
