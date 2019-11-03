function hamburger() {
    var x = document.getElementById("nav-links");
    var nav = document.getElementById("nav");

    if(nav.style.height === "16em"){
        nav.style.height = "3em"
        nav.style.opacity = "1";
        nav.style.transition = "0.5s"

    }else{
        nav.style.height = "16em"
        nav.style.opacity = "0.8";
        nav.style.transition = "0.5s"
    }

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function rotateA(){
    var arrow = document.getElementById("arrow");
        arrow.style.transition = "0.5s"
        arrow.style.transform = "rotate(90deg)"

}

function rotateB(){
    var arrow = document.getElementById("arrow");
    arrow.style.transition = "0.5s"
    arrow.style.transform = "rotate(0deg)"
}




// **document ready
$( document ).ready(function() {
    

    let nav = "nav.html"
    let aboutMe = "about-me.html"
    let projects = "projects.html"
    let thirdCard = "third-card.html"

    let flight_visualiser = "./project_cards/flight-visualiser.html"
    let open_rice = "./project_cards/open-rice.html"
    let gator_lodge = "./project_cards/gator-lodge.html"

    $("#nav").load(nav)

    
    $("#about-me").load(aboutMe, () => {

    })

    $("#projects").load(projects, () => {
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
    // $("#third-card").load(thirdCard)
    

});