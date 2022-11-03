import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simplemotion(){

    // var line = document.querySelector("Curves");
    // line = line.getBBox();

    // var center = document.querySelector("#center");
    // center = center.getBBox();

    // gsap.set("#C1",{transformOrigin:"center"})
    // gsap.set("#C2",{transformOrigin:"center"})
    // gsap.set("#C3",{transformOrigin:"center"})
    // gsap.set("#C4",{transformOrigin:"center"})
    // gsap.set("#C5",{transformOrigin:"center"})

    var tl = gsap.timeline()
    tl.fromTo(".circle",{scale:0}, {scale:1, duration:0.25, stagger:0.25}, "playmotion")
    .fromTo("#Curves", {drawSVG:"0%"}, {duration:1, drawSVG:"100% 0%"}, "playmotion")

    return tl;
}

function patternmotion(){
    var tl = gsap.timeline()
    tl.from(".odd",{duration:5, ease:'yoyo', rotate:360, drawSVG:"100%", stagger:0.25, transformOrigin:"center"}, "playpattern")
    .from(".even",{duration:5, ease:'bounce', rotate:360, drawSVG:"0% -100%", stagger:0.25, transformOrigin:"center"}, "playpattern")

    return tl;
}

function UImotion(){
    var tl = gsap.timeline()
    tl.fromTo("#button",{scale:0}, {scale:"100%", duration:0.25})
    .to("#cart",{x:"170%"},"cartroll")
    .to(".letter",{x:"25%", alpha:0},"cartroll")
    .fromTo("#circle",{drawSVG:"0"}, {drawSVG:"100%"})
    .fromTo("#check",{drawSVG:"0"}, {drawSVG:"100%"})

    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simplemotion())
    .add(patternmotion())
    .add(UImotion());



GSDevTools.create();