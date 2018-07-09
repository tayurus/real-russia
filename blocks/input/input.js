$(".input__field, .input__select").on("blur propertychange click change keyup input paste", function() {
    //extract value and pattern from input
    if (typeof $(this).attr('pattern') !== "undefined"){

        let value = $(this).val();
        let pattern = $(this).attr('pattern');
        //create a regex from pattern
        let flags = pattern.replace(/.*\/([gimy]*)$/, '$1');
        let regexBody = pattern.replace(new RegExp('^/(.*?)/'+flags+'$'), '$1');
        let regex = new RegExp(regexBody, flags);

        //check if input's value correct
        if (!regex.test(value)){

            if (typeof $(this).attr('required') !== 'undefined'){
                $(this).parent().addClass("input__wrapper_error")
                $(this).parent().removeClass("input__wrapper_correct")
                $(this).parent().next().text("check this field!");
            }

            if (value === "" && typeof $(this).attr('required') !== 'undefined')
                $(this).parent().next().text("This field cannot be empty!");
        }
        else{
            $(this).parent().removeClass("input__wrapper_error")
            $(this).parent().addClass("input__wrapper_correct")
            $(this).parent().next().text("");
        }
    }

})

$(".input").click(function(){

    if ($(this).has(".input__field_calendar").length >= 1){
        // console.log($(this).find('.input__wrapper').find('.datepicker'));
        // $(this).find('.datepicker').toggle()
        $(this).find('.datepicker').show()
    }
});



$(".input__select, .input__field").on('focusin',function() {
  $(".hint").each((i, item) => {
    $(item).removeClass('active');
  });

  $(".input__wrapper").each((i, item) => {
    $(item).removeClass('focus');
  });

  // $(".input__highlight").each((i, item) => {
  //   $(item).removeClass('focus');
  // });

  $(this).closest('.input').children('.hint').addClass('active');
  $(this).closest('.input').children('.input__highlight').addClass('focus');
  $(this).closest('.input__wrapper').addClass('focus');
});



$(document).ready(function () {
    $("#phone").intlTelInput({
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: "body",
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
      // geoIpLookup: function(callback) {
      //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
      // hiddenInput: "full_number",
      // initialCountry: "auto",
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
      separateDialCode: true
    });
})
