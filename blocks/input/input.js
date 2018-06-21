$(".input__field").on("blur propertychange change keyup input paste", function() {
    //extract value and pattern from input
    let value = $(this).val();
    let pattern = $(this).attr('pattern');

    //create a regex from pattern
    let flags = pattern.replace(/.*\/([gimy]*)$/, '$1');
    let regexBody = pattern.replace(new RegExp('^/(.*?)/'+flags+'$'), '$1');
    let regex = new RegExp(regexBody, flags);

    //check if input's value correct
    if (!regex.test(value)){
        $(this).parent().addClass("input__wrapper_error")
        $(this).parent().removeClass("input__wrapper_correct")
        if (value !== "")
            $(this).parent().next().text("check this field!");
        if (value === "")
            $(this).parent().next().text("This field cannot be empty!");
    }
    else{
        $(this).parent().removeClass("input__wrapper_error")
        $(this).parent().addClass("input__wrapper_correct")
    }
})
