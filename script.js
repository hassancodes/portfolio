const burger = document.querySelector("section svg");
burger.addEventListener('click' , ()=>{
    // burger.classList.toggle('active');
    console.log("burger front clicked")
        gsap.to(".nav-list", {x:"0%"});
        gsap.to(".nav-list", {stroke:"black", y:"0"})
        gsap.fromTo(".nav-list .nav-elements", {opacity:0} , {opacity:1,y:"25",delay:0.15, stagger:0.35})
        gsap.set("body", {overflow:"auto"});
        gsap.set("body", {overflowY:"hidden"});
        gsap.fromTo(".section-2", {opacity:0} , {opacity:1,x:"-10000",delay:0.10, stagger:-10})
});



// reverse burger
const revburger = document.querySelector(".go-back");
revburger.addEventListener('click' , ()=>{
    console.log("burger back clicked")
        gsap.to(".nav-list", {x:"100%"});
        gsap.to(".nav-list", {stroke:"white"})
        gsap.set("body", {overflow:"hidden"});
        gsap.set("body", {overflowY:"scroll"});
        gsap.set(".burger", {color:"black"});
        gsap.to(".section-2",{x:0});

        
});






// animation onloading the window
window.onload=()=>{
    // setting the initial state
    gsap.to(".portfolio-image",{x:400});
    gsap.to(".link",{x:300});
    gsap.to(".punchline",{x:-300});



    gsap.fromTo(".portfolio-image", {opacity:0} , {opacity:1,x:"0",delay:0.30, stagger:0.35})
    gsap.fromTo(".link", {opacity:0} , {opacity:1,x:"0",delay:0.45, stagger:0.35})
    gsap.fromTo(".punchline", {opacity:0} , {opacity:1,x:"0",delay:0.30, stagger:0.35})
}

