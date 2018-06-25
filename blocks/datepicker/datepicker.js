$( ".datepicker_jq").datepicker({
      changeMonth: true,
      changeYear: true
    });

$(".datepicker").each((index, item) => {

    let currentDate = new Date();
    let days =  Array(42).fill(0);

    function initializeDatePicker(){
        table = matrixify(fillDays(), 6,7);
        console.log(table);
        $(item).find(".datepicker__current").text(formateDate(currentDate));
        for (let week = 1; week <= 6; week++)
            for (let day = 0; day < 7; day++)
                $(item).find(".datepicker__days tr:eq("+week+") td:eq("+day+")").text(table[week - 1][day])
    }

    //fill array of visible days
    function fillDays() {
        /*get day of week of first day of month*/
        //get indexes of current month and Year
        let monthIndex = currentDate.getMonth();
        let yearIndex = currentDate.getFullYear();

        //create new date of first day of this month
        let firstDayDate = new Date(yearIndex, monthIndex, 1);

        //get day of week and add 1 (because in Russia Monday is first day week)
        let firstDayOfWeek = firstDayDate.getDay() - 1;
        if (firstDayOfWeek == -1)
            firstDayOfWeek = 6;
        if (firstDayOfWeek == 0)
            firstDayOfWeek = 7;

        /*fill the array this month days*/
        let filler = 1;

        let daysInMonth = new Date(yearIndex, monthIndex + 1, 0).getDate();
        console.log("CURRENT MONTH = " + monthIndex + " yearIndex = " + yearIndex + "daysInMonth = " + daysInMonth);
        let daysInPrevMonth = new Date(yearIndex, monthIndex, 0).getDate();
        let newDays = days.map((item, index) => {
            let day = 0;
            if (index < firstDayOfWeek)
                day = daysInPrevMonth - firstDayOfWeek + 1 + index;

            else if (index >= firstDayOfWeek && filler <= daysInMonth)
                day = filler++;

            /*fill array to the end of next-month's days*/
            else if (filler > daysInMonth)
                day = filler++ - daysInMonth;

                return day;
        })
        return newDays;
    }

    function formateDate(date){
       date = date.toDateString();
       let reg = /([a-z]+) ([a-z]+) ([0-9]+) ([0-9]+)/gi;
       let match = reg.exec(date);
       return match[2] + " " + match[4];
   }

    //change current date's month (+-1)
    function changeMonth(e,operation) {
        e.stopPropagation()
        if (operation == "+")
            currentDate.setMonth(currentDate.getMonth() + 1);
        else
            currentDate.setMonth(currentDate.getMonth() - 1);

        initializeDatePicker()
    }

    function matrixify(arr, rows, cols) {
       var matrix = [];
       if (rows * cols === arr.length) {
           for (var i = 0; i < arr.length; i += cols) {
               matrix.push(arr.slice(i, cols + i));
           }
       }
       return matrix;
   };

    //Add event listeners for next-prev arrow
    $(item).find(".datepicker__prev").click((e) => changeMonth(e,"-"))
    $(item).find(".datepicker__next").click((e) => changeMonth(e,"+"))
    $(item).find(".datepicker__days td").click(function(e){
        e.stopPropagation();
        let res = $(this).text() + " " + formateDate(currentDate);
        console.log($(item).prev());
        $(item).prev().val(res)
        $(item).prev().trigger('click');
        $(item).hide()
    })

    initializeDatePicker()
    $(item).hide();
})
