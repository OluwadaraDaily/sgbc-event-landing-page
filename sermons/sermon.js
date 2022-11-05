// Handle sidebar toggle on mobile
let hamburgerBtn = document.querySelector('.hamburger-div')
let sidebarDropdown = document.querySelector('.links')
let dayOneSection = document.querySelector('.day-one-cards')
let dayOneShowMoreIcon = document.getElementById('show-more-icon-one')
let dayOneShowLessIcon = document.getElementById('show-more-less-one')
let menuOpen = false
let dayOneOpen = false
let dayTwoOpen = false

document.addEventListener('DOMContentLoaded', () => {
  menuOpen ? sidebarDropdown.classList.add('show-sidebar') : sidebarDropdown.classList.remove('show-sidebar')
  // if(!dayOneOpen) {
  //   dayOneSection.classList.remove('show-sidebar')
  //   dayOneShowMoreIcon.classList.add('show')
  // }
  // dayOneOpen ? dayOneSection.classList.add('show-sidebar') : dayOneSection.classList.remove('show-sidebar')
  // dayOneOpen ? dayOneSection.classList.add('show-sidebar') : dayOneSection.classList.remove('show-sidebar')
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