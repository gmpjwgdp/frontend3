const menus = ["#menu1","#menu2","#menu3","#menu4","#menu5","#menu6","#menu7","#menu8",];
menus.forEach(function(menu){
  jQuery(document).ready(function($){
    $(menu).hover(
      function(){
        jQuery(document).ready(function($){
            $(menu).css("color","orange");
          });
        },
        function(){
          jQuery(document).ready(function($){
            $(menu).css("color","tomato");

      });
    }
  );
  });
});

jQuery(document).ready(function($){
  $("button").hover(
    function(){
      jQuery(document).ready(function($){
          $("button").css("cursor","pointer");
          $("button").css("cursor","hand");
        });
      },
      function(){
        jQuery(document).ready(function($){
          $("button").css("cursor","default");

    });
  }
);
});

$(window).on('scroll', function () {
var doch = $(document).innerHeight();
var winh = $(window).innerHeight();
var bottom = doch - winh ;
if (bottom　* 0.08 <= $(window).scrollTop()) {
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('.feature4scroll').fadeIn(1500);
    });
  },100);
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('#jump4stop').fadeIn(1700);
    });
  },300);
}
});
$(window).on('scroll', function () {
var doch = $(document).innerHeight();
var winh = $(window).innerHeight();
var bottom = doch - winh ;
if (bottom　* 0.24 <= $(window).scrollTop()) {
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('.message4scroll').fadeIn(1500);
    });
  },100);
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('#message_img').fadeIn(1700);
    });
  },300);
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('.a').fadeIn(1900);
    });
  },500);
}
});
$(window).on('scroll', function () {
var doch = $(document).innerHeight();
var winh = $(window).innerHeight();
var bottom = doch - winh ;
if (bottom　* 0.4 <= $(window).scrollTop()) {
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('.voice4scroll').fadeIn(1500);
    });
  },100);
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('.left').fadeIn(1500);
    });
  },300);setTimeout(function(){
    jQuery(document).ready(function($){
        $('.center').fadeIn(2000);
    });
  },300);setTimeout(function(){
    jQuery(document).ready(function($){
        $('.right').fadeIn(2500);
    });
  },300);
}
});
$(window).on('scroll', function () {
var doch = $(document).innerHeight();
var winh = $(window).innerHeight();
var bottom = doch - winh ;
if (bottom　* 0.55 <= $(window).scrollTop()) {
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('.partner4scroll').fadeIn(1500);
    });
  },100);
}
});
$(window).on('scroll', function () {
var doch = $(document).innerHeight();
var winh = $(window).innerHeight();
var bottom = doch - winh ;
if (bottom　* 0.7 <= $(window).scrollTop()) {
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('.faq4scroll').fadeIn(1500);
    });
  },100);
}
});
$(window).on('scroll', function () {
var doch = $(document).innerHeight();
var winh = $(window).innerHeight();
var bottom = doch - winh ;
if (bottom　* 0.85 <= $(window).scrollTop()) {
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('.news4scroll').fadeIn(1500);
    });
  },100);
}
});
Pace.on('done', function(){
  $('.wrap').fadeIn(2000);
});

// var doch = $(document).innerHeight();
// var winh = $(window).innerHeight();
// var bottom = doch - winh ;
// var scrollHeight = 0.12;
// const scrolls = [".feature4scroll"]
// scrolls.forEach(function(scroll){
//   if (bottom　* scrollHeight <= $(window).scrollTop()) {
//       setTimeout(function(){
//         jQuery(document).ready(function($){
//           $(scroll).fadeIn(1000);
//         });
//       },100);
//     }
//
// });
