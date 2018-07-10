/////////////////////////////////////////////данные
var arrivalDate1, departureDate1, arrivalDate2, departureDate2, passportNumber, passportIssued = [],
    passportExpired = [], country, registration, birthDate, processingCity, cities = [],
    visitorsCount = 1, firstName, surname, middleName, email, phone;

//////////////////////////////////////////helpers
function parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], parseInt(b[1]) - 1, b[2]);
}

function addMonths(date, months){
    let copyDate = new Date(JSON.parse(JSON.stringify(date)));
    copyDate.setMonth(copyDate.getMonth() + 6);
    return copyDate;
}

function extractObjectField(obj, fieldName){
    return obj[fieldName];
}


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//current showed step and max count of steps
let currStep,  maxStepCount;
function inititializeSteps() {
    currStep = 1;
    maxStepCount = 4;
    showCurrStep();
}

function checkIsStepCorrect(){
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
        }
        else {
            //иначе сделать изменить "continue" на "next step"
            $("[data-role='nextStep']").text("next step");
            $("[data-role='nextStep']").attr("type", "button");
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
    if($(this).val() == "Auto Tourist")
        $('.auto-tourism-wrapper').show()
    else $('.auto-tourism-wrapper').hide()
})

$("[data-button='addLocation']").click(function(){
    $(this).before($(this).prev().clone(true));
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

})

$('.input-purpose').change(function() {
    if( $(this).val() == 'Auto Tourist' )
        $('.auto-tourism-wrapper').show();
    else $('.auto-tourism-wrapper').hide();
})


///////////////////////////////////////// ACTIONS //////////////////////////////////////////////////
inititializeSteps();

///////////////////////////////////////////правила
function datePassportIssuedMustBeBeforeExpired(issued, expired) {
    if (typeof expired != 'undefined' && typeof expired != 'undefined')
        if (issued > expired)
            return "date passport Issued Must Be Before dateExpired! ";
    return "";
}

function datePassportExpiredMustBeAfterIssued(issued, expired) {
    if (expired < issued)
        return "date passport Expired Must Be After Issued date! ";
    return "";
}

function dateMustBeAfterCurrentDate(date) {
    let currentDate = new Date();
    if (date < currentDate )
        return "Date must be after current date!"
    return ""
}

function dateMustBeBeforeCurrentDate(date) {
    let currentDate = new Date();
    if (date > currentDate )
        return "Date must be before current date!"
    return ""
}

function arrivalDateMustBeBeforeDeparture(arrival, departure){
    if (arrival > departure)
        return "Arrival date must be before departure date!"
    return ""
}

function departureDateMustBeAfterArrivalDate(arrival, departure){
    if (departure < arrival)
        return "Departure date must be after arrival date!"
    return ""
}

function maxDaysBetweenArrivalAndDeparture30(arrival, departure){
    let day = 84 * 1000 * 1000;
    if ((departure - arrival) / day > 30)
        return "Your tourney can not be longer 30 days";
    return "";
}

function passportsMustBeValid6MonthsAfterDeparture(departureDate, passportsExpiredDates){
    //ищем самую раннюю дату окончания паспорта
    let minDate = new Date(3000,0,0);
    passportsExpiredDates.forEach((date) => {
        if (minDate > date)
            minDate = date;
    })

    //проверяем, что при добавлении 6 месяцев к дате отъезда, самый рано истекающий паспорт все еще действителен
    if (addMonths(departureDate, 6) > minDate)
        return "Passport must be valid at least 6 months after departure date";

    return "";
}

function secondArrivalDateMustBeLaterThanFirstDepartureDate(secondArrival, firstDeparture) {
    if (secondArrival < firstDeparture){
        return "second arrival date must be later than first departure date";
    }
    return "";
}

function someCountriesCannotRegitsterInPiter(country, registerCity){
    let restrictedCountries = ['Singapore', 'Malaysia'];
    if(registerCity == 'YES_Piter')
        if(restrictedCountries.includes(country))
            return `${country} can't register in Saint Petersburg`
    return ""
}

function processingDaysForCaucasusCities(city) {
    let caucasCities = ['Makhachkala', 'Pyatigorsk', 'Vladikavkaz', 'Magas'];

    if(caucasCities.includes(city))
        return 'Visa processing for Caucasus cities is 10 days'
    return ""
}

function citiesCannotContainDuplicates(cities) {
    let isDuplicates = false;
    cities.forEach((city, index) => {
        let citiesCopy = JSON.parse(JSON.stringify(cities));
        citiesCopy.splice(index, 1);
        if (citiesCopy.includes(city))
            isDuplicates = true;
    })

    if (isDuplicates)
        return "Locations can not contain duplicates cities";
    return "";
}

function warningRegistration7Days(arrivalDate, departureDate, registrationValue) {
    let days1;
    let day = 86400000;
    if (registrationValue !== "NO"){
        if (typeof arrivalDate !== "undefined" && typeof departureDate !== "undefined")
            days = (departureDate - arrivalDate) / day;
    }

    if (days <= 7 )
        return "Your journey is less than 7 days, so you don't need registration!";

    return "";
}

function valueCanNotBeEmpty(value){
    if (typeof value === 'undefined' || value === ''){
        return 'This field cannot be empty'
    }
    return '';
}

function valueMustContainOnlyLetters(value){
    let reg = /^[a-z]{1,}$/gi;
    if (!reg.test(value) && value != ''){
        return 'This field must contain only letters'
    }
    return ''
}

function valueMustContainOnlyDigits(value){
    let reg = /^[0-9]{1,}$/gi;
    if (!reg.test(value) && value != ''){
        return 'This field must contain only digits'
    }
    return ''
}

function emailMustBeValid(value){
    let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/gi;
    if (!reg.test(value)){
        return 'email must be valid';
    }
    return '';
}

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
});

$(document).on("blur propertychange change input paste", ".input-passport-expired", function() {
    validatePassportExpired($(this));
});

$(document).on("blur propertychange change input paste", ".input-arrival-date1", function() {
    validateArrival1($(this));
});

$(document).on("blur propertychange change input paste", ".input-departure-date1", function() {
    validateDeparture1($(this));
});

$(document).on("blur propertychange change input paste", ".input-departure-date2", function() {
    validateDeparture2($(this));
});

$(document).on("blur propertychange change input paste", ".input-arrival-date2", function() {
    validateArrival2($(this));
});

$(document).on("blur propertychange change input paste", ".input-citizenship", function() {
    validateCountry($(this));
});

$(document).on("blur propertychange change input paste", ".input-registration", function() {
    validateRegistration($(this));
});

$(document).on("blur propertychange change input paste", ".input-birth-date", function() {
    validateBirthDate($(this));
});

$(document).on("blur propertychange change input paste", ".input-city", function() {
    validateProcessingCities($(this));
});

$(document).on("blur propertychange change input paste", "[name='gender_1']", function() {
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
        alert(validateWarningRegistration7Days(1));
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
        alert(validateWarningRegistration7Days(1));
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
        alert(validateWarningRegistration7Days(2));
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

    let errorsText = dateMustBeAfterCurrentDate(departureDate1.val);
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
        alert(validateWarningRegistration7Days(2));
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
        alert(validateWarningRegistration7Days(1));
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
        if (typeof arrivalDate1 !== 'undefined' && typeof departureDate1 !== 'undefined')
            res = res || warningRegistration7Days(arrivalDate1.val, departureDate1.val, registration)
    if (entryNumber == 2)
        if (typeof arrivalDate2 !== 'undefined' && typeof departureDate2 !== 'undefined')
            res = res || warningRegistration7Days(arrivalDate2.val, departureDate2.val, registration)

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


$( ".datepicker_jq").datepicker({
      changeMonth: true,
      changeYear: true,
      // yearRange: (typeof($(this).attr('data-minyear')) === "undefined") ? minDefaultYear + ":" + currentYear : $(this).attr('data-minyear') + ":" + currentYear
}).mask('99/99/9999');

$( ".datepicker_jq").change(function(){
    if ($(this).datepicker('getDate').toDateString() === new Date().toDateString())
        $(this).datepicker("setDate", new Date());
})

$('.hint').click(function(event) {
    event.stopPropagation()
    console.log($(event.target));
    if($(event.target).closest('[tab]')) {
      $(this).find('[tab]').each((i, item) => {
        $(item).removeClass('hint__tab_active');
      })

      $(event.target).closest('[tab]').addClass('hint__tab_active');

      $(this).children('[data-tab]').each((i, item) => {
        $(item).removeClass('active');

        if($(event.target).closest('[tab]').attr('tab') == $(item).attr('data-tab')) {
          $(item).addClass('active');
        }
      })
    }

})



$(".input__select, .input__field").on('focusin',function() {
  $(".hint").each((i, item) => {
    $(item).removeClass('active');
  });

  $(".input__wrapper").each((i, item) => {
    $(item).removeClass('focus');
  });

  $(this).closest('.input').children('.hint').addClass('active');
  $(this).closest('.input').children('.input__highlight').addClass('focus');
  $(this).closest('.input__wrapper').addClass('focus');
});



$("#phone").intlTelInput({
  // allowDropdown: false,
  // autoHideDialCode: false,
  // autoPlaceholder: "off",
  // dropdownContainer: "body",
  // excludeCountries: ["us"],
  // formatOnDisplay: false,
  // geoIpLookup: function(callback) {
  //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
  //     var countryCode = (resp && resp.country) ? resp.country : "";
  //     callback(countryCode);
  //   });
  // },
  // hiddenInput: "full_number",
  // initialCountry: "auto",
  // nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // placeholderNumberType: "MOBILE",
  // preferredCountries: ['cn', 'jp'],
  separateDialCode: true
});

$(document).on("click", ".step__subtitle", function() {
    $(this).toggleClass("step__subtitle_close")
    $(this).next().toggle(1000)
})

setTimeout(function(){
    $('[data-steps]').click(function(){
        currStep = $(this).attr('data-steps');

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

!function(n) {
    "function" == typeof define && define.amd
        ? define(["jquery"], function(i) {
            n(i, window, document)
        })
        : n(jQuery, window, document)
}(function(n, i, t, a) {
    "use strict";
    var e = "countrySelect",
        s = 1,
        o = {
            defaultCountry: "",
            defaultStyling: "inside",
            excludeCountries: [],
            onlyCountries: [],
            preferredCountries: ["us", "gb"]
        },
        r = 38,
        u = 40,
        l = 13,
        h = 27,
        c = 65,
        d = 90;
    n(i).on("load", function() {
        !0
    });
    function p(i, t) {
        this.element = i,
        this.options = n.extend({}, o, t),
        this._defaults = o,
        this.ns = "." + e + s++,
        this._name = e,
        this.init()
    }
    p.prototype = {
        init: function() {
            return this._processCountryData(),
            this._generateMarkup(),
            this._setInitialState(),
            this._initListeners(),
            this.autoCountryDeferred = new n.Deferred,
            this._initAutoCountry(),
            this.autoCountryDeferred
        },
        _processCountryData: function() {
            this._setInstanceCountryData(),
            this._setPreferredCountries()
        },
        _setInstanceCountryData: function() {
            var i = this;
            if (this.options.onlyCountries.length) {
                var t = [];
                n.each(this.options.onlyCountries, function(n, a) {
                    var e = i._getCountryData(a, !0);
                    e && t.push(e)
                }),
                this.countries = t
            } else if (this.options.excludeCountries.length) {
                var a = this.options.excludeCountries.map(function(n) {
                    return n.toLowerCase()
                });
                this.countries = y.filter(function(n) {
                    return -1 === a.indexOf(n.iso2)
                })
            } else
                this.countries = y
        },
        _setPreferredCountries: function() {
            var i = this;
            this.preferredCountries = [],
            n.each(this.options.preferredCountries, function(n, t) {
                var a = i._getCountryData(t, !1);
                a && i.preferredCountries.push(a)
            })
        },
        _generateMarkup: function() {
            this.countryInput = n(this.element);
            var i = "country-select";
            this.options.defaultStyling && (i += " " + this.options.defaultStyling),
            this.countryInput.wrap(n("<div>", {class: i}));
            var t = n("<div>", {class: "flag-dropdown"}).insertAfter(this.countryInput),
                a = n("<div>", {class: "selected-flag"}).appendTo(t);
            this.selectedFlagInner = n("<div>", {class: "flag"}).appendTo(a),
            n("<div>", {class: "arrow"}).appendTo(a),
            this.countryList = n("<ul>", {class: "country-list v-hide"}).appendTo(t),
            this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"), n("<li>", {class: "divider"}).appendTo(this.countryList)),
            this._appendListItems(this.countries, ""),
            this.countryCodeInput = n("#" + this.countryInput.attr("id") + "_code"),
            this.countryCodeInput || (this.countryCodeInput = n('<input type="hidden" id="' + this.countryInput.attr("id") + '_code" name="' + this.countryInput.attr("name") + '_code" value="" />'), this.countryCodeInput.insertAfter(this.countryInput)),
            this.dropdownHeight = this.countryList.outerHeight(),
            this.countryList.removeClass("v-hide").addClass("hide"),
            this.countryListItems = this.countryList.children(".country")
        },
        _appendListItems: function(i, t) {
            var a = "";
            n.each(i, function(n, i) {
                a += '<li class="country ' + t + '" data-country-code="' + i.iso2 + '">',
                a += '<div class="flag ' + i.iso2 + '"></div>',
                a += '<span class="country-name">' + i.name + "</span>",
                a += "</li>"
            }),
            this.countryList.append(a)
        },
        _setInitialState: function() {
            var n = !1;
            this.countryInput.val() && (n = this._updateFlagFromInputVal());
            var i = this.countryCodeInput.val();
            if (i && this.selectCountry(i), !n) {
                var t;
                this.options.defaultCountry
                    ? (t = this._getCountryData(this.options.defaultCountry, !1)) || (
                        t = this.preferredCountries.length
                        ? this.preferredCountries[0]
                        : this.countries[0])
                    : t = this.preferredCountries.length
                        ? this.preferredCountries[0]
                        : this.countries[0],
                this.defaultCountry = t.iso2
            }
        },
        _initListeners: function() {
            var n = this;
            this.countryInput.on("keyup" + this.ns, function() {
                n._updateFlagFromInputVal()
            });
            this.selectedFlagInner.parent().on("click" + this.ns, function(i) {
                n.countryList.hasClass("hide") && !n.countryInput.prop("disabled") && n._showDropdown()
            }),
            this.countryInput.on("blur" + this.ns, function() {
                n.countryInput.val() != n.getSelectedCountryData().name && n.setCountry(n.countryInput.val()),
                n.countryInput.val(n.getSelectedCountryData().name)
            })
        },
        _initAutoCountry: function() {
            "auto" === this.options.initialCountry
                ? this._loadAutoCountry()
                : (this.selectCountry(this.defaultCountry), this.autoCountryDeferred.resolve())
        },
        _loadAutoCountry: function() {
            n.fn[e].autoCountry
                ? this.handleAutoCountry()
                : n.fn[e].startedLoadingAutoCountry || (n.fn[e].startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function(i) {
                    n.fn[e].autoCountry = i.toLowerCase(),
                    setTimeout(function() {
                        n(".country-select input").countrySelect("handleAutoCountry")
                    })
                }))
        },
        _focus: function() {
            this.countryInput.focus();
            var n = this.countryInput[0];
            if (n.setSelectionRange) {
                var i = this.countryInput.val().length;
                n.setSelectionRange(i, i)
            }
        },
        _showDropdown: function() {
            this._setDropdownPosition();
            var n = this.countryList.children(".active");
            this._highlightListItem(n),
            this.countryList.removeClass("hide"),
            this._scrollTo(n),
            this._bindDropdownListeners(),
            this.selectedFlagInner.parent().children(".arrow").addClass("up")
        },
        _setDropdownPosition: function() {
            var t = this.countryInput.offset().top,
                a = n(i).scrollTop(),
                e = t + this.countryInput.outerHeight() + this.dropdownHeight < a + n(i).height(),
                s = t - this.dropdownHeight > a,
                o = !e && s
                    ? "-" + (
                    this.dropdownHeight - 1) + "px"
                    : "";
            this.countryList.css("top", o)
        },
        _bindDropdownListeners: function() {
            var i = this;
            this.countryList.on("mouseover" + this.ns, ".country", function(t) {
                i._highlightListItem(n(this))
            }),
            this.countryList.on("click" + this.ns, ".country", function(t) {
                i._selectListItem(n(this))
            });
            var a = !0;
            n("html").on("click" + this.ns, function(n) {
                a || i._closeDropdown(),
                a = !1
            }),
            n(t).on("keydown" + this.ns, function(n) {
                n.preventDefault(),
                n.which == r || n.which == u
                    ? i._handleUpDownKey(n.which)
                    : n.which == l
                        ? i._handleEnterKey()
                        : n.which == h
                            ? i._closeDropdown()
                            : n.which >= c && n.which <= d && i._handleLetterKey(n.which)
            })
        },
        _handleUpDownKey: function(n) {
            var i = this.countryList.children(".highlight").first(),
                t = n == r
                    ? i.prev()
                    : i.next();
            t.length && (t.hasClass("divider") && (
                t = n == r
                ? t.prev()
                : t.next()), this._highlightListItem(t), this._scrollTo(t))
        },
        _handleEnterKey: function() {
            var n = this.countryList.children(".highlight").first();
            n.length && this._selectListItem(n)
        },
        _handleLetterKey: function(i) {
            var t = String.fromCharCode(i),
                a = this.countryListItems.filter(function() {
                    return n(this).text().charAt(0) == t && !n(this).hasClass("preferred")
                });
            if (a.length) {
                var e,
                    s = a.filter(".highlight").first();
                e = s && s.next() && s.next().text().charAt(0) == t
                    ? s.next()
                    : a.first(),
                this._highlightListItem(e),
                this._scrollTo(e)
            }
        },
        _updateFlagFromInputVal: function() {
            var i = this,
                t = this.countryInput.val().replace(/(?=[() ])/g, "\\");
            if (t) {
                for (var a = [], e = new RegExp("^" + t, "i"), s = 0; s < this.countries.length; s++)
                    this.countries[s].name.match(e) && a.push(this.countries[s].iso2);
                var o = !1;
                return n.each(a, function(n, t) {
                    i.selectedFlagInner.hasClass(t) && (o = !0)
                }),
                o || (this._selectFlag(a[0]), this.countryCodeInput.val(a[0]).trigger("change")),
                !0
            }
            return !1
        },
        _highlightListItem: function(n) {
            this.countryListItems.removeClass("highlight"),
            n.addClass("highlight")
        },
        _getCountryData: function(n, i) {
            for (
                var t = i
                ? y
                : this.countries,
            a = 0; a < t.length; a++)
                if (t[a].iso2 == n)
                    return t[a];
        return null
        },
        _selectFlag: function(n) {
            if (!n)
                return !1;
            this.selectedFlagInner.attr("class", "flag " + n);
            var i = this._getCountryData(n);
            this.selectedFlagInner.parent().attr("title", i.name);
            var t = this.countryListItems.children(".flag." + n).first().parent();
            this.countryListItems.removeClass("active"),
            t.addClass("active")
        },
        _selectListItem: function(n) {
            var i = n.attr("data-country-code");
            this._selectFlag(i),
            this._closeDropdown(),
            this._updateName(i),
            this.countryInput.trigger("change"),
            this.countryCodeInput.trigger("change"),
            this._focus()
        },
        _closeDropdown: function() {
            this.countryList.addClass("hide"),
            this.selectedFlagInner.parent().children(".arrow").removeClass("up"),
            n(t).off("keydown" + this.ns),
            n("html").off("click" + this.ns),
            this.countryList.off(this.ns)
        },
        _scrollTo: function(n) {
            if (n && n.offset()) {
                var i = this.countryList,
                    t = i.height(),
                    a = i.offset().top,
                    e = a + t,
                    s = n.outerHeight(),
                    o = n.offset().top,
                    r = o + s,
                    u = o - a + i.scrollTop();
                if (o < a)
                    i.scrollTop(u);
                else if (r > e) {
                    var l = t - s;
                    i.scrollTop(u - l)
                }
            }
        },
        _updateName: function(n) {
            this.countryCodeInput.val(n).trigger("change"),
            this.countryInput.val(this._getCountryData(n).name)
        },
        handleAutoCountry: function() {
            "auto" === this.options.initialCountry && (this.defaultCountry = n.fn[e].autoCountry, this.countryInput.val() || this.selectCountry(this.defaultCountry), this.autoCountryDeferred.resolve())
        },
        getSelectedCountryData: function() {
            var n = this.selectedFlagInner.attr("class").split(" ")[1];
            return this._getCountryData(n)
        },
        selectCountry: function(n) {
            n = n.toLowerCase(),
            this.selectedFlagInner.hasClass(n) || (this._selectFlag(n), this._updateName(n))
        },
        setCountry: function(n) {
            this.countryInput.val(n),
            this._updateFlagFromInputVal()
        },
        destroy: function() {
            this.countryInput.off(this.ns),
            this.selectedFlagInner.parent().off(this.ns);
            this.countryInput.parent().before(this.countryInput).remove()
        }
    },
    n.fn[e] = function(i) {
        var t = arguments;
        if (i === a || "object" == typeof i)
            return this.each(function() {
                n.data(this, "plugin_" + e) || n.data(this, "plugin_" + e, new p(this, i))
            });
        if ("string" == typeof i && "_" !== i[0] && "init" !== i) {
            var s;
            return this.each(function() {
                var a = n.data(this, "plugin_" + e);
                a instanceof p && "function" == typeof a[i] && (s = a[i].apply(a, Array.prototype.slice.call(t, 1))),
                "destroy" === i && n.data(this, "plugin_" + e, null)
            }),
            s !== a
                ? s
                : this
        }
    },
    n.fn[e].getCountryData = function() {
        return y
    },
    n.fn[e].setCountryData = function(n) {
        y = n
    };
    var y = n.each([
        {
            n: "Afghanistan",
            i: "af"
        }, {
            n: "Albani",
            i: "al"
        }, {
            n: "Algeri",
            i: "dz"
        },  {
            n: "Angola",
            i: "ao"
        },  {
            n: "Argentina",
            i: "ar"
        }, {
            n: "Armenia",
            i: "am"
        },  {
            n: "Australia",
            i: "au"
        }, {
            n: "Austria",
            i: "at"
        }, {
            n: "Azerbaijan",
            i: "az"
        }, {
            n: "Bahrain",
            i: "bh"
        }, {
            n: "Bangladesh",
            i: "bd"
        },{
            n: "Belarus",
            i: "by"
        }, {
            n: "Belgium",
            i: "be"
        },  {
            n: "Benin",
            i: "bj"
        }, {
            n: "Bolivia",
            i: "bo"
        }, {
            n: "Bosnia and Herzegovina",
            i: "ba"
        }, {
            n: "Botswana",
            i: "bw"
        }, {
            n: "Brazil",
            i: "br"
        },  {
            n: "Bulgaria",
            i: "bg"
        },  {
            n: "Burundi",
            i: "bi"
        }, {
            n: "Cambodia",
            i: "kh"
        }, {
            n: "Cameroon",
            i: "cm"
        }, {
            n: "Canada",
            i: "ca"
        }, {
            n: "Cape Verde",
            i: "cv"
        },  {
            n: "Central African Republic",
            i: "cf"
        }, {
            n: "Chad",
            i: "td"
        }, {
            n: "Chile",
            i: "cl"
        }, {
            n: "China",
            i: "cn"
        },  {
            n: "Columbia",
            i: "co"
        },  {
            n: "Republic of Congo",
            i: "cd"
        }, {
            n: "Democratic Republic of the Congo",
            i: "cg"
        },  {
            n: "Costa Rica",
            i: "cr"
        }, {
            n: "Croatia",
            i: "hr"
        }, {
            n: "Cuba",
            i: "cu"
        },  {
            n: "Cyprus",
            i: "cy"
        }, {
            n: "Czech Republic",
            i: "cz"
        }, {
            n: "Denmark",
            i: "dk"
        }, {
            n: "Djibouti",
            i: "dj"
        },   {
            n: "Ecuador",
            i: "ec"
        }, {
            n: "Egypt",
            i: "eg"
        },  {
            n: "Eritrea",
            i: "er"
        }, {
            n: "Estonia",
            i: "ee"
        }, {
            n: "Ethiopia",
            i: "et"
        },  {
            n: "Finland",
            i: "fi"
        }, {
            n: "France",
            i: "fr"
        }, {
            n: "Gabon",
            i: "ga"
        }, {
            n: "Georgia",
            i: "ge"
        }, {
            n: "Germany",
            i: "de"
        }, {
            n: "Ghana",
            i: "gh"
        }, {
            n: "Greece",
            i: "gr"
        },   {
            n: "Guatemala",
            i: "gt"
        },  {
            n: "Guinea",
            i: "gn"
        }, {
            n: "Guyana",
            i: "gy"
        },  {
            n: "Hong Kong",
            i: "hk"
        }, {
            n: "Hungary",
            i: "hu"
        }, {
            n: "Iceland",
            i: "is"
        }, {
            n: "India",
            i: "in"
        }, {
            n: "Indonesia",
            i: "id"
        }, {
            n: "Iran",
            i: "ir"
        }, {
            n: "Iraq",
            i: "iq"
        }, {
            n: "Ireland",
            i: "ie"
        }, {
            n: "Israel",
            i: "il"
        }, {
            n: "Italy",
            i: "it"
        }, {
            n: "Jamaica",
            i: "jm"
        }, {
            n: "Japan",
            i: "jp"
        },  {
            n: "Jordan",
            i: "jo"
        }, {
            n: "Kazakhstan",
            i: "kz"
        }, {
            n: "Kenya",
            i: "ke"
        },  {
            n: "Kuwait",
            i: "kw"
        }, {
            n: "Kyrgyzstan",
            i: "kg"
        }, {
            n: "Laos",
            i: "la"
        }, {
            n: "Latvia",
            i: "lv"
        }, {
            n: "Lebanon",
            i: "lb"
        },  {
            n: "Libya",
            i: "ly"
        }, {
            n: "Lithuania",
            i: "lt"
        }, {
            n: "Luxembourg",
            i: "lu"
        }, {
            n: "Macedonia",
            i: "mk"
        }, {
            n: "Madagascar",
            i: "mg"
        },  {
            n: "Malaysia",
            i: "my"
        },  {
            n: "Mali",
            i: "ml"
        }, {
            n: "Malta",
            i: "mt"
        },  {
            n: "Mauritania",
            i: "mr"
        }, {
            n: "Mauritius",
            i: "mu"
        }, {
            n: "Mexico",
            i: "mx"
        }, {
            n: "Moldova",
            i: "md"
        }, {
            n: "Monaco",
            i: "mc"
        }, {
            n: "Mongolia",
            i: "mn"
        }, {
            n: "Montenegro",
            i: "me"
        },  {
            n: "Morocco",
            i: "ma"
        }, {
            n: "Mozambique",
            i: "mz"
        }, {
            n: "Myanmar",
            i: "mm"
        }, {
            n: "Namibia",
            i: "na"
        },  {
            n: "Nepal",
            i: "np"
        }, {
            n: "Netherlands",
            i: "nl"
        }, {
            n: "New Zealand",
            i: "nz"
        }, {
            n: "Nicaragua",
            i: "ni"
        },  {
            n: "Nigeria",
            i: "ng"
        },  {
            n: "Korea (DPR)",
            i: "kp"
        },  {
            n: "Norway",
            i: "no"
        }, {
            n: "Oman",
            i: "om"
        }, {
            n: "Pakistan",
            i: "pk"
        }, {
            n: "Palestine",
            i: "ps"
        }, {
            n: "Panama",
            i: "pa"
        }, {
            n: "Peru",
            i: "pe"
        }, {
            n: "Philippines",
            i: "ph"
        }, {
            n: "Poland",
            i: "pl"
        }, {
            n: "Portugal",
            i: "pt"
        },  {
            n: "Qatar",
            i: "qa"
        }, {
            n: "Romania",
            i: "ro"
        }, {
            n: "Rwanda",
            i: "rw"
        },   {
            n: "Saudi Arabia",
            i: "sa"
        }, {
            n: "Senegal",
            i: "sn"
        }, {
            n: "Serbia",
            i: "rs"
        }, {
            n: "Seychelles",
            i: "sc"
        },  {
            n: "Singapore",
            i: "sg"
        }, {
            n: "Slovak Republic",
            i: "sk"
        }, {
            n: "Slovenia",
            i: "si"
        },  {
            n: "South Africa",
            i: "za"
        },  {
            n: "Republic of Korea",
            i: "kr"
        }, {
            n: "Spain",
            i: "es"
        }, {
            n: "Sri Lanka",
            i: "lk"
        }, {
            n: "Sudan",
            i: "sd"
        }, {
            n: "Sweden",
            i: "se"
        }, {
            n: "Switzerland",
            i: "ch"
        }, {
            n: "Syria",
            i: "sy"
        }, {
            n: "Taiwan",
            i: "tw"
        }, {
            n: "Tajikistan",
            i: "tj"
        }, {
            n: "Tanzania",
            i: "tz"
        }, {
            n: "Thailand",
            i: "th"
        },  {
            n: "Tunisia",
            i: "tn"
        }, {
            n: "Turkey",
            i: "tr"
        }, {
            n: "Turkmenistan",
            i: "tm"
        }, {
            n: "Uganda",
            i: "ug"
        }, {
            n: "Ukraine",
            i: "ua"
        }, {
            n: "United Arab Emirates",
            i: "ae"
        }, {
            n: "United Kingdom",
            i: "gb"
        }, {
            n: "United States",
            i: "us"
        }, {
            n: "Uruguay",
            i: "uy"
        }, {
            n: "Uzbekistan",
            i: "uz"
        }, {
            n: "Vatican City",
            i: "va"
        }, {
            n: "Venezuela",
            i: "ve"
        }, {
            n: "Vietnam",
            i: "vn"
        },  {
            n: "Yemen",
            i: "ye"
        }, {
            n: "Zambia",
            i: "zm"
        }, {
            n: "Zimbabwe",
            i: "zw"
        }

    ], function(n, i) {
        i.name = i.n,
        i.iso2 = i.i,
        delete i.n,
        delete i.i
    })
});

$(".total__country").countrySelect({
    preferredCountries: [],
    defaultCountry: "gb"
});
