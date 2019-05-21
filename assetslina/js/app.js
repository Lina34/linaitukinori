$(function() {

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


  

  // 押したらスクロールする
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
















});