function initializeDatepicker(){
    $( ".datepicker_jq").datepicker({
          changeMonth: true,
          changeYear: true,
          dateFormat: 'yy-mm-dd'
          // yearRange: (typeof($(this).attr('data-minyear')) === "undefined") ? minDefaultYear + ":" + currentYear : $(this).attr('data-minyear') + ":" + currentYear
    }).mask('9999-99-99')
}
initializeDatepicker()

$( ".datepicker_jq").change(function(){
    if ($(this).datepicker('getDate') != null)
        if ($(this).datepicker('getDate').toDateString() === new Date().toDateString())
            $(this).datepicker("setDate", new Date());
})
