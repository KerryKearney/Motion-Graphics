import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function uhMotion(){
        var tl = gsap.timeline()

        // draw u
        .fromTo("#uhlive-u", {duration:0.5, DrawSVG:"0% 10%"}, {DrawSVG:"100%"})

        // draw h stem
        

        // draw h shoulder


        // dots scale up, then retract
        

        return tl;

}


var mainTL = gsap.timeline();
mainTL.add(uhMotion())

GSDevTools.create();