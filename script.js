var loading=document.querySelector('#loading');

var tl=gsap.timeline();
tl.to('#loading',{
    delay:5,
    display:"none"
})

tl.to('#main',{
    display:'initial',
    duration:.5
})

tl.from('#page1',{
   opacity:0,
    duration:.8
})
