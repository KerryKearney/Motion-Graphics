import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

gsap.set("#dot1", {transformOrigin: "center"});
gsap.set("#dot2", {transformOrigin: "center"});
gsap.set("#bubble-L", {transformOrigin: "center"});
gsap.set("#uhlive-e", {transformOrigin: "center"});
gsap.set("#copyright-r", {transformOrigin: "center"});
gsap.set("#copyright-circle", {transformOrigin: "center"});

function uhMotion(){
        var tl = gsap.timeline()

        // draw u
        tl.from("#uhlive-u", {duration:0.5 , drawSVG: "0"})

        // draw h stem
        .from("#uhlive-h-stem", {duration:0.5 , drawSVG: "0"})

        // draw h shoulder


        // dots scale up, then retract
        .from("#dot1", {duration:0.25 , scale:0}, "dotsAnimation")
        .fromTo("#dot2", {duration:0.25 , scale:0 , x:"32"}, {scale:1 , x:"32"}, "dotsAnimation")
        .fromTo("#bubble-L", {duration:0.25 , scale:0 , x:"64"}, {scale:1 , x:"64"}, "dotsAnimation")
        .to("#dot2", {x:"0"}, "dotsReturn")
        .to("#bubble-L", {x:"0"}, "dotsReturn")

        return tl;

}

function liveMotion(){
        var tl = gsap.timeline()

        // morph dot to bubble
        

        // lengthen l
        tl.from("#uhlive-l", {duration:0.5 , drawSVG:"0"}, "liveAnimation")

        // lengthen i
        .from("#uhlive-i", {duration:0.5 , drawSVG:"0"}, "liveAnimation")

        // unfold v

        // scale up e
        .from("#uhlive-e", {duration:0.5 , scale:0}, "liveAnimation")

        // scale up copyright mark
        .from("#copyright-r", {duration:0.5 , scale:0}, "liveAnimation")
        .from("#copyright-circle", {duration:0.5 , scale:0}, "liveAnimation")

        return tl;
}

function subtitleMotion(){
        var tl = gsap.timeline()

        // fade-in


        // type in


        // lengthen line


        // live! type in


        return tl;
}

function uhliveMotion(){
        var tl = gsap.timeline()

        

        return tl;
}

var mainTL = gsap.timeline();
mainTL.add(uhMotion())
.add(liveMotion())
.add(subtitleMotion())
.add(uhliveMotion())

GSDevTools.create();