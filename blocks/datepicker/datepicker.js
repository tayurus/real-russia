function initializeLocaleDatePicker() {
    setTimeout(() => {
        (function($) {
            $.fn.datepicker.language['en'] = {
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                today: 'Today',
                clear: 'Clear',
                dateFormat: 'dd-mm-yyyy',
                timeFormat: 'hh:ii aa',
                firstDay: 0
            };
        })(jQuery);

        $('.datepicker-here').datepicker({
            language: 'en',
            minDate: new Date(new Date().setFullYear(1900)),
            maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 20)),
            onSelect: (fd, date, inst) => {
                inst.date = date;
                inst.hide();
            }
        })
        // .mask('99-99-9999')
    }, 500);
}

$('.datepicker-here').change(function() {
    let date = $(this).val();
    let array = date.split("-").reverse();
    if (date.length === 10 && new Date(array[0], array[1], array[2]) == "Invalid Date") {

    }
})
