$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var emailInput = $("#email");
  var passwordInput = $("#password");
  var regForm = $("#register");
  // Adding an event listener for when the form is submitted
  $(regForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing emailInput, or passwordInput
    if (!emailInput.val().trim() || !passwordInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newBaconeer = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(newBaconeer);

    // submitPost run to create a whole new post
    submitPost(newBaconeer);
  }

  // Submits a new post and brings user to job page upon completion
  function submitPost(post) {
    $.post("/public/registration", post, function() {
      window.location.href = "/login";
    });
  }
});
