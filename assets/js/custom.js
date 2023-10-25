(function () {
    window.onload = function () {
      var preloader = document.querySelector('.page-loading');
      preloader.classList.remove('active');
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    };
  })();

  
  
  $(function () { // Dropdown toggle
    $('.dropdown i').click(function () {
      $(this).next('.dropdown-menu').slideToggle();
    });
  
    $(document).click(function (e) {
      var target = e.target;
      if (!$(target).is('.dropdown i') && !$(target).parents().is('.dropdown i'))
      //{ $('.dropdown').hide(); }
      { $('.dropdown-menu').slideUp(); }
    });
  });

  $(document).ready(function () {
    $("#myModal").on('hidden.bs.modal', function (e) {
        $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
    });
  });

  $(document).ready(function () {
    $('.carousel-slick').slick({
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      centerMode: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerMode: true,

        }

      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,

        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
        }
      }]
    });
  });


  $(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  });


  $(document).ready(function(){
    $('.carousel-slick-testimonial').slick({
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots:true,
      centerMode: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
  
        }
  
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
  
        }
      },  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
        }
      }]
    });
  });


  $(document).ready(function(){
    $(".bi-x").click(function(){
      $(".mac-indicator").addClass("d-none");
    });
  });

$(function() {
  'use strict';


  $(activate);


  function activate() {

  $('.nav-tabs')
      .scrollingTabs({
      enableSwiping: true
      })
      .on('ready.scrtabs', function() {
      $('.tab-content').show();
      });

  }
}());
