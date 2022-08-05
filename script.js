// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
let date = moment()
$("#currentDay").text(date.format("dddd, MMMM Do"))

console.log("date working");

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Event listener waits for clicks on .container class items
// Upon click, function runs for enteredText variable, which is the text area
let container = document.querySelector(".container")

container.addEventListener("click", function (event) {
    let element = event.target;

    if (element.matches("button")) {
        let enteredText = element.parentElement.children[1];
        console.log(event.target);

        console.log(enteredText.value);

        saveEvent(enteredText);
        renderSavedEvent();
    }
})

// Called in above event listener function
// Saves value of what's inside text area to local storage
function saveEvent(enteredText) {
    console.log(enteredText.id);
    console.log(enteredText.dataset.hour);
    localStorage.setItem(enteredText.id, enteredText.value);

    console.log(localStorage);

}

// Called in above event listener function
// Defining allTextAreas variable builds array of element objects/text areas
// For loop runs through length of array & sets value of current text area to local storage of that hour (using i+9)
let allTextAreas = document.querySelectorAll('textarea');

function renderSavedEvent() {

    for (let i = 0; i < allTextAreas.length; i++) {
        console.log((i + 9).toString())
        console.log(allTextAreas[i])
        allTextAreas[i].value = localStorage.getItem((i + 9));
        console.log((typeof (i + 9)));
    }
}

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// Checking if hour of current time is greater than, equal, or less than hour given in text area dataset
// Adds class to change color of text area based on the above
function colorBlock() {
    let currentHour = moment().hours();
    console.log(currentHour);

    let blockHour = document.querySelectorAll(".hour-chunk");

    $(blockHour).each(function () {
        let thatHour = this.dataset.hour;
        if (thatHour > currentHour) {
            $(this).addClass('future');
        } else if (parseInt(thatHour) === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }

        console.log(blockHour);
        console.log(thatHour);
    })

}

// Immediately calling these functions upon page load
colorBlock();
renderSavedEvent();