//home -> home-content -> text-two -> auto-input
// 글자 한개씩 출력 되다가 다시 한글자씩 사라짐
var typed = new Typed('.auto-input', {
  strings: [
    'Juneyong Lee',
    '컴퓨터전자시스템공학과',
    '201904458',
    'Juneyong Lee',
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
})
// Sticky Navigation Menu JS Code
// 스크롤로 높이 20px 내려가면 색 바뀜 + 글자 커짐
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

//  NavIgation Menu JS Code
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

// Side Navigation Bar 에 가까워지거나 navigation 링크로 클릭해서 이동 할 때
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
var audio = new Audio('Happy Moments.mp3') // 마지막에 음악추가 주석 제거하기
$(window).scroll(function () {
  var position = $(window).scrollTop()
  $('#info').innerText = position
  if (position > 500) {
    // 스크롤로 500내려갔을 때 배경음 시작
    console.log('detect')
    audio.play()
  }
})
// 맨위로 올려보네주는 왼쪽 하단 위로 향하는 화살표 박스  ( 스크롤 내릴 때 같이 내려감.)
var currentPosition = parseInt($('#sidebox').css('top'))
$(window).scroll(function () {
  var position = $(window).scrollTop()
  $('#sidebox')
    .stop()
    .animate({ top: position + currentPosition + 'px' }, 1000)
})

// slick  광고 배너 옆으로 자동으로 이동해주는 slick js
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
})

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
})
