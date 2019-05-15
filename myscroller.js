  $(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // // define movement of panels
    // var wipeAnimation = new TimelineMax()
    //   .fromTo(".panel.w1", 5, {y: "100%"}, {y: "-100%", ease: SlowMo.ease.config(0.5, 0.5, false)}) // in from bottom
    //   .fromTo(".panel.w2", 5, {x:  "-100%",y: "100%"}, {x: "100%", y: "-100%", ease: SlowMo.ease.config(0.5, 0.5, false)}) // in from bot left
    //   .fromTo(".panel.w3", 5, {y: "100%"}, {y: "-100%", ease: SlowMo.ease.config(0.5, 0.5, false)}) // in from bottom
    //   .fromTo(".panel.w4", 5, {x:  "100%",y: "100%"}, {x: "-100%", y: "-100%", ease: SlowMo.ease.config(0.5, 0.5, false)}) // in from bot right
    //   .fromTo(".panel.w5", 5, {y: "100%"}, {y: "-100%", ease: SlowMo.ease.config(0.5, 0.5, false)}) // in from bottom
    //   .fromTo(".panel.w6", 5, {x:  "-100%",y: "100%"}, {x: "100%", y: "-100%", ease: SlowMo.ease.config(0.5, 0.5, false)}) // in from bot left
    //   .fromTo(".panel.w7", 5, {x:  "-100%"}, {x: "100%", ease: SlowMo.ease.config(0.5, 0.5, false)})  // in from right
    //   .fromTo(".panel.w8", 5, {x:  "-100%"}, {x: "100%", ease: SlowMo.ease.config(0.5, 0.5, false)})  // in from right
    //   .fromTo(".panel.w9", 5, {x:  "100%"}, {x: "-100%", ease: SlowMo.ease.config(0.5, 0.5, false)})  // in from right

    // // create scene to pin and link animation
    // new ScrollMagic.Scene({
    //     triggerElement: ".scrollwrap",
    //     triggerHook: "onLeave",
    //     duration: "600%"
    //   })

    //   .setPin(".scrollwrap")
    //   .setTween(wipeAnimation)
    //   .addTo(controller);

          // var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration:1})
          // // animate color and top border in relation to scroll position
          // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
          // .setTween(".hero-section", {height:0,ease: Power3.easeOut}) // the tween durtion can be omitted and defaults to 1
          // .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 4000})
          // animate color and top border in relation to scroll position
          .setTween(".hero", {opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 1000})
          // animate color and top border in relation to scroll position
          .setTween(".fullpage", {backgroundColor:"#dcdcdc"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 600})
          // animate color and top border in relation to scroll position
          .setTween(".ui", {position: "fixed", right:"0",transform: "translate(0%, 0%)"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 1})
          // animate color and top border in relation to scroll position
          .setTween(".heroblock", {x:0, y:100,z:0}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 3000})
          // animate color and top border in relation to scroll position
          .setTween("#portfolio image", {transform: "translate(-30%, 100%) rotate(90deg)"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

                    var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 2000})
          // animate color and top border in relation to scroll position
          .setTween("g#porttext", {transform: "rotateX(135deg) rotateY(10deg) rotateZ(220deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

                              var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 2000})
          // animate color and top border in relation to scroll position
          .setTween("g#portfolio polygon", {transform: "rotateX(135deg) rotateY(10deg) rotateZ(220deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);


          var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 2000})
          // animate color and top border in relation to scroll position
          .setTween("#cv image", {transform: "translate(30%, 200%) rotateX(-15deg) rotateY(35deg) rotateZ(-45deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 5000})
          // animate color and top border in relation to scroll position
          .setTween("g#cvtext", {transform: "rotateX(-130deg) rotateY(-310deg) rotateZ(100deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

                              var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 5000})
          // animate color and top border in relation to scroll position
          .setTween("g#cv polygon", {transform: "rotateX(-130deg) rotateY(-310deg) rotateZ(100deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

                    var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 2000})
          // animate color and top border in relation to scroll position
          .setTween("#contact image", {transform: "translate(50%, 300%) rotateX(-25deg) rotateY(45deg) rotateZ(-35deg)"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

                    var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 2000})
          // animate color and top border in relation to scroll position
          .setTween("g#contacttext", {transform: "rotateX(190deg) rotateY(110deg) rotateZ(200deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

                              var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 2000})
          // animate color and top border in relation to scroll position
          .setTween("g#contact polygon", {transform: "rotateX(190deg) rotateY(110deg) rotateZ(200deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);


          //           var scene = new ScrollMagic.Scene({triggerElement: ".trigger2", duration: 600})
          // // animate color and top border in relation to scroll position
          // .setTween(".section-head", {x:0, y:500,z:0}) // the tween durtion can be omitted and defaults to 1
          // .addTo(controller);

                  var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 700})
          // animate color and top border in relation to scroll position
          .setTween(".w1-svg",  {opacity:"1"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 400})
          // animate color and top border in relation to scroll position
          .setTween("#shp1",  {x:0, y:1068,z:0}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

          //                     var scene = new ScrollMagic.Scene({triggerElement: ".w1-svg", duration: 300})
          // // animate color and top border in relation to scroll position
          // .setTween("#shp2",  {x:0, y:984,z:0}) // the tween durtion can be omitted and defaults to 1
          // .addTo(controller);


                    var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 400})
          // animate color and top border in relation to scroll position
          .setTween("#shp3",  {x:-700, y:987,z:0}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

          //           var scene = new ScrollMagic.Scene({triggerElement: ".w1-svg", duration: 400})
          // // animate color and top border in relation to scroll position
          // .setTween("#shp7",  {x:468, y:0,z:0})
          // .addTo(controller);

          //                     var scene = new ScrollMagic.Scene({triggerElement: ".w1-svg", duration: 400})
          // .addIndicators({name: "t3 (duration: 500)"}) // add indicators (requires plugin)
          // // animate color and top border in relation to scroll position
          // .setTween("#shp4",  {x:-1000, y:0,z:0})
          // .addTo(controller);

                                       var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 400})
          .addIndicators({name: "t3 (duration: 500)"}) // add indicators (requires plugin)
          // animate color and top border in relation to scroll position
          .setTween("#shp5",  {x:-1000, y:-1400,z:0})
          .addTo(controller);

                                                 var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 400})
          .addIndicators({name: "t3 (duration: 500)"}) // add indicators (requires plugin)
          // animate color and top border in relation to scroll position
          .setTween("#shp6",  {x:1192, y:0,z:0})
          .addTo(controller);

  });
