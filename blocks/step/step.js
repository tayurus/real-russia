$(document).on("click", ".step__subtitle", function() {
    $(this).toggleClass("step__subtitle_close")
    $(this).next().toggle(1000)
})
