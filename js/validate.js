
    let currentYear = new Date().getFullYear()
    let minDefaultYear = currentYear - 100;
    let currentDate = new Date();

    $( ".datepicker_jq").each( function(index, item){
        let minYearAttr = $(item).attr('data-minyear');
        let maxYearAttr = $(item).attr('data-maxyear');

        if ( typeof minYearAttr === "undefined" )
            $(item).datepicker( "option", "yearRange", minDefaultYear + ":" + currentYear);
        else
            $(item).datepicker( "option", "yearRange",  minYearAttr + ":" + currentYear);

        if ( typeof maxYearAttr === "undefined" )
            $(item).datepicker( "option", "yearRange", currentYear + ":" + currentYear + 20);
        else
            $(item).datepicker( "option", "yearRange", currentYear + ":" + maxYearAttr);

        if ( typeof minYearAttr === "undefined" && typeof maxYearAttr === "undefined" )
            $(item).datepicker( "option", "yearRange", minDefaultYear + ":" + currentYear);
        else
            $(item).datepicker( "option", "yearRange", minYearAttr + ":" + maxYearAttr);

    })

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!! ARRIVAL-DEPARTURE VALIDATION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Setting default min date for departure
    $(".first-entry .departure-date").each(function(index, item) {
        let currentDate = new Date();
        $(item).datepicker( {"minDate" :  new Date(currentDate.setDate(currentDate.getDate() + 2))});
        $(item).change(function(){
            let selectedDate = $(this).datepicker("getDate");
            let minDateArrival = new Date(selectedDate.toDateString()), maxDateArrival = new Date(selectedDate.toDateString());

            // CALCULATING MIN ARRIVAL DATE
            //subtract from selected date 30 days
            minDateArrival.setDate(minDateArrival.getDate() - 30);
            if (minDateArrival < new Date()){
                currentDate = new Date();
                minDateArrival = new Date(currentDate.setDate(currentDate.getDate() + 1));
            }


            // CALCULATING MAX ARRIVAL DATE
            maxDateArrival.setDate(maxDateArrival.getDate() - 1);
            $(this).closest('.input').prev().find('.first-entry .arrival-date').datepicker("option", {"minDate" : minDateArrival});
            $(this).closest('.input').prev().find('.first-entry .arrival-date').datepicker("option", {"maxDate" : maxDateArrival});

            if ($(".first-entry .arrival-date").datepicker('getDate') !== null){
                makeSecondEntryActive();
                // $('.second-entry .arrival-date').datepicker("option", {"minDate" : selectedDate.setDate(selectedDate.getDate() + 1)});
                $('.second-entry .arrival-date').datepicker("option", {"minDate" : new Date(selectedDate.setDate(selectedDate.getDate() + 1))});
            }

        })

    })


    // Setting default min dates for arrival
    $(".arrival-date").each(function(index,item){
        let currentDate = new Date();
        $(item).datepicker(  {"minDate" :  new Date(currentDate.setDate(currentDate.getDate() + 1))});
        $(item).change(function() {
            let selectedDate = $(this).datepicker("getDate");
            let maxDateDeparture = new Date(selectedDate.setDate(selectedDate.getDate() + 30));
            selectedDate = $(this).datepicker("getDate");
            let minDateDeparture = new Date(selectedDate.setDate(selectedDate.getDate() + 1));
            //search departure-date

            //if maxDateDeparture + 6 month > minPassportExpiredDate -> maxDateDeparture = minPassportExpiredDate - 6 month
            if (addMonth(maxDateDeparture, 6) > getMinPassportExpiredDate()){
                maxDateDeparture.setMilliseconds(maxDateDeparture.getMilliseconds() - (addMonth(maxDateDeparture, 6) - getMinPassportExpiredDate()));
                console.log("PROBLEM ", addMonth(maxDateDeparture, 6) + " > " + getMinPassportExpiredDate());
                console.log("NEW maxDateDeparture = ", maxDateDeparture);
            }

            $(this).closest('.input').next().find('.departure-date').datepicker("option", {"maxDate" : maxDateDeparture});
            $(this).closest('.input').next().find('.departure-date').datepicker("option", {"minDate" : minDateDeparture});
        })
    })



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  PASSPORT VALIDATION  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//setting minimal date of passport issued
function passportValidate(){

    $(".passport-issued").each(function(index, item){
        console.log("shit");
        let currentDate = new Date();
        if ($(item).hasClass("hasDatepicker"))
            $(item).datepicker("option", {"maxDate" :  currentDate});
        else
            $(item).datepicker( {"maxDate" :  currentDate});
    })

    //setting minimal date of passport expired
    $(".passport-expired").each(function(index, item){
        let currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() + 6)
        if ($(item).hasClass("hasDatepicker"))
            $(item).datepicker("option", {"minDate" :  new Date(currentDate.setDate(currentDate.getDate() + 2))});
        else
            $(item).datepicker( {"minDate" :  new Date(currentDate.setDate(currentDate.getDate() + 2))});
    })

}

$(".passport-expired").change(function(){
    getMinPassportExpiredDate()
})

function getMinPassportExpiredDate(){
    let minPassportExpiredDate = new Date(3000, 0, 0);
    $(".passport-expired").each(function(index, item){
        if (($(item).datepicker('getDate') < minPassportExpiredDate) && ($(item).datepicker('getDate') !==  null))
            minPassportExpiredDate = $(item).datepicker('getDate');

        //set max arrival date
        let minPassportExpiredDateCOPY = new Date(JSON.parse(JSON.stringify(minPassportExpiredDate)));
        minPassportExpiredDateCOPY.setMonth(minPassportExpiredDateCOPY.getMonth() - 6);
        minPassportExpiredDateCOPY.setDate(minPassportExpiredDateCOPY.getDate() - 1);
        console.log("minPassportExpiredDateCOPY = ", minPassportExpiredDateCOPY);
        if ($(".arrival-date").hasClass("hasDatepicker"))
            $(".arrival-date").datepicker("option",{maxDate: minPassportExpiredDateCOPY})
        else
            $(".arrival-date").datepicker({maxDate: minPassportExpiredDateCOPY})
        if ($(".departure-date").hasClass("hasDatepicker"))
            $(".departure-date").datepicker("option",{maxDate: minPassportExpiredDateCOPY})
        else
            $(".departure-date").datepicker({maxDate: minPassportExpiredDateCOPY})
    })
    return minPassportExpiredDate;

}


// !!!!!!!!!!!!!!!!!!!!!!!! entries validation !!!!!!!!!!!!!!!!!

$('.input-entries').change(function() {
    if( $(this).val() == 'Double entry visa' )
        $('.second-entry').show();
    else $('.second-entry').hide();
})
