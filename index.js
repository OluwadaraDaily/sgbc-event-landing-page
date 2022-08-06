// Set the date we're counting down to
let countDownDate = new Date("Nov 4, 2022 10:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an elements with corresponding IDs
  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("conference-begins").innerHTML = "THE CONFERENCE HAS BEGUN!";
  }
}, 1000);

// Handle sidebar toggle on mobile
let hamburgerBtn = document.querySelector('.hamburger-div')
let sidebarDropdown = document.querySelector('.links')
let menuOpen = false
document.addEventListener('DOMContentLoaded', () => {
  if(!menuOpen) {
    sidebarDropdown.classList.remove('show-sidebar')
  }
  else {
    sidebarDropdown.classList.add('show-sidebar')
  }
})

hamburgerBtn.addEventListener('click', () => {
  if(!menuOpen) {
    hamburgerBtn.classList.add('open')
    sidebarDropdown.classList.add('show-sidebar')
    menuOpen = true
  }
  else {
    hamburgerBtn.classList.remove('open')
    sidebarDropdown.classList.remove('show-sidebar')
    menuOpen = false
  }
})