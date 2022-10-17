import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
    var tl = gsap.timeline({ScrollTrigger:{trigger:"#section-1", markers: true, start:"top 80%", end:"top 40%" }})

}

var mainTL = gsap.timeline();
mainTL.add(heroanimation());