$(function () {

    var animeElement = anime.timeline({
        easing:'linear',
        autoplay:true,
        duration:1000,
        loop: true,
        direction: 'alternate',
    })
    animeElement.add({
        targets: '.element1 img:hover',
        translateY: [10,0],
        easing: 'easeInOutSine'
      });
      

    var tl1 = anime.timeline({

        easing:'linear',
        autoplay:false,
        duration:1000,
        
 
    });


    tl1.add ({
        targets:'#portfolioContainer',
        translateY:[0,'150%'],
        translateX:[0,'-50vw'],
        scale:[1,2],
        rotateY:[0,40],  
        rotateZ:[0,-5],
        rotateX:[0,75],
        opacity:[1,0],
        fill:'#333',
    },0);
    
    tl1.add ({
        targets:'#contactContainer',
        translateY:[0,'200vh'],
        translateX:[0,'-15vw'],
        rotate:[0,-50],
        opacity:[1,0],
    },0);
    tl1.add ({
        targets:'#cvContainer',
        translateY:[0,'80vh'],
        translateX:[0,'-25vw'],
        rotate:[0,-15],
        opacity:[1,0],
    },0);

    var screenHeight = $(window).height();
    var s1anime = $('.headerSection').offset().top;

            $(document).on('scroll',function(){
            var scrollTop = $(document).scrollTop();
            var progress = scrollTop/screenHeight;
            tl1.seek(tl1.duration * progress);
            console.log(progress);
            
        });
        var tl2 = anime.timeline({
            easing:'linear',
            autoplay:false,
            duration:1000,
    
        });
    
        tl2.add ({
            targets:'.s2',
            backgroundColor:'#111', 
        },0);

        var screenHeight = $(window).height();
        var s2anime = $('.s2').offset().top;
            $(document).on('scroll',function(){
            var scrollTop = $(document).scrollTop();
            var progress = scrollTop/screenHeight;
            tl2.seek(tl1.duration * progress);
        });
    });






    // var section2Top = $('.s2').offset().top;

    // window.addEventListener('wheel', function(e) {
    //         var scrollTop = $(document).scrollTop();
  
    //     if (e.deltaY > 0) { ////wheel down
    //         console.log(scrollTop);

    //             if(scrollTop<section2Top){
    //                 $('body,html').animate({
    //                     scrollTop:section2Top,
    //             }
    //             , 750, 'linear', function() {
    //                 // Animation complete.
    //               });
    //         }
    //     }
  
    //     if (e.deltaY < 0) { //wheel up
    //         console.log(scrollTop);
    //             if(scrollTop<section2Top){
    //                 $('body,html').animate({
    //                     scrollTop:0,
    //                 });

    //         }
    //     }


        
    // });

