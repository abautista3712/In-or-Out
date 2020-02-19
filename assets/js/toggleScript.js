var slider = document.querySelector('.slider');
var ball = document.querySelector('.ball');
var eatInText = document.querySelector('.eatIn');
var eatOutText = document.querySelector('.eatOut');
var mainWrapper = document.querySelector('.mainWrapper');
var addLocationInput = 0;

$(document).ready(function() {
    $('.inputLocation').remove();
})

slider.addEventListener('click', () => {
    ball.classList.toggle('right');
    eatInText.classList.toggle('active');
    eatOutText.classList.toggle('active');
    mainWrapper.classList.toggle('blue');
    
    if (addLocationInput < 1) {
        addLocationInput++;
        //adds location input and button when clicked on eat out
        $('.searchBox').append('<input class="inputLocation" type="text" placeholder="Enter city..." name="input[]"><button id="location" class="locationButton">City</button>')
    } else if (addLocationInput = 1) {        
        //removes the location input and button when clicked back to eat in
        $('.inputLocation').remove();
        $('.locationButton').remove();
        addLocationInput--;
    };

    // // if (ball.classList.toggle('right')) {
    // var locationInput = document.createElement('input');
    //     locationInput.setAtrribute('type', type);       
    //     locationInput.setAtrribute('value', type);
    //     locationInput.setAtrribute('location', type);
    // // }
})

// $('.slider').click(function () {
//     $('.searchBox').append('<input type="text" name="input[]"><button id="location">Location</button>')
// })