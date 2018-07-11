
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//current showed step and max count of steps
let currStep,  maxStepCount;
function inititializeSteps() {
    currStep = 1;
    maxStepCount = 4;
    showCurrStep();
}

function checkIsStepCorrect(){
    $('input:visible').each((index, item) => {
        if ($(item).val() == "")
            $(item).trigger('change')
    })

    //идем по всем видимым строкам с ошибками и смотрим, есть ли ошибочный текст
    let stepHasError = false;
    $(".input__error-label").each(function(index, item){
        if ($(item).text() !== "" && $(item).is(":visible")){
            stepHasError = true;
            $("[data-steps="+currStep+"]").addClass("steps__item_incorrect");
            $("[data-steps="+currStep+"]").removeClass("steps__item_correct");
        }
    });

    if (!stepHasError){
        $("[data-steps="+currStep+"]").removeClass("steps__item_incorrect");
        $("[data-steps="+currStep+"]").addClass("steps__item_correct");
    }

}

function showCurrStep(){

    //если сейчас 4-ый шаг, то изменить "next step" на "continue" и сделать ее кнопкой отправки формы
    setTimeout(() => {
        if (currStep == 4){
            $("[data-role='nextStep']").text("Confirm!");
            $("[data-role='nextStep']").attr("type", "submit");
            $("[data-role='nextStep']").attr("data-role", "confirm");
        }
        else {
            //иначе сделать изменить "continue" на "next step"
            $("[data-role='nextStep']").text("next step");
            $("[data-role='confirm']").attr("type", "button");
            $("[data-role='confirm']").attr("data-role", "nextStep");
        }
    },200)



    //hide all steps
    $("[data-step]").hide();
    //show next step
    $("[data-step="+currStep+"]").show();
    $("[data-steps]").removeClass("steps__item_active");
    $("[data-steps="+currStep+"]").addClass("steps__item_active");
    $(window).scrollTop(0);
}


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! EVENT LISTENERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).on("click", '[data-role="confirm"]', function(e){
    //идем по всем видимым строкам с ошибками и смотрим, есть ли ошибочный текст
    let stepsHasError = false;
    $(".input__error-label").each(function(index, item){
        if ($(item).text() !== ""){
            stepsHasError = true;
            $("[data-steps="+currStep+"]").addClass("steps__item_incorrect");
            $("[data-steps="+currStep+"]").removeClass("steps__item_correct");
        }
    });
    if (stepsHasError){
        alert("Check steps. You have errors!");
        e.preventDefault();
    }
})

//when user clicks on button "next-step"
$("[data-role='nextStep']").click(function(){

    checkIsStepCorrect();

    //check - if next steps exist
    if (currStep < maxStepCount){
        currStep++;
        showCurrStep();
    }
});

//when user clicks on button "prev-step"
$("[data-role='prevStep']").click(function(){

    checkIsStepCorrect();
    //check - if prev steps exist
    if (currStep != 1){
        currStep--;
        showCurrStep();
    }
});

//when user change groupSize
$(".input-group-size").change(function(){

    let newVisitorsCount = $(this).val();

    //removes all visitors except one
    $(".visitor-wrapper").each(function(index, item){
        if ((index + 1) > newVisitorsCount)
            $(item).remove()
    })

    //add needed count of visitors-blocks
    for (let i = visitorsCount; i < newVisitorsCount; i++)
        $(".visitor-wrapper:eq("+(visitorsCount -1 )+")")
        .after($(".visitor-wrapper:eq("+(visitorsCount -1 )+")")
        .clone(false))

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
        $(item).find(".step__subtitle-text").text(newText);
        $(item).find(".radio-buttons__wrapper:first .radio-buttons__radio").attr('name', 'gender_' + (index + 1));
        $(item).find('#yes').attr("id", "yes" + (index + 1))
        $(item).find('#no').attr("id", "no" + (index + 1))
        $(item).find('[for=yes]').attr("for", "yes" + (index + 1))
        $(item).find('[for=no]').attr("for", "no" + (index + 1))

        //remove text from inputs
        if ((index + 1) > visitorsCount){
            $(item).find('input').val("");
        }
    })

    visitorsCount = newVisitorsCount;

})

$('.input-entries').change(function() {
    if( $(this).val() == 'Double entry visa' )
        $('.second-entry').show();
    else $('.second-entry').hide();
})

$('.input-purpose').change(function() {
    console.log("purpose.val = ", $(this).val());
    if($(this).val() == "Auto Tourist")
        $('.auto-tourism-wrapper').show()
    else $('.auto-tourism-wrapper').hide()
})

$("[data-button='addLocation']").click(function(){
    $(this).before($(this).prev().clone(true));
    locationCount++;
    $(this).prev().find('.input-city').attr('name', 'visitCity' + locationCount);
    $(this).prev().find('.input-hotel').attr('name', 'visitHotel' + locationCount);
})


$(document).on("click", ".button__remove-location", function(){
    if ($(".location-wrapper").length > 1){
        let element = $(this).parent().find('.input-city');
        cities.forEach((item, index) => {
            if (item.element.is(element))
                cities.splice(index, 1);
        })
        $(this).parent().remove();
    }

    cities.forEach((item) => {
        validateProcessingCities(item.element, true);
    })
    locationCount = 0;

    $(".location-wrapper").each(function(index, item){
        locationCount++;
        $(item).find('.input-city').attr('name', 'visitCity' + locationCount);
        $(item).find('.input-hotel').attr('name', 'visitHotel' + locationCount);
    })


})

$('.input-purpose').change(function() {
    if( $(this).val() == 'Auto Tourist' )
        $('.auto-tourism-wrapper').show();
    else $('.auto-tourism-wrapper').hide();
})

function separationDateIntoThreeInputs(date) {
    let mass = date.val().split('/');
    let next = date.next();
    for (i = 0; i < mass.length; i++) {
        next.val(mass[i]);
        next = next.next();
    }
}


///////////////////////////////////////// ACTIONS //////////////////////////////////////////////////
inititializeSteps();
