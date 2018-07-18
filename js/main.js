
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//current showed step and max count of steps
let currStep,  maxStepCount;
function inititializeSteps() {
    currStep = 1;
    maxStepCount = 4;
    showCurrStep();
}


function checkIsStepCorrect(step){
    $('[data-step='+step+'] input, [data-step='+step+'] select').each((index, item) => {
        if ($(item).val() === "" || $(item).val() === null)
            $(item).trigger('change')
    })

    //идем по всем видимым строкам с ошибками и смотрим, есть ли ошибочный текст
    let stepHasError = false;
    $("[data-step="+step+"] .input__error-label").each(function(index, item){
        if ($(item).text() !== "" && $(item).is(":visible")){
            stepHasError = true;
            $("[data-steps="+step+"]").addClass("steps__item_incorrect");
            $("[data-steps="+step+"]").removeClass("steps__item_correct");
        }
    });

    if (!stepHasError){
        $("[data-steps="+step+"]").removeClass("steps__item_incorrect");
        $("[data-steps="+step+"]").addClass("steps__item_correct");
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
            $("[data-role='confirm']").text("next step");
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

    checkIsStepCorrect(currStep);

    //check - if next steps exist
    if (currStep < maxStepCount){
        currStep++;
        showCurrStep();
    }
});

//when user clicks on button "prev-step"
$("[data-role='prevStep']").click(function(){

    checkIsStepCorrect(currStep);
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

    //save last sex
    let lastSex = $(".visitor-wrapper:last").find('[name=gender_' + visitorsCount + ']:checked').val();

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
        $(item).find(".radio-buttons__wrapper .radio-buttons__radio").attr('name', 'gender_' + (index + 1));
        $(item).find('[id^=m]').attr("id", "m" + (index + 1))
        $(item).find('[id^=f]').attr("id", "f" + (index + 1))
        $(item).find('[for^=m]').attr("for", "m" + (index + 1))
        $(item).find('[for^=f]').attr("for", "f" + (index + 1))

        //remove text from inputs
        if ((index + 1) > visitorsCount){
            $(item).find('input').val("");
        }
    })

    //resurect last Sex
     $("[name=gender_" + visitorsCount + "][value=" + lastSex + "]").prop("checked", true)

     if (visitorsCount < newVisitorsCount)
        $(".visitor-wrapper:last").find('input').prop("checked", false)

    initializeDatepicker()

    visitorsCount = newVisitorsCount;


})

$('.input-entries').change(function() {
    if( $(this).val() == 'Double entry visa' )
        $('.second-entry').show();
    else $('.second-entry').hide();
})

$('.input-purpose').change(function() {
    if($(this).val() == "Auto Tourist")
        $('.auto-tourism-wrapper').show()
    else $('.auto-tourism-wrapper').hide()


    setTimeout(() => {
        checkIsStepCorrect(3)
    },200)
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

    checkIsStepCorrect(3);


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

$(document).on("blur propertychange change input paste", ".input-arrival-date1", function() {
    $('.arrival-date-insert').text($('.input-arrival-date1').val());
});

$(document).on("blur propertychange change input paste", ".input-departure-date1", function() {
    if (numberOfEntries.val === "Single entry visa"){
        $('.departure-date-insert').text($('.input-departure-date1').val());
    }

});

$(document).on("blur propertychange change input paste", ".input-departure-date2", function() {
    if (numberOfEntries.val === "Double entry visa"){
        $('.departure-date-insert').text($('.input-departure-date2').val());
    }
});
$(document).on("blur propertychange change input paste", ".input-entries", function() {
    numberOfEntries = {
        element: $(this),
        val: $(this).val()
    }

    if ($(this).val() === "Double entry visa"){
        $("#summary").html("The visa support document applied for will be valid for processing a visa for the named person to enter Russia (the first time) on or after <span class='arrival-date-insert'> &lt; not specified &gt; </span> and they must leave Russia (for the second time) on or before <span class='departure-date-insert'>&lt; not specified &gt;</span>. The visa will allow two entries into and two exits from Russia during this period. It is the applicant’s responsibility to confirm\ that the visa support document/visa meet their requirements before they process the visa, or travel or use the visa itself. Please note that once your visa is issued the pre-paid registration fees are non-refundable. Please note that once the visa support is issued, no refunds are possible.")
    }
    else{
        $("#summary").html("  The visa support document applied for will be valid for processing a visa for the named person to enter Russia on or after <span class='arrival-date-insert'> &lt; not specified &gt; </span> and they must leave Russia on or before <span class='departure-date-insert'>&lt; not specified &gt;</span>. The visa will allow one entry to and one exit from Russia during this period. It is the applicantâ€™s responsibility to confirm that the visa support document/visa meet their requirements before they process the visa, or travel or use the visa itself. Please note that once the visa support is issued, no refunds are possible.")
    }
});

$(document).on("blur propertychange change input paste", ".input-country", function() {
    let text = Visas.Russian.RussianConsulateSettignsRepository.Current.GetTouristNoteByCountry($(this).val());
    text = text.replace("{Country}", $(this).val());
    $(this).closest('.input').next().html("<b>CONSULAR NOTES</b>\
                                            <div class='step__note-text'>" + text + "</div>")
});

$(document).on("blur propertychange change input paste", ".input-city", function() {
    let el = $(this);
    Visas.Russian.HotelsServiceProxy.Current.getHotels($(this).val(), function(data){
        $(el).closest('.input').next().find('select').find('option').remove();
        $(el).closest('.input').next().find('select').append("<option disabled selected hidden>Please select...</option>");
        data.forEach((hotel) => {
            $(el).closest('.input').next().find('select').append("<option value=" + hotel.hotelName + " >" + hotel.hotelName + "</option>")
        })
    });
});

///////////////////////////////////////// ACTIONS //////////////////////////////////////////////////
inititializeSteps();
