
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

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!! VALIDATION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Setting default min date for departure
    console.log("SHIT");
    $(".departure-date").each(function(index, item) {
        let currentDate = new Date();
        $(item).datepicker("option", "minDate",  new Date(currentDate.setDate(currentDate.getDate() + 2)));
        console.log("departure-date each");
        $(item).change(function(){
            console.log("departure-date CHANGED");
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



            $(this).datepicker("option", "minDate", minDateArrival);
            $(this).datepicker("option", "maxDate", maxDateArrival);
        })

    })


    // Setting default min dates for arrival
    $(".arrival-date").each(function(index,item){
        let currentDate = new Date();
        $(item).datepicker("option", "minDate",  new Date(currentDate.setDate(currentDate.getDate() + 1)));

        $(item).change(function() {
            console.log("arrival-date CHANGED");
            let selectedDate = $(this).datepicker("getDate");
            let maxDateDeparture = new Date(selectedDate.setDate(selectedDate.getDate() + 30));

            $(this).datepicker("option", "maxDate", maxDateDeparture);
        })
    })
