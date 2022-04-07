// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
let date = moment()
$("#currentDay").text(date.format("dddd, MMMM Do"))

console.log("date working");


let saveButton = document.querySelector(".saveBtn");
let enteredText = saveButton.parentElement.children[1];

saveButton.addEventListener("click", function (event) {

    console.log(event.target);

    console.log(enteredText.value);

    saveEvent(enteredText.id);
    renderSavedEvent();
})

function saveEvent(hour) {
    console.log(typeof(hour));
    localStorage.setItem(hour, enteredText.value);

    console.log(localStorage);

}

let allTextAreas = document.querySelectorAll('textarea');

function renderSavedEvent() {

    for (let i = 0; i < allTextAreas.length; i++) {
        console.log((i+9).toString())
        console.log(allTextAreas[i])
        allTextAreas[i].value = localStorage.getItem((i + 9));
        console.log((typeof(i + 9)));
    }
}


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function colorBlock() {
    let currentHour = moment().hours();
    console.log(currentHour);

    let blockHour = document.querySelector(".hour-chunk");
    let thatHour = blockHour.dataset.hour;
    console.log(thatHour);

    $(blockHour).each(function () {

        if (thatHour > currentHour) {
            $(enteredText).addClass('future');
        } else if (thatHour === currentHour) {
            $(enteredText).addClass('present');
        } else {
            $(enteredText).addClass('past');
        }

        console.log(enteredText);
    })

}


colorBlock();
renderSavedEvent();
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
