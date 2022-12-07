import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");



gsap.set("#dot1", {transformOrigin: "center"});
gsap.set("#dot2", {transformOrigin: "center"});
gsap.set("#dot3", {transformOrigin: "center"});
gsap.set("#bubble-L", {transformOrigin: "center"});
gsap.set("#uhlive-e", {transformOrigin: "center"});
gsap.set("#uhlive-v-left", {transformOrigin:"right bottom"});
gsap.set("#uhlive-v-right", {transformOrigin:"left bottom"});
gsap.set("#copyright-r", {transformOrigin: "center"});
gsap.set("#copyright-circle", {transformOrigin: "center"});

function uhMotion(){
        var tl = gsap.timeline()

        // draw u
        tl.from("#uhlive-u", {duration:0.5 , drawSVG: "0"}, "uhAnimation")

        // draw h stem
        .from("#uhlive-h-stem", {duration:0.5 , drawSVG: "0"}, "uhAnimation")

        // draw h shoulder
        .from("#uhlive-h-shoulder", {duration:0.5 , drawSVG: "0"}, "uhAnimation")

        // dots scale up, then retract
        .from("#dot1", {duration:0.25 , scale:0}, "dotsAnimation")
        .fromTo("#dot2", {duration:0.25 , scale:0 , x:"32"}, {scale:1 , x:"32"}, "dotsAnimation")
        .fromTo("#dot3", {duration:0.25 , scale:0 , x:"64"}, {scale:1 , x:"64"}, "dotsAnimation")
        .to("#dot2", {x:"0"}, "dotsReturn")
        .to("#dot3", {x:"0"}, "dotsReturn")

        return tl;

}

function liveMotion(){
        var tl = gsap.timeline()

        // morph dot to bubble
        tl.to("#dot3", {duration:0.5, morphSVG:"#bubble-L"}, "liveAnimation")

        // lengthen l
        .from("#uhlive-l", {duration:0.5 , drawSVG:"0"}, "liveAnimation")

        // lengthen i
        .from("#uhlive-i", {duration:0.5 , drawSVG:"0"}, "liveAnimation")
        .from("#bubble-I", {alpha:0})
        .to("#bubble-I", {duration:0.5, motionPath:{path:"#motionpath-1", align:"#motionpath-1"}, transformOrigin:"center"}, "liveAnimation")

        // unfold v
        .fromTo("#uhlive-v-base", {duration:0.01, alpha:0}, {alpha:1}, "liveAnimation")
        .fromTo("#uhlive-v-right", {duration:1 , drawSVG:"0", rotate:-30}, {drawSVG:"100%", rotate:0}, "liveAnimation")
        .fromTo("#uhlive-v-left", {duration:1 , drawSVG:"0", rotate:30}, {drawSVG:"100%", rotate:0}, "liveAnimation")

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
        tl.from("#understanding-u", {duration:0.5 , alpha:0, y:"-10"}, "fadeIn")
        .from("#understanding-n1", {duration:0.5 , alpha:0, y:"-10"}, "fadeIn")
        .from("#understanding-d1", {duration:0.5 , alpha:0, y:"-10"}, "fadeIn")
 
        // type in
        .from("#understanding-e", {duration:0.125 , alpha:0})
        .from("#understanding-r", {duration:0.125 , alpha:0})
        .from("#understanding-s", {duration:0.125 , alpha:0})
        .from("#understanding-t", {duration:0.125 , alpha:0})
        .from("#understanding-a", {duration:0.125 , alpha:0})
        .from("#understanding-n2", {duration:0.125 , alpha:0})
        .from("#understanding-d2", {duration:0.125 , alpha:0})
        .from("#understanding-i", {duration:0.125 , alpha:0})
        .from("#understanding-n3", {duration:0.125 , alpha:0})
        .from("#understanding-g", {duration:0.125 , alpha:0})
        .from("#humans-h", {duration:0.125 , alpha:0})
        .from("#humans-u", {duration:0.125 , alpha:0})
        .from("#humans-m", {duration:0.125 , alpha:0})
        .from("#humans-a", {duration:0.125 , alpha:0})
        .from("#humans-n", {duration:0.125 , alpha:0})
        .from("#humans-s", {duration:0.125 , alpha:0})

        // lengthen line
        .from("#dash", {duration:0.25, drawSVG: 0})


        // live! type in
        .from("#live-l", {duration:0.125 , alpha:0})
        .from("#live-i", {duration:0.125 , alpha:0})
        .from("#live-v", {duration:0.125 , alpha:0})
        .from("#live-e", {duration:0.125 , alpha:0})
        .from("#live-exclamation", {duration:0.125 , alpha:0})

        return tl;
}

function uhliveMotion(){
        var tl = gsap.timeline()

        //slide over
        tl.to("#title", {duration:1, x:100}, "slide")

        // copyright shrinks out
        .to("#copyright", {duration:0.5, scale:0, transformOrigin:"center"}, "slide")

        // e rolls out
        .to("#uhlive-e", {duration:0.5, rotate:45, x:200, alpha:0, transformOrigin:"center"}, "slide")

        // v folds up
        .to("#uhlive-v-base", {duration:0.01, alpha:0}, {alpha:1}, "fold")
        .to("#uhlive-v-right", {duration:1 , drawSVG:"0", rotate:-30}, {drawSVG:"100%", rotate:0}, "fold")
        .to("#uhlive-v-left", {duration:1 , drawSVG:"0", rotate:30}, {drawSVG:"100%", rotate:0}, "fold")

        // I bubble gets bigger
        .to("#uhlive-i", {duration:0.5, drawSVG:0}, "slide")
        .to("#bubble-I", {duration:2, scale:10, fill:"#3ACDED", motionPath:{path:"#motionpath-2", align:"#motionpath-2"}, transformOrigin:"center"}, "slide")

        return tl;
}

function subtitleFade(){
        var tl = gsap.timeline()

        tl.to("#subtitle", {duration:0.5, alpha:0})

        return tl;
}

var mainTL = gsap.timeline();
mainTL.add(uhMotion())
.add(liveMotion())
.add(subtitleMotion())
.add(uhliveMotion())
.add(subtitleFade(), "-=1.5")

GSDevTools.create();