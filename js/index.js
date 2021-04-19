var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')
var clickedBtn = function() {
  mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0])



let tl = gsap.timeline()
tl.fromTo('.logo', {
  x: -200,
  opacity: 0,

}, {
  x: 0,
  opacity: 1,
  delay: 1,
  duration: 1.3
}).fromTo('.header-menu', {
  x: 200,
  opacity: 0,
}, {
  x:0, 
  opacity: 1, 
  delay: 0.5,
  duration: 1.3,
},
">-1.5"
)
.fromTo('.background-img', {
  height: 0,

}, {
  height: 600, 
  duration: 1.2,
    ease: 'power2.inOut'
})
.fromTo('.info', {
  x: 0,
  y: 100,
  opacity: 0,
}, {
  x:0, 
  y: 0,
  opacity: 1, 
  delay: 0.5,
  duration: 1.3,
},
">-1.5"
)
.fromTo('#services-section', {
  x: 0,
  y: 100,
  opacity: 0,
}, {
  x:0, 
  y: 0,
  opacity: 1, 
  delay: 1,
  duration: 1
},
">-1.5"
)
.fromTo('#portfolio-section', {
  x: 0,
  y: 100,
  opacity: 0,
}, {
  x:0, 
  y: 0,
  opacity: 1, 
  delay: 0.5,
  duration: 1,
},
)
.fromTo('#experience-section', {
  x: 0,
  y: 100,
  opacity: 0,
}, {
  x:0, 
  y: 0,
  opacity: 1, 
  duration: 1,
},
)
.fromTo('#testimonials-section', {
  x: 0,
  y: 100,
  opacity: 0,
}, {
  x:0, 
  y: 0,
  opacity: 1, 
  duration: 1.3,
},
)





