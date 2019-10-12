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
  
  // Here is ScrollMagic Doc. https://scrollmagic.io/docs/ScrollMagic.Scene.html#constructor
  new ScrollMagic.Scene ({
    triggerElement: "#pinContainer",      // Trigger it on #pinContainer.
    triggerHook: "onLeave",               // Trigger it on leave. means when the animation finished, hook/start next one.
    duration: "300%"                      // I just copied this online, haven't look this up.
  })

  .setPin('#pinContainer')                // Pin the scene on #pinContainer. (You probably know this but I'll just put here: # means id and . means class)
  //.addIndicators() // add indicators (requires plugin)
  .setTween(wipeAnimation)                // set the tween on this scene which is pinned on #pinContainer.
  .addTo(controller);                     // Last step, add the scene to the ScrollMagic controller. Just like video game, character cannot move without a controller


  new ScrollMagic.Scene({
    triggerElement: "#slidein1",
    triggerHook: 0.5, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
  })
  .setClassToggle("#slidein1", "visible") // add class to reveal
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#slidein2",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
  })
  .setClassToggle("#slidein2", "visible") // add class to reveal
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#slidein3",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
  })
  .setClassToggle("#slidein3", "visible") // add class to reveal
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  var revealElements = document.getElementsByClassName("digit");
  for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
              triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
              offset: 50,												 // start a little later
              triggerHook: 0.9,
            })
            .setClassToggle(revealElements[i], "visible") // add class toggle
            //.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
            .addTo(controller);
  }

});