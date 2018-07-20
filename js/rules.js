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
    let days = 0;
    let day = 86400000;
    if (registrationValue !== "NO"){
        if (typeof arrivalDate !== "undefined" && typeof departureDate !== "undefined")
            days = (departureDate - arrivalDate) / day;
        if (days <= 7 )
            return "Your journey is less than 7 days, so you don't need registration!";
    }



    return "";
}

function valueCanNotBeEmpty(value){
    if (typeof value === 'undefined' || value === '' || value === null){
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

function transsiberianRailwayCanNotBeAlone(hasSiberianRailWay, anotherCitiesNotSelected){
    if (hasSiberianRailWay && anotherCitiesNotSelected)
        return 'Transsiberian Railway can not be only one location';

    return '';
}

function userMustReadTerms(value){
    if (value === "no")
        return "You should read terms and conditions";
    return "";
}

function userAgreeVisaSuitable(value){
    if (value === "no")
        return "You should check 'yes'";
    return "";
}
