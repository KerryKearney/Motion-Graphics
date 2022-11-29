import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
// import MotionPathHelper from "gsap/MotionPathHelper";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin);
// MotionPathHelper.editPath("#blink-0");

gsap.set("#outter",{transformOrigin:"center"});

function outterAnimation(){
        var tl = gsap.timeline();

        tl.from("#outter-line", {duration:1.5, drawSVG:0}, "rotateoutter")
        .to("#outter", {duration:1, rotate:-360}, "rotateoutter")

        return tl;
}

function innerAnimation(){
        var tl = gsap.timeline();

        tl.from("#inner-line", {duration:1, drawSVG:0})

        return tl;
}

function crunchyrollAnimation(){
        var tl = gsap.timeline();

        tl.from("#crunchyroll", {duration: 2, alpha:0, y:-30, stagger:0.5})

        return tl;
}

function blinkAnimation(){
        var tl = gsap.timeline();

        tl.fromTo("#blink-0", {duration:0.1, alpha:0}, {alpha:1})
        .fromTo("#outter", {duration:0.1, alpha:1}, {alpha:0})
        .to("#blink-0", {duration:0.1, morphSVG: {shape: "#blink-1", type:"rotational"}})
        .to("#blink-0", {duration:0.1, morphSVG:"#blink-2"})
        .to("#blink-0", {duration:0.1, morphSVG:"#blink-3"})
        .to("#blink-0", {duration:0.1, morphSVG:"#blink-4"})

        return tl;
}

function sparkleAnimation(){
        var tl = gsap.timeline();



        return tl;
}

function openAnimation(){
        var tl = gsap.timeline();



        return tl;
}

var mainTL = gsap.timeline();
mainTL.add(outterAnimation())
.add(innerAnimation(), "-=.75")
.add(crunchyrollAnimation(), "-=.5")
.add(blinkAnimation())
.add(sparkleAnimation())
.add(openAnimation())

GSDevTools.create();