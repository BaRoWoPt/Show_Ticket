console.clear();

gsap.registerPlugin(SplitText, ScrollTrigger);

const split1 = new SplitText(".wrapper1 p", {
  type: "words" });


const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#textSection1",
    start: "top top",
    end: "+=150%",
    pin: true,
    scrub: 0.75,
    markers: true } }).
    set(split1.words, {
      color: "#FFFFFF",
      stagger: 0.1 },
      0.1);


const split2 = new SplitText(".wrapper2 p", {
  type: "words" });

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#textSection2",
    start: "top top",
    end: "+=150%",
    pin: true,
    scrub: 0.75,
    markers: true } }).
    set(split2.words, {
      color: "#FFFFFF",
      stagger: 0.1 },
      0.1);