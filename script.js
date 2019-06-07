$( document ).ready(function() {
    console.log( "ready!" );

    let nav = "nav.html"
    let firstCard = "first-card.html"
    let secondCard = "second-card.html"
    let thirdCard = "third-card.html"

    $("#nav").load(nav)
    $("#first-card").load(firstCard)
    $("#second-card").load(secondCard)
    $("#third-card").load(thirdCard)

});