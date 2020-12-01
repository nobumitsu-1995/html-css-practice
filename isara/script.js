$(function(){
  $(".qa").click(function(){
    var $accord =$(this).find('.a');
    var $tri =$(this).find('.tri');
    if($accord.hasClass('open')){
      $accord.removeClass('open');
      $accord.slideUp();
      $tri.removeClass('fa-angle-up').addClass('fa-angle-down');
    }else{
      $accord.addClass('open');
      $accord.slideDown();
      $tri.removeClass('fa-angle-down').addClass('fa-angle-up');
    }
  });

  $('#backTop').click(function(){
    $('html, body').animate({
      'scrollTop':0},'slow');
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      $('#backTop').fadeIn();
    }else{
      $('#backTop').fadeOut();
    };
  });

  $('.cfbtn').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position},'slow');
    });
  });
