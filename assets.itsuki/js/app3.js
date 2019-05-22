$(function() {
    
    $(window).scroll(function() {
        let scrollTop = $(document).scrollTop();
    
        let main1Top = $('.main1').offset().top
        let main2Top = $('.main2').offset().top;
        let main3Top = $('.main3').offset().top;
    
    
        // main1----------------------------------------------
    
        // main2----------------------------------------------
        if (scrollTop >= 200) {
          $('.historyEn').fadeIn(3000);

        }
    
        //main3-----------------------------------------------
        if (scrollTop >= 400) {
          $('.historyJa').fadeIn(4000);

        }

    
        if (scrollTop >= main2Top - 50) {
          $('.time').animate({left: 0}, 2000);
          $('.machine').animate({left: 0}, 2000);


        }

        if (scrollTop >= main2Top + 400) {
            $('.main3h1').animate({left: 0}, 2000);
            $('.main3p').fadeIn(3000);
            $('.ds').fadeIn(4000);
        }

        if (scrollTop >= main3Top) {
            $('.main4h1').animate({right: 0}, 2000);
            $('.switch').fadeIn(4000);
            $('.main4p').fadeIn(2000);
        }

        
    });
}); 