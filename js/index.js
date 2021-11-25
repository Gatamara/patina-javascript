let spots = []

const obtenerSpots = () => {
    spots = JSON.parse( localStorage.getItem( 'spots' ) )
}

obtenerSpots();

const agregarEventoLike = () => {

    $( '.likes' ).each( function( index ) {

        $( this ).on( "click", () => {

            $( this ).fadeOut( 300, function() {

                if ( $( this ).attr( "src" ).includes( "/assets/img/love-1.png" ) ) {
                    $( this ).attr( "src", "./assets/img/love.png" );
                } else {
                    $( this ).attr( "src", "./assets/img/love-1.png" )
                }
                $( this ).fadeIn( 300 );
            } );
        } )

    } )

}

let obstaculoArray = ( obstaculos ) => {

    let obstaculosHtml = "";
    for ( const obstaculo of obstaculos ) {

        obstaculosHtml = obstaculosHtml + `<span class="span-spot">${obstaculo}</span>`

    }

    return obstaculosHtml
}

const mostrarSpots = skateparks => {

    $( '#spots-contenedor' ).html( "" );

    for ( const skatepark of skateparks ) {
        $( '#spots-contenedor' ).prepend( `
            <div style="display: none" class="spot-item ">
                <div class="spot-content p-1">
                    <div class="spot-img">                      
                        <img class="spot-imagen" src="${skatepark.filename}" alt="imagen Skatepark">
                        
                        <img class="likes"  src="./assets/img/love.png" alt="parque-losreyes">                   
                    </div>
                    <div class="spot-info">
                        <h4>${skatepark.name}</h4>
                        <h4 class="spot-tipo">${skatepark.type}</h4>
                        
                    </div>
                    <div class="spot-obs">
                    ${obstaculoArray(skatepark.obstaculos)}
             
                    </div>

                </div>
            </div>
            ` )
        $( '.spot-item' ).fadeIn( 1000 );
    }



    agregarEventoLike()
}
mostrarSpots( spots );












let filtroCiudad = []
const agregarEventoChangeCiudad = () => {

    let checkboxes = $( "input[type=checkbox][name=ciudades]" );

    console.log( checkboxes )

    $( "input[type=checkbox][name=ciudades]" ).each( function( index ) {
        $( this ).on( 'change', () => {
            filtroCiudad =
                Array.from( checkboxes )
                .filter( i => i.checked )
                .map( i => i.value )

            aplicarFiltros()
        } )
    } );

}

agregarEventoChangeCiudad();

let filtroObstaculo = []
const agregarEventoChangeObtaculos = () => {

    let check = $( "input[type=checkbox][name=form-obstaculo]" );


    $( check ).each( function( checkbox ) {
        $( this ).on( 'change', () => {
            filtroObstaculo =
                Array.from( check )
                .filter( i => i.checked )
                .map( i => i.value )

            aplicarFiltros();
        } )
    } );
}

agregarEventoChangeObtaculos();

let buscarPorNombre = ""
const agregarEventoInputBuscar = () => {


    $( '#buscar-spot' ).on( "input", ( e ) => {
        buscarPorNombre = $( '#buscar-spot' ).val().trim().toLowerCase()
        aplicarFiltros();
    } )

}

agregarEventoInputBuscar();

const aplicarFiltros = () => {

    let spotsFiltrados = spots


    if ( filtroCiudad.length > 0 ) {
        spotsFiltrados = spotsFiltrados.filter( spot => filtroCiudad.includes( spot.city ) )
    }

    if ( filtroObstaculo.length > 0 ) {
        spotsFiltrados = spotsFiltrados.filter( spot => spot.obstaculos.some( obstaculo => filtroObstaculo.includes( obstaculo ) ) )
    }

    if ( buscarPorNombre != "" ) {
        spotsFiltrados = spotsFiltrados.filter( spot => spot.name.toLowerCase().includes( buscarPorNombre ) )
    }

    if ( filtroCiudad.length == 0 && filtroObstaculo.length == 0 && buscarPorNombre == "" ) {
        mostrarSpots( spots )
    } else {
        mostrarSpots( spotsFiltrados )
    }

}