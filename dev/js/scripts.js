import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function swirlAnimation(){
        var tl = gsap.timeline();

        tl.from("#outter-line", {duration:1, drawSVG:0})
        .from("#inner-line", {duration:1, drawSVG:0})

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