$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var companyInput = $("#companyName");
  var jobDescriptionInput = $("#jobDescription");
  var linkInput = $("#link");
  var salaryInput = $("#salary");
  var locationInput = $("#location");
  var applied = $("#applied");
  var preInterview = $("#preInterview");
  var interview = $("#interview");
  var offer = $("#offer");
  var commentsInput = $("#comments");
  var cmsForm = $("#cms");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();    
    // Wont submit the post if we are missing company, description, or link
    if (
      !companyInput.val().trim() ||
      !jobDescriptionInput.val().trim() ||
      !linkInput.val().trim()
    ) {
      return;
    }
    // Constructing a newJob object to hand to the database
    var newJob = {
      company_name: companyInput.val().trim(),
      job_description: jobDescriptionInput.val().trim(),
      job_link: linkInput.val().trim(),
      salary: salaryInput.val().trim(),
      location: locationInput.val().trim(),
      applied: applied.val(),
      pre_interview: preInterview.val(),
      interview: interview.val(),
      offer: offer.val(),
      comments: commentsInput.val().trim()
    };
    console.log(newJob);

    // submitPost run to create a whole new post
    submitPost(newJob);
  }

  // Submits a new post and brings user to job page upon completion
  function submitPost(post) {
    $.post("/api/Jobs", post, function() {
      window.location.href = "/jobs";
    });
  }
});
