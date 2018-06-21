$(".step__subtitle").click(function() {
    $(this).toggleClass("step__subtitle_close")
    $(this).next().toggle(1000)
})
