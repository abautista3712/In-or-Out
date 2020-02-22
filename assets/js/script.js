// Google API key: AIzaSyBIhhJRfBp2iIroOT_oVPv9Y0tKQGMZfdA
// Yelp API key: 6SG4NUU4OjNfl-wUfJ4Zq-1Bak0yd4AN4W5ZRm6fxRj4bfvQXZ6URKMU1y-KekFovVRVxsaC2ArTirQQ5VaQMWCcVsD7Z-Vl4PbJaEKiaYuWCxXrsZWj1xZjyx0_XnYx

var slider = document.querySelector(".slider");
var ball = document.querySelector(".ball");
var eatInText = document.querySelector(".eatIn");
var eatOutText = document.querySelector(".eatOut");
var mainWrapper = document.querySelector(".mainWrapper");
var addLocationInput = 0;

$(document).ready(function() {
  $(".inputLocation").remove();
});
slider.addEventListener("click", () => {
  ball.classList.toggle("right");
  eatInText.classList.toggle("active");
  eatOutText.classList.toggle("active");
  mainWrapper.classList.toggle("blue");

  if (addLocationInput < 1) {
    addLocationInput++;
    //adds location input and button when clicked on eat out
    $(".searchBox").append(
      '<input class="inputLocation" type="text" placeholder="City..." name="input[]">'
    );
  } else if ((addLocationInput = 1)) {
    //removes the location input and button when clicked back to eat in
    $(".inputLocation").remove();
    $(".locationButton").remove();
    addLocationInput--;
  }
});

$(document).ready(function() {
  $(".button").on("click", storeInput);
  $(".button").on("click", storeLocationInput);

  console.log("Test");

  // the function below stores the input
  function storeInput() {
    var choice = $(".inputText").val();
    console.log(choice);
    localStorage.setItem("foodItem", choice);
  }

  $(".button").on("click", function(event) {
    if (addLocationInput < 1) {
      event.preventDefault();
      console.log("eat in clicked");
      location.href = "./eat_in_content.html";
    } else {
      event.preventDefault();
      console.log("eat out clicked");
      location.href = "./eat_out_content.html";
    }
  });

  function storeLocationInput() {
    var userlocation = $(".inputLocation").val();
    console.log(userlocation);
    localStorage.setItem("foodLocation", userlocation);
  }
});
