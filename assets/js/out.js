

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
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + location2,
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

      var Data = $("#")

});

