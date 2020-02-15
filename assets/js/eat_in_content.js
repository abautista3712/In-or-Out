// Spoonacular
var queryTerm = "cheese";
$.ajax({
  url:
    "https://api.spoonacular.com/recipes/search?query=" +
    queryTerm +
    "&number=5&apiKey=0dd700bb292b45f0808607207442926f",
  method: "GET"
}).then(function(response) {
  console.log(response.results[0].id);
  var responseID = response.results[0].id;
  $.ajax({
    url: "https://api.spoonacular.com/recipes/" + responseID + "/information",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
});

// https://api.spoonacular.com/recipes/search?query=cheese&number=5&apiKey=0dd700bb292b45f0808607207442926f

// Yelp
// $.ajax({
//     url:
//       "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Los+Angeles",
//     method: "GET",
//     headers: {
//       Authorization:
//         "Bearer APIGOESHERE"
//     }
//   }).then(function(response) {
//     console.log(response);
//   });

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
