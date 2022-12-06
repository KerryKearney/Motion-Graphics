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

        tl.from(".letter", {alpha:0, y:-30, stagger:0.1})

        return tl;
}

function blinkAnimation(){
        var tl = gsap.timeline();

        tl.fromTo("#blink-0", {duration:0.01, alpha:0}, {alpha:1})
        .fromTo("#eyemask-1", {duration:0.01, alpha:0}, {alpha:1})
        .fromTo("#outter", {duration:0.01, alpha:1}, {alpha:0})

        .to("#blink-0", {duration:0.1, morphSVG: {shape: "#blink-1", type:"rotational"}}, "blinkmask-1")
        .to("#eyemask-1", {duration:0.1, x:50, y:50}, "blinkmask-1")

        .to("#blink-0", {duration:0.1, morphSVG:"#blink-2"}, "blinkmask-2")
        .to("#eyemask-1", {duration:0.1, x:60, y:95, rotate:3}, "blinkmask-2")
        .from("#eyemask-2", {duration:0.01, alpha:0})

        .to("#blink-0", {duration:0.1, morphSVG:"#blink-3"}, "blinkmask-3")
        .to("#eyemask-2", {duration:0.1, x:25, y:25}, "blinkmask-3")

        .to("#blink-0", {duration:0.1, morphSVG:"#blink-4"}, "blinkmask-4")
        .to("#eyemask-2", {duration:0.1, x:60, y:60}, "blinkmask-4")

        return tl;
}


function sparkleAnimation(){
        var tl = gsap.timeline();
        tl.from(".sparkle", {stagger:0.125, x:-50, y:50, alpha:0})
        .to(".sparkle", {stagger:0.125, x:50, y:-50, alpha:0})

        return tl;
}

function openAnimation(){
        var tl = gsap.timeline();

        //start from closed
        tl.to("#blink-0", {duration:0.1, morphSVG:"#blink-4"})

        .to("#blink-0", {duration:0.1, morphSVG:"#blink-3"}, "open-1")
        .to("#eyemask-2", {duration:0.1, x:25, y:25}, "open-1")

        .to("#blink-0", {duration:0.1, morphSVG:"#blink-2"}, "open-2")
        .to("#eyemask-2", {duration:0.1, x:10, y:-5}, "open-2")
        .to("#eyemask-2", {duration:0.01, alpha:0})

        .to("#blink-0", {duration:0.1, morphSVG:"#blink-1"}, "open-3")
        .to("#eyemask-1", {duration:0.1, x:30, y:50, rotate:-3}, "open-3")

        .to("#blink-0", {duration:0.1, morphSVG: {shape: "#blink-0", type:"rotational"}}, "open-4")
        .to("#eyemask-1", {duration:0.1, x:0, y:0}, "open-4")

        return tl;
}

var mainTL = gsap.timeline();
mainTL.add(outterAnimation())
.add(innerAnimation(), "-=.75")
.add(crunchyrollAnimation(), "-=.5")
.add(blinkAnimation(), "-=1.5")
.add(sparkleAnimation())
.add(openAnimation(), "-=1.5")

GSDevTools.create();