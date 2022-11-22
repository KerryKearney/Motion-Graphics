import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function uhMotion(){
        var tl = gsap.timeline()

        // draw u
        tl.from("#uhlive-u", {duration:0.5, drawSVG: 0})

        // draw h stem
        // .from("#uhlive-h-stem", {duration:0.5, x:"0%"})

        // draw h shoulder


        // dots scale up, then retract


        return tl;

}

function liveMotion(){
        var tl = gsap.timeline()

        // morph dot to bubble


        // lengthen l


        // lengthen i


        // unfold v


        // scale up e


        // scale up copyright mark


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