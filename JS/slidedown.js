$("#slidedown-btn").click(function () {
    if ( $( ".filters" ).first().is( ":hidden" ) ) {
      $( ".filters" ).slideDown( "slow" );
    } else {
      $( ".filters" ).slideUp( "slow");
    }
  });
