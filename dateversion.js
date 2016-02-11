'use strict';
//use setTime??? and setInterval??
// Time Variables
var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
  // Times as timer running
function getDate() {
  var currentDate = new Date();
  var currentHours = currentDate.getHours();
  var currentMinutes = currentDate.getMinutes();
  var currentSeconds = currentDate.getSeconds();
}


// Button Variables
var startButton = document.querySelector(".start");
var stopButton = document.querySelector(".stop");
var clearButton = document.querySelector(".clear");

// Functions

  // Find time difference

  // Refresh timeDifference function



function startButtonHandler(evt){
    // set start times
    var startDate = new Date();
    var startHours = startDate.getHours();
    var startMinutes = startDate.getMinutes();
    var startSeconds = startDate.getSeconds();
  // Time differentials
  function timeDifference(){
    var currentTime = new Date();
    var hoursDifference = currentTime.getHours() - startHours;
    var minutesDifference = currentTime.getMinutes() - startMinutes;
    var secondsDifference = (currentTime.getSeconds() - startSeconds;
    seconds.textContent = secondsDifference;
    minutes.textContent = minutesDifference;
    hours.textContent = hoursDifference;
    console.log(currentTime.getSeconds())
    console.log(startSeconds);
    console.log(secondsDifference)
  }
  //write to time spans, textContent? need to refresh...
  console.log("clicked");
  setInterval(timeDifference, 1000);
}
startButton.addEventListener('click', startButtonHandler);

function stopButtonHandler(evt){
    //click handler, run callback
    clearInterval(timeDifference);
}
stopButton.addEventListener('click', stopButtonHandler);

function clearButtonHandler(){
  //clear time
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
}
clearButton.addEventListener('click', clearButtonHandler);


  function startTime(){
  //grab times spans
  // run startHours, seconds, minutes? to set starting time
  //run differentials
}

function stopTime(){
    //grab times spans
    //grab JS time object?
    //write to time spans
    //pause time somehow?
}

function clearTime(){
    //stop time
    //clear spans
}
