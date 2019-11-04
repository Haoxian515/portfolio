const expandEM = "20em"
let isOpen = true;

function booleanBurger(){
    if (isOpen){
        reverseHamburger()
    }else{
        hamburger()
    }
    isOpen = !isOpen
}

function hamburger() {
    var x = document.getElementById("nav-links");
    var nav = document.getElementById("nav");

    nav.style.height = expandEM
    nav.style.opacity = "0.8";
    nav.style.transition = "0.5s"
    x.style.display = "block";
}

function reverseHamburger(){

    var nav = document.getElementById("nav");
    var x = document.getElementById("nav-links");

    if(nav.style.height === expandEM){
        nav.style.height = "3em"
        nav.style.opacity = "1";
        nav.style.transition = "0.5s"
    }
    if(x.style.display === "block"){
        x.style.display = "none";
    }    
}
function projectPress(e){
    e.style.background = "#9BBDD6"
    e.style.color = "white"
}

function reverseProjectPress(e){
    e.style.background = "none"
    e.style.color = "#9BBDD6"
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
    projectImg.animate({opacity:0.1})

    //content top
    let contentTop = $(e.getElementsByClassName("project-content-top")[0])
    contentTop.stop(true)
    contentTop.animate({
        top: 50,
        opacity: 1
    }, 200);

    //content bot
    let contentBot = $(e.getElementsByClassName("project-content-bot")[0])
    contentBot.stop(true)

    contentBot.animate({
        bottom:50,
        opacity: 1
    }, 200);


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
        , 200);

    //content bot
    let contentBot = $(e.getElementsByClassName("project-content-bot")[0])
    contentBot.stop(true)
    contentBot.animate({
        bottom: 0,
        opacity: 0
    }, 200);

}

function openNewTab(url )
{
  var win=window.open(url, '_blank');
  win.focus();
}

// **document ready
$( document ).ready(function() {
    

    let nav = "nav.html"
    let aboutMe = "about-me.html"
    let projects = "projects.html"
    let contact = "contact.html"

    let flightV2 = "./project_cards/flightv2.html"
    let lodgeV2 = "./project_cards/lodgeV2.html"
    let ricev2 = "./project_cards/ricev2.html"

    $("#nav").load(nav)

    
    $("#about-me").load(aboutMe, () => {

    })

    $("#projects").load(projects, () => {
        $("#project-card-1").load(flightV2, () => {

        })
        $("#project-card-2").load(lodgeV2, () => {

        })
        $("#project-card-3").load(ricev2, () => {

        })

    })
    $("#contact").load(contact)
    

});