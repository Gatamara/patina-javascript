const elementosDestacados = [ {
        name: "Parque los Reyes",
        type: "Skatepark",
        city: "Santiago",
        filename: "../assets/img/parque-losreyes.jpg",
        obstaculos: [ "baranda", "escalera", "bowl", "banca", "halfpipe" ],
        latitud: -33.425708132244544,
        longitud: -70.66626039478183,
    },
    {
        name: "Parque Ohiggins",
        type: "Skatepark",
        city: "Santiago",
        filename: "../assets/img/parque-ohiggins.jpg",
        obstaculos: [ "baranda", "piramide", "bowl", "banca" ],
        latitud: -33.463027371223305,
        longitud: -70.6574253306844,
    }, {
        name: "Parque Bustamante",
        type: "Skatepark",
        city: "Santiago",
        filename: "../assets/img/parque-bustamante.jpg",
        obstaculos: [ "baranda", "bowl", "muro", "halfpipe" ],
        latitud: -33.441507832224765,
        longitud: -70.63150533611231,
    },


]




//////////////////////////////////////////////////////////////////////////
// Card de Spots Destacados

const mostrarDestacados = elementosDestacados => {

    $( '#spots-destacados' ).html( "" );

    for ( const elmentoDestacado of elementosDestacados ) {
        $( '#spots-destacados' ).prepend( `

        <div class="spot-item">
                <div class="spot-content p-1">
                    <div class="spot-img">
                        <div class="spot-hover">
                            <img src="./assets/img/login-icon-busca-v2 1.png" alt="gps mapa">
                            <a id="app" href="ubicacion.html"> Ver en el mapa </a>

                        </div>
                        <img src="${elmentoDestacado.filename}" alt="parque-ohiggins">
                    </div>
                    <div class="spot-info">
                        <h4>${elmentoDestacado.name}</h4>
                        <h4 class="spot-tipo">${elmentoDestacado.type} </h4>
                    </div>

                </div>
            </div>
    
    ` )


    }
}
mostrarDestacados( elementosDestacados );

/////////////////////////////////////////////////////////////////////////////


function iniciarMapp() {
    let coord = { lat: -33.463027371223305, lng: -70.6574253306844 };
    let map = new google.maps.Map( document.getElementById( 'map' ), {
        zoom: 15,
        center: coord
    } );
    let marker = new google.maps.Marker( {
        position: coord,
        map: map
    } );
}

iniciarMapp()