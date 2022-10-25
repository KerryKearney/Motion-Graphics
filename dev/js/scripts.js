import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// gsap.from("#line-1", {duration:1,y:-200,alpha:0})
// gsap.from("#line-2", {duration:1,y:-100,alpha:0,delay:0.5})

// gsap.from("#pencil-btn", {duration:1, y:200, alpha:0, delay:1})


function heroanimation(){
    var tl = gsap.timeline();

    tl.from("#line-1", {duration:1,y:-200,alpha:0})
        .from("#line-2", {duration:1,y:-100,alpha:0},"-=0.5")
        .from("#pencil-btn", {duration:1, y:200, alpha:0})
    return tl;
}

function section1animation(){
    var tl = gsap.timeline({scrollTrigger: {trigger:"#section-1", scrub:true, markers:false, end:"top 20%", start:"top 50%"}});

    tl.from("#definition", {duration:5, y:-50, alpha:0})
        .from("#body p", {duration:10, alpha:0, stagger:1})

    return tl;
}

function section2animation(){
    var tl = gsap.timeline({scrollTrigger: {trigger:"#section-2", scrub:true, markers:false, end:"top 50%", start:"top 80%"}});

    tl.from("#phrase-1", {duration:5, y:-50, alpha:0})
        .from("#phrase-2", {duration:5, alpha:0, scale:0})

    return tl;
}

function section3animation(){
    var tl = gsap.timeline({scrollTrigger: {trigger:"#section-3", scrub:true, markers:true, end:"top 20%", start:"top 80%"}});

    tl.from("#section-3 img", {duration:5, alpha:0, stagger:1})
        .from("#section-3 .card-title", {duration:5, alpha:0, scale:0, stagger:1})

    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(heroanimation())
    .add(section1animation())
    .add(section2animation())
    .add(section3animation())