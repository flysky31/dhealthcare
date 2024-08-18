//animation
function aniCtrl(){
    var _st = $(window).scrollTop();   
    var _wH = $(window).height();

    $('.ani-item').each(function(){
        var _this = $(this);
        if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
            _this.addClass('done');
        }
    });
}


$(document).ready(function(){
    aniCtrl();
    $(window).scroll(function(){
        aniCtrl();
    });
});


//board tab
$(document).ready(function () {
    // 탭 클릭 이벤트
    $('.tab').click(function (event) {
        event.preventDefault();

        $('.tab').removeClass('active');
        $('.tab-pane').removeClass('active');
        
        $(this).addClass('active');
        var tabId = $(this).data('tab');

        $('#' + tabId).addClass('active');

        history.replaceState(null, null, '#' + tabId);
    });

    if (window.location.hash) {
        var tabId = window.location.hash.replace('#', '');
        $('.tab[data-tab="' + tabId + '"]').click();
    }
});
