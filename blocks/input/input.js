

$(".input__select, .input__field").on('focusin',function() {
  $(".hint").each((i, item) => {
    $(item).removeClass('active');
  });

  $(".input").each((i, item) => {
    $(item).removeClass('focus');
  });

  $(this).closest('.input').children('.hint').addClass('active');
  // $(this).closest('.input').children('.input__highlight').addClass('focus');
  $(this).closest('.input').addClass('focus');
});



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
