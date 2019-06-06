$(function () {


    // sectionHeader animation 
$(function(){
    var hHover = anime({
        targets: ['#portfolio'],
        duration: 1,
        scale:1.02,
        autoplay: false,
        easing: 'easeInOutQuad',
        loop: false,
      });

      function over(){
        hHover.play({
          scale: 1,
        });
      }
      function out(){
        hHover.play({
          scale: .98,
        });
      }
 

      $('#portfolio').hover(over,out);

    });

    var tl1 = anime.timeline({

        easing:'linear',
        autoplay:false,
        duration:1000,
 
    });

    tl1.add ({
        targets:'.ul',


    },.1);

    tl1.add ({
        targets:'#portfolio',
        translateY:[0,'100vh'],
        translateX:[0,'-40vw'],
        rotateY:[0,40],  
        rotateZ:[0,-5],
        rotateX:[0,55],

    },0);
    
    tl1.add ({
        targets:'#contact',
        translateY:[0,'100vh'],
        translateX:[0,'-15vw'],
        rotate:[0,-30],

    },0);
    tl1.add ({
        targets:'#cv',
        translateY:[0,'100vh'],
        translateX:[0,'-25vw'],
        rotate:[0,-15],

    },0);





    var s2anime = $('.headerSection').offset().top;

            $(document).on('scroll',function(){
            var scrollTop = $(document).scrollTop();
            var progress = scrollTop;
            tl1.seek(tl1.duration * progress);
            console.log(tl1.duration);
            
        });
        
    });




    var section2Top = $('.s2').offset().top;

    window.addEventListener('wheel', function(e) {
            var scrollTop = $(document).scrollTop();
  
        if (e.deltaY > 0) { ////wheel down
            console.log(scrollTop);

                if(scrollTop<section2Top){
                    $('body,html').animate({
                        scrollTop:section2Top,
                }
                , 750, 'linear', function() {
                    // Animation complete.
                  });
            }
        }
  
        if (e.deltaY < 0) { //wheel up
            console.log(scrollTop);
                if(scrollTop<section2Top){
                    $('body,html').animate({
                        scrollTop:0,
                    });

            }
        }


        
    });

