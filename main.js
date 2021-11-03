// Js code (Gsap timeline and animation) for randomizing first clouds positioning and movement (to make them float around) in background + continual refresh
const clouds = gsap.timeline ()
.to('.cloud',{
  x: "random(0, 1000, 10)",
  y: "random(0, 200, 20)",
  duration:10,
  ease:"none",
  repeat:-10,
  repeatRefresh:true
})
// Js code (Gsap timeline and animation) for randomizing second clouds positioning and movement (to make them float around) in background + continual refresh
const clouds2 = gsap.timeline ()
.to('.cloud2',{
  x: "random(0, 1500, 10)",
  y: "random(0, 400, 20)",
  duration:10,
  ease:"none",
  repeat:-10,
  repeatRefresh:true
})
// Js code (Gsap timeline and animation) for randomizing third clouds positioning and movement (to make them float around) in background + continual refresh
const clouds3 = gsap.timeline ()
.to('.cloud3',{
  x: "random(0, 100, 10)",
  y: "random(0, 600, 5)",
  duration:10,
  ease:"none",
  repeat:-10,
  repeatRefresh:true
})
// Js code (Gsap timeline and animation) for randomizing fourth clouds positioning and movement (to make them float around) in background + continual refresh
const clouds4 = gsap.timeline ()
.to('.cloud4',{
  x: "random(0, 1200, 10)",
  y: "random(0, 800, 5)",
  duration:10,
  ease:"none",
  repeat:-10,
  repeatRefresh:true
})
// Js code (Gsap timeline and animation) for randomizing fifth clouds positioning and movement (to make them float around) in background + continual refresh
const clouds5 = gsap.timeline ()
.to('.cloud5',{
  x: "random(0, 1500, 10)",
  y: "random(0, 1000, 5)",
  duration:10,
  ease:"none",
  repeat:-10,
  repeatRefresh:true
})
// Js code (Gsap timeline and animation) for randomizing sixth clouds positioning and movement (to make them float around) in background + continual refresh
const clouds6 = gsap.timeline ()
.to('.cloud6',{
  x: "random(0, 1200, 10)",
  y: "random(0, 100vh, 5)",
  duration:10,
  ease:"none",
  repeat:-10,
  repeatRefresh:true
})
// Js code (Gsap timeline and animation) for making clouds disappear when the user hits the first waves and Australia map sections
const cloudsgo = gsap.timeline ()
.to('.clouds', {
  opacity: 0,
  duration:2.5,
  ease:"power1.out",
  scrollTrigger: {
    trigger: ".section2",
    start: "top bottom",
  }

})
// Js code (Gsap timeline and animation) for making clouds re-appear when the user hits the last of the Australia map sections and next waves section
.to('.clouds', {
  opacity: 1,
  delay: 2,
  ease:"power1.in",
  scrollTrigger: {
    trigger: ".section9",
    start: "bottom bottom",
  }
})
// Js code (Gsap timeline and animation) for making the first set of svg waves animate down slowly when the user first hits that section (2)
gsap.to(".wave1", {
  duration:3.5,
  y:200,
  ease: 'CustomEase.create("custom", "M0,0 C0.578,-0.208 0.322,1.454 1,1 ")',
  scrollTrigger: {
    trigger: ".wave1",
    start: "top bottom",
    repeatRefresh: true,
  }
})
// Js code (Gsap timeline and animation) for making all headings on the page fade in as the user scrolls down
const headings = gsap.utils.toArray('.heading');
headings.forEach(heading => {
    gsap.from(heading, {
        y: 20, 
        opacity: 0, 
        ease: "power1.out",
        duration: 2,
        scrollTrigger: {
            trigger: heading,
            start: "bottom bottom"
        }
    })
})
// Js code (Gsap timeline and animation) for making the svg Australia maps fade in as the user scrolls down
const ausmaps = gsap.utils.toArray('.ausmap');
ausmaps.forEach(ausmap => {
    gsap.from(ausmap, {
        y: 10, 
        opacity: 0, 
        ease: "power1.in",
        duration: 1,
        scrollTrigger: {
            trigger: ausmap,
            start: "top bottom"
        }
    })
})
// Js code for loading Splide image slider
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-slider', {
    cover      : true,
    height: '100vh',
  } ).mount();
} );
// Js code (Event listner for Shoelace Drawer) for hamburger/nav menu
const wwfBtn = document.querySelector('.wwf')

const helpBtn = document.querySelector('.help')

const drawer = document.querySelector('.menu');
const openButton = document.querySelector('.hamburger');
const closeButton = drawer.querySelector('.menucloser');

openButton.addEventListener('click', () => drawer.show());
closeButton.addEventListener('click', () => drawer.hide());
// Js code (Event listner for Shoelace Dialog) for information point 1 and close buttons within
const infoBtn1 = document.querySelector('.infopoint1')
const infoDialog1 = document.querySelector('.info1')
const closeBtn1 = document.querySelector('.close1')

infoBtn1.addEventListener('click', ()=>{
    infoDialog1.show()
})

closeBtn1.addEventListener('click', ()=>{
    infoDialog1.hide()
})
// Js code (Event listner for Shoelace Dialog) for information point 2 and close buttons within
const infoBtn2 = document.querySelector('.infopoint2')
const infoDialog2 = document.querySelector('.info2')
const closeBtn2 = document.querySelector('.close2')

infoBtn2.addEventListener('click', ()=>{
    infoDialog2.show()
})

closeBtn2.addEventListener('click', ()=>{
    infoDialog2.hide()
})
// Js code (Event listner for Shoelace Dialog) for information point 3 and close buttons within
const infoBtn3 = document.querySelector('.infopoint3')
const infoDialog3 = document.querySelector('.info3')
const closeBtn3 = document.querySelector('.close3')

infoBtn3.addEventListener('click', ()=>{
    infoDialog3.show()
})

closeBtn3.addEventListener('click', ()=>{
    infoDialog3.hide()
})
// Js code (Event listner for Shoelace Dialog) for information point 4 and close buttons within
const infoBtn4 = document.querySelector('.infopoint4')
const infoDialog4 = document.querySelector('.info4')
const closeBtn4 = document.querySelector('.close4')

infoBtn4.addEventListener('click', ()=>{
    infoDialog4.show()
})

closeBtn4.addEventListener('click', ()=>{
    infoDialog4.hide()
})
// Js code (Event listner for Shoelace Dialog) for information point 5 and close buttons within
const infoBtn5 = document.querySelector('.infopoint5')
const infoDialog5 = document.querySelector('.info5')
const closeBtn5 = document.querySelector('.close5')

infoBtn5.addEventListener('click', ()=>{
    infoDialog5.show()
})

closeBtn5.addEventListener('click', ()=>{
    infoDialog5.hide()
})
// Js code (Event listner for Shoelace Dialog) for information point 6 (actually the call to action button (hands) in section 8) and close buttons within
const infoBtn6 = document.querySelector('.infopoint6')
const infoDialog6 = document.querySelector('.info6')
const closeBtn6 = document.querySelector('.close6')

infoBtn6.addEventListener('click', ()=>{
    infoDialog6.show()
})

closeBtn6.addEventListener('click', ()=>{
    infoDialog6.hide()
})


