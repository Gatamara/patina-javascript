class Spot {
    constructor( name, type, city, filename, obstaculos ) {
        this.name = name;
        this.type = type;
        this.city = city;
        this.filename = filename;
        this.obstaculos = obstaculos;
    }
}

const agregarSpot = () => {
    const nombre = $( "#nombre" ).val();
    const ciudad = $( "#ciudad" ).val();
    const imagen = $( "#imagen" ).val();
    const obstaculos = []
    const checkboxes = $( '.obstaculos' );

    for ( let i = 0; i < checkboxes.length; i++ ) {
        if ( checkboxes[ i ].checked ) {
            obstaculos.push( checkboxes[ i ].value );
        }
    }
    console.log( obstaculos );


    const spot = new Spot( nombre, "Skatepark", ciudad, imagen, obstaculos );


    let spots = JSON.parse( localStorage.getItem( 'spots' ) );
    spots.push( spot );
    localStorage.setItem( 'spots', JSON.stringify( spots ) );
}


$( "#btn" ).on( 'click', () => {

    agregarSpot();

    $( '#mensaje-agregado' ).html( '<h5 style="display:none;">Tu Spot ha sido agregado!</h5>' );
    $( '#mensaje-agregado > h5' ).slideDown( 500 ).delay( 1000 ).fadeOut( 300 ).fadeIn( 300 ).fadeOut( 300 ).fadeIn( 300 ).fadeOut( 300 ).fadeIn( 300 ).fadeOut( 300 );

    $( '#form-inputs' ).trigger( "reset" );
    obtenerSpots();
    aplicarFiltros();


} );