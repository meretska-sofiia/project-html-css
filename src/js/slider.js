$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow:
    //   '<button type="button" class="hero__button-left"><svg class="hero__icon-left" width="48" height="40"><use href="../images/sprite-icons.svg#left-arrow-gallery></use></svg></button>',
    // nextArrow:
    //   ' <button type="button" class="hero__button-right"><svg class="hero__icon-right" width="48" height="40"><use href="../images/sprite-icons.svg#right-arrow-gallery"></use></svg></button>',
  });
});
$('.slider__button-right').on('click', function () {
  $('.slider').slick('slickNext');
});
$('.slider__button-left').on('click', function () {
  $('.slider').slick('slickPrev');
});
