$(window).on('load', function() {
  $(".preloader-1").fadeOut(100)
});

$(window).resize(function(){
        if(window.innerWidth < 1200) {
            $("iframe").remove(".phone, .ethereum");

        }
});
