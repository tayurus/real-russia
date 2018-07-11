let currentYear = new Date().getFullYear();
let minDefaultYear = currentYear - 100;
let currentDate = new Date();

$(".datepicker_jq").each(function(index, item) {
    let minYearAttr = $(item).attr("data-minyear");
    let maxYearAttr = $(item).attr("data-maxyear");

    if (typeof minYearAttr === "undefined") $(item).datepicker("option", "yearRange", minDefaultYear + ":" + currentYear);
    else $(item).datepicker("option", "yearRange", minYearAttr + ":" + currentYear);

    if (typeof maxYearAttr === "undefined") $(item).datepicker("option", "yearRange", currentYear + ":" + currentYear + 20);
    else $(item).datepicker("option", "yearRange", currentYear + ":" + maxYearAttr);

    if (typeof minYearAttr === "undefined" && typeof maxYearAttr === "undefined")
        $(item).datepicker("option", "yearRange", minDefaultYear + ":" + currentYear);
    else $(item).datepicker("option", "yearRange", minYearAttr + ":" + maxYearAttr);
});

//ВАЛИДАЦИЯ СВЯЗКИ ДАТА ВЫДАЧИ/ОКОНЧАНИЯ ПАСПОРТА + ДАТА ПРИЕЗДА/ДАТА ВЫЕЗДА

/////////////////////////////////////////////обработчики изменений данных

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

$(document).on("blur propertychange change input paste", ".input-departure-date1", function() {
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
    validateCountry($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-registration", function() {
    validateRegistration($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-birth-date", function() {
    validateBirthDate($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-city", function() {
    validateProcessingCities($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", "[name='gender_1']", function() {
    validateGenders($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on('blur propertychange change input paste', '.input-firstname', function(){
    validateFirstName($(this));
    separationDateIntoThreeInputs($(this));
})

$(document).on('blur propertychange change input paste', '.input-middlename', function(){
    validateMiddleName($(this));
    separationDateIntoThreeInputs($(this));
})

$(document).on('blur propertychange change input paste', '.input-surname', function(){
    validateSurname($(this));
    separationDateIntoThreeInputs($(this));
})

$(document).on('blur propertychange change input paste', '.input-passport-number', function(){
    validatePassportNumber($(this));
    separationDateIntoThreeInputs($(this));
})

$(document).on('blur propertychange change input paste', '.input-email', function(){
    validateEmail($(this));
    separationDateIntoThreeInputs($(this));
})
$(document).on('blur propertychange change input paste', '.input-phone', function(){
    validatePhone($(this));
    separationDateIntoThreeInputs($(this));
})


//функции-обработчики

//валидация даты выдачи паспорта
function validatePassportIssued(e, trigger) {
    let index = $(".input-passport-issued").index(e) + 1;
    passportIssued[index] = {
        val: $(e).datepicker("getDate"),
        element: $(e)
    };

    let errorsText = "";
    if (typeof passportExpired[index] != "undefined") {
        errorsText = datePassportIssuedMustBeBeforeExpired(passportIssued[index].val, passportExpired[index].val);
    }

    errorsText += "<div>" + dateMustBeBeforeCurrentDate(passportIssued[index].val) + "</div>";
    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)

    if (typeof passportExpired[index] !== "undefined" && !trigger) validatePassportExpired(passportExpired[index].element, true);
}

//валидация даты окончания действия паспорта
function validatePassportExpired(e, trigger) {
    let index = $(".input-passport-expired").index(e) + 1;
    passportExpired[index] = {
        val: $(e).datepicker("getDate"),
        element: $(e)
    };

    let errorsText = "";
    if (typeof passportIssued[index] != "undefined") {
        errorsText = datePassportExpiredMustBeAfterIssued(passportIssued[index].val, passportExpired[index].val);
    }

    errorsText += "<div>" + dateMustBeAfterCurrentDate(passportExpired[index].val) + "</div>";

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
        val: $(e).datepicker("getDate"),
        element: $(e)
    };

    let errorsText = dateMustBeAfterCurrentDate(arrivalDate1.val);
    if (typeof departureDate1 !== "undefined") {
        errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate1.val, departureDate1.val) + "</div>";
        errorsText += "<div>" + arrivalDateMustBeBeforeDeparture(arrivalDate1.val, departureDate1.val) + "</div>";
    }

    if (typeof validateWarningRegistration7Days(1) !== "undefined" && !trigger && validateWarningRegistration7Days(1) !== ""){
        // alert(validateWarningRegistration7Days(1));
    }

    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)

    if (!trigger && typeof departureDate1 !== "undefined") validateDeparture1(departureDate1.element, true);
}

//валидация даты выезда
function validateDeparture1(e, trigger) {
    departureDate1 = {
        val: $(e).datepicker("getDate"),
        element: $(e)
    };

    let errorsText = dateMustBeAfterCurrentDate(departureDate1.val);
    if (typeof arrivalDate1 !== "undefined") {
        errorsText += "<div>" + departureDateMustBeAfterArrivalDate(arrivalDate1.val, departureDate1.val) + "</div>";
        errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate1.val, departureDate1.val) + "</div>";
    }

    if (passportExpired.length > 0) {
        let passportExpiredDates = [];
        passportExpired.forEach(item => {
            passportExpiredDates.push(extractObjectField(item, "val"));
        });
        errorsText += "<div>" + passportsMustBeValid6MonthsAfterDeparture(departureDate1.val, passportExpiredDates) + "</div>";
    }

    if (typeof validateWarningRegistration7Days(1) !== "undefined" && !trigger && validateWarningRegistration7Days(1) !== ""){
        // alert(validateWarningRegistration7Days(1));
    }

    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)

    if (!trigger && typeof arrivalDate1 !== "undefined") validateArrival1(arrivalDate1.element, true);

    if (!trigger && typeof arrivalDate2 !== "undefined") validateArrival2(arrivalDate2.element, true);
}

//валидация даты вьезда
function validateArrival2(e, trigger) {
    arrivalDate2 = {
        val: $(e).datepicker("getDate"),
        element: $(e)
    };

    let errorsText = dateMustBeAfterCurrentDate(arrivalDate2.val);
    if (typeof departureDate2 !== "undefined") {
        errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate2.val, departureDate2.val) + "</div>";
        errorsText += "<div>" + arrivalDateMustBeBeforeDeparture(arrivalDate2.val, departureDate2.val) + "</div>";
    }

    if (typeof departureDate1 !== "undefined") {
        errorsText += "<div>" + secondArrivalDateMustBeLaterThanFirstDepartureDate(arrivalDate2.val, departureDate1.val) + "</div>";
    }

    if (typeof validateWarningRegistration7Days(2) !== "undefined" && !trigger && validateWarningRegistration7Days(2) !== ""){
        // alert(validateWarningRegistration7Days(2));
    }
    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)

    if (!trigger && typeof departureDate2 !== "undefined") validateDeparture2(departureDate2.element, true);

    if (!trigger && typeof departureDate1 !== "undefined") validateDeparture1(departureDate1.element, true);
}

//валидация даты выезда
function validateDeparture2(e, trigger) {
    departureDate2 = {
        val: $(e).datepicker("getDate"),
        element: $(e)
    };

    let errorsText = '';

    if(typeof departureDate1 !== "undefined")
        errorsText = dateMustBeAfterCurrentDate(departureDate1.val);
        
    if (typeof arrivalDate2 !== "undefined") {
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

    if (typeof validateWarningRegistration7Days(2) !== "undefined" && !trigger && validateWarningRegistration7Days(2) !== ""){
        // alert(validateWarningRegistration7Days(2));
    }

    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)

    if (!trigger && typeof arrivalDate1 !== "undefined") validateArrival2(arrivalDate2.element, true);
}

function validateCountry(e, trigger){
    country = {
        val: $(e).val(),
        element: $(e)
    };

    let errorsText = "";
    if (typeof registration !== 'undefined')
        errorsText = someCountriesCannotRegitsterInPiter(country.val, registration.val);

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
    if (typeof country !== 'undefined')
        errorsText = someCountriesCannotRegitsterInPiter(country.val, registration.val);

    if (typeof validateWarningRegistration7Days(1) !== "undefined" && !trigger && validateWarningRegistration7Days(1) !== ""){
        // alert(validateWarningRegistration7Days(1));
    }

    $(e)
        .parent()
        .next()
        .html(errorsText);

    checkIfFieldCorrect(errorsText, e)

    if (!trigger && typeof country !== "undefined") validateCountry(country.element, true);
}

function validateBirthDate(e, trigger) {
    birthDate = {
        val: $(e).datepicker('getDate'),
        element: $(e)
    };

    let errorsText = dateMustBeBeforeCurrentDate(birthDate.val);
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

    let index = $(".input-city").index(e) + 1;
    cities[index] = {
        val: $(e).val(),
        element: $(e)
    };

    let citiesVal = []
    cities.forEach((city) => {
        citiesVal.push(extractObjectField(city, "val"))
    })
    let errorsText = processingDaysForCaucasusCities(processingCity.val);
    errorsText += "<div>" + citiesCannotContainDuplicates(citiesVal) + "</div>";

    $(e)
        .parent()
        .next()
        .html(errorsText);
    checkIfFieldCorrect(errorsText, e)

    if (!trigger)
        cities.forEach((item) => {
            validateProcessingCities(item.element, true);
        })
}

function validateWarningRegistration7Days(entryNumber){
    let res;
    if (entryNumber == 1)
        if (typeof arrivalDate1 !== 'undefined' && typeof departureDate1 !== 'undefined' && departureDate1.val != null)
            res = res || warningRegistration7Days(arrivalDate1.val, departureDate1.val, registration)
    if (entryNumber == 2)
        if (typeof arrivalDate2 !== 'undefined' && typeof departureDate2 !== 'undefined' && departureDate2.val != null)
            res = res || warningRegistration7Days(arrivalDate2.val, departureDate2.val, registration)

    console.log("RES = ", res);
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
        $(e).parent().addClass("input__wrapper_correct");
    }
    else {
        $(e).parent().removeClass("input__wrapper_correct");
    }
}
