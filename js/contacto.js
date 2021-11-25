//variables

//const { on } = require( "nodemon" );

//const usuario = $( '#nombreUsuario' );
//const email = $( '#email' );
//const asunto = $( '#asunto' );
//const textarea = $( '#floatingTextarea2' );

//const enviar = $( '#boton-enviar' );
//const formulario = $( '#contacto' );



let sendUrl = $( '#formulario' ).attr( 'action' );
let metodo = $( 'formulario' ).attr( 'method' );
let nombreUsuario;
let email;
let asunto;
let msj;

$( '#boton-enviar' ).on( 'click', function( e ) {
    e.preventDefault();
    $.ajax( {
        beforeSend: function() {
            $( '#status' ).text( 'Enviando.....' )
            nombreUsuario = $( '#nombreUsuario' ).val();
            email = $( '#email' ).val();
            asunto = $( '#asunto' ).val();
            msj = $( '#floatingTextarea2' ).val();
        },
        url: sendUrl,
        type: metodo,
        data: { name: nombreUsuario, email: email, asunto: asunto, mensaje: msj },
        success: function( resp ) {
            console.log( resp );
            $( '#status' ).html( '<h5 style="display:none;">Mensaje enviado exitosamente</h5>' )
            $( '#status > h5' ).slideDown( 500 ).delay( 1000 ).fadeOut( 300 ).fadeIn( 300 ).fadeOut( 300 ).fadeIn( 300 ).fadeOut( 300 ).fadeIn( 300 ).fadeOut( 300 );;
        },
        error: function( jqXHL, status, resp ) {
            console.log( status );
            console.log( resp );
            $( '#status' ).html( '<h5 style="display:none;">Error al enviar el mensaje</h5>' )
            $( '#status > h5' ).slideDown( 500 ).delay( 1000 ).fadeOut( 300 ).fadeIn( 300 ).fadeOut( 300 ).fadeIn( 300 ).fadeOut( 300 ).fadeIn( 300 ).fadeOut( 300 );;

        }
    } )
} )