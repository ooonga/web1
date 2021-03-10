$(document).ready(function(){

//header searchBar
$(".search_btn").click(function(){
  $("#search_bar").addClass("on");
  $(".search_close").click(function(){
    $("#search_bar").removeClass("on");
  });
  return false;
});

//sub table page change
$(".p_1").click(function(){
  $("#p_1").show();
  $("#p_2").hide();
  $(this).addClass("on");
  $(".p_2").removeClass("on");
});
$(".p_2").click(function(){
  $("#p_2").css('display','block');
  $("#p_1").hide();
  $(this).addClass("on");
  $(".p_1").removeClass("on");
});

  //gallery img show
  $(".eventbox a").click(function(){
    var imgSrc = $(this).attr("href");
    $("#gallerybox img").before("<img src='"+imgSrc+"' alt=''>");
    $("#gallerybox img:last").fadeOut("fast",function(){
      $(this).remove();
    });
  //gallery info show
    $(".eventbox a").find(".info").removeClass("on");
    $(this).children(".info").addClass("on");
    return false;
  });

  //FAQ checkbox only one
  $("input[type=checkbox]").click(function() {
    if($(this).prop("checked")){
      $("input[type=checkbox]").prop("checked",false);
      $(this).prop("checked",true); //prop 속성값을 가지고 온다. ==attr
    }
  });
  //FAQ e-mail select > text
  $("#select_box").change(function(){
    var opTion = $('#select_box').val();
    $('#select_mail').val(opTion);
  });

  //mobile btn {
  $("#mobile_open").click(function(){
    $("#mobile").addClass("on");
  });
  $("#mobile_close").click(function(){
    $("#mobile").removeClass("on");
  });

}); // document ready
