$( document ).ready(function() {
    console.log( "ready!" );

    let nav = "nav.html"
    let firstCard = "first-card.html"
    let secondCard = "second-card.html"
    let thirdCard = "third-card.html"

    let flight_visualiser = "./project_cards/flight-visualiser.html"
    let open_rice = "./project_cards/open-rice.html"

    
    $("#nav").load(nav)
    $("#first-card").load(firstCard)

    $("#second-card").load(secondCard, function(){
        $(".project-card-1").load(flight_visualiser)
        $(".project-card-2").load(open_rice)
        // $(".project-card-3").load(project1)
        
    })
    $("#third-card").load(thirdCard)
    

});