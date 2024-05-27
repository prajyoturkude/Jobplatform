(function ($) {
"use strict"; 

    $(document).ready(function() {

      function toggleSidebar() {
        $(".khb-mobile").toggleClass("active");
        $("#page").toggleClass("move-to-left");
      }

      var a = $(".khb-mobilenav");
      a.length && (a.children("li").addClass("menu-item-parent"), a.find(".menu-item-has-children > a").on("click", function(e) {
          e.preventDefault();
          $(this).toggleClass("opened");
          var n = $(this).next(".sub-menu"),
              s = $(this).closest(".menu-item-parent").find(".sub-menu");
          a.find(".sub-menu").not(s).slideUp(250), n.slideToggle(250)
      }));
            
      $(".khbtap,.khbclose").on("click tap", function() {
        toggleSidebar();
      });
      $('#preloader').fadeOut('slow',function(){$(this).remove();});
      
    });

})(jQuery);