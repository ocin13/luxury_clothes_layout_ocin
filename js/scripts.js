$(document).ready(function(){
    $("#open").click(function(){
        $("#mySidebar").hasClass("element-close");
            $("#mySidebar").removeClass("element-close");
            $("#mySidebar").addClass("element-open");
            $("#open").addClass("element-close");
        
    });
    $("#close").click(function(){
        
            $("#mySidebar").removeClass("element-open");
            $("#mySidebar").addClass("element-close");
            $("#open").removeClass("element-close");
        
    });
    $(".menu-item").click(function(){
        
        $("#mySidebar").removeClass("element-open");
        $("#mySidebar").addClass("element-close");
        $("#open").removeClass("element-close");
    
});
    $("#men").click(function(){
        $(".women").addClass("element-close");
        $(".men").removeClass("element-close");
    });
    $("#women").click(function(){
        $(".men").addClass("element-close");
        $(".women").removeClass("element-close");
    });
    $("#all").click(function(){
        $(".men").removeClass("element-close");
        $(".women").removeClass("element-close");
    });
    $(window).scroll(function(){
        $(".go-top").toggleClass("up-active")
    });
    //btn show more
    $("#showMore").click(function(){
        if($("#showMore").hasClass("less")){
            $("#showMore").html("Show More");
            $("#showMore").removeClass("less");
        }else{
            $("#showMore").html("Show Less");
            $("#showMore").addClass("less");
        }
    });
});
