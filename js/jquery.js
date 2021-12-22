$(document).ready(function () {
    $(".submn").hide();
    $(".menu > li").hover(
      function () {
        $(this).find(".submn").show();
      },
      function () {
        $(".submn").hide();
      }
    );

    var n = $("#next").index(); // next버튼의 인덱스값
  

    $("#next").click(function(e){
      e.preventDefault();

      if(n == 0){
        stop();
        $(".imgs").animate({left : "-100%"},1000);
        $("#main_img .btns .first_btn").css({"background-color": "#fff"})
        $("#main_img .btns .second_btn").css({'background-color' : "red"})
        n = 1;

      }
      else if(n == 1){
        stop();
          $(".imgs").animate({left : "-200%"},1000);
          $("#main_img .btns .second_btn").css({"background-color": "#fff"})
          $("#main_img .btns .third_btn").css({'background-color' : "red"})
          
          n = 2;
      }
      else if(n == 2){
        stop();
        $(".imgs").animate({left : "0"},1000);
        $("#main_img .btns .third_btn").css({"background-color": "#fff"})
          $("#main_img .btns .first_btn").css({'background-color' : "red"})
        n = 0;
    }
    });

    $("#prev").click(function(e){
      e.preventDefault();

      if(n == 0){
        stop();
        $(".imgs").animate({left : "-200%"},1000);
        $("#main_img .btns .first_btn").css({"background-color": "#fff"})
        $("#main_img .btns .third_btn").css({'background-color' : "red"})
        n = 2;

      }
      else if(n == 1){
        stop();
          $(".imgs").animate({left : "0"},1000);
          $("#main_img .btns .third_btn").css({"background-color": "#fff"})
          $("#main_img .btns .second_btn").css({'background-color' : "red"})
          n = 0;
      }
      else if(n == 2){
        stop();
        $(".imgs").animate({left : "-100%"},1000);
        $("#main_img .btns .second_btn").css({"background-color": "#fff"})
        $("#main_img .btns .first_btn").css({'background-color' : "red"})
        n = 1;
    }
    });
      



  });