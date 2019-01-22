$(document).ready(function() {
  /* global moment */

  // jobsContainer holds all of our posts
  var jobsContainer = $(".job-container");
  //   var jobCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleJobDelete);
  $(document).on("click", "button.edit", handleJobEdit);
  // Variable to hold our posts
  var jobs;

  // Looks for a query param in the url for user_id
  var url = window.location.search;
  var UserId;
  if (url.indexOf("?author_id=") !== -1) {
    UserId = url.split("=")[1];
    getJobs(UserId);
  }
  // If there's no userId we just get all posts as usual
  else {
    getJobs();
  }

  // This function grabs posts from the database and updates the view
  function getJobs(user) {
    userId = user || "";
    if (userId) {
      userId = "/?user_id=" + userId;
    }
    $.get("/api/Jobs" + userId, function(data) {
      console.log("Jobs", data);
      jobs = data;
      if (!jobs || !jobs.length) {
        displayEmpty(user);
      } else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete jobs
  function deleteJob(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/jobs/" + id
    }).then(function() {
      getJobs(jobCategorySelect.val());
    });
  }

  // InitializeRows handles appending all of our constructed job HTML inside jobsContainer
  function initializeRows() {
    jobsContainer.empty();
    var jobsToAdd = [];
    for (var i = 0; i < jobs.length; i++) {
      jobsToAdd.push(createNewRow(jobs[i]));
    }
    jobsContainer.append(jobsToAdd);
  }

  // This function constructs a job's HTML
  function createNewRow(job) {
    var formattedDate = new Date(Job.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newJobCard = $("<div>");
    newJobCard.addClass("card");
    var newJobCardHeading = $("<div>");
    newJobCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var newJobCompanyName = $("<h2>");
    var newJobTitle = $("<h2>");
    var newJobLink = $("<h2>");
    var newJobDescription = $("<h2>");
    var newJobSalary = $("<h5>");
    newJobUser.css({
      float: "right",
      color: "blue",
      "margin-top": "-10px"
    });
    var newJobCardBody = $("<div>");
    newJobCardBody.addClass("card-body");
    var newJobBody = $("<p>");
    newJobCompanyName.text(Job.company_name);
    newJobTitle.text(Job.job_title);
    newJobLink.text(Job.job_link);
    newJobDate.text(formattedDate);
    newJobDescription.text(Job.description);
    newJobSalary.text(Job.salary);
    newJobTitle.append(newJobDate);
    newJobCardHeading.append(deleteBtn);
    newJobCardHeading.append(editBtn);
    newJobCardHeading.append(newJobTitle);
    newJobCardHeading.append(newJobUser);
    newJobCardBody.append(newJobBody);
    newJobCard.append(newJobCardHeading);
    newJobCard.append(newJobCardBody);
    newJobCard.data("job", job);
    return newJobCard;
  }

  // This function figures out which job we want to delete and then calls deleteJob
  function handleJobDelete() {
    var currentJob = $(this)
      .parent()
      .parent()
      .data("job");
    deleteJob(currentJob.id);
  }

  // This function figures out which job we want to edit and takes it to the appropriate url
  function handleJobEdit() {
    var currentJob = $(this)
      .parent()
      .parent()
      .data("job");
    window.location.href = "/addjob?job_id=" + currentJob.id;
  }

  // This function displays a message when there are no posts
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for User #" + id;
    }
    jobsContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html(
      "No jobs yet" +
        partial +
        ", navigate <a href='/addjob" +
        query +
        "'>here</a> in order to get started."
    );
    jobsContainer.append(messageH2);
  }
});
