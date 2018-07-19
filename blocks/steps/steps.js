setTimeout(function(){
    $('[data-steps]').click(function(){

        let clickedStep = $(this).attr('data-steps');
        for (let i = 1; i < clickedStep; i++)
            checkIsStepCorrect(i);
        checkIsStepCorrect(currStep);
        currStep = $(this).attr('data-steps');
        // setTimeout(() => {
            if (currStep == 4){
                $("[data-role='nextStep']").text("Confirm!");
                $("[data-role='nextStep']").attr("type", "submit");
                $("[data-role='nextStep']").attr("data-role", "confirm");
            }
            else {
                //иначе сделать изменить "continue" на "next step"
                $("[data-role='confirm']").text("next step");
                $("[data-role='confirm']").attr("type", "button");
                $("[data-role='confirm']").attr("data-role", "nextStep");
            }
        // },200)
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
