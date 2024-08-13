$(document).ready(function() {
    $(".tab-item").click(function() {
        // 클릭한 탭을 활성화
        $(".tab-item").removeClass("active");
        $(this).addClass("active");

        // 클릭한 탭에 해당하는 콘텐츠를 표시
        var index = $(this).index();
        $(".tab-content").removeClass("active");
        $(".tab-content:eq(" + index + ")").addClass("active");
    });


});



$(document).ready(function(){
    function toggleDropdown() {
        // Check if the screen width is below 1024 pixels
        // if (window.innerWidth < 1024) {
        //     // $("#bo-cate-ul").toggleClass("on");
        //     $("#bo-cate-ul").addClass("on");
        //     $("#bo-cate h2").click(function(){
        //         $(this).toggleClass("on");
       
        //     });
        // } else {
        //     $("#bo-cate-ul").removeClass("on");
        // }
    }

    $("#bo-cate h2").click(function(){
        $(this).toggleClass("on");
        $("#bo-cate-ul").toggleClass("on");
    });

    // Check window width on resize
    $(window).resize(function(){
        toggleDropdown();
    });



      //상세슬라이드
  var swiper1 = new Swiper(".mySwiper1", {
    //loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      540: {
            slidesPerView: 2,  
            spaceBetween: 20     
            },

      1360: {
        slidesPerView: 3,        
        spaceBetween: 20 
      },
    },
  });
    var swiper2 = new Swiper(".mySwiper2", {
        //loop: true,
        //spaceBetween: 10,

        navigation: {
          nextEl: ".swiper_arrow.swiper-button-next",
          prevEl: ".swiper_arrow.swiper-button-prev",
        },
        //effect:"fade",
        thumbs: {
          swiper: swiper1,
        },
      });
      
      

    
});




$(document).ready(function() {
    $(".tablinks").click(function() {
      var tabId = $(this).data("tab");

      // 모든 탭 숨기기
      $(".tabcontent").hide();
      // 모든 탭 버튼 클래스 초기화
      $(".tablinks").removeClass("active");

      // 선택한 탭 보이기
      $("#" + tabId).show();
      // 선택한 탭 버튼에 active 클래스 추가
      $(this).addClass("active");
    });

    // 페이지 로드시 기본으로 열릴 탭 설정
    $(".tablinks[data-tab='Tab1']").click();
  });
