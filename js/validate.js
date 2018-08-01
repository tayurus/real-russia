let currentYear = new Date().getFullYear();
let minDefaultYear = currentYear - 100;
let currentDate = new Date();

// setTimeout(()=> {
//     $(".datepicker_jq").each(function(index, item) {
//         let minYearAttr = $(item).attr("data-minyear");
//         let maxYearAttr = $(item).attr("data-maxyear");
//
//         if (typeof minYearAttr === "undefined") $(item).datepicker("option", "yearRange", minDefaultYear + ":" + currentYear);
//         else $(item).datepicker("option", "yearRange", minYearAttr + ":" + currentYear);
//
//         if (typeof maxYearAttr === "undefined") $(item).datepicker("option", "yearRange", currentYear + ":" + currentYear + 20);
//         else $(item).datepicker("option", "yearRange", currentYear + ":" + maxYearAttr);
//
//         if (typeof minYearAttr === "undefined" && typeof maxYearAttr === "undefined")
//             $(item).datepicker("option", "yearRange", minDefaultYear + ":" + currentYear);
//         else $(item).datepicker("option", "yearRange", minYearAttr + ":" + maxYearAttr);
//     });
// },500)


//ВАЛИДАЦИЯ СВЯЗКИ ДАТА ВЫДАЧИ/ОКОНЧАНИЯ ПАСПОРТА + ДАТА ПРИЕЗДА/ДАТА ВЫЕЗДА

/////////////////////////////////////////////обработчики изменений данных

$(document).on("blur propertychange change input paste", ".input-group-size", function() {
    validateGroupSize($(this));
});
$(document).on("blur propertychange change input paste", ".input-entries", function() {
    validateEntries($(this));
});
$(document).on("blur propertychange change input paste", ".input-purpose", function() {
    validatePurpose($(this));
});
$(document).on("blur propertychange change input paste", ".input-delivery", function() {
    validateDelivery($(this));
});


$(document).on("blur propertychange change input paste", ".input-passport-issued", function() {
    validatePassportIssued($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-passport-expired", function() {
    validatePassportExpired($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-arrival-date1", function() {
    validateArrival1($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-departure-date1", function(e) {
    console.log(e);
    validateDeparture1($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-departure-date2", function() {
    validateDeparture2($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-arrival-date2", function() {
    validateArrival2($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-citizenship", function() {
    validateCitizenship($(this));
});

$(document).on("blur propertychange change input paste", ".input-registration", function() {
    validateRegistration($(this));
});

$(document).on("blur propertychange change input paste", ".input-birth-date", function() {
    validateBirthDate($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-city", function() {
    validateProcessingCities($(this));
});

$(document).on("blur propertychange change input paste", "[name^='gender_']", function() {
    validateGenders($(this));
});

$(document).on('blur propertychange change input paste', '.input-firstname', function(){
    validateFirstName($(this));
})

$(document).on('blur propertychange change input paste', '.input-middlename', function(){
    validateMiddleName($(this));
})

$(document).on('blur propertychange change input paste', '.input-surname', function(){
    validateSurname($(this));
})

$(document).on('blur propertychange change input paste', '.input-passport-number', function(){
    validatePassportNumber($(this));
})

$(document).on('blur propertychange change input paste', '.input-email', function(){
    validateEmail($(this));
})
$(document).on('blur propertychange change input paste', '.input-phone', function(){
    validatePhone($(this));
})
$(document).on('blur propertychange change input paste', '.input-country', function(){
    validateCountryApply($(this));
})
$(document).on('blur propertychange change input paste', '.input-vehicle-make', function(){
    validateVehicleMake($(this));
})
$(document).on('blur propertychange change input paste', '.input-vehicle-color', function(){
    validateVehicleColor($(this));
})
$(document).on('blur propertychange change input paste', '.input-vehicle-lisence', function(){
    validateVehicleLisence($(this));
})
$(document).on('blur propertychange change input paste', '.input-hotel', function(){
    validateProcessingHotels($(this));
})
$(document).on('blur propertychange change input paste', '[name=haveRead]', function(){
    validateHaveReadTerms($(this));
})
$(document).on('blur propertychange change input paste', '[name=agreeVisaSuitable]', function(){
    validateAgreeVisaSuitable($(this));
})







//функции-обработчики

//валидация даты выдачи паспорта


function validatePassportIssued(e, trigger) {
    let index = $(".input-passport-issued").index(e);
    passportIssued[index] = {
        val:$(e).data('datepicker').date,
        element: $(e)
    };

    let errorsText = "<div>" + valueCanNotBeEmpty($(passportIssued[index].element).val()) + "</div>";
    if (valueCanNotBeEmpty($(passportIssued[index].element).val()) === ""){
        if (typeof passportExpired[index] != "undefined") {
            errorsText += datePassportIssuedMustBeBeforeExpired(passportIssued[index].val, passportExpired[index].val);
        }
        errorsText += "<div>" + dateMustBeBeforeCurrentDate(passportIssued[index].val) + "</div>";
    }

    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)

    if (typeof passportExpired[index] !== "undefined" && !trigger) validatePassportExpired(passportExpired[index].element, true);
}

//валидация даты окончания действия паспорта
function validatePassportExpired(e, trigger) {
    let index = $(".input-passport-expired").index(e);
    passportExpired[index] = {
        val:$(e).data('datepicker').date,
        element: $(e)
    };

    let errorsText = "<div>" + valueCanNotBeEmpty($(passportExpired[index].element).val()) + "</div>";

    if ( valueCanNotBeEmpty($(passportExpired[index].element).val()) === ""){
        if (typeof passportIssued[index] != "undefined") {
            errorsText += datePassportExpiredMustBeAfterIssued(passportIssued[index].val, passportExpired[index].val);
        }
        errorsText += "<div>" + dateMustBeAfterCurrentDate(passportExpired[index].val) + "</div>";
    }



    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)

    if (typeof passportIssued[index] !== "undefined" && !trigger) validatePassportIssued(passportIssued[index].element, true);

    if (!trigger && typeof departureDate2 !== "undefined") validateDeparture2(departureDate2.element, true);

    if (!trigger && typeof departureDate1 !== "undefined") validateDeparture1(departureDate1.element, true);
}

//валидация даты вьезда
function validateArrival1(e, trigger) {
    arrivalDate1 = {
        val:$(e).data('datepicker').date,
        element: $(e)
    };

    let warningText = "";
    let errorsText = "<div>" + valueCanNotBeEmpty($(arrivalDate1.element).val()) + "</div>";
    if (valueCanNotBeEmpty($(arrivalDate1.element).val()) === ""){
        errorsText += dateMustBeAfterCurrentDate(arrivalDate1.val);
        if (typeof departureDate1 !== "undefined" && $(departureDate1.element).val() !== "")  {
            errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate1.val, departureDate1.val) + "</div>";
            errorsText += "<div>" + arrivalDateMustBeBeforeDeparture(arrivalDate1.val, departureDate1.val) + "</div>";

        }

        if (registration.val !== "NO" && typeof validateWarningRegistration7Days(1) !== "undefined"  && validateWarningRegistration7Days(1) !== ""){
            warningText += '<div>' + validateWarningRegistration7Days(1) + "</div>";
        }
    }


    $(e)
        .parent()
        .next()
        .html(errorsText);

    $(e).parent().next().next().html(warningText)

    checkIfFieldCorrect(errorsText, e)

    if (!trigger && typeof departureDate1 !== "undefined") validateDeparture1(departureDate1.element, true);
    if (!trigger && typeof registration !== "undefined") validateRegistration(registration.element, true);
}

//валидация даты выезда
function validateDeparture1(e, trigger) {
    departureDate1 = {
        val:$(e).data('datepicker').date,
        element: $(e)
    };

    let errorsText = "<div>" + valueCanNotBeEmpty($(departureDate1.element).val()) + "</div>";
    let warningText = "";
    if (valueCanNotBeEmpty($(departureDate1.element).val()) === ""){
        errorsText += dateMustBeAfterCurrentDate(departureDate1.val);
        if (typeof arrivalDate1 !== "undefined" && $(arrivalDate1.element).val() !== "") {
            errorsText += "<div>" + departureDateMustBeAfterArrivalDate(arrivalDate1.val, departureDate1.val) + "</div>";
            errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate1.val, departureDate1.val) + "</div>";
            errorsText += "<div>" + valueCanNotBeEmpty($(departureDate1.element).val()) + "</div>";
        }

        if (passportExpired.length > 0) {
            let passportExpiredDates = [];
            passportExpired.forEach(item => {
                passportExpiredDates.push(extractObjectField(item, "val"));
            });
            errorsText += "<div>" + passportsMustBeValid6MonthsAfterDeparture(departureDate1.val, passportExpiredDates) + "</div>";
        }

        if (registration.val !== "NO" && typeof validateWarningRegistration7Days(1) !== "undefined" && validateWarningRegistration7Days(1) !== ""){
            warningText = '<div>' + validateWarningRegistration7Days(1) + "</div>";
        }
    }



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

    if (!trigger && typeof arrivalDate1 !== "undefined") validateArrival1(arrivalDate1.element, true);
    if (!trigger && typeof arrivalDate2 !== "undefined") validateArrival2(arrivalDate2.element, true);
    if (!trigger && typeof registration !== "undefined") validateRegistration(registration.element, true);
}

//валидация даты вьезда
function validateArrival2(e, trigger) {
    arrivalDate2 = {
        val:$(e).data('datepicker').date,
        element: $(e)
    };

    let errorsText = valueCanNotBeEmpty($(arrivalDate2.element).val());
    let warningText = "";
    if (valueCanNotBeEmpty($(arrivalDate2.element).val()) === ""){
        errorsText = dateMustBeAfterCurrentDate(arrivalDate2.val);
        if (typeof departureDate2 !== "undefined" && $(departureDate2.element).val() !== "") {
            errorsText += "<div>" + valueCanNotBeEmpty($(arrivalDate2.element).val()) + "</div>";
            errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate2.val, departureDate2.val) + "</div>";
            errorsText += "<div>" + arrivalDateMustBeBeforeDeparture(arrivalDate2.val, departureDate2.val) + "</div>";
        }

        if (typeof departureDate1 !== "undefined" &&  $(departureDate1.element).val() !== "") {
            errorsText += "<div>" + secondArrivalDateMustBeLaterThanFirstDepartureDate(arrivalDate2.val, departureDate1.val) + "</div>";
        }


        if (registration.val !== "NO" && typeof validateWarningRegistration7Days(2) !== "undefined"  && validateWarningRegistration7Days(2) !== ""){
            warningText = '<div>' + validateWarningRegistration7Days(2) + "</div>";
        }
    }


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

    if (!trigger && typeof departureDate2 !== "undefined") validateDeparture2(departureDate2.element, true);
    if (!trigger && typeof departureDate1 !== "undefined") validateDeparture1(departureDate1.element, true);
    if (!trigger && typeof registration !== "undefined") validateRegistration(registration.element, true);
}

//валидация даты выезда
function validateDeparture2(e, trigger) {
    departureDate2 = {
        val:$(e).data('datepicker').date,
        element: $(e)
    };

    let errorsText = "<div>" + valueCanNotBeEmpty($(departureDate2.element).val()) + "</div>";
    let warningText = "";
    if (valueCanNotBeEmpty($(departureDate2.element).val()) === ""){
        if(typeof departureDate1 !== "undefined" && $(departureDate1.element).val() !== "")
            errorsText += dateMustBeAfterCurrentDate(departureDate1.val);

        if (typeof arrivalDate2 !== "undefined" &&  $(arrivalDate2.element).val() !== "") {
            errorsText += "<div>" + departureDateMustBeAfterArrivalDate(arrivalDate2.val, departureDate2.val) + "</div>";
            errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate2.val, departureDate2.val) + "</div>";

        }

        if (passportExpired.length > 0) {
            let passportExpiredDates = [];
            passportExpired.forEach(item => {
                passportExpiredDates.push(extractObjectField(item, "val"));
            });
            errorsText += "<div>" + passportsMustBeValid6MonthsAfterDeparture(departureDate2.val, passportExpiredDates) + "</div>";
        }
    }

    if (registration.val !== "NO" && typeof validateWarningRegistration7Days(2) !== "undefined" && validateWarningRegistration7Days(2) !== ""){
        warningText += '<div>' + validateWarningRegistration7Days(2) + "</div>";
    }

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

    if (!trigger && typeof arrivalDate2 !== "undefined") validateArrival2(arrivalDate2.element, true);
    if (!trigger && typeof registration !== "undefined") validateRegistration(registration.element, true);
}

function validateCitizenship(e, trigger){
    citizenship = {
        val: $(e).val(),
        element: $(e)
    };

    let errorsText =  '<div>'+ valueCanNotBeEmpty(citizenship.val) +'</div>';

    if(valueCanNotBeEmpty(citizenship.val) == ''){
        errorsText = '<div>' + someCountriesCanBeDangerous(false) + '</div>';
        Visas.Russian.Rules.RuleChecker.Current.IsTouristVSDServiceAvailable(citizenship.val, function(res) {
            errorsText = '<div>' + someCountriesCanBeDangerous(res) + '</div>'
        })

        if (typeof registration !== 'undefined')
            errorsText += someCountriesCannotRegitsterInPiter(citizenship.val, registration.val);
    }

    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)

    if (!trigger && typeof registration !== "undefined") validateRegistration(registration.element, true);
}

function validateRegistration(e, trigger){
    registration = {
        val: $(e).val(),
        element: $(e)
    };

    let errorsText = "";
    if (typeof citizenship !== 'undefined')
        errorsText = someCountriesCannotRegitsterInPiter(citizenship.val, registration.val);

    let warningText = "";
    if (registration.val !== "NO" && typeof validateWarningRegistration7Days(1) !== "undefined" && validateWarningRegistration7Days(1) !== ""){
        warningText = '<div>' + validateWarningRegistration7Days(1) + "</div>";
    }

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

    if (!trigger && typeof citizenship !== "undefined") validateCitizenship(citizenship.element, true);

    if (!trigger && typeof arrivalDate1 !== "undefined") validateArrival1(arrivalDate1.element, true);
    if (!trigger && typeof arrivalDate2 !== "undefined") validateArrival2(arrivalDate2.element, true);
    if (!trigger && typeof departureDate1 !== "undefined") validateDeparture1(departureDate1.element, true);
    if (!trigger && typeof departureDate2 !== "undefined") validateDeparture2(departureDate2.element, true);
}

function validateBirthDate(e, trigger) {
    birthDate = {
        val: $(e).data('datepicker').date,
        element: $(e)
    };

    let errorsText =  '<div>' + valueCanNotBeEmpty($(e).val()) + '</div>';
    if ( valueCanNotBeEmpty($(e).val()) === ""){
         errorsText += '<div>' + dateMustBeBeforeCurrentDate(birthDate.val) + '</div>';
    }
    $(e)
        .parent()
        .next()
        .html(errorsText);
    checkIfFieldCorrect(errorsText, e)
}

function validateProcessingCities(e, trigger) {
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

function validateProcessingHotels(e, trigger) {

    let index = $(".input-hotel").index(e);
    hotels[index] = {
        val: $(e).val(),
        element: $(e)
    };

    let errorsText = '<div>' + valueCanNotBeEmpty(hotels[index].val) + '</div>';

    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)
}

function validateWarningRegistration7Days(entryNumber){
    let res;
    if (entryNumber == 1)
        if (typeof arrivalDate1 !== 'undefined' && typeof departureDate1 !== 'undefined' && $('.input-departure-date1').val() != "" &&  $('.input-arrival-date1').val() != "" && typeof registration !== "undefined")
            res = res || warningRegistration7Days(arrivalDate1.val, departureDate1.val, registration.val)
    if (entryNumber == 2)
        if (typeof arrivalDate2 !== 'undefined' && typeof departureDate2 !== 'undefined' && $('.input-departure-date2').val() != "" &&  $('.input-arrival-date2').val() != "" && typeof registration !== "undefined")
            res = res || warningRegistration7Days(arrivalDate2.val, departureDate2.val, registration.val)

    return res;
}

function validateGenders(e) {
    $(e).closest('.radio-buttons').next('.input__error-label').text('');
}

function validateFirstName(e){
    firstName = {
        val: $(e).val(),
        element: $(e)
    }
    let errorsText = '<div>'+ valueCanNotBeEmpty(firstName.val) +'</div>';
    errorsText += '<div>'+ valueMustContainOnlyLetters(firstName.val) +'</div>';
    $(e)
        .parent()
        .next()
        .html(errorsText);
    checkIfFieldCorrect(errorsText, e)
}

function validateMiddleName(e){
    middleName = {
        val: $(e).val(),
        element: $(e)
    }
    let errorsText = '<div>'+ valueMustContainOnlyLetters(middleName.val) +'</div>';
    $(e)
        .parent()
        .next()
        .html(errorsText);
    checkIfFieldCorrect(errorsText, e)
}

function validateSurname(e){
    surname = {
        val: $(e).val(),
        element: $(e)
    }
    let errorsText = '<div>'+ valueCanNotBeEmpty(surname.val) +'</div>';
    errorsText += '<div>'+ valueMustContainOnlyLetters(surname.val) +'</div>';
    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)
}

function validatePassportNumber(e){
    passportNumber= {
        val: $(e).val(),
        element: $(e)
    }

    let errorsText = '<div>'+ valueCanNotBeEmpty(passportNumber.val) +'</div>';
    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)
}

function validateEmail(e){
    email= {
        val: $(e).val(),
        element: $(e)
    }

    let errorsText = '<div>'+ emailMustBeValid(email.val) +'</div>';
    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)
}

function validatePhone(e){
    phone = {
        val: $(e).val(),
        element: $(e)
    }

    let errorsText = '<div>'+ valueMustContainOnlyDigits(phone.val) +'</div>';
    errorsText += '<div>'+ valueCanNotBeEmpty(phone.val) +'</div>';
    $(e)
        .closest('.input__wrapper')
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)
}

function checkIfFieldCorrect(errorsText, e){
    if (errorsText.replace(/<div>/gi,'').replace(/<\/div>/gi, '').trim() === ''){
        $(e).closest('.input__wrapper').addClass("input__wrapper_correct");
        $(e).closest('.input').addClass("input_correct");
        $(e).closest('.input__wrapper').removeClass("input__wrapper_error");
    }
    else {
        $(e).closest('.input__wrapper').removeClass("input__wrapper_correct");
        $(e).closest('.input').removeClass("input_correct");
        $(e).closest('.input__wrapper').addClass("input__wrapper_error");
    }
}

function validateCountryApply(e){
    countryApplyIn = {
        val: $(e).val(),
        element: $(e)
    }

    let errorsText =  '<div>'+ valueCanNotBeEmpty(countryApplyIn.val) +'</div>';
    $(e)
        .closest('.input__wrapper')
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)
}

function validateVehicleMake(e){
    vehicleMake = {
        val: $(e).val(),
        element: $(e)
    }

    let errorsText =  '<div>'+ valueCanNotBeEmpty(vehicleMake.val) +'</div>';
    $(e)
        .closest('.input__wrapper')
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)
}

function validateVehicleColor(e){
    vehicleColor = {
        val: $(e).val(),
        element: $(e)
    }

    let errorsText =  '<div>'+ valueCanNotBeEmpty(vehicleColor.val) +'</div>';
    $(e)
        .closest('.input__wrapper')
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)
}

function validateVehicleLisence(e){
    vehicleLisence = {
        val: $(e).val(),
        element: $(e)
    }

    let errorsText =  '<div>'+ valueCanNotBeEmpty(vehicleLisence.val) +'</div>';
    $(e)
        .closest('.input__wrapper')
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)
}

function validateHaveReadTerms(e){
    haveReadTerms = {
        element: $(e),
        val: $(e).attr('value')
    }

    let errorsText = '<div>'+  userMustReadTerms(haveReadTerms.val)  +'</div>';
    $(e)
        .closest('.radio-buttons')
        .next()
        .html(errorsText);
}

function validateAgreeVisaSuitable(e){
    agreeVisaSuitable = {
        element: $(e),
        val: $(e).attr('value')
    }

    let errorsText = '<div>'+  userAgreeVisaSuitable(agreeVisaSuitable.val)  +'</div>';
    $(e)
        .closest('.radio-buttons')
        .next()
        .html(errorsText);
}

function validateGroupSize(e){
    groupSize = {
        element: $(e),
        val: $(e).val()
    }
    let errorsText = '<div>'+  userMustReadTerms(groupSize.val)  +'</div>';
    $(e)
        .closest('.input__wrapper')
        .next()
        .html(errorsText);
    checkIfFieldCorrect(errorsText, e)
}

function validateEntries(e){
    numberOfEntries = {
        element: $(e),
        val: $(e).val()
    }
    let errorsText = '<div>'+  userMustReadTerms(numberOfEntries.val)  +'</div>';
    $(e)
        .closest('.input__wrapper')
        .next()
        .html(errorsText);
    checkIfFieldCorrect(errorsText, e)
}

function validatePurpose(e){
     purpose = {
        element: $(e),
        val: $(e).val()
    }
    let errorsText = '<div>'+  userMustReadTerms(purpose.val)  +'</div>';
    $(e)
        .closest('.input__wrapper')
        .next()
        .html(errorsText);
    checkIfFieldCorrect(errorsText, e)
}

function validateDelivery(e){
    let delivery = {
        element: $(e),
        val: $(e).val()
    }
    let errorsText = '<div>'+  userMustReadTerms(delivery.val)  +'</div>';
    $(e)
        .closest('.input__wrapper')
        .next()
        .html(errorsText);
    checkIfFieldCorrect(errorsText, e)
}
