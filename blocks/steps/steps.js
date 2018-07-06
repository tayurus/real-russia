setTimeout(function(){
    $('[data-steps]').click(function(){
        currStep = $(this).attr('data-steps');

        //hide all steps
        $("[data-step]").hide();
        //show next step
        $("[data-step="+currStep+"]").show();
        $(window).scrollTop(0);

        $(".steps__item_active").addClass("steps__item_visited");

        $(".steps__item").removeClass("steps__item_active");
        $(this).removeClass("steps__item_visited");
        $(this).addClass("steps__item_active");

        $(".steps__line").removeClass("steps__line_filled");
        $(this).prev().addClass("steps__line_filled")
        $(this).prev().prev().prev().addClass("steps__line_filled")
        $(this).prev().prev().prev().prev().prev().addClass("steps__line_filled")
    })

},1000)
