$(function () {

    // sectionHeader animation 


    var tl1 = anime.timeline({

        easing:'easeInOutQuart',
        autoplay:false,
        duration:3000,
 
    });

    tl1.add ({
        targets:'#portfolio',
        translateY:[0,'100vh'],
        translateX:[0,'-40vw'],
        rotateY:[0,40],  
        rotateZ:[0,-5],
        rotateX:[0,55],
        opacity:[1,0],  
    });
    tl1.add ({
        targets:'#contact',
        translateY:[0,'90vh'],
        translateX:[0,'-15vw'],
        rotate:[0,-30],
        opacity:[1,0],
        
    });
    tl1.add ({
        targets:'#cv',
        translateY:[0,'70vh'],
        translateX:[0,'-25vw'],
        rotate:[0,-15],
        opacity:[1,0],
        
    });





    var s2anime = $('.headerSection').offset().top;

            $(document).on('scroll',function(){
            var scrollTop = $(document).scrollTop();
            var progress = (scrollTop-s2anime+0);
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