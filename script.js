// Sticky Navigation Menu JS Code
let nav = document.querySelector('nav')
let scrollBtn = document.querySelector('.scroll-button a')
console.log(scrollBtn)
let val
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add('sticky')
    scrollBtn.style.display = 'block'
  } else {
    nav.classList.remove('sticky')
    scrollBtn.style.display = 'none'
  }
}

// Side NavIgation Menu JS Code
let body = document.querySelector('body')
let navBar = document.querySelector('.navbar')
let menuBtn = document.querySelector('.menu-btn')
let cancelBtn = document.querySelector('.cancel-btn')
menuBtn.onclick = function () {
  navBar.classList.add('active')
  menuBtn.style.opacity = '0'
  menuBtn.style.pointerEvents = 'none'
  body.style.overflow = 'hidden'
  scrollBtn.style.pointerEvents = 'none'
}
cancelBtn.onclick = function () {
  navBar.classList.remove('active')
  menuBtn.style.opacity = '1'
  menuBtn.style.pointerEvents = 'auto'
  body.style.overflow = 'auto'
  scrollBtn.style.pointerEvents = 'auto'
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll('.menu li a')
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    navBar.classList.remove('active')
    menuBtn.style.opacity = '1'
    menuBtn.style.pointerEvents = 'auto'
  })
}

// 스크롤로 100px 영역을 지날때 자동적으로 사운드가 재생됩니다.
//재생 되더라도 버튼으로 제어도 가능합니다.
// var audio = new Audio('Happy Moments.mp3')   // 마지막에 음악추가 주석 제거하기
var audio = new Audio('')
audio.play()
$(window).scroll(function () {
  var position = $(window).scrollTop()
  $('#info').innerText = position
  if (position > 500) {
    // 스크롤로 500내려갔을 때 배경음 시작
    console.log('detect')
    audio.play()
  }
})

var currentPosition = parseInt($('#sidebox').css('top'))
$(window).scroll(function () {
  var position = $(window).scrollTop()
  $('#sidebox')
    .stop()
    .animate({ top: position + currentPosition + 'px' }, 1000)
})
