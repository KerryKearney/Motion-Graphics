import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin);

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

        // tl.to("#outter", {duration:1, morphSVG:"#blink-1"})
        tl.to("#blink-1", {duration:0.5, morphSVG:"#blink-2"})
        tl.to("#blink-2", {duration:0.5, morphSVG:"#blink-3"})
        tl.to("#blink-3", {duration:0.5, morphSVG:"#blink-4"})

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