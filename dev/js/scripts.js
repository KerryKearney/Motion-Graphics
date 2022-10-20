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

function whatisart(){
    var tl = gsap.timeline();

    tl.from("#definition", {
        duration:1,
        y:-200,
        alpha:0,

        scrollTrigger: {
            trigger: "#definition",
            markers:true,
            start: "0px 20%",
            end: "100% 10%"
        }
    })
    return tl;
}

function bodyanimation(){
    var tl = gsap.timeline();

    tl.from("#body", {
        duration:1,
        y:-200,
        alpha:0,

        scrollTrigger: {
            trigger: "#body",
            markers:false,
            start: "0px 20%",
            end: "100% 10%"
        }
    })
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(heroanimation())
    .add(whatisart())
    .add(bodyanimation());