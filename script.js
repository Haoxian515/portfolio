$( document ).ready(function() {
    console.log( "ready!" );

    let nav = "nav.html"
    let firstCard = "first-card.html"
    let secondCard = "second-card.html"
    let thirdCard = "third-card.html"

    let project1 = "project-card-1.html"
    let project2 = "project-card-2.html"

    
    $("#nav").load(nav)
    $("#first-card").load(firstCard)

    $("#second-card").load(secondCard, function(){
        $(".project-card-1").load(project1)
        $(".project-card-2").load(project2)
        $(".project-card-3").load(project1)
        
    })
    $("#third-card").load(thirdCard)
    

});