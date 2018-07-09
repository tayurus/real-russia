
$( ".datepicker_jq").datepicker({
      changeMonth: true,
      changeYear: true,
      // yearRange: (typeof($(this).attr('data-minyear')) === "undefined") ? minDefaultYear + ":" + currentYear : $(this).attr('data-minyear') + ":" + currentYear
}).mask('99/99/9999');

$( ".datepicker_jq").change(function(){
    if ($(this).datepicker('getDate').toDateString() === new Date().toDateString())
        $(this).datepicker("setDate", new Date());
        // $(this).datepicker("setDate", new Date(d.getFullYear()+1,d.getMonth(),d.getDate()));
})
