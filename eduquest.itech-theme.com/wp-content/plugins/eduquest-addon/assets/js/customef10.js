(function ($) {
  "use strict";

  var eq_hero_slider = function ($scope, $) {
    $scope.find('.hero__area').each(function () {

      var settings = $(this).data('xld');
      var slider = $(this).find('.hero__slider');
      var options = {
        navigation: {
          nextEl: ".hero-btn-next",
          prevEl: ".hero-btn-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
          },
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        loop: true,
      };

      if ('undefined' === typeof Swiper) {
        const asyncSwiper = elementorFrontend.utils.swiper;
        new asyncSwiper(slider, options).then((newSwiperInstance) => {
          var swiper = newSwiperInstance;
        });

      } else {
        var swiper = new Swiper(slider, options);
      }

    });
  };

  var eq_category_slider = function ($scope, $) {
    $scope.find('.category__area-2').each(function () {

      var settings = $(this).data('xld');
      var slider = $(this).find('.category__slider');
      var options = {
        'loop': true,
        'speed': 1500,
        'freemode': true,
        'slidesPerView': 3,
        'spaceBetween': 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      };

      if ('undefined' === typeof Swiper) {
        const asyncSwiper = elementorFrontend.utils.swiper;
        new asyncSwiper(slider, options).then((newSwiperInstance) => {
          var swiper = newSwiperInstance;
        });

      } else {
        var swiper = new Swiper(slider, options);
      }

    });
  };

  var eq_testimonial = function ($scope, $) {
    $scope.find('.testimonial__area').each(function () {

      var settings = $(this).data('xld');
      var slider = $(this).find('.testimonial__slider');
      var options = {
        'loop': true,
        'speed': 1500,
        'freemode': true,
        'slidesPerView': 1,
        'spaceBetween': 30,
        navigation: {
          nextEl: ".testimonial__btn-next",
          prevEl: ".testimonial__btn-prev",
        },
        loop: true,
      };

      if ('undefined' === typeof Swiper) {
        const asyncSwiper = elementorFrontend.utils.swiper;
        new asyncSwiper(slider, options).then((newSwiperInstance) => {
          var swiper = newSwiperInstance;
        });

      } else {
        var swiper = new Swiper(slider, options);
      }

    });
  };

  var eq_blog_slider = function ($scope, $) {
    $scope.find('.blog__innerpage').each(function () {

      var settings = $(this).data('xld');
      var slider = $(this).find('.mainblog-inneractive');
      var options = {
        'loop': true,
        'speed': 1500,
        'freemode': true,
        'slidesPerView': 1,
        'spaceBetween': 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        },
      };

      if ('undefined' === typeof Swiper) {
        const asyncSwiper = elementorFrontend.utils.swiper;
        new asyncSwiper(slider, options).then((newSwiperInstance) => {
          var swiper = newSwiperInstance;
        });

      } else {
        var swiper = new Swiper(slider, options);
      }

    });
  };


  var eq_testimonial_2 = function ($scope, $) {
    $scope.find('.testimonial__area-2').each(function () {

      var settings = $(this).data('xld');
      var slider = $(this).find('.testimonial__slider-2');
      var options = {
        'loop': true,
        'speed': 1500,
        'freemode': true,
        'slidesPerView': 1,
        'spaceBetween': 30,
      };

      if ('undefined' === typeof Swiper) {
        const asyncSwiper = elementorFrontend.utils.swiper;
        new asyncSwiper(slider, options).then((newSwiperInstance) => {
          var swiper = newSwiperInstance;
        });

      } else {
        var swiper = new Swiper(slider, options);
      }

      var logo = $(this).find('.brand__slider-2');

      var optionsd = {
        'loop': true,
        'speed': 5000,
        'freemode': true,
        'spaceBetween': 60,
        'slidesPerView': 'auto',
        'autoplay': {
          delay: 1,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      };

      if ('undefined' === typeof Swiper) {
        const asyncSwiper = elementorFrontend.utils.swiper;
        new asyncSwiper(logo, optionsd).then((newSwiperInstance) => {
          var swiperd = newSwiperInstance;
        });

      } else {
        var swiperd = new Swiper(logo, optionsd);
      }


    });
  };


  var eq_instructor_2 = function ($scope, $) {
    $scope.find('.instructor__area-2').each(function () {

      var settings = $(this).data('xld');
      var slider = $(this).find('.instructor__slider-2');
      var options = {
        'loop': true,
        'speed': 1500,
        'freemode': true,
        'slidesPerView': 3,
        'spaceBetween': 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      };

      if ('undefined' === typeof Swiper) {
        const asyncSwiper = elementorFrontend.utils.swiper;
        new asyncSwiper(slider, options).then((newSwiperInstance) => {
          var swiper = newSwiperInstance;
        });

      } else {
        var swiper = new Swiper(slider, options);
      }

    });
  };

  var eq_tstm_3 = function ($scope, $) {
    $scope.find('.testimonial__area-3').each(function () {

      var settings = $(this).data('xld');
      var slider = $(this).find('.testimonial-active-2');
      var options = {
        'loop': true,
        'speed': 1500,
        'freemode': true,
        'slidesPerView': 2,
        'spaceBetween': 40,
        navigation: {
          nextEl: '.test-button-next',
          prevEl: '.test-button-prev',
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        },
      };

      if ('undefined' === typeof Swiper) {
        const asyncSwiper = elementorFrontend.utils.swiper;
        new asyncSwiper(slider, options).then((newSwiperInstance) => {
          var swiper = newSwiperInstance;
        });

      } else {
        var swiper = new Swiper(slider, options);
      }

    });
  };

  var eq_instructor = function ($scope, $) {
    $scope.find('.instructor__area').each(function () {
      var share_btn = document.querySelectorAll('.share-btn');
      var social_share = document.querySelectorAll('.social-share');

      for (let i = 0; i < share_btn.length; i++) {
        share_btn[i].addEventListener('click', function () {
          share_btn[i].classList.toggle('active');
          social_share[i].classList.toggle('active');
        });

      }
    });
  };

  var eq_header_1 = function ($scope, $) {
    $scope.find('.eqheader').each(function () {

      $('.search-icon').on('click', function () {
        $(this).hide();
        $('.search-close').show();
        $('.search__form').addClass('showed');
      });

      $('.search-close').on('click', function () {
        $(this).hide();
        $('.search-icon').show();
        $('.search__form').removeClass('showed');
      });
      $('.menu-icon').on('click', function () {
        $('.offcanvas__area').addClass('showed');
        $('html').addClass('no-overflow');
      });

      $('#offcanvas_close').on('click', function () {
        $('.offcanvas__area').removeClass('showed');
        $('html').removeClass('no-overflow');
      });

      var a = $(".momenu-list");
      a.length && (a.children("li").addClass("menu-item-parent"), a.find(".menu-item-has-children > a").on("click", function (e) {
          e.preventDefault();
          $(this).toggleClass("opened");
          var n = $(this).next(".sub-menu"),
              s = $(this).closest(".menu-item-parent").find(".sub-menu");
          a.find(".sub-menu").not(s).slideUp(250), n.slideToggle(250)
      }));
      
    });
  };

  var eq_instructor_about = function ($scope, $) {
    $scope.find('.expand-social').each(function () {

      var share_btn = document.querySelectorAll('.share-btn');
      var social_share = document.querySelectorAll('.social-share');

      for (let i = 0; i < share_btn.length; i++) {
        share_btn[i].addEventListener('click', function () {
          share_btn[i].classList.toggle('active');
          social_share[i].classList.toggle('active');
        });

      }

    });
  };

  var Rtnavmenu = function ($scope, $) {
    AOS.init({
      once: true,
      offset: 200,
      duration: 1000,
    });

  };

  var eq_ajax_search = function ($scope, $) {
    $scope.find('.tp-ajax-search').each(function () {

      $('.cat').change(function(){
        $('.ajax-search-result').html('');   
    });

      $('.form-control').keyup(function() {

        if ($.trim($(".form-control").val()).length == 0) {
          $('.ajax-search-result').html('');
        }
        if ($.trim($(".form-control").val()).length > 0) {
              var conceptName = $('.cat').find(":selected").val();
              
              var data = {
                'action': 'tp_search_post',
                's': $('.form-control').val(),
                'tax':conceptName,
              };

          
            $.ajax({
              type: "POST",
              url: tp_loadmore_params.ajaxurl,
              data: data,

              beforeSend: function() {

              },

              success: function(result) {

                  $('.ajax-search-result').html(result);
                  $(".searching").removeClass('loading');
              }

            });

          }
      });

    });
  };


  var eq_filter_sidebar = function ($scope, $) {
    $scope.find('.tutor-sidebar-filter').each(function () {

      $('.tutor-sidebar-filter input').on('change', function () {
        $('.tutor-sidebar-filter').submit();
      });

      $(".category-toggle").on('click', function () {
        $(this).next('.tutor-archive-childern').slideToggle();
        if ($(this).hasClass('ti-plus')) {
          $(this).removeClass('ti-plus').addClass('ti-minus');
        } else {
          $(this).removeClass('ti-minus').addClass('ti-plus');
        }
      });

      $('.tutor-archive-childern input').each(function () {
        if ($(this).is(':checked')) {
          var aChild = $(this).closest('.tutor-archive-childern');
          aChild.show();
          aChild.siblings('.tivo').removeClass('ti-plus').addClass('ti-minus');
        }
      });

    });
  };

  var eq_crs_reg = function ($scope, $) {
    $scope.find('.register__area-2').each(function () {

      var countdown = document.querySelector("#countdown");

      if (countdown) {
        (function () {
          const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

          let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "12/30/",
            birthday = dayMonth + yyyy;

          today = mm + "/" + dd + "/" + yyyy;
          if (today > birthday) {
            birthday = dayMonth + nextYear;
          }

          const countDown = new Date(birthday).getTime(),
            x = setInterval(function () {
              const now = new Date().getTime(),
                distance = countDown - now;

              (document.getElementById("days").innerText = Math.floor(distance / day)),
                (document.getElementById("hours").innerText = Math.floor(
                  (distance % day) / hour
                )),
                (document.getElementById("minutes").innerText = Math.floor(
                  (distance % hour) / minute
                )),
                (document.getElementById("seconds").innerText = Math.floor(
                  (distance % minute) / second
                ));

              //do something later when date is reached
              if (distance < 0) {
                document.getElementById("headline").innerText = "It's finished!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
            }, 0);
        })();
      }

    });
  };


  $(window).on('elementor/frontend/init', function () {

    var widgets = {

      'eq-hero-slider': eq_hero_slider,
      'eq-instructor': eq_instructor,
      'eq-testimonial': eq_testimonial,
      'eq-category-slider': eq_category_slider,
      'eq-instructor-2': eq_instructor_2,
      'eq-testimonial-2': eq_testimonial_2,
      'eq-header-1': eq_header_1,
      'eq-header-2': eq_header_1,
      'eq-header-3': eq_header_1,
      'eq-instructor-about': eq_instructor_about,
      'eq-team': eq_instructor_about,
      'eq-filter-sidebar': eq_filter_sidebar,
      'eq-blog-slidern': eq_blog_slider,
      'eq-crs-reg': eq_crs_reg,
      'eq-tstm-3': eq_tstm_3,
      'eq-searchajax': eq_ajax_search,
    };

    if (elementorFrontend.isEditMode()) {

      $.each(widgets, function (widget, callback) {
        elementorFrontend.hooks.addAction('frontend/element_ready/' + widget + '.default', callback);
      });
      elementorFrontend.hooks.addAction('frontend/element_ready/global', Rtnavmenu);

    } else {

      $.each(widgets, function (widget, callback) {
        elementorFrontend.hooks.addAction('frontend/element_ready/' + widget + '.default', callback);
      });
      elementorFrontend.hooks.addAction('frontend/element_ready/global', Rtnavmenu);
    }

  });


})(jQuery);


