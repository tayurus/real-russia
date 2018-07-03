
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//current showed step and max count of steps
let currStep,  maxStepCount;
function inititializeSteps() {
    currStep = 1;
    maxStepCount = 4;
    showCurrStep();
}

function showCurrStep(){
    //hide all steps
    $("[data-step]").hide();
    //show next step
    $("[data-step="+currStep+"]").show();
    $(window).scrollTop(0);
}


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! EVENT LISTENERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//when user clicks on button "next-step"
$("[data-role='nextStep']").click(function(){
    //check - if next steps exist
    if (currStep < maxStepCount){
        currStep++;
        showCurrStep();
    }
});

//when user clicks on button "prev-step"
$("[data-role='prevStep']").click(function(){
    //check - if prev steps exist
    if (currStep != 1){
        currStep--;
        showCurrStep();
    }
});

//when user change groupSize
$(".input-group-size").change(function(){
    let visitorsCount = $(this).val();

    //removes all visitors except one
    $(".visitor-wrapper").each(function(index, item){
        if (index != 0)
            $(item).remove()
    })

    //add needed count of visitors-blocks
    for (let i = 1; i < visitorsCount; i++)
        $(".visitor-wrapper:eq(0)")
        .after($(".visitor-wrapper:eq(0)")
        .clone(true));

    $(".visitor-wrapper .datepicker_jq").attr("id", "")
          .removeClass('hasDatepicker')
          .removeData('datepicker')
          .unbind()
          .datepicker({
                changeMonth: true,
                changeYear: true,
          });

    //changing number-text of visitor
    $(".visitor-wrapper").each(function(index, item){
        let newText = $(item).find(".step__subtitle-text").text().replace(/([0-9]{1,})/g, index + 1 )
        console.log(newText);
        $(item).find(".step__subtitle-text").text(newText)
    })

    //initializing datepickers for new visitors
    console.log($( ".datepicker_jq.passport-issued"));

    //initializing datepickers-validation for passports for new visitors
    passportValidate()


})


///////////////////////////////////////// ACTIONS //////////////////////////////////////////////////
inititializeSteps();
passportValidate()
