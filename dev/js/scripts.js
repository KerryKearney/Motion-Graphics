import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);




GSDevTools.create();