// Spoonacular
var queryTerm = "potato";
$.ajax({
  url:
    "https://api.spoonacular.com/recipes/search?query=" +
    queryTerm +
    "&instructionsRequired=true&number=5&apiKey=0dd700bb292b45f0808607207442926f",
  method: "GET"
}).then(function(response) {
  console.log(response.results[0]);
  var responseID = response.results[0].id;
  $.ajax({
    url:
      "https://api.spoonacular.com/recipes/" +
      responseID +
      "/information?includeNutrition=false&apiKey=0dd700bb292b45f0808607207442926f",
    method: "GET"
  }).then(function(response) {
    // Recipe Image
    console.log(response);
    $("#imageRecipe").attr("src", response.image);
    $("#dataTitle").text(response.title);
    $("#dataReadyMins").text("Ready in: " + response.readyInMinutes + " Mins");
    $("#dataServings").text("Servings: " + response.servings);
    $("#dataLinkToRecipe").attr("href", response.sourceUrl);
    $("#dataLinkToRecipe").text(response.sourceUrl);
    console.log(response.sourceUrl);
  });
});

// $.ajax({
//   url:
//     "https://api.spoonacular.com/recipes/215435/information?includeNutrition=false&apiKey=0dd700bb292b45f0808607207442926f"
// }).then(function(response) {
//   console.log(response);
// });

// https://api.spoonacular.com/recipes/search?query=cheese&number=5&apiKey=0dd700bb292b45f0808607207442926f

// Yelp
// $.ajax({
//   url:
//     "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Los+Angeles",
//   method: "GET",
//   headers: {
//     Authorization:
//       "Bearer o-5H08v7Dr4xYS_ko2W00fjiteTfqBnbfpRNUVRA5MaHc9-WzHYUFnoQhEaw9Hgwqf3sbsqeV-t0BWp9rgWOGQAOOBbqDd7Ug8WcptogrhuT3C0rkuU-QHmn7vE8XnYx"
//   }
// }).then(function(response) {
//   console.log(response);
// });

// GoogleMaps Places API
//maps.googleapis.com/maps/api/place/textsearch/json?query=12620+caswell&key=AIzaSyChNz9Tfq0oU2uwA-y6aUVzDvht_m3G0Kk

// https: // console.log("Test");
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8
//   });
//   var marker = new google.maps.Marker({
//     position: { lat: -25.344, lng: 131.036 },
//     map: map
//   });
// }
