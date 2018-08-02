// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//current showed step and max count of steps
let currStep, maxStepCount;

function inititializeSteps() {
    $("[data-role='prevStep']").hide()
    currStep = 1;
    maxStepCount = 4;
    showCurrStep();
}


function checkIsStepCorrect(step) {

    $('[data-step=' + step + ']').show();
    $('[data-step=' + step + '] input, [data-step=' + step + '] select').each((index, item) => {
        if ($(item).val() === "" || $(item).val() === null || ($(item).val() === 'no' && $(item).is(":checked")))
            $(item).trigger('change')
    })

    //идем по всем видимым строкам с ошибками и смотрим, есть ли ошибочный текст
    let stepHasError = false;
    $("[data-step=" + step + "] .input__error-label").each(function(index, item) {
        if ($(item).text() !== "" && $(item).is(":visible")) {
            stepHasError = true;
            $("[data-steps=" + step + "]").addClass("steps__item_incorrect");
            $("[data-steps=" + step + "]").removeClass("steps__item_correct");
        }
    });

    if (!stepHasError) {
        $("[data-steps=" + step + "]").removeClass("steps__item_incorrect");
        $("[data-steps=" + step + "]").addClass("steps__item_correct");
    }

    $('[data-step=' + step + ']').hide();
    $('[data-step=' + currStep + ']').show();

}

function showCurrStep() {
    //если сейчас 4-ый шаг, то изменить "next step" на "continue" и сделать ее кнопкой отправки формы
    setTimeout(() => {
        if (currStep == 4) {
            $("[data-role='nextStep']").text("Confirm!");
            $("[data-role='nextStep']").attr("type", "submit");
            $("[data-role='nextStep']").attr("data-role", "confirm");
        } else {
            //иначе сделать изменить "continue" на "next step"
            $("[data-role='confirm']").text("next step");
            $("[data-role='confirm']").attr("type", "button");
            $("[data-role='confirm']").attr("data-role", "nextStep");
        }
    }, 200)



    //hide all steps
    $("[data-step]").hide();
    //show next step
    $("[data-step=" + currStep + "]").show();
    $("[data-steps]").removeClass("steps__item_active");
    $("[data-steps=" + currStep + "]").addClass("steps__item_active");
    $(window).scrollTop(0);

    if (currStep != 1) {
        $("[data-role='prevStep']").show()
    } else {
        $("[data-role='prevStep']").hide()
    }
}

function separationDateIntoThreeInputs(date) {
    let mass = date.val().split('/');
    let next = date.next();
    for (i = 0; i < mass.length; i++) {
        next.val(mass[i]);
        next = next.next();
    }
}

function initializeVisitorsDatepickers(){
    $(".input-birth-date").datepicker({
        maxDate: new Date()
    })
    $(".input-passport-expired").datepicker({
        minDate: new Date(new Date().setMonth(new Date().getMonth() + 6))
    })
    $(".input-passport-issued").datepicker({
        maxDate: new Date()
    })
    $(".input-arrival-date1, .input-departure-date1").datepicker({
        minDate: new Date()
    })
}

function calculatePrice() {
    Visas.Russian.Prices.CurrentPriceServiceProxy.GetTouristVSDOrderPrice(Visas.Russian.EntryTypeId.parseFrom(numberOfEntries.val), Visas.Russian.RegistrationTypeId.parseFrom(registration.val), visitorsCount, function(data) {
        totalPrice = data.Total.toFixed(2);
        $('.total__sum-value').text(data.Total.toFixed(2));
    });
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! EVENT LISTENERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).on("click", '[data-role="confirm"], [data-role="nextStep"], [data-steps=4]', function(e) {
    if (currStep == 4){
        $('input,select').attr('data-visited','true');
        $('input,select').trigger('blur');

        //идем по всем видимым строкам с ошибками и смотрим, есть ли ошибочный текст
        errors = [];
        let stepsHasError = false;
        for (let i = 1; i <= 4; i++) {
            $("[data-step=" + i + "]").show()
            $("[data-step=" + i + "] .input__error-label").each(function(index, item) {
                if ($(item).text() !== "" && $(item).is(":visible")) {
                    stepsHasError = true;
                    $("[data-steps=" + currStep + "]").addClass("steps__item_incorrect");
                    $("[data-steps=" + currStep + "]").removeClass("steps__item_correct");
                    let error = {
                        step: i,
                        name: $(item).prev().find('[name]').attr('name'),
                    }

                    errors.push(error)
                }
            });
            $("[data-step=" + i + "]").hide();
        }

        $("[data-step=" + 4 + "]").show();

        // if ($("[name=agreeVisaSuitable]:checked").val() !== "yes")
        //     stepsHasError = true;
        // if ($("[name=haveRead]:checked").val() !== "yes")
        //     stepsHasError = true;

        if (stepsHasError) {
            $("#savedButtons").removeClass('d-block')
            $("#savedButtons").removeClass('d-sm-flex')
            $("#savedButtons").hide();
            alert("Check steps. You have errors!");
            $('.header-sticky').addClass('active');
            $(".sticky-errors__links").html("")
            errors.forEach(function(error) {
                $(".sticky-errors__links").append("<a class='sticky-errors__link' data-error-step=" + error.step + " href='#'>" + error.name + "</a>")
            })
            e.preventDefault();
        }

        console.log(errors);
    }

})

$(document).on('click', '.sticky-errors__link', function() {
    $('[data-steps= ' + $(this).attr('data-error-step') + ']').click();
    $([document.documentElement, document.body]).animate({
        scrollTop: $('[name=' + $(this).text() + ']').parent().offset().top - 75 - $('.header-sticky').height()
    }, 1000)
})
//when user clicks on button "next-step"
$("[data-role='nextStep']").click(function() {

    checkIsStepCorrect(currStep);

    //check - if next steps exist
    if (currStep < maxStepCount) {
        currStep++;
        showCurrStep();
    }


});

//when user clicks on button "prev-step"
$("[data-role='prevStep']").click(function() {

    checkIsStepCorrect(currStep);
    //check - if prev steps exist
    if (currStep != 1) {
        currStep--;
        showCurrStep();
    }

});

//when user change groupSize
$(".input-group-size").change(function() {

    let newVisitorsCount = $(this).val();

    //removes all visitors except one
    $(".visitor-wrapper").each(function(index, item) {
        if ((index + 1) > newVisitorsCount){
            $(item).remove();
            passportIssued.splice(index, 1);
            passportExpired.splice(index, 1);
        }

    })

    //save last sex
    let lastSex = $(".visitor-wrapper:last").find('[name=gender_' + visitorsCount + ']:checked').val();

    //add needed count of visitors-blocks
    for (let i = visitorsCount; i < newVisitorsCount; i++)
        $(".visitor-wrapper:eq(" + (visitorsCount - 1) + ")")
        .after($(".visitor-wrapper:eq(" + (visitorsCount - 1) + ")")
            .clone(false))



    initializeVisitorsDatepickers();
    initializeLocaleDatePicker();

    //changing number-text of visitor
    $(".visitor-wrapper").each(function(index, item) {
        let newText = ""
        if (index != 0)
            newText = "Visitor " + (index + 1);
        else
            newText = "Visitor 1 (Main Applicant)"
        $(item).find(".step__subtitle-text").text(newText);
        $(item).find(".radio-buttons__wrapper .radio-buttons__radio").attr('name', 'gender_' + (index + 1));
        $(item).find('[id^=m]').attr("id", "m" + (index + 1))
        $(item).find('[id^=f]').attr("id", "f" + (index + 1))
        $(item).find('[for^=m]').attr("for", "m" + (index + 1))
        $(item).find('[for^=f]').attr("for", "f" + (index + 1))

        //remove text from inputs
        if ((index + 1) > visitorsCount) {
            $(item).find('input').val("");
        }
    });

    //resurect last Sex
    $("[name=gender_" + visitorsCount + "][value=" + lastSex + "]").prop("checked", true)

    if (visitorsCount < newVisitorsCount)
        $(".visitor-wrapper:last").find('input').prop("checked", false)


    visitorsCount = newVisitorsCount;

    calculatePrice();
    // checkIsStepCorrect(2);
});

$('.input-entries').change(function() {
    if ($(this).val() == 'Double entry visa')
        $('.second-entry').show();
    else $('.second-entry').hide();

    calculatePrice();
})

$('.input-purpose').change(function() {
    if ($(this).val() == "Auto Tourist")
        $('.auto-tourism-wrapper').show()
    else $('.auto-tourism-wrapper').hide()


    setTimeout(() => {
        checkIsStepCorrect(3)
    }, 200)
})

$("[data-button='addLocation']").click(function() {
    console.log(locationCount);
    if(locationCount < 10) {
        $(this).before($(this).prev().clone(true));
        locationCount++;
        $(this).prev().find('.input-city').attr('name', 'visitCity' + locationCount);
        $(this).prev().find('.input-hotel').attr('name', 'visitHotel' + locationCount);

        $(".location-wrapper").each(function(index, item) {
            $(item).find('.button__remove-location').text("REMOVE LOCATION " + (index + 1));
            $(item).find('.step__subtitle-text').text("LOCATION " + (index + 1));
        })

        checkIsStepCorrect(3);
    }
})


$(document).on("click", ".button__remove-location", function() {
    if ($(".location-wrapper").length > 1) {
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

    $(".location-wrapper").each(function(index, item) {
        locationCount++;
        $(item).find('.input-city').attr('name', 'visitCity' + locationCount);
        $(item).find('.input-hotel').attr('name', 'visitHotel' + locationCount);
        $(item).find('.button__remove-location').text("REMOVE LOCATION " + (index + 1));
        $(item).find('.step__subtitle-text').text("LOCATION " + (index + 1));
    })

    checkIsStepCorrect(3);


})

$('.input-purpose').change(function() {
    if ($(this).val() == 'Auto Tourist')
        $('.auto-tourism-wrapper').show();
    else $('.auto-tourism-wrapper').hide();
})

$(document).on("blur propertychange change input paste", ".input-arrival-date1", function() {
    $('.arrival-date-insert').text($('.input-arrival-date1').val());
});

$(document).on("blur propertychange change input paste", ".input-departure-date1", function() {
    if (numberOfEntries.val === "Single entry visa") {
        $('.departure-date-insert').text($('.input-departure-date1').val());
    }

});

$(document).on("blur propertychange change input paste", ".input-departure-date2", function() {
    if (numberOfEntries.val === "Double entry visa") {
        $('.departure-date-insert').text($('.input-departure-date2').val());
    }
});
$(document).on("blur propertychange change input paste", ".input-entries", function() {
    numberOfEntries = {
        element: $(this),
        val: $(this).val()
    }

    if ($(this).val() === "Double entry visa") {
        $("#summary").html("The visa support document applied for will be valid for processing a visa for the named person to enter Russia (the first time) on or after <span class='arrival-date-insert'> &lt; not specified &gt; </span> and they must leave Russia (for the second time) on or before <span class='departure-date-insert'>&lt; not specified &gt;</span>. The visa will allow two entries into and two exits from Russia during this period. It is the applicant’s responsibility to confirm\ that the visa support document/visa meet their requirements before they process the visa, or travel or use the visa itself. Please note that once your visa is issued the pre-paid registration fees are non-refundable. Please note that once the visa support is issued, no refunds are possible.")
    } else {
        $("#summary").html("  The visa support document applied for will be valid for processing a visa for the named person to enter Russia on or after <span class='arrival-date-insert'> &lt; not specified &gt; </span> and they must leave Russia on or before <span class='departure-date-insert'>&lt; not specified &gt;</span>. The visa will allow one entry to and one exit from Russia during this period. It is the applicantâ€™s responsibility to confirm that the visa support document/visa meet their requirements before they process the visa, or travel or use the visa itself. Please note that once the visa support is issued, no refunds are possible.")
    }
});

function cityInGetNotes(ctr) {
    if (ctr !== null){
        let country = Visas.Russian.CountryRepository.Current.getNameByIsoAlpha2Code(ctr)
        console.log(country);

        if ($(e).attr('data-visited') === "true"){
            processingCity = {
                val: $(e).val(),
                element: $(e)
            };

            let index = $(".input-city").index(e);
            cities[index] = {
                val: $(e).val(),
                element: $(e)
            };

            let citiesVal = []
            cities.forEach((city) => {
                citiesVal.push(extractObjectField(city, "val"))
            })

            let hasSiberianRailWay = false;
            let anotherCitiesNotSelected = true;
            citiesVal.forEach((item) => {
                if (item === "Transsiberian Railway")
                    hasSiberianRailWay = true;

                else if (item !== null)
                    anotherCitiesNotSelected = false;
            })

            let errorsText = '<div>' + valueCanNotBeEmpty(cities[index].val) + '</div>';
            errorsText += '<div>' + transsiberianRailwayCanNotBeAlone(hasSiberianRailWay, anotherCitiesNotSelected) + '</div>';

            errorsText += "<div>" + citiesCannotContainDuplicates(citiesVal) + "</div>";

            let warningText = '<div>' + processingDaysForCaucasusCities(processingCity.val) + '</div>';

            $(e)
                .parent()
                .next()
                .html(errorsText);
            $(e)
                .parent()
                .next()
                .next()
                .html(warningText);

            checkIfFieldCorrect(errorsText, e)

            if (!trigger)
                cities.forEach((item) => {
                    validateProcessingCities(item.element, true);
                })
        }
    }
}

function citizenshipApplyInGetNotes(ctr) {
    if (ctr !== null){
        let country = Visas.Russian.CountryRepository.Current.getNameByIsoAlpha2Code(ctr)
        console.log(country);

            let errorsText =  '<div>'+ valueCanNotBeEmpty(country) +'</div>';

            if(valueCanNotBeEmpty(country) == ''){
                errorsText = '<div>' + someCountriesCanBeDangerous(false) + '</div>';
                Visas.Russian.Rules.RuleChecker.Current.IsTouristVSDServiceAvailable(country, function(res) {
                    errorsText = '<div>' + someCountriesCanBeDangerous(res) + '</div>'
                })

                if (typeof registration !== 'undefined')
                    errorsText += someCountriesCannotRegitsterInPiter(country, registration.val);
            }

            $('.input-citizenship')
                .parent()
                .next()
                .html(errorsText);

            checkIfFieldCorrect(errorsText, $('.input-citizenship'))

            if (typeof registration !== "undefined") validateRegistration(registration.element, true);


    }
}

function countryApplyInGetNotes(ctr){

    if (ctr !== null){
        let country = Visas.Russian.CountryRepository.Current.getNameByIsoAlpha2Code(ctr)
        let text = Visas.Russian.RussianConsulateSettignsRepository.Current.GetTouristNoteByCountry(country);
        if (text !== null) {
            text = text.replace("{Country}",country);
            $(".input-country").closest('.input').next().html("<b>CONSULAR NOTES</b>\
                                                    <div class='step__note-text'>" + text + "</div>")
            $(".input-country").closest('.input').next().removeClass('disabled');
        }
        else{
                $(".input-country").closest('.input').next().html("");
                $(".input-country").closest('.input').next().addClass('disabled');
        }
    }
}


$(document).on("blur propertychange change input paste", ".input-city", function() {
    let el = $(this);
    Visas.Russian.HotelsServiceProxy.Current.getHotels($(this).val(), function(data) {
        $(el).closest('.input').next().find('select').find('option').remove();
        $(el).closest('.input').next().find('select').append("<option disabled selected hidden>Please select...</option>");
        data.forEach((hotel) => {
            $(el).closest('.input').next().find('select').append("<option value=" + hotel.hotelName + " >" + hotel.hotelName + "</option>")
        })
    });
});

$(document).on("blur propertychange change input paste", ".input-registration", function() {
    calculatePrice();
})

$(document).on("blur propertychange change input paste", ".total__select", function() {
    let selectedCurrency = $(this).val();
    if (selectedCurrency === "gbp")
        $('.total__currency').text('£');
    if (selectedCurrency === "usd")
        $('.total__currency').text('$');
    if (selectedCurrency === "eur")
        $('.total__currency').text('€');

    let selectedRate = parseFloat($(this).find("option[value=" + selectedCurrency + "]").attr('rate')).toFixed(2);
    $('.total__sum-value').text((totalPrice * selectedRate).toFixed(2))

    // if($(this).val() === 'YES')
    //     $('.total-table__registration').text()
})

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FUNCTION EXPRESSIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Visas.Russian.EntryTypeId.parseFrom = function(val) {
    val = val.toLowerCase();
    if (val.indexOf("single") >= 0) {
        return Visas.Russian.EntryTypeId.Single;
    }

    if (val.indexOf("double") >= 0) {
        return Visas.Russian.EntryTypeId.Double;
    }
    throw new Error();
};

Visas.Russian.RegistrationTypeId.parseFrom = function(val) {
    switch (val) {
        case "NO":
            return null;
        case "YES":
            return Visas.Russian.RegistrationTypeId.RegistrationInMoscow;
        case "YES_Piter":
            return Visas.Russian.RegistrationTypeId.RegistrationInStPetersburg;
        default:
            throw new Error();
    }
};


///////////////////////////////////////// ACTIONS //////////////////////////////////////////////////
inititializeSteps();
calculatePrice();
initializeVisitorsDatepickers();
initializeLocaleDatePicker();
