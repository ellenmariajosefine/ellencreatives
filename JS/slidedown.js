// DESKTOP + TABLET

$("#slidedown-btn").click(function () {
    if ( $( ".filters" ).first().is( ":hidden" ) ) {
      $( ".filters" ).slideDown( "slow" );
    } else {
      $( ".filters" ).slideUp( "slow");
    }
  });


// MOBILE
$("#slidedown-btn-mobile").click(function () {
    if ( $( "#filters" ).first().is( ":hidden" ) ) {
      $( "#filters" ).slideDown( "slow" );
    } else {
      $( "#filters" ).slideUp( "slow");
    }
  });
