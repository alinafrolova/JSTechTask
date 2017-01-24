  
//add according  click to the My resume
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content"

    });
  } );

//ADD TOOLTIPS FOR fORM "Contact me"
  $( function() {
    var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }
    });
    $( "<submit>" )
      .text( "Show help" )
      .button()
      .on( "click", function() {
        tooltips.tooltip( "open" );
      })
      .insertAfter( "form" );
  } );



