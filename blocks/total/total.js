$('#demoBasic').ddslick({
    data: ddData,
    width: 300,
    imagePosition: "left",
    selectText: "",
    onSelected: function (data) {
        console.log(data);
    }
});

//Dropdown plugin data
var ddData = [
    {
        text: "English",
        value: 1,
        selected: true,
        description: "",
        imageSrc: "img/eng-flag.png"
    },
    {
        text: "Russian",
        value: 2,
        selected: false,
        description: "",
        imageSrc: "img/rus-flag.png"
    }
];

// $(".input-country").countrySelect({
//     preferredCountries: [],
//     defaultCountry: "gb",
//     responsiveDropdown: "true"
// });
