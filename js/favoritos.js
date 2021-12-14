let favoritos = [];

const spotsFavoritos = () => {
    favoritos = JSON.parse( localStorage.getItem( 'spots-favoritos' ) )
}

spotsFavoritos();

let obstaculoArray = ( obstaculos ) => {

    let obstaculosHtml = "";
    for ( const obstaculo of obstaculos ) {

        obstaculosHtml = obstaculosHtml + `<span class="span-spot">${obstaculo}</span>`

    }

    return obstaculosHtml
}

const eliminarFavorito = ( nombre ) => {

    if ( localStorage.getItem( 'spots-favoritos' ) != null ) {
        let spotsFavoritos = JSON.parse( localStorage.getItem( 'spots-favoritos' ) )


        spotsFavoritos = spotsFavoritos.filter( spot => spot.name != nombre )
        localStorage.setItem( 'spots-favoritos', JSON.stringify( spotsFavoritos ) )


    }

}






const mostrarFavoritos = skateparks => {

    $( '#favoritos' ).html( "" );

    for ( const skatepark of skateparks ) {
        $( '#favoritos' ).prepend( `
            <div style="display: none" class="spot-item ">
                <div class="spot-content p-1">
                    <div class="spot-img">                      
                        <img class="spot-imagen" src="${skatepark.filename}" alt="imagen Skatepark">
                        
                       

                                       
                    </div>
                    <div class="spot-info">
                        <h4>${skatepark.name}</h4>
                        <h4 class="spot-tipo">${skatepark.type}</h4>
                        
                    </div>
                    <div class="spot-obs">
                    ${obstaculoArray(skatepark.obstaculos)}
                   </div>            
                  
                 
                  <button data-name="${skatepark.name}"  type="button" class="btn btn-dark btn-sm remover" >
                  Remover</button>
                  
                  

                </div>
            </div>
            ` )
        $( '.spot-item' ).fadeIn( 1000 );

    }


}
mostrarFavoritos( favoritos );


/* $( '#remover' ).on( 'click', () => {
    // 


} ) */

const removerEventoLike = () => {
    $( ".remover" ).each( function( index ) {

        $( this ).on( 'click', () => {


            eliminarFavorito( $( this ).data( "name" ) )

            $( this ).parent().parent().fadeOut( 500 )

        } );
    } )

}
removerEventoLike()