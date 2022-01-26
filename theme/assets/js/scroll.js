key('up, left', function(){swiper.slidePrev();});
key('down, right', function(){swiper.slideNext();});

var swiper = new Swiper(".swiper-lest", {
    direction: "vertical",
    slidesPerView: 1,
    autoHeight: true,
    mousewheel: {
    	"sensitivity": 6
    }
});

swiper.on('slideChange', function () {
    if (swiper.isBeginning || swiper.isEnd) {
        $('.gototop').addClass('d-none');
    }
    else {
        $('.gototop').removeClass('d-none');
        $('.d-lg-block .img-hover-zoom img').attr('src', $('.d-lg-block .img-hover-zoom img').data('source'));
    }

    $('.d-lg-block .img-hover-zoom img').css('transform', 'scale('+$('.d-lg-block .slide-'+swiper.activeIndex).data('scale')+') translate('+$('.d-lg-block .slide-'+swiper.activeIndex).data('translate')+')');
    changeUrl($('.d-lg-block .slide-'+swiper.activeIndex).data('title'), $('.d-lg-block .slide-'+swiper.activeIndex).data('url'));
});

var swiper_mobile = new Swiper(".swiper-lest-mobile", {
	direction: "vertical",
    slidesPerView: 1,
    autoHeight: false
});
swiper_mobile.on('slideChange', function () {
    if (swiper_mobile.isBeginning || swiper_mobile.isEnd) {
        $('.gototop').addClass('d-none');
    }
    else {
        $('.gototop').removeClass('d-none');
        $('.d-block .img-hover-zoom img').attr('src', $('.d-block .img-hover-zoom img').data('xl'));
    }

    $('.d-block .img-hover-zoom img').css('transform', 'scale('+$('.d-block .slide-'+swiper_mobile.activeIndex).data('scale')+') translate('+$('.d-block .slide-'+swiper_mobile.activeIndex).data('translate')+')');
    changeUrl($('.d-block .slide-'+swiper_mobile.activeIndex).data('title'), $('.d-block .slide-'+swiper_mobile.activeIndex).data('url'));
});

$(document).on('click touchstart', '.chevron-up', function(e) {
    swiper.slidePrev();
    swiper_mobile.slidePrev();
});

$(document).on('click touchstart', '.chevron-down', function(e) {
    swiper.slideNext();
    swiper_mobile.slideNext();
});

$(document).on('click touchstart', '.cover-image, .gototop', function(e) {
    swiper.slideTo(0);
    swiper_mobile.slideTo(0);
});

$(document).on('click touchstart', '.link-share', function(e) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.link-share').data('url')).select();
    document.execCommand("copy");
    $temp.remove();
    alert('Link copied.');
});

function changeUrl(title, url) {  
    if (typeof(history.pushState) != "undefined") {  
        var obj = { Title: title, Url: url };  
        history.pushState(obj, obj.Title, obj.Url);  
    }  
}  