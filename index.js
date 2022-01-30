// toggle category

$(function() {

  $("#creatorbutton").click(function(){
     toggleCreator();
  });

  $("#businessbutton").click(function() {
     toggleBusiness();
  });

  function toggleCreator() {
  $("#creatorbutton").click(function() {
    $("#creatorbutton").attr('class', 'btn btn-light rage');
    $("#businessbutton").attr('class', 'btn btn-outline-light rage');
  });
}

function toggleBusiness() {
$("#businessbutton").click(function() {
  $("#businessbutton").attr('class', 'btn btn-light rage');
  $("#creatorbutton").attr('class', 'btn btn-outline-light rage');
});
}

});



$(function(){
        if(window.innerWidth < 1200) {
            $("iframe").remove("");
        }
});

$(function(){
        if(window.innerWidth < 1400) {
            $(".blockchain").remove("");
        }
});



$(".thankyou").hide();

// form validation


  $(function() {

    $("#age_error_message").hide();
    $("#email_error_message").hide();


    var error_age = false;
    var error_email = false;


    $("#username").focusout(function(){
      check_email();
    });

    $("#age").focusout(function() {
      check_age();
    });




    function check_email() {
      var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      var phoneNum = /^\d{10}$/;
      var email = $("#username").val();
      if (pattern.test(email) || phoneNum.test(email)) {
        $("#email_error_message").hide();
        $("#username").css("border","2px solid green");

      } else {
        $("#email_error_message").html("Invalid Email");
        $("#email_error_message").show();
        $("#username").css("border","2px solid red");
        $("form").click("submit", function(e) {
          e.preventDefault();
        });
        error_email = true;
      }
    }

    function check_age() {
      var ageRegex = /^100|[1-9]?\d$/;
      var age = $("#age").val();
      if (ageRegex.test(age) && age < 100 && age > 1) {
        $("#age_error_message").hide();
        $("#age").css("border", "2px solid green");

      } else {
        $("#age_error_message").html("Age should be between 1-100");
        $("#age_error_message").show();
        $("#age").css("border", "2px solid red");
        $("form").submit(function(e) {
          e.preventDefault();
        });
        error_age = true;
      }
    }


      if (error_age === false && error_email === false) {
        $(function() {

          $("#form").submit(function() {
            $.ajax({
              'url':'send.php',
              'type':'POST',
              'data':$("#form").serialize(),
              'success':function(e) {
                 $("#endgame").hide();
                 $(".thankyou").show();
                 e.preventDefault();

                // what to do when submitted
              }
            });
            return false;
          });
        });
      }



  });




  // light mode//

$(function() {

var lightMode = false;

  $(document).ready(function() {
    $(".theme-icon").on('click', function() {
      $(".theme-icon").toggleClass("flip");
      $(".theme-icon").toggleClass("fa-moon");
      $(".theme-icon").toggleClass("fa-sun");
    });
  });

  $("#light-mode").click(function(){
    if(lightMode === false) {
      enableLightMode();
      lightMode = true;
    } else if(lightMode === true) {
      enableDarkMode();
    }
  });

function enableDarkMode() {


  $("#title").attr("class", "title");
  $("#intro").attr("class", "intro");
  $("#features").attr("class", "features");
  $("#testimonials").attr("class", "testimonials");
  $("#steps").attr("class", "steps");
  $("#ui-ux").attr("class", "ui-ux");
  $("#login-page").attr("class", "login-page");
  $("#cta").attr("class", "cta");
  $("#footer").attr("class", "footer");
  $(".lightmode-navbar-brand").attr("class", "navbar-brand");
  $(".nav-link").attr("class", "nav-link navigation");
  $("#start-button").attr("class", "btn btn-outline-light btn-lg  download-button");
  $(".lightmode-main-introduction").attr("class", "main-introduction");
  $(".lightmode-introduction").attr("class", "introduction");
  $(".lightmode-introduction-text").attr("class", "introduction-text");
  $(".lightmode-main-introduction-text").attr("class", "main-introduction-text");
  $(".lightmode-intro-icon").attr("class", "intro-icon far fa-comments");
  $("#location-icon").attr("class", "intro-icon fas fa-search-location");
  $(".lightmode-btc-intro-icon").attr("class", "btc-intro-icon fab fa-btc");
  $(".lightmode-white-box").attr("class", "white-box");
  $(".lightmode-feature-1").attr("class", "feature-1");
  $(".lightmode-steps-text").attr("class", "steps-text");
  $(".lightmode-steps-p").attr("class", "steps-p");
  $(".lightmode-testimonial-text").attr("class", "testimonial-text");
  $(".lightmode-decentralised").attr("class", "decentralised");
  $(".lightmode-proc").attr("class", "proc");
  $(".lightmode-cta-text").attr("class", "cta-text");
  $(".lightmode-text-box").attr("class", "text-box");
  $(".lightmode-login").attr("class", "login");
  $(".lightmode-form-head").attr("class", "form-head");
  $("#creatorbutton").attr("class", "btn btn-outline-light rage");
  $("#businessbutton").attr("class", "btn btn-outline-light rage");
  $(".steps-vid").attr("src", "images/steps.mp4");
  $(".ui-vid").attr("src", "images/ui-video-min.mp4");
  $(".lightmode-footer-text").attr("class", "footer-text")
  $(".lightmode-black-box").attr("class", "black-box")
  $(".logo").attr("src", "images/c.png")
  lightMode = false;
};


function enableLightMode() {

      $("#title").attr("class", "lightmode-title");
      $("#intro").attr("class", "lightmode-intro");
      $("#features").attr("class", "lightmode-features");
      $("#testimonials").attr("class", "lightmode-testimonials");
      $("#steps").attr("class", "lightmode-steps");
      $("#ui-ux").attr("class", "lightmode-ui-ux");
      $("#login-page").attr("class", "lightmode-login-page");
      $("#cta").attr("class", "lightmode-cta");
      $("#footer").attr("class", "lightmode-footer");
      $(".navbar-brand").attr("class", "navbar-brand lightmode-navbar-brand");
      $(".nav-link").attr("class", "nav-link lightmode-navigation");
      $("#start-button").attr("class", "btn btn-outline-dark btn-lg  download-button");
      $(".main-introduction").attr("class", "lightmode-main-introduction");
      $(".introduction").attr("class", "lightmode-introduction");
      $(".introduction-text").attr("class", "lightmode-introduction-text");
      $(".main-introduction-text").attr("class", "lightmode-main-introduction-text");
      $(".intro-icon").attr("class", "lightmode-intro-icon far fa-comments");
      $("#location-icon").attr("class", "lightmode-intro-icon fas fa-search-location");
      $(".btc-intro-icon").attr("class", "lightmode-btc-intro-icon fab fa-btc");
      $(".white-box").attr("class", "lightmode-white-box");
      $(".feature-1").attr("class", "lightmode-feature-1");
      $(".steps-text").attr("class", "lightmode-steps-text");
      $(".steps-p").attr("class", "lightmode-steps-p");
      $(".testimonial-text").attr("class", "lightmode-testimonial-text");
      $(".decentralised").attr("class", "lightmode-decentralised");
      $(".proc").attr("class", "lightmode-proc");
      $(".cta-text").attr("class", "lightmode-cta-text");
      $(".text-box").attr("class", "lightmode-text-box");
      $(".login").attr("class", "lightmode-login");
      $(".form-head").attr("class", "lightmode-form-head");
      $("#creatorbutton").attr("class", "btn btn-outline-dark rage");
      $("#businessbutton").attr("class", "btn btn-outline-dark rage");
      $(".steps-vid").attr("src", "images/lightmode-steps.mp4");
      $(".ui-vid").attr("src", "images/cole-min.mp4");
      $(".footer-text").attr("class", "lightmode-footer-text")
      $(".black-box").attr("class", "lightmode-black-box")
      $(".logo").attr("src", "images/lightmode-c.png")
      lightMode = true;
    };

    });
