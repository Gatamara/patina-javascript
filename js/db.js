const crearBaseDeDatos = () => {

    const urlBase = window.location.origin;


    const elementos = [ {
            name: "Parque los Reyes",
            type: "Skatepark",
            city: "Santiago",
            filename: urlBase + "/assets/img/parque-losreyes.jpg",
            obstaculos: [ "baranda", "escalera", "bowl", "banca", "halfpipe" ]
        }, {
            name: "Padre Hurtado",
            type: "Skatepark",
            city: "Santiago",
            filename: urlBase + "/assets/img/padre-hurtado.png",
            obstaculos: [ "escalera", "piramide", "halfpipe" ]
        }, {
            name: "Parque Araucano",
            type: "Skatepark",
            city: "Santiago",
            filename: urlBase + "/assets/img/parque-araucano-1024x576.jpg",
            obstaculos: [ "baranda", "muro", "bowl", "banca" ]
        }, {
            name: "Parque Ohiggins",
            type: "Skatepark",
            city: "Santiago",
            filename: urlBase + "/assets/img/parque-ohiggins.jpg",
            obstaculos: [ "baranda", "piramide", "bowl", "banca" ]
        }, {
            name: "Parque Bustamante",
            type: "Skatepark",
            city: "Santiago",
            filename: urlBase + "/assets/img/parque-bustamante.jpg",
            obstaculos: [ "baranda", "bowl", "muro", "halfpipe" ]
        },
        {
            name: "Parque Peñuelas",
            type: "Skatepark",
            city: "La Serena",
            filename: urlBase + "/assets/img/sk-peñuelas.jpg",
            obstaculos: [ "escalera", "bowl", "banca", "halfpipe" ]
        },
        {
            name: "Parque Cuatro Esquinas",
            type: "Skatepark",
            city: "La Serena",
            filename: urlBase + "/assets/img/skatepark-coquimbo.jpg",
            obstaculos: [ "baranda", "escalera", "bowl", "halfpipe" ]
        },
    ]

    if ( localStorage.getItem( 'spots' ) == null ) {
        localStorage.setItem( 'spots', JSON.stringify( elementos ) )
    }
}

crearBaseDeDatos();