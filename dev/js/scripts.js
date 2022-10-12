import { gsap } from "gsap";

gsap.from("#line-1", {duration:1,y:-200,alpha:0})
gsap.from("#line-2", {duration:1,y:-100,alpha:0,delay:0.5})

gsap.from("#pencil-btn", {duration:1, y:200, alpha:0, delay:1})