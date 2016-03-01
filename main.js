
//use setTime??? and setInterval?
// Functions
      function clockCounter(evt){
        'use strict';
        setInterval(timer, 1000);

        function timer(){
          var currentDate = new Date();
          var hours = document.querySelector(".hours");
          var minutes = document.querySelector(".minutes");
          var seconds = document.querySelector(".seconds");
          seconds.textContent = ("0" + currentDate.getSeconds()).slice(-2);
          minutes.textContent = ("0" + currentDate.getMinutes()).slice(-2);
          hours.textContent = (currentDate.getHours() % 12);
          console.log("check");
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
          htmlBody.style.background = "radial-gradient(circle at 50% 300px, #5a5c5c, " + backgroundHex + ")";
          var progressBar = document.querySelector('.progress-bar');
          progressBar.style.width = secondsPercent + "%";
          //grab h1
          var hexHeading = document.querySelector(".elapsed-time");

          hexHeading.addEventListener("mouseover", function(){
            hexHeading.textContent = backgroundHex;
          });


          hexHeading.addEventListener("mouseleave", function (){
            hexHeading.innerHTML = "<span class='hours'>00</span><span>:</span><span class='minutes'>00</span><span>:</span><span class='seconds'>00</span>";

            var currentDate = new Date();
            var hours = document.querySelector(".hours");
            var minutes = document.querySelector(".minutes");
            var seconds = document.querySelector(".seconds");
            seconds.innerHTML = ("0" + currentDate.getSeconds()).slice(-2);
            minutes.textContent = ("0" + currentDate.getMinutes()).slice(-2);
            hours.textContent = (currentDate.getHours() % 12);
          });
        }
      }
        // ON START
      clockCounter();
