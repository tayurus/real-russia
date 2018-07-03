function addMonth(date, monthCount){
    let dateCopy = new Date(JSON.parse(JSON.stringify(date)));
    return new Date(dateCopy.setMonth(dateCopy.getMonth() + monthCount));
}

function makeSecondEntryActive() {
    $('.input__wrapper.disabled').find('input').removeAttr('disabled');
    $('.input__wrapper.disabled').removeClass('disabled');
}
