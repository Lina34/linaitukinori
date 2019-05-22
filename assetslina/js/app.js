$(function() {

    var topBtn = $('.pagetop');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    

    let swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
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

  
    $('.someElementleft').scrollSlide({
      direction   : 'left',
      scrollstart : 400,
      speed: 1000,
      slideback   : false
    });
  $('.someElementright').scrollSlide({
    direction   : 'right',
    speed: 1000,
    scrollstart : 400,
    slideback   : false
  });


  $('.someElementleft2').scrollSlide({
    direction   : 'left',
    scrollstart : 1200,
    speed: 1000,
    slideback   : true
  });

  $('.someElementright2').scrollSlide({
    direction   : 'right',
    scrollstart : 1200,
    speed: 1000,
    slideback   : true
  });


  





  // top
  $(".role").scrollTop(function() {
    anime({
      targets: '.role',
      translateX: -500,
      translateY: -100,
      scale: 1,
      // rotate: 900,
      duration: 1500,
      // direction: 'alternate',
      easing: 'easeInCubic',
      delay: 150

  });

  $(".role2").scrollTop(function() {
    anime({
      targets: '.role2',
      translateX: 300,
      translateY: 230,
      scale: 1.5,
      rotate: 750,
      duration: 1500,
      // direction: 'alternate',
      easing: 'easeInCubic',
      delay: 150

  });









});



});
});