import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

gsap.set("#clip1", {transformOrigin:"center"});

function swirlAnimation(){
        var tl = gsap.timeline();
        tl.from("#clip1", {duration:1 , rotate:180})

        return tl;
}

function blinkAnimation(){
        var tl = gsap.timeline();

        return tl;
}

var mainTL = gsap.timeline();
mainTL.add(swirlAnimation())
.add(blinkAnimation())

GSDevTools.create();