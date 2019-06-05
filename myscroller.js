  $(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

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
          .setTween("#portfolio image", {transform: "translate(-30%, 100%) rotate(90deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 1000})
          // animate color and top border in relation to scroll position
          .setTween("g#porttext", {transform: "rotateX(135deg) rotateY(10deg) rotateZ(220deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 500})
          // animate color and top border in relation to scroll position
          .setTween("g#portfolio polygon", {transform: "rotateY(135deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);


        var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 2000})
          // animate color and top border in relation to scroll position
          .setTween("#cv image", {transform: "translate(30%, 200%) rotateX(-15deg) rotateY(35deg) rotateZ(-45deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 5000})
          // animate color and top border in relation to scroll position
          .setTween("g#cvtext", {transform: "rotateX(-130deg) rotateY(-310deg) rotateZ(100deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 500})
          // animate color and top border in relation to scroll position
          .setTween("g#cv polygon", {transform: "rotateY(110deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 2000})
          // animate color and top border in relation to scroll position
          .setTween("#contact image", {transform: "translate(50%, 300%) rotateX(-25deg) rotateY(45deg) rotateZ(-35deg)"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 2000})
          // animate color and top border in relation to scroll position
          .setTween("g#contacttext", {transform: "rotateX(190deg) rotateY(110deg) rotateZ(200deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 800})
          // animate color and top border in relation to scroll position
          .setTween("g#contact polygon", {transform: "rotateY(110deg)",opacity:"0"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);


        var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 700})
          // animate color and top border in relation to scroll position
          .setTween(".w1-svg",  {opacity:"1"}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 400})
          // animate color and top border in relation to scroll position
          .setTween("#shp1",  {x:0, y:1068,z:0}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 400})
          // animate color and top border in relation to scroll position
          .setTween("#shp3",  {x:-700, y:987,z:0}) // the tween durtion can be omitted and defaults to 1
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 400})
        //   .addIndicators({name: "t3 (duration: 500)"}) // add indicators (requires plugin)
          // animate color and top border in relation to scroll position
          .setTween("#shp5",  {x:-1000, y:-1400,z:0})
          .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 400})
        //   .addIndicators({name: "t3 (duration: 500)"}) // add indicators (requires plugin)
          // animate color and top border in relation to scroll position
          .setTween("#shp6",  {x:1192, y:0,z:0})
          .addTo(controller);

  });

  var section2Top = $('.section2').offset().top;

  window.addEventListener('wheel', function(e) {
          var scrollTop = $(document).scrollTop();

        if (e.deltaY > 0) { ////wheel down
            console.log(scrollTop);
                  if(scrollTop<section2Top){
                          $('body,html').animate({scrollTop:section2Top});
                  }
          }

        if (e.deltaY < 0) { //wheel up
            console.log(scrollTop);
                if(scrollTop<section2Top){
                        $('body,html').animate({scrollTop:0});
                }
        }

});