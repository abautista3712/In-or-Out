var slider = document.querySelector('.slider');
var ball = document.querySelector('.ball');
var eatInText = document.querySelector('.eatIn');
var eatOutText = document.querySelector('.eatOut');
var mainWrapper = document.querySelector('.mainWrapper');
slider.addEventListener('click', () => {
    ball.classList.toggle('right');
    eatInText.classList.toggle('active');
    eatOutText.classList.toggle('active');
    mainWrapper.classList.toggle('blue');
})