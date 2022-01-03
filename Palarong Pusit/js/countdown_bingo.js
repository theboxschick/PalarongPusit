// Set the date we're counting down to
var countDownDate5 = new Date("Dec 3, 2021 12:00:00").getTime();
var detailsD = document.querySelector(".detailsD");
var openingD = document.querySelector(".openingD");

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate5 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown_bingo").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown_bingo").innerHTML = "";
    openingD.remove();
    detailsD.classList.toggle('active');
  }
}, 1000);