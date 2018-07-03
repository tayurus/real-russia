function addMonth(date, monthCount){
    let dateCopy = new Date(JSON.parse(JSON.stringify(date)));
    return new Date(dateCopy.setMonth(dateCopy.getMonth() + monthCount));
}
