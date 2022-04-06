// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
let date = moment()
$("#currentDay").text(date.format("dddd, MMMM Do"))

console.log("date working");


let saveButton = document.querySelector(".saveBtn");
let enteredText = saveButton.parentElement.children[1];

saveButton.addEventListener("click",function(event){

    console.log(event.target);

    console.log(enteredText.value);

    

})

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist