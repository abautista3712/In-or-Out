//Home Function//
function Homepage() {
  window.location = "index.html";
}

// Loading Animation
var myVar;
function pageFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("Animate").style.display = "block";
}

// // Iterative for-loop used to create results boxes dynamically
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
  $("<div>", { id: "dataTitle" + a, class: "col s12 placeName" })
    .text("name")
    .appendTo("#dataResultsWrapper" + a);
  // Data: Price
  $("<div>", { id: "dataPrice" + a, class: "col s12" })
    .text("Yelp Price")
    .appendTo("#dataResultsWrapper" + a);
  // Data: Category
  $("<div>", { id: "dataCategory" + a, class: "col s12" })
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

function pingMapAndZoom() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: {
      lat: response.businesses[indexID].coordinates.latitude,
      lng: response.businesses[indexID].coordinates.longitude
    }
  });
  new google.maps.Marker({
    position: {
      lat: response.businesses[indexID].coordinates.latitude,
      lng: response.businesses[indexID].coordinates.longitude
    },
    map: map
  });
}

// Function to grab data from API and attach to elements
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
    function pingMapAndZoom() {
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: {
          lat: response.businesses[indexID].coordinates.latitude,
          lng: response.businesses[indexID].coordinates.longitude
        }
      });
      new google.maps.Marker({
        position: {
          lat: response.businesses[indexID].coordinates.latitude,
          lng: response.businesses[indexID].coordinates.longitude
        },
        map: map
      });
    }

    $("#imageRestaurant" + targetRow)
      .attr("src", response.businesses[indexID].image_url)
      .on("click", function() {
        pingMapAndZoom();
      });
    $("#dataTitle" + targetRow)
      .text(response.businesses[indexID].name)
      .on("click", function() {
        pingMapAndZoom();
      });
    $("#dataPrice" + targetRow).text(response.businesses[indexID].price);
    $("#dataCategory" + targetRow).text(
      response.businesses[indexID].categories[0].title
    );
    $("#dataRating" + targetRow).text(
      "Yelp Rating: " + response.businesses[indexID].rating + "/5"
    );
    if (response.businesses[0].location.address1 === null) {
    } else {
      $("#dataAddress" + targetRow).text(
        response.businesses[indexID].location.address1 + " "
      );
    }
    if (response.businesses[0].location.address2 === null) {
    } else {
      $("#dataAddress" + targetRow).append(
        response.businesses[indexID].location.address2 + " "
      );
    }
    if (response.businesses[0].location.address3 === null) {
    } else {
      $("#dataAddress" + targetRow).append(
        response.businesses[indexID].location.address3 + " "
      );
    }
    $("#dataAddress" + targetRow).append(
      response.businesses[indexID].location.city + " "
    );
    $("#dataAddress" + targetRow).append(
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
    if (response.businesses[0].location.address2 === null) {
      console.log("Test Success");
    }
  });
}
for (b = 0; b < 5; b++) {
  getDataAndAttach(b, b + 1);
}

function getMap() {
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
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: {
        lat: response.businesses[0].coordinates.latitude,
        lng: response.businesses[0].coordinates.longitude
      }
    });
    for (c = 0; c < 5; c++) {
      new google.maps.Marker({
        position: {
          lat: response.businesses[c].coordinates.latitude,
          lng: response.businesses[c].coordinates.longitude
        },
        map: map
      });
    }
  });
}
getMap();

$("#inputRecipeBtn").on("click", function() {
  localStorage.setItem("foodItem", $("#inputFood").val());
  localStorage.setItem("foodLocation", $("#inputLocation").val());
  for (b = 0; b < 5; b++) {
    getDataAndAttach(b, b + 1);
    getMap();
  }
});

$(document).on("keypress", function(e) {
  if (e.which === 13) {
    localStorage.setItem("foodItem", $("#inputFood").val());
    localStorage.setItem("foodLocation", $("#inputLocation").val());
    for (b = 0; b < 5; b++) {
      getDataAndAttach(b, b + 1);
      getMap();
    }
  }
});
