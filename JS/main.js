
$(window).load(function() {
    $(".loader").fadeOut(500);
    $(".loader1, .loader2 , .loader3, .loader4").fadeOut(500); 
    $(".model-left, .model-right").animate({"top":"0"},1200); 
    AOS.init();
  });

$(function()
    {
        const $gallery = $('.gallery a').simpleLightbox();
    });

