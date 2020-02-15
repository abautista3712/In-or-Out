var ball = document.querySelector('.ball');
var eatInText = document.querySelector('.eatIn');
var eatOutText = document.querySelector('.eatOut');
var body = document.querySelector('body');
ball.addEventListener('click', () => {
    ball.classList.toggle('right');
    eatInText.classList.toggle('active')
    eatOutText.classList.toggle('active');
    body.classList.toggle('blue')
})