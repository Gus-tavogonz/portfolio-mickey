$(document).ready(function(){

    console.log("ready")

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

    var videoSrc;  
    $('.video-btn').click(function() {
       
    
        videoSrc = $(this).data( "src" );
        console.log(videoSrc);
        $("#video").attr("src",videoSrc)
        })
    
    $(".close").on("click", function(){
        var blank = "";
        $("#video").attr("src", blank )
    })


})