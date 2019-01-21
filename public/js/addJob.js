$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var companyInput = $("#companyName");
  var descriptionInput = $("#description");
  var linkInput = $("#link");
  var salaryInput = $("#salary");
  var locationInput = $("#location");
  var applied = $("#applied");
  var preInterview = $("#preInterview");
  var interview = $("#interview");
  var offer = $("#offer");
  var commentsInput = $("#comments")
  var cmsForm = $("#cms");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (
        !companyInput.val().trim() ||
        !descriptionInput.val().trim() ||
        !linkInput.val().trim()    
             
    ) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      campny_name: companyInput.val().trim(),
      description: descriptionInput.val().trim(),
      job_link: linkInput.val().trim(),
      salary: salaryInput.val().trim(),
      location: locationInput.val().trim(),
      applied: applied.val(),
      pre_interview: preInterview.val(),
      interview: interview.val(),
      offer: offer.val(),
      comments: commentsInput.val().trim()
    };

    
    // submitPost run to create a whole new post  
    submitPost(newPost);
   
  }

  // Submits a new post and brings user to blog page upon completion
  function submitPost(post) {
    $.post("/api/posts", post, function() {
      window.location.href = "/jobs";
    });
  }

});
  

