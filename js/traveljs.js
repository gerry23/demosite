
$(document).ready(function(){

    $(".button-collapse").sideNav();

    $('.parallax').parallax();

    $('.slider').slider({
          height:700,
     });
 });      

 $("a.changeVolume").on("click",function(){
  var status = $(this).attr("rel");

    if(status == "closeVolume")
        {
          $("video")[0].muted = false;
          $(this).attr("rel","openVolume");
          $(this).find("img.icon").attr("src","images/ic_volume_up.png");
        }
    else
        {
          $("video")[0].muted = true;
          $(this).attr("rel","closeVolume");
          $(this).find("img.icon").attr("src","images/ic_volume_off.png");
        }
          });

$("ul li a").on("click",function(){
  var a_elm = $(this);
  var target_id = a_elm.attr("href");
  var topTo = 0 ;
   if(target_id != "#"){
     topTo = $(target_id).position().top;
   }

  $("html,body").animate({
    scrollTop: topTo
  },600,function()
  {
  $("ul li[ class ='active']").removeClass('active');
    a_elm.parent().addClass('active');
  });
  return false;
});
