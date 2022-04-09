$(function(){
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        blockId=$(this).data("scroll");
        blockOffset=$(blockId).offset().top;

        $("html,body").animate({
            scrollTop:blockOffset+50
        }, 700);

    });

    $("[data-none1]").on("click", function(event){
        event.preventDefault();

        $(serv1_none).addClass("serv_none");
        $(serv1_2_none).removeClass("serv_none");
    });

    $("[data-back1]").on("click", function(event){
        event.preventDefault();

        $(serv1_none).removeClass("serv_none");
        $(serv1_2_none).addClass("serv_none");
    });

    $("[data-none2]").on("click", function(event){
        event.preventDefault();

        $(serv2_none).addClass("serv_none");
        $(serv2_2_none).removeClass("serv_none");
    });

    $("[data-back2]").on("click", function(event){
        event.preventDefault();

        $(serv2_none).removeClass("serv_none");
        $(serv2_2_none).addClass("serv_none");
    });

    $("[data-none3]").on("click", function(event){
        event.preventDefault();

        $(serv3_none).addClass("serv_none");
        $(serv3_2_none).removeClass("serv_none");
    });

    $("[data-back3]").on("click", function(event){
        event.preventDefault();

        $(serv3_none).removeClass("serv_none");
        $(serv3_2_none).addClass("serv_none");
    });

    $("[data-none4]").on("click", function(event){
        event.preventDefault();

        $(serv4_none).addClass("serv_none");
        $(serv4_2_none).removeClass("serv_none");
    });

    $("[data-back4]").on("click", function(event){
        event.preventDefault();

        $(serv4_none).removeClass("serv_none");
        $(serv4_2_none).addClass("serv_none");
    });

    $("[data-none5]").on("click", function(event){
        event.preventDefault();

        $(serv5_none).addClass("serv_none");
        $(serv5_2_none).removeClass("serv_none");
    });

    $("[data-back5]").on("click", function(event){
        event.preventDefault();

        $(serv5_none).removeClass("serv_none");
        $(serv5_2_none).addClass("serv_none");
    });

    $("[data-none6]").on("click", function(event){
        event.preventDefault();

        $(serv6_none).addClass("serv_none");
        $(serv6_2_none).removeClass("serv_none");
    });

    $("[data-back6]").on("click", function(event){
        event.preventDefault();

        $(serv6_none).removeClass("serv_none");
        $(serv6_2_none).addClass("serv_none");
    });

});

