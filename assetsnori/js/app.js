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

  $(".mainnav").my_magicline();
    // $('#idmenu').mnmenu();
    $('.slick-box').slick({
      slidesToShow: 1,
      centerMode: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0, //待ち時間を０に
      speed: 15000, // スピードをゆっくり
      swipe: false, // 操作による切り替えはさせない
      cssEase: 'linear', // 切り替えイージングを'linear'に
      // 以下、操作後に止まってしまう仕様の対策
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
    });

  

