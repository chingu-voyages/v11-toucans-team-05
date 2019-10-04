// wait for document ready
$(function() {

  // Initialize the ScrollMagic Controller Object/Function.
  var controller = new ScrollMagic.Controller();

  /**************************************************************************************************
  *  I saw a lot people use ScrollMagic and GSAP together.                                          *
  * .fromTo( target:Object, duration:Number (second), fromVars:Object, toVars:Object, position:* )  *
  *  Here is the Doc for TimelineMax .fromTo() https://greensock.com/docs/v2/TimelineMax/fromTo()   *
  **************************************************************************************************/
   
  // Initialize the GSAP (Green Sock Animation Platform) TimelineMax Object/Function.
  // define movement of panels
  var wipeAnimation = new TimelineMax()
  .fromTo("div.panel.two", 1, {y: "100%", opacity: 0.75}, {y: "0%", opacity: 1, ease: Linear.easeNone})     // Chaining .fromTo(). Same as wipeAnimation.fromTo(...)
  .fromTo("div.panel.three", 1, {y: "100%", opacity: 0.75}, {y: "0%", opacity: 1, ease: Linear.easeNone})   // Chaining .fromTo(). Same as wipeAnimation.fromTo(...)
  //.fromTo("div.panel.four", 1, {y: "100%", opacity: 0.75}, {y: "0%", opacity: 1, ease: Linear.easeNone});   // Chaining .fromTo(). Same as wipeAnimation.fromTo(...)
  
  // Here is ScrollMagic Doc. https://scrollmagic.io/docs/ScrollMagic.Scene.html#constructor
  new ScrollMagic.Scene ({
    triggerElement: "#pinContainer",      // Trigger it on #pinContainer.
    triggerHook: "onLeave",               // Trigger it on leave. means when the animation finished, hook/start next one.
    duration: "300%"                      // I just copied this online, haven't look this up.
  })

  .setPin('#pinContainer')                // Pin the scene on #pinContainer. (You probably know this but I'll just put here: # means id and . means class)
  .setTween(wipeAnimation)                // set the tween on this scene which is pinned on #pinContainer.
  .addTo(controller);                     // Last step, add the scene to the ScrollMagic controller. Just like video game, character cannot move without a controller

});