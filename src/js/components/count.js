///COUNT
var show = true;
var countbox = ".info-holder__stat";
$(window).on("scroll load resize", function () {
  if (!show) return false;
  var w_top = $(window).scrollTop();
  var e_top = ($(countbox).offset() || { "top": NaN }).top;
  var w_height = $(window).height();
  var d_height = $(document).height();
  var e_height = $(countbox).outerHeight();
  if (isNaN(top)) {
    if (w_top + 900 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.info-holder__num').css('opacity', '1');
      $('.info-holder__num').spincrement({
        thousandSeparator: "",
        duration: 7000
      });
      show = false;
    }
  }
});
  ///COUNT
