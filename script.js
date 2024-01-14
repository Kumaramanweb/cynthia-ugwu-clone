
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main-container'),
    smooth: true
});

function firstPageAnimation(){
    let timeLiner =gsap.timeline();

    timeLiner.from(".nav_bar",{
        y: '-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    timeLiner.to("#movingAnimation", {
        y:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
       

    })

 

    
};

// code for skew circle mouse follower

 
let timeout;
function skewCircleCursor(){

    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(details){
        clearTimeout(timeout);
        let xdiff = details.clientX - xprev;
        let ydiff = details.clientY - yprev;

        xscale = gsap.utils.clamp(0.7 ,1.2, xdiff);
        yscale = gsap.utils.clamp(0.7,1.2, ydiff);

        xprev = details.clientX;
        yprev = details.clientY;

        mouseFollower(xscale , yscale);

        timeout = setTimeout(() => {
            document.querySelector(".circle-cursor").style.transform = `translate(${details.clientX}px, ${details.clientY}px ) scale(1, 1)`;
        }, 100);
        

    });

}


// code for circle mouse follower 
function mouseFollower(xscale , yscale){
    window.addEventListener("mousemove", function(details){
        document.querySelector(".circle-cursor").style.transform = `translate(${details.clientX}px , ${details.clientY}px) scale(${xscale}, ${yscale})`;
    })
}


mouseFollower();
skewCircleCursor();
firstPageAnimation();


// image rotation movement on hover animation 


document.querySelectorAll(".content").forEach(function(element){

    let rotate = 0;
    let diffrotate = 0;


    element.addEventListener("mousemove",function(details){
       let diff =  details.clientY - element.getBoundingClientRect().top;
       diffrotate = details.clientX - rotate;
       rotate = details.clientX;

       gsap.to(element.querySelector("img"), {
        opacity: 1,
        ease: Power1,
        top:diff,
        left:details.clientX,
        rotate: gsap.utils.clamp(-15 , 15 ,diffrotate)
       });
    })

    element.addEventListener("mouseleave",function(details){
        
 
        gsap.to(element.querySelector("img"), {
         opacity: 0,
         ease: Power1,
        });
     })

    
})


// button animation 

let btn = document.querySelector("button");
let butt = document.querySelector(".click-button");
let smooth;

btn.addEventListener("mousemove",function(){
    butt.style.backgroundColor ="white";
    butt.style.color = "black"

    let timeliner = gsap.timeline();
    timeliner.to(".circle-cursor" , {
        backgroundColor: "black"
    })
})

// smooth = setTimeout(()=>{
//     leaving();
   
// },1000);

function leaving(){
    btn.addEventListener("mouseleave",function(){
        let timeLiner =gsap.timeline();
        timeLiner.to(".click-button", {
            color: "white",
            delay: 0.5,
            backgroundColor:"black"

        } )

        timeLiner.to(".circle-cursor" , {
            backgroundColor: "White"
        })

        
        // butt.style.backgroundColor ="black";
        // butt.style.color = "white"
    })
};

leaving();






