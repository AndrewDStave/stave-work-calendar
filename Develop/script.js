$(function () {
  //Listener for save button
  $(".saveBtn").on("click", function () {

    const userInput = $(this).siblings(".description").val().trim();
    
    const timeBlockId = $(this).parent().attr("id");
    
    localStorage.setItem(timeBlockId, userInput);
  });

  function pastPresentFutureClass() {

    $(".time-block").each(function () {
      const hourId = parseInt($(this).attr("id").split("-")[1]);

      //Determines the color of each hour
      if (hourId < 12) {
        $(this).removeClass("present future").addClass("past");
      } else if (hourId == 12) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  pastPresentFutureClass();

  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");
    const userInput = localStorage.getItem(timeBlockId);

    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  });

  const currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  //Got help from a family member on a bit of it, such as determining what day it is. All code is written by me and I learned much from this assignment.