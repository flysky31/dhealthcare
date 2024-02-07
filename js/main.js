

$(document).ready(function() {
    //deps01
    new Swiper(".main_Swiper", {
      spaceBetween: 30,
      centeredSlides: true,
       autoplay: {
           delay: 4000,
           disableOnInteraction: false,
       },
      loop:true,
      effect:"fade",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      preloadImages: false, // 기본값은 true이며, false로 변경
      lazy: true, // lazy 로딩 사용 여부에 따라 설정
      on: {
        imagesReady: function () {
          // 모든 이미지가 로드된 후에 실행될 코드 작성
          console.log('모든 이미지가 로드되었습니다.');
        },
      },
      on: {
        slideChangeTransitionStart: function () {
          $('#deps01 .txt, #deps01 .forst, #deps01 .twost, #deps01 .thost').hide(0);
          $('#deps01 .txt, #deps01 .forst, #deps01 .twost, #deps01 .thost').removeClass('aos-init').removeClass('aos-animate');
        },
        slideChangeTransitionEnd: function () {
          $('#deps01 .txt, #deps01 .forst, #deps01 .twost, #deps01 .thost').show(0);
          AOS.init();
        },
    }
    });
    AOS.init();





});

$(document).ready(function() {
    //deps03
    var deps03_Swiper = new Swiper(".deps03_Swiper", {
      spaceBetween: 20,
      slidesPerView: 3.5,
        autoplay: {
         delay: 3000,
          disableOnInteraction: false,
        },
      loop:true,
      speed:1000,
      navigation: {
        nextEl: ".deps03_arrow .swiper-button-next",
        prevEl: ".deps03_arrow .swiper-button-prev",
      },

      breakpoints: {
        1024: {
          slidesPerView:2.5,
          spaceBetween: 30,
        },
        540: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
      },
    });

  });


  $(document).ready(function() {
    // Hide all tab content except the active one
    $('.tab-content:not(.active)').hide();

    // Handle tab clicks
    $('.tabs li').click(function() {
        var isActive = $(this).hasClass('active');

        // Remove 'active' class from all tabs
        $('.tabs li').removeClass('active');

        // Remove 'active' class from all tab content
        $('.tab-content').removeClass('active').hide();

        var activeTab = $(this).find('a').data('tab');

        // Toggle 'active' class on the clicked tab
        $(this).toggleClass('active');
        $('.tab-content[data-content="' + activeTab + '"]').toggleClass('active').toggle();
        // If the clicked tab was not originally active, toggle 'active'
        // if (!isActive) {
        //     var activeTab = $(this).find('a').data('tab');
        //     $(this).addClass('active');
        //     $('.tab-content[data-content="' + activeTab + '"]').addClass('active').show();
        // }
    });
});