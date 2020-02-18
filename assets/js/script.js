// Google API key: AIzaSyBIhhJRfBp2iIroOT_oVPv9Y0tKQGMZfdA
// Yelp API key: 6SG4NUU4OjNfl-wUfJ4Zq-1Bak0yd4AN4W5ZRm6fxRj4bfvQXZ6URKMU1y-KekFovVRVxsaC2ArTirQQ5VaQMWCcVsD7Z-Vl4PbJaEKiaYuWCxXrsZWj1xZjyx0_XnYx

$(document).ready(function () {
    $('.button').on('click', storeInput);
    $('.button').on('click', storeLocationInput);

    console.log("Test");
    
    // the function below stores the input
    function storeInput() {
        var choice = $('.inputText').val();
        console.log(choice);
        localStorage.setItem('foodItem', choice);
    };
    
    // the function below retrieves the input

    // function getInput() {
    //     $('.inputText').val(localStorage.getItem('foodItem'));
    //     console.log(localStorage.getItem('foodItem'));
    // };

// getInput();

    function storeLocationInput() {
        var userlocation = $('.inputLocation').val();
        console.log(userlocation);
        localStorage.setItem('userCity', userlocation);
    };

})