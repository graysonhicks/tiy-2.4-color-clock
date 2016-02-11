'use strict';
//use setTime??? and setInterval?

// Time Variables
var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");

// Functions

  //START BUTTON
      function clockCounter(evt){

        setInterval(timer, 1000);

        function timer(){
          var currentDate = new Date();
         // write times to html
          seconds.textContent = ("0" + currentDate.getSeconds()).slice(-2); //gets lowest interval
          minutes.textContent = ("0" + currentDate.getMinutes()).slice(-2);// divide by proper time
          hours.textContent = (currentDate.getHours() % 12);//increment since counter
          console.log("check");                                                                    // runs every 1ms
        }

        setInterval(colorAndProgressMaker, 1000);

        function colorAndProgressMaker() {
          //grab body
          var htmlBody = document.querySelector('.gradient');
          //grab date
          var currentDate = new Date;
          //set date to percentages of totals
          var hoursPercent = Math.floor((((currentDate.getHours()) / 24) * 100));
          var minutePercent = Math.floor((((currentDate.getMinutes()) / 60) * 100));
          var secondsPercent = Math.floor((((currentDate.getSeconds()) / 60) * 100));
          //turn percentages in to hex numbers, adding an extra zero for 1 digit numbers and only keeping last two digits
          var secondsString = ("0" + (secondsPercent).toString(16)).slice(-2);
          var minutesString = ("0" + (minutePercent).toString(16)).slice(-2);
          var hoursString = ("0" + (hoursPercent).toString(16)).slice(-2);
          //concatenate hex values with hash in front
          var backgroundHex = "#" + hoursString + minutesString + secondsString;
          //insert hex value to background-gradient
          htmlBody.style.background = "radial-gradient(circle at 50% 300px, #5a5c5c, "+backgroundHex+")";
          var progressBar = document.querySelector('.progress-bar');
          progressBar.style.width = secondsPercent + "%";
        }
      }
        // ON START CLICK

      clockCounter();
