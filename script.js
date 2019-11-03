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


function showDetail(e){

    //IMG
    let projectImg = $(e.getElementsByClassName("project-img")[0])
    projectImg.stop(true)
    $(e.getElementsByClassName("project-img")[0]).animate({opacity:0})

    //content top
    let contentTop = $(e.getElementsByClassName("project-content-top")[0])
    contentTop.stop(true)
    contentTop.animate({
        top: 50,
        opacity: 1
    }, 500);

    //content bot
    let contentBot = $(e.getElementsByClassName("project-content-bot")[0])
    contentBot.stop(true)

    contentBot.animate({
        bottom:50,
        opacity: 1
    }, 500);


}

function unshowDetail(e){
    //img
    let projectImg = $(e.getElementsByClassName("project-img")[0])
    projectImg.stop(true)
    projectImg.animate({opacity:1})

    //content top
    let contentTop = $(e.getElementsByClassName("project-content-top")[0])
    contentTop.stop(true)
    contentTop.animate({
        top: 0,
        opacity: 0}
        , 500);

    //content bot
    let contentBot = $(e.getElementsByClassName("project-content-bot")[0])
    contentBot.stop(true)
    contentBot.animate({
        bottom: 0,
        opacity: 0
    }, 500);

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

    let flightV2 = "./project_cards/flightv2.html"
    let lodgeV2 = "./project_cards/lodgeV2.html"

    $("#nav").load(nav)

    
    $("#about-me").load(aboutMe, () => {

    })

    $("#projects").load(projects, () => {
        $("#project-card-1").load(flightV2, () => {

        })
        $("#project-card-2").load(lodgeV2, () => {

        })
        $("#project-card-3").load(lodgeV2, () => {

        })

    })
    $("#third-card").load(thirdCard)
    

});