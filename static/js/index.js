window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

  const options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
    autoplay: false,
    dots: true,
    centerMode: true,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } }
    ]
  };
  
  $('.sub-results-carousel').each(function() {
    const $wrap = $(this);
    $wrap.slick(options);

    function updateSlides() {
      // 所有视频先移除 controls 并暂停
      $wrap.find('video').each(function() {
        this.pause();
        $(this).removeAttr('controls');
      });

      // 中心帧的视频：添加 controls 并自动播放
      const $centerVid = $wrap.find('.slick-center video');
      $centerVid.attr('controls', 'controls');
      $centerVid.get(0)?.play();
    }

    // 初始化和切换完成后都执行一次
    $wrap.on('init afterChange', updateSlides);

    // 点击两侧视频切换幻灯片
    $wrap.on('click', '.slick-slide:not(.slick-center) video', function() {
      const clickedIdx = $(this).closest('.slick-slide').data('slick-index');
      const currIdx    = $wrap.slick('slickCurrentSlide');
      if (clickedIdx > currIdx) $wrap.slick('slickNext');
      else                      $wrap.slick('slickPrev');
    });

    // 强制触发 init，把第一帧当作一次切换来走逻辑
    $wrap.slick('slickGoTo', 0);
  });
  $('.carousel').slick(options);
})



$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // carousel initialization
  const options1 = {
    slidesToScroll: 1,
    slidesToShow: 4,
    loop: true,
    infinite: true,
    autoplay: true, // 启用自动播放
    autoplaySpeed: 2000, // 自动播放的速度
    dots: true,
    draggable: false,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // 初始化slick轮播
  $('.carousel1').slick(options1);

  // 确保点击视频后，轮播继续播放
  $('.carousel1 .slick-slide video').on('click', function () {
    // 监听视频点击事件后，重新启动自动播放
    $('.carousel1').slick('slickPlay');
  });

  // 轮播切换后，确保自动播放继续
  $('.carousel1').on('afterChange', function(event, slick, currentSlide){
    $('.carousel1').slick('slickPlay');
  });

  // 自定义的下一张和上一张按钮点击时重新启动自动播放
  $(".slick-next").click(function() {
    $('.carousel1').slick('slickPlay');
  });

  $(".slick-prev").click(function() {
    $('.carousel1').slick('slickPlay');
  });
});


$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

  // carousel initialization
  const options = {
    slidesToScroll: 1,
    slidesToShow: 4,
    loop: true,
    infinite: true,
    autoplay: false,
    dots: true,
    draggable: false,
    touchMove: true,
    lazyLoad: 'progressive',
    centerMode: true, // 启用居中模式
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  $('.carousel2').slick(options);
  // $('.carousel2').css('background-color', '#f0f0f0'); // Change this color to your preference
  // 确保点击视频后，轮播继续播放
})