var location2 = "Los Angeles";
$.ajax({
  url:
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
    location2,
  method: "GET",
  headers: {
    Authorization:
      "Bearer roEn_ezE99s_UqG2kH4-r-nbOAMwFTCCGgZRqUz2zXswR_0l4zdPM4Kcyrb_39E1vl96VofmaT92syqs1RSvkoqdS0bf_3h1DCykXbLjOlEUbUEAsT3CvBFdX0pIXnYx"
  }
}).then(function(response) {
  console.log(response.businesses);
  var responseID = response.businesses[0].id;

  console.log(response.businesses[0]);
  $("#dataCoordinates").text(response.businesses[0].coordinates);

  // // Iterative for-loop used to create results boxes
  for (a = 1; a < 6; a++) {
    // Materialize Row
    $("<div>", { id: "listResultsBox" + a, class: "row" }).appendTo(
      "#eatOutContent"
    );
    // Wrapper used to restrict sizing/positioning on img child
    $("<div>", { id: "image" + a, class: "col s4" }).appendTo(
      "#listResultsBox" + a
    );
    // Img element for recipe picture
    $("<img>", {
      id: "image" + a,
      class: "col s12",
      alt: "Restaurant Pic"
    }).appendTo("#image" + a);

    // Wrapper used to restrict sizing/positioning on data returned from API
    $("<div>", { id: "dataResultsWrapper" + a, class: "col s6" }).appendTo(
      "#listResultsBox" + a
    );
    // Data: Title
    $("<div>", { id: "dataTitle" + a, class: "col s12" })
      .text(".name")
      .appendTo("#dataResultsWrapper" + a);

    // Data: Address
    $("<div>", { id: "dataAddress" + a, class: "col s12" })
      .text("display_address")
      .appendTo("#dataResultsWrapper" + a);

    // Data: Phone Number
    $("<div>", { id: "phone_number" + a, class: "col s12" })
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

    // Data: Coordinates
    $("<div>", { id: "coordinates" + a, class: "col s12" })
      .text("latitude, longitude")
      .appendTo("#dataResultsWrapper" + a);
  }
});

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
var location2 = "Los Angeles";
$.ajax({
  url:
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
    location2,
  method: "GET",
  headers: {
    Authorization:
      "Bearer roEn_ezE99s_UqG2kH4-r-nbOAMwFTCCGgZRqUz2zXswR_0l4zdPM4Kcyrb_39E1vl96VofmaT92syqs1RSvkoqdS0bf_3h1DCykXbLjOlEUbUEAsT3CvBFdX0pIXnYx"
  }
}).then(function(response) {
  console.log(response.businesses);
  var responseID = response.businesses[0].id;

  console.log(response.businesses[0].image_url);
  $("#imageResults").attr("src", response.businesses[0].image_url);
  $("#dataName").text(response.businesses[0].name);
  $("#dataDirections").text(response.businesses[0].location.display_address);
  $("#dataPhone").text(response.businesses[0].display_phone);

  $("#dataURLtoWebsite").attr("href", response.businesses[0].url);
  $("#dataURLtoWebsite").text(response.businesses[0].url);
  console.log(response.businesses[0].url);

  var Data = $("#");
});
