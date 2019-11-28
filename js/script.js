// PhotoSwipe
initPhotoSwipeFromDOM('.my-gallery');

$(function () {

  $('.card-caption').on('click', 'a', function (e) {
    e.stopPropagation();
  });

  var $nav = $('#gnav');
  var offset = $nav.offset();
  var navHeight = $nav.innerHeight();
  var headerInner = $('#header .inner');

  //ページ内スクロール
  $('a[href^="#"]').on('click', function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  //ページトップへもどる
  $('#js-pageTop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  //.accordion2の中のp要素がクリックされたら
  $('.accordion2 p').on('click', function(){

  //クリックされた.accordion2の中のp要素に隣接する.accordion2の中の.innerを開いたり閉じたりする。
  $(this).next('.accordion2 .inner').slideToggle();

  //クリックされた.accordion2の中のp要素以外の.accordion2の中のp要素に隣接する.accordion2の中の.innerを閉じる
  $('.accordion2 p').not($(this)).next('.accordion2 .inner').slideUp();
  });

  // $(".inview_re").on("inview",function(event,isInView,visiblepartX,visiblepartY) {
  //   if(isInView){
  //     $(this).stop().addClass("is-show");
  //   }
  //   else{
  //     $(this).stop().removeClass('is-show');
  //   }
  // });
});

$(function() {
  $(".inview_re").on("inview",function(event,isInView,visiblepartX,visiblepartY) {
    if(isInView){
      $(this).stop().addClass("is-show");
    }
    else{
      $(this).stop().removeClass('is-show');
    }
  });
});



