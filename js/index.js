$(document).ready(function(){
	$(".nav__btn").click(function(){
	    $(".header__nav").toggle(200,"linear");
	});

	$('.gallery__slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  arrows: false,
	  speed: 300,
	  autoplay: true,
 	  autoplaySpeed: 2000,
 	  responsive: [
      {
	      breakpoint: 1025,
	      settings: {
	      slidesToShow: 3,
	      }
      },
      {
	      breakpoint: 769,
	      settings: {
	      slidesToShow: 2,
	      }
      },
      {
	      breakpoint: 427,
	      settings: {
	      slidesToShow: 1,
	      }
      }]
	});
	$('.snowborads__slider').slick({
	  centerMode: true,
	  centerPadding: '160px',
	  slidesToShow: 3,
	  arrows: true,
	  speed: 300,
	  autoplay: true,
 	  autoplaySpeed: 2000,
 	  responsive: [
      {
	      breakpoint: 1025,
	      settings: {
	      centerPadding: '100px',
	      
	      }
      },
      {
	      breakpoint: 769,
	      settings: {
	      centerPadding: '0px',
	      arrows: false,
	      }
      },
      {
	      breakpoint: 427,
	      settings: {
	      centerPadding: '0px',
	      slidesToShow: 1,
	      arrows: false,
	      }
      }]
	});
	$('.top__slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  arrows: false,
	});
});