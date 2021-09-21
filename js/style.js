$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "elastic",
        closeEffect: "elastic"
    });
    
    
    $(".btn-submit-contact").click(function(e){
        e.preventDefault();
        //alert('gi');
        var _token = $("input[name='ci_csrf_token']").val();
        $('.loader-wait').css('display','block');
        $.ajax({
            type:'POST',
            url: "http://dsnaerospace.com/savecontact",
            dataType: "json", 
            data: $("#contact_query").serialize(),
            success: function(data) {
                if($.isEmptyObject(data.error)){
                    $('html, body').animate({
                        scrollTop: $(".print-error-msg").offset().top
                    }, 1000);
                    $(".print-error-msg").css('display','none');
                    $('#contact_query')[0].reset();
                    $(".success-msg").css('display','block');
                    $(".success-msg").html(data.success);
                    
                }else{
                    $('html, body').animate({
                        scrollTop: $(".success-msg").offset().top
                    }, 1000);
                    $(".success-msg").css('display','none');
                    $(".print-error-msg").css('display','block');
                    $(".print-error-msg").html(data.error);
                }
            },
            complete: function(){
                $('.loader-wait').css('display','none');
            }
        });
    }); 
    
    $(".btn-submit-register").click(function(e){
        e.preventDefault();
        //alert('gi');
        var _token = $("input[name='ci_csrf_token']").val();
        $('.loader-wait').css('display','block');
        $.ajax({
            type:'POST',
            url: "http://dsnaerospace.com/saveuser",
            dataType: "json", 
            data: $("#register_query").serialize(),
            success: function(data) {
                if($.isEmptyObject(data.error)){
                    $('html, body').animate({
                        scrollTop: $("#register-instruction").offset().top
                    }, 1000);
                    $(".print-error-msg").css('display','none');
                    $('#register_query')[0].reset();
                    $(".success-msg").css('display','block');
                    $(".success-msg").html(data.success);
                    
                }else{
                    $('html, body').animate({
                        scrollTop: $("#register-instruction").offset().top
                    }, 1000);
                    $(".success-msg").css('display','none');
                    $(".print-error-msg").css('display','block');
                    $(".print-error-msg").html(data.error);
                }
            },
            complete: function(){
                $('.loader-wait').css('display','none');
            }
        });
    }); 
    
    $(".btn-submit-payment").click(function(e){
        e.preventDefault();
        //alert('gi');
        var _token = $("input[name='ci_csrf_token']").val();
        $('.loader-waitp').css('display','block');
        $.ajax({
            type:'POST',
            url: "http://dsnaerospace.com/savepayment",
            dataType: "json", 
            data: $("#payment_query").serialize(),
            success: function(data) {
                if($.isEmptyObject(data.error)){
                    $('html, body').animate({
                        scrollTop: $("#payment-instruction").offset().top
                    }, 1000);
                    $(".print-error-msgp").css('display','none');
                    $('#payment_query')[0].reset();
                    $(".success-msgp").css('display','block');
                    $(".success-msgp").html(data.success);
                    
                }else{
                    $('html, body').animate({
                        scrollTop: $("#payment-instruction").offset().top
                    }, 1000);
                    $(".success-msgp").css('display','none');
                    $(".print-error-msgp").css('display','block');
                    $(".print-error-msgp").html(data.error);
                }
            },
            complete: function(){
                $('.loader-waitp').css('display','none');
            }
        });
    });
});

    window.onscroll = function() {myFunction()};

    var nav = document.getElementById("nav");
    var sticky = nav.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    }