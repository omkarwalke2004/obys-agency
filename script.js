
var h=document.querySelector("#lp1 h5");



var a=gsap.timeline();
a.from(".line h1",{
     
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5,
})
a.from("#lp1",{
    opacity:0,
    onStart:function(){
        var grow=0;
setInterval(function(){
    if(grow<100){
        grow++;
        h.innerHTML=grow;
    }
    else{
        h.innerHTML=grow;

    }
},33)
    }



})
a.to(".line h2",{
    animationName:"anime",
    opacity:1,
})

a.to("#loader",{
    opacity:0,
    duration:0.5,
    delay:4,

})
a.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4,


})
a.to("#loader",{
    display:"none",

})