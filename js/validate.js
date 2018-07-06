let currentYear = new Date().getFullYear()
let minDefaultYear = currentYear - 100;
let currentDate = new Date();

$(".datepicker_jq").each(function(index, item) {
    let minYearAttr = $(item).attr('data-minyear');
    let maxYearAttr = $(item).attr('data-maxyear');

    if (typeof minYearAttr === "undefined")
        $(item).datepicker("option", "yearRange", minDefaultYear + ":" + currentYear);
    else
        $(item).datepicker("option", "yearRange", minYearAttr + ":" + currentYear);

    if (typeof maxYearAttr === "undefined")
        $(item).datepicker("option", "yearRange", currentYear + ":" + currentYear + 20);
    else
        $(item).datepicker("option", "yearRange", currentYear + ":" + maxYearAttr);

    if (typeof minYearAttr === "undefined" && typeof maxYearAttr === "undefined")
        $(item).datepicker("option", "yearRange", minDefaultYear + ":" + currentYear);
    else
        $(item).datepicker("option", "yearRange", minYearAttr + ":" + maxYearAttr);

    }
)

//ВАЛИДАЦИЯ СВЯЗКИ ДАТА ВЫДАЧИ/ОКОНЧАНИЯ ПАСПОРТА + ДАТА ПРИЕЗДА/ДАТА ВЫЕЗДА

/////////////////////////////////////////////обработчики изменений данных

$(document).on("change", ".input-passport-issued", function() {
    validatePassportIssued($(this));
});

$(document).on("change", ".input-passport-expired", function() {
    validatePassportExpired($(this));
});

$(document).on("change", ".input-arrival-date1", function() {
    validateArrival1($(this))
});

$(document).on("change", ".input-departure-date1", function() {
    validateDeparture1($(this))
});

$(document).on("change", ".input-departure-date2", function() {
    validateDeparture2($(this))
});

$(document).on("change", ".input-arrival-date2", function() {
    validateArrival2($(this))
});

//функции-обработчики

//валидация даты выдачи паспорта
function validatePassportIssued(e, trigger) {
    let index = $(".input-passport-issued").index(e) + 1;
    passportIssued[index] = {
        val: $(e).datepicker('getDate'),
        element: $(e)
    }

    let errorsText = "";
    if (typeof passportExpired[index] != 'undefined') {
        errorsText = datePassportIssuedMustBeBeforeExpired(passportIssued[index].val, passportExpired[index].val);
    }

    errorsText += "<div>" + dateMustBeBeforeCurrentDate(passportIssued[index].val) + "</div>";
    $(e).parent().next().html(errorsText);

    if (typeof passportExpired[index] !== 'undefined' && !trigger)
        validatePassportExpired(passportExpired[index].element, true)
}

//валидация даты окончания действия паспорта
function validatePassportExpired(e, trigger) {
    let index = $(".input-passport-expired").index(e) + 1;
    passportExpired[index] = {
        val: $(e).datepicker('getDate'),
        element: $(e)
    }

    let errorsText = "";
    if (typeof passportIssued[index] != 'undefined') {
        errorsText = datePassportExpiredMustBeAfterIssued(passportIssued[index].val, passportExpired[index].val);
    }

    errorsText += "<div>" + dateMustBeAfterCurrentDate(passportExpired[index].val) + "</div>";

    $(e).parent().next().html(errorsText);

    if (typeof passportIssued[index] !== 'undefined' && !trigger)
        validatePassportIssued(passportIssued[index].element, true)

    if (!trigger && typeof departureDate2!== "undefined")
        validateDeparture2(departureDate2.element, true);

    if (!trigger && typeof departureDate1!== "undefined")
        validateDeparture1(departureDate1.element, true);
}

//валидация даты вьезда
function validateArrival1(e, trigger) {
    arrivalDate1= {
        val: $(e).datepicker('getDate'),
        element: $(e)
    }

    let errorsText = dateMustBeAfterCurrentDate(arrivalDate1.val);
    if (typeof departureDate1!== "undefined") {
        errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate1.val, departureDate1.val) + "</div>"
        errorsText += "<div>" + arrivalDateMustBeBeforeDeparture(arrivalDate1.val, departureDate1.val) + "</div>"
    }

    $(e).parent().next().html(errorsText);

    if (!trigger && typeof departureDate1!== "undefined")
        validateDeparture1(departureDate1.element, true);
    }

//валидация даты выезда
function validateDeparture1(e, trigger) {
    departureDate1= {
        val: $(e).datepicker('getDate'),
        element: $(e)
    }

    let errorsText = dateMustBeAfterCurrentDate(departureDate1.val);
    if (typeof arrivalDate1!== "undefined") {
        errorsText += "<div>" + departureDateMustBeAfterArrivalDate(arrivalDate1.val, departureDate1.val) + "</div>"
        errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate1.val, departureDate1.val) + "</div>"
    }

    if (passportExpired.length > 0) {
        let passportExpiredDates = [];
        passportExpired.forEach((item) => {
            passportExpiredDates.push(extractObjectField(item, "val"))
        })
        errorsText += "<div>" + passportsMustBeValid6MonthsAfterDeparture(departureDate1.val, passportExpiredDates) + "</div>";
    }

    $(e).parent().next().html(errorsText);

    if (!trigger && typeof arrivalDate1!== "undefined")
        validateArrival1(arrivalDate1.element, true);

    if (!trigger && typeof arrivalDate2!== "undefined")
        validateArrival2(arrivalDate2.element, true);


    }



//валидация даты вьезда
function validateArrival2(e, trigger) {
    arrivalDate2= {
        val: $(e).datepicker('getDate'),
        element: $(e)
    }

    let errorsText = dateMustBeAfterCurrentDate(arrivalDate2.val);
    if (typeof departureDate2 !== "undefined") {
        errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate2.val, departureDate2.val) + "</div>"
        errorsText += "<div>" + arrivalDateMustBeBeforeDeparture(arrivalDate2.val, departureDate2.val) + "</div>"
    }

    if (typeof departureDate1 !== "undefined"){
        errorsText += "<div>" + secondArrivalDateMustBeLaterThanFirstDepartureDate(arrivalDate2.val, departureDate1.val) + "</div>"
    }

    $(e).parent().next().html(errorsText);

    if (!trigger && typeof departureDate2!== "undefined")
        validateDeparture2(departureDate2.element, true);

    if (!trigger && typeof departureDate1!== "undefined")
        validateDeparture1(departureDate1.element, true);
    }


//валидация даты выезда
function validateDeparture2(e, trigger) {
    departureDate1= {
        val: $(e).datepicker('getDate'),
        element: $(e)
    }

    let errorsText = dateMustBeAfterCurrentDate(departureDate1.val);
    if (typeof arrivalDate1!== "undefined") {
        errorsText += "<div>" + departureDateMustBeAfterArrivalDate(arrivalDate1.val, departureDate1.val) + "</div>"
        errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate1.val, departureDate1.val) + "</div>"
    }

    if (passportExpired.length > 0) {
        let passportExpiredDates = [];
        passportExpired.forEach((item) => {
            passportExpiredDates.push(extractObjectField(item, "val"))
        })
        errorsText += "<div>" + passportsMustBeValid6MonthsAfterDeparture(departureDate1.val, passportExpiredDates) + "</div>";
    }

    $(e).parent().next().html(errorsText);

    if (!trigger && typeof arrivalDate1!== "undefined")
        validateArrival1(arrivalDate1.element, true);
    }
