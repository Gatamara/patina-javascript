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


function iniciarMapp() {
    var coord = { lat: -33.463027371223305, lng: -70.6574253306844 };
    var map = new google.maps.Map( document.getElementById( 'map' ), {
        zoom: 15,
        center: coord
    } );
    var marker = new google.maps.Marker( {
        position: coord,
        map: map
    } );
}


for ( const elmentoDestacado of elementosDestacados ) {
    $( '#app' ).append( `<div class="spot-content p-1">
    <div class="spot-img">

        <img src="${elmentoDestacado.filename} " alt="parque-bustamante">
    </div>
    <div class="spot-info">
        <h4>${elmentoDestacado.name} </h4>
        <h4 class="spot-tipo"> ${elmentoDestacado.type} </h4>
    </div>
    </div>
    
    
    ` )

    iniciarMapp()
}