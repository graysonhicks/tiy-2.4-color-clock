'use strict';
//use setTime??? and setInterval??
// Time Variables
var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var milliseconds = document.querySelector(".milliseconds");

// Button Variables
var startButton = document.querySelector(".start");
var stopButton = document.querySelector(".stop");
var clearButton = document.querySelector(".clear");


// Timer Variables
var timerInterval; // must be set outside timer function so it can be cleared by stop button later

// Functions

  //START BUTTON
      function startButtonHandler(evt){
        //define counter and set interval
        timerInterval = setInterval(timer, 1);
        var counter = 0;
        //counter function and printing
        function timer(){
        //add to counter
          counter += 1;
          milliseconds.textContent = ("" + (Math.floor(counter))).slice(-2); // write times to html
          seconds.textContent = ("00" + (Math.floor(counter / 100) % 60)).slice(-2); //gets lowest interval
          minutes.textContent = ("00" + (Math.floor(counter / 6000) % 60)).slice(-2);// divide by proper time
          hours.textContent = ("00" + (Math.floor(counter / 360000) % 60)).slice(-2);//increment since counter
                                                                                  // runs every 1ms
        }
        //Log check and set interval
        console.log("clicked");

      }
        // ON START CLICK
      startButton.addEventListener('click', startButtonHandler);

      //STOP BUTTON
      function stopButtonHandler(evt){
          //stop timer interval, alert check
          clearInterval( timerInterval );
      }
        //on start click
      stopButton.addEventListener('click', stopButtonHandler);

      // CLEAR BUTTON

      function clearButtonHandler(){
        //clear time to double zeros
          hours.textContent = "00";
          minutes.textContent = "00";
          seconds.textContent = "00";
          milliseconds.textContent = "00";
      }
      //on clear click
      clearButton.addEventListener('click', clearButtonHandler);
