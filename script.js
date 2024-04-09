function loader(){
    
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

});
a.from("#nav1",{
   opacity:1,

})
a.from(".hero1 h1,.hero2 h1,.hero3 h2,.hero3 h3,.hero4 h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5,

})
}
function cursoranimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crcr",{
            left:dets.x,
            top:dets.y,
    
        })
    
    })
    Shery.makeMagnet("#nav1 h4" /* Element to target.*/, {
        
        
       
      });
}


loader();
cursoranimation();
