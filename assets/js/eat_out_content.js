// // Iterative for-loop used to create results boxes
for (a = 1; a < 6; a++) {
  // Materialize Row
  $("<div>", { id: "listResultsBox" + a, class: "row" }).appendTo(
    "#eatOutContent"
  );
  // Wrapper used to restrict sizing/positioning on img child
  $("<div>", { id: "imageSizing" + a, class: "col s4" }).appendTo(
    "#listResultsBox" + a
  );
  // Img element for recipe picture
  $("<img>", {
    id: "imageRestaurant" + a,
    class: "col s12",
    alt: "Restaurant Pic"
  }).appendTo("#imageSizing" + a);
  // Wrapper used to restrict sizing/positioning on data returned from API
  $("<div>", { id: "dataResultsWrapper" + a, class: "col s6" }).appendTo(
    "#listResultsBox" + a
  );
  // Data: Title
  $("<div>", { id: "dataTitle" + a, class: "col s12" })
    .text("name")
    .appendTo("#dataResultsWrapper" + a);
  // Data: Rating
  $("<div>", { id: "dataRating" + a, class: "col s12" })
    .text("Yelp Rating")
    .appendTo("#dataResultsWrapper" + a);
  // Data: Address
  $("<div>", { id: "dataAddress" + a, class: "col s12" })
    .text("display_address")
    .appendTo("#dataResultsWrapper" + a);
  // Data: Phone Number
  $("<div>", { id: "dataPhone" + a, class: "col s12" })
    .text("display_phone")
    .appendTo("#dataResultsWrapper" + a);
  // Wrapper used to restrict sizing/positioning on recipe link
  $("<div>", { id: "dataLinktoWebsite" + a, class: "col s12" }).appendTo(
    "#dataResultsWrapper" + a
  );
  // Data: Restaurant
  $("<a>", { id: "dataLinkToRestaurant" + a })
    .text("url")
    .appendTo("#dataLinktoWebsite" + a);
}

var loc = "Los Angeles";
$.ajax({
  url:
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
    loc,
  method: "GET",
  headers: {
    Authorization:
      "Bearer roEn_ezE99s_UqG2kH4-r-nbOAMwFTCCGgZRqUz2zXswR_0l4zdPM4Kcyrb_39E1vl96VofmaT92syqs1RSvkoqdS0bf_3h1DCykXbLjOlEUbUEAsT3CvBFdX0pIXnYx"
  }
}).then(function(response) {
  console.log(response.businesses);
  console.log(response.businesses[0].coordinates.latitude);
  console.log(response.businesses[0].coordinates.longitude);
  $("#imageRestaurant" + 1).attr("src", response.businesses[0].image_url);
  $("#dataTitle" + 1).text(response.businesses[0].name);
  $("#dataRating" + 1).text(
    "Yelp Rating: " + response.businesses[0].rating + "/5"
  );
  $("#dataAddress" + 1).text(
    response.businesses[0].location.address1 +
      " " +
      response.businesses[0].location.address2 +
      " " +
      response.businesses[0].location.address3 +
      " " +
      response.businesses[0].location.city +
      " " +
      response.businesses[0].location.zip_code
  );
  $("#dataPhone" + 1).text(response.businesses[0].display_phone);
  $("#dataLinkToRestaurant" + 1).attr("href", response.businesses[0].url);
  $("#dataLinkToRestaurant" + 1).text("Full Review on Yelp");
});

// function getDataAndAttach(indexID, targetRow) {
// var location = "Los Angeles";
// $.ajax({
//   url:
//     "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
//     location,
//   method: "GET",
//   headers: {
//     Authorization:
//       "Bearer roEn_ezE99s_UqG2kH4-r-nbOAMwFTCCGgZRqUz2zXswR_0l4zdPM4Kcyrb_39E1vl96VofmaT92syqs1RSvkoqdS0bf_3h1DCykXbLjOlEUbUEAsT3CvBFdX0pIXnYx"
//   }
//   }).then(function(response) {
//     if (response.results.length < 1) {
//       $("<div>")
//         .text("No results found. Please search for another recipe.")
//         .appendTo("#listResultsBox1");
//     } else {
//       var queryURL =
//         "https://api.spoonacular.com/recipes/" +
//         response.results[indexID].id +
//         "/information?includeNutrition=false&apiKey=0dd700bb292b45f0808607207442926f";
//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response) {
//         $("#imageRecipe" + targetRow).attr("src", response.image);
//         $("#dataTitle" + targetRow).text(response.title);
//         $("#dataRating" + targetRow).text(
//           "Spoonacular Rating: " + response.spoonacularScore + "%"
//         );
//         $("#dataReadyMins" + targetRow).text(
//           "Ready in: " + response.readyInMinutes + " Mins"
//         );
//         $("#dataServings" + targetRow).text("Servings: " + response.servings);
//         $("#dataLinkToRecipe" + targetRow).attr("href", response.sourceUrl);
//         $("#dataLinkToRecipe" + targetRow).text(response.sourceUrl);
//       });
//     }
//   });
// }
// for (b = 0; b < 5; b++) {
//   getDataAndAttach(b, b + 1);
// }

//  Google Maps
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };

  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

// //function myMap() {
//     var mapProp= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//     }

//     function init() {
//         var input = document.getElementById('locationTextField');
//         var autocomplete = new google.maps.places.Autocomplete(input);
//     }

//     google.maps.event.addDomListener(window, 'load', init);

//     //console.log(init)

//Yelp
// var location2 = "Los Angeles";
// $.ajax({
//   url:
//     "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
//     location2,
//   method: "GET",
//   headers: {
//     Authorization:
//       "Bearer roEn_ezE99s_UqG2kH4-r-nbOAMwFTCCGgZRqUz2zXswR_0l4zdPM4Kcyrb_39E1vl96VofmaT92syqs1RSvkoqdS0bf_3h1DCykXbLjOlEUbUEAsT3CvBFdX0pIXnYx"
//   }
// }).then(function(response) {
//   console.log(response.businesses);
// var responseID = response.businesses[0].id;

// console.log(response.businesses[0].image_url);
// $("#imageResults").attr("src", response.businesses[0].image_url);
// $("#dataName").text(response.businesses[0].name);
// $("#dataDirections").text(response.businesses[0].location.display_address);
// $("#dataPhone").text(response.businesses[0].display_phone);

// $("#dataURLtoWebsite").attr("href", response.businesses[0].url);
// $("#dataURLtoWebsite").text(response.businesses[0].url);
// console.log(response.businesses[0].url);

// var Data = $("#");
// });
