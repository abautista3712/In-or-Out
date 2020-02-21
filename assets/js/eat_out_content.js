//Home Function//

var theLatitude;
var theLongitude;

function Homepage() {
  window.location = "index.html";
}

// // Iterative for-loop used to create results boxes
for (a = 1; a < 6; a++) {
  var divider = "\u25CF";
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
  // Data: Price
  $("<div>", { id: "dataPrice" + a, class: "col s6" })
    .text("Yelp Price")
    .appendTo("#dataResultsWrapper" + a);
  // Data: Category
  $("<div>", { id: "dataCategory" + a, class: "col s6" })
    .text("Yelp Category")
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

function getDataAndAttach(indexID, targetRow) {
  var location = localStorage.getItem("foodLocation");
  var queryTerm = localStorage.getItem("foodItem");
  $.ajax({
    url:
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
      location +
      "&term=" +
      queryTerm,
    method: "GET",
    headers: {
      Authorization:
        "Bearer roEn_ezE99s_UqG2kH4-r-nbOAMwFTCCGgZRqUz2zXswR_0l4zdPM4Kcyrb_39E1vl96VofmaT92syqs1RSvkoqdS0bf_3h1DCykXbLjOlEUbUEAsT3CvBFdX0pIXnYx"
    }
  }).then(function(response) {
    console.log(response.businesses);
    console.log(response.businesses[0].coordinates.latitude);
    console.log(response.businesses[0].coordinates.longitude);
    theLatitude = (response.businesses[indexID].coordinates.latitude);
    theLongitude = (response.businesses[indexID].coordinates.longitude);

    $("#imageRestaurant" + targetRow).attr(
      "src",
      response.businesses[indexID].image_url
    );
    $("#dataTitle" + targetRow).text(response.businesses[indexID].name);
    $("#dataPrice" + targetRow).text(response.businesses[indexID].price);
    $("#dataCategory" + targetRow).text(
      response.businesses[indexID].categories[0].title
    );
    $("#dataRating" + targetRow).text(
      "Yelp Rating: " + response.businesses[indexID].rating + "/5"
    );
    $("#dataAddress" + targetRow).text(
      response.businesses[indexID].location.address1 +
        " " +
        response.businesses[indexID].location.address2 +
        " " +
        response.businesses[indexID].location.address3 +
        " " +
        response.businesses[indexID].location.city +
        " " +
        response.businesses[indexID].location.zip_code
    );
    $("#dataPhone" + targetRow).text(
      response.businesses[indexID].display_phone
    );
    $("#dataLinkToRestaurant" + targetRow).attr(
      "href",
      response.businesses[indexID].url
    );
    $("#dataLinkToRestaurant" + targetRow).text("Full Review on Yelp");
        
    // initMap();

  });
}

console.log(theLatitude, theLongitude);

for (b = 0; b < 5; b++) {
  getDataAndAttach(b, b + 1);
}

$("#inputRecipeBtn").on("click", function() {
  localStorage.setItem("foodItem", $("#inputFood").val());
  localStorage.setItem("foodLocation", $("#inputLocation").val());
  for (b = 0; b < 5; b++) {
    getDataAndAttach(b, b + 1);
  }
});

$(document).on("keypress", function(e) {
  if (e.which === 13) {
    localStorage.setItem("foodItem", $("#inputFood").val());
    localStorage.setItem("foodLocation", $("#inputLocation").val());
    for (b = 0; b < 5; b++) {
      getDataAndAttach(b, b + 1);
    }
  }
});

//  Google Maps
// // Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   var theCity = { lat: theLatitude, lng: theLongitude };

//   // The map, centered at Uluru
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: theCity
//   });
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({ position: theCity, map: map });
// }

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var thePlace1 = { lat: theLatitude, lng: theLongitude };
  // var thePlace2 = { lat: theLatitude2, lng: theLongitude2 };
  // var thePlace3 = { lat: theLatitude3, lng: theLongitude3 };
  // var thePlace4 = { lat: theLatitude4, lng: theLongitude4 };
  // var thePlace5 = { lat: theLatitude5, lng: theLongitude5 };

  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 14, center: thePlace1 });
  // The marker, positioned at Uluru
  new google.maps.Marker({ position: thePlace1, map: map });
  // new google.maps.Marker({ position: thePlace2, map: map });
  // new google.maps.Marker({ position: thePlace3, map: map });
  // new google.maps.Marker({ position: thePlace4, map: map });
  // new google.maps.Marker({ position: thePlace5, map: map });

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

// $.ajax({
//   url:
//     "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=San+Diego&term=taco",
//   method: "GET",
//   headers: {
//     Authorization:
//       "Bearer roEn_ezE99s_UqG2kH4-r-nbOAMwFTCCGgZRqUz2zXswR_0l4zdPM4Kcyrb_39E1vl96VofmaT92syqs1RSvkoqdS0bf_3h1DCykXbLjOlEUbUEAsT3CvBFdX0pIXnYx"
//   }
// }).then(function(response) {
//   console.log(response);
// });

