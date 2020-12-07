$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() >2800) {
        $(".scrollMe").addClass("block");
      } else {
        $(".scrollMe").removeClass("block");
      }
    });
  });