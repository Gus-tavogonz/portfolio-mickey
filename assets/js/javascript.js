$(document).ready(function(){

    $(".about-click").click(function(){
        event.preventDefault();
        console.log("you clicked services!")
        $("html, body").animate({
            scrollTop: $("#about-section").offset().top
        }, 750)

    })

    $(".gallery-click").click(function(){
        event.preventDefault();
        console.log("you clicked Gallery!!")
        $("html, body").animate({
            scrollTop:$("#gallery-section").offset().top
        }, 750)
    })

    
    $(".contact-click").click(function(){
        event.preventDefault();
        console.log("you clicked contact")
        $("html, body").animate({
            scrollTop:$("#contact-section").offset().top
        }, 750)
    })







})