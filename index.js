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



$(window).resize(function(){
        if(window.innerWidth < 1200) {
            $("iframe").remove(".phone, .ethereum");
        }
});

$(window).resize(function(){
        if(window.innerWidth < 1400) {
            $("img").remove(".blockchain");
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
