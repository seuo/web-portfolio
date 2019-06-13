$(function () {

    var section2Top = $('.s2').offset().top;

    window.addEventListener('wheel', function(e) {
            var scrollTop = $(document).scrollTop();
  
        if (e.deltaY > 0) { ////wheel down
            console.log(scrollTop);

                if(scrollTop<section2Top){
                    $('body,html').animate({
                        scrollTop:section2Top,
                }
                ,0, 'linear', function() {
                    // Animation complete.
                  });
            }
        }
  
        if (e.deltaY < 0) { //wheel up
            console.log(scrollTop);
                if(scrollTop<section2Top){
                    $('body,html').animate({
                        scrollTop:0,
                    }
                    ,0, 'linear', function() {
                        // Animation complete.
                      });
            }
        }

    });

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
        targets:'.hero',
        backgroundColor:['#fff','rgb(251, 249, 237)'], 
    },0);

    tl1.add ({
        targets:'.s2',
        backgroundColor:['#fff','rgb(251, 249, 237)'], 
    },0);


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
            direction: 'alternate',
            loop: true,
            loopBegin: function(anim) {
                loopBegan++;
                beginLogEl.value = 'loop began : ' + loopBegan;
              },
              loopComplete: function(anim) {
                loopCompleted++;
                completeLogEl.value = 'loop completed : ' + loopCompleted;
              }
        });
        

        // tl2.add ({
        //     targets:'.s2',
        //     backgroundColor:['#fff','rgb(251, 249, 237)'], 
        // },0);

        tl2.add ({
            targets:'.element1',
            top:['-25vh','-30vh'],
        },0);

        tl2.add ({
            targets:'.element1 h2',
            translateY:[0,'3vh'],
        },0);


        tl2.add ({
            targets:'.info',
            color:'#333',
        },0);

        tl2.add ({
            targets:'.platform1',
            marginTop:['0vh','-1vh']
        },0);

        tl2.add ({
            targets:'.logoWork',
            translateY:['7vh','-3vh']
            
        },0);

        tl2.add ({
            targets:'.info',
            translateY:['-10vh','-12vh']
        },0);



        var screenHeight = $(window).height();

        var s2anime = $('.section').offset().top;

        $(document).on('scroll',function(){
            var scrollTop = $(document).scrollTop();
    
            var progress = ((scrollTop-s2anime+100)/500);
    
            tl2.seek(tl2.duration * progress);
        });

        
        
    });








