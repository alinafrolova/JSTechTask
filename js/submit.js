/**
 * Created by иарвар on 12.01.2017.
 */
function submit() {
    $( "#form" ).submit(function( event ) {
        alert( "Handler for .submit() called." );
        event.preventDefault();
    });

}
