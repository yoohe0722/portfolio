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

  //.accordion1の中のp要素がクリックされたら
	$('.accordion1 p').click(function(){

//クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
		$(this).next('ul').slideToggle();
});

});
