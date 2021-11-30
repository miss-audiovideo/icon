var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.quote', .5, {x:200, opacity: 0});
tl.from('#robo-1', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".sticky")
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".quote",
})
  .setTween(tl2)
		.addTo(controller);


function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}