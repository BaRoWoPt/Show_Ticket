$(function () {
  var width_1 =
    $(".horizontal-scroll .main-section").width() +
    $(".horizontal-scroll .about-section").width() +
    $(".horizontal-scroll .main-services-section").width();

  var height_1 = $(".vertical-scroll .services-section").height();

  var width_2 =
    $(".horizontal-scroll .team-section").width() +
    $(".horizontal-scroll .contact-section").width();

  var controller_1 = new ScrollMagic.Controller();

  var horizontal_1 = new TimelineMax()
    .fromTo(
      ".horizontal-scroll .about-section",
      1,
      {
        x: "100%",
      },
      {
        x: "0%",
        ease: Linear.easeNone,
      }
    )
    .fromTo(
      ".horizontal-scroll .main-services-section",
      1,
      {
        x: "100%",
      },
      {
        x: "0%",
        ease: Linear.easeNone,
      }
    );

  new ScrollMagic.Scene({
    triggerElement: "#horizontal-1",
    triggerHook: "onLeave",
    duration: width_1,
  })
    .addIndicators({ name: "horizontal - 1" })
    .setPin("#horizontal-1")
    .setTween(horizontal_1)
    .addTo(controller_1);

  var vertical_1 = new TimelineMax().fromTo(
    ".vertical-scroll .services-section",
    1,
    {
      y: "100%",
    },
    {
      y: "0%",
      ease: Linear.easeNone,
    }
  );

  new ScrollMagic.Scene({
    triggerElement: "#vertical-1",
    triggerHook: "onLeave",
    duration: "100%",
  })
    .addIndicators({ name: "vertical - 1" })
    .setPin("#vertical-1")
    .setTween(vertical_1)
    .addTo(controller_1);

  var horizontal_2 = new TimelineMax().fromTo(
    ".horizontal-scroll .contact-section",
    1,
    {
      x: "100%",
    },
    {
      x: "0%",
      ease: Linear.easeNone,
    }
  );

  new ScrollMagic.Scene({
    triggerElement: "#horizontal-2",
    triggerHook: "onLeave",
    duration: width_2,
  })
    .addIndicators({ name: "horizontal - 2" })
    .setPin("#horizontal-2")
    .setTween(horizontal_2)
    .addTo(controller_1);
});
