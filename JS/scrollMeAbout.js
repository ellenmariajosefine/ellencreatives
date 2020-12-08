$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() >1500) {
        $(".scrollMe").addClass("block");
      } else {
        $(".scrollMe").removeClass("block");
      }
    });
  });