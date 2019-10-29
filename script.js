$( document ).ready(function() {
    console.log( "ready!" );

    let nav = "nav.html"
    let firstCard = "first-card.html"
    let secondCard = "second-card.html"
    let thirdCard = "third-card.html"

    let flight_visualiser = "./project_cards/flight-visualiser.html"
    let open_rice = "./project_cards/open-rice.html"
    let gator_lodge = "./project_cards/gator-lodge.html"

    
    $("#nav").load(nav)
    $("#first-card").load(firstCard)

    $("#second-card").load(secondCard, function(){
        $("#project-card-1").load(flight_visualiser)
        $("#project-card-2").load(gator_lodge)
        $("#project-card-3").load(open_rice)
    })
    $("#third-card").load(thirdCard)

    

});