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
                $("#preview-right-column").hide()

    $("#second-card").load(secondCard, () => {
        $("#project-card-1").load(flight_visualiser, () => {
            $("#flight").hide()
            $("#flight-btn").click(() => {
                $("#flight").fadeToggle(500)
            })
        })

        $("#project-card-2").load(gator_lodge, () => {
            $("#lodge").hide()
            $("#lodge-btn").click(() => {
                $("#lodge").fadeToggle(500)
            })
        })
        $("#project-card-3").load(open_rice, () => {
            $("#rice").hide()
            $("#rice-btn").click(() => {
                $("#rice").fadeToggle(500)
            })
        })
    })
    $("#third-card").load(thirdCard)
    

});