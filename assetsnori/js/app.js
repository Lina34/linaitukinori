var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  
    effect: 'cube',
  });

  $(window).scroll(function(){

    let scrollTopValue = $(document).scrollTop();

    if (scrollTopValue > 700){
      $('.topbutton img').fadeIn();
    } else {
      $('.topbutton img').fadeOut();
    }
  })

  let topButton = $('.topbutton img');

  topButton.click(function(){
    $('body,html').animate({scrollTop: 0}, 500);
  })
  

