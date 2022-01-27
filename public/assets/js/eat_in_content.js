//Home Button
function Homepage() {
  window.location = "index.html";
}
// Animation
var myVar;
function pageFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("Animate").style.display = "block";
}

// // Iterative for-loop used to create results boxes
for (a = 1; a < 6; a++) {
  // Materialize Row
  $("<div>", { id: "listResultsBox" + a, class: "row" }).appendTo(
    "#eatInContent"
  );
  // Wrapper used to restrict sizing/positioning on img child
  $("<div>", { id: "imageSizing" + a, class: "col s4" }).appendTo(
    "#listResultsBox" + a
  );
  // Img element for recipe picture
  $("<img>", {
    id: "imageRecipe" + a,
    class: "col s12",
  }).appendTo("#imageSizing" + a);
  // Wrapper used to restrict sizing/positioning on data returned from API
  $("<div>", { id: "dataResultsWrapper" + a, class: "col s8" }).appendTo(
    "#listResultsBox" + a
  );
  // Data: Title
  $("<div>", { id: "dataTitle" + a, class: "col s12 placeName" }).appendTo(
    "#dataResultsWrapper" + a
  );
  // Data: Spoonacular Rating
  $("<div>", { id: "dataRating" + a, class: "col s12" }).appendTo(
    "#dataResultsWrapper" + a
  );
  // Data: Ready in X Minutes
  $("<div>", { id: "dataReadyMins" + a, class: "col s12" }).appendTo(
    "#dataResultsWrapper" + a
  );
  // Data: Servings
  $("<div>", { id: "dataServings" + a, class: "col s12" }).appendTo(
    "#dataResultsWrapper" + a
  );
  // Wrapper used to restrict sizing/positioning on recipe link
  $("<div>", { id: "dataLinkToRecipeWrapper" + a, class: "col s12" }).appendTo(
    "#dataResultsWrapper" + a
  );
  // Data: Recipe Link
  $("<a>", { id: "dataLinkToRecipe" + a }).appendTo(
    "#dataLinkToRecipeWrapper" + a
  );
}
// Spoonacular
function getDataAndAttach(indexID, targetRow) {
  var queryTerm = localStorage.getItem("foodItem");
  $.ajax({
    url:
      "https://api.spoonacular.com/recipes/search?query=" +
      queryTerm +
      "&instructionsRequired=true&number=5&apiKey=0dd700bb292b45f0808607207442926f",
    method: "GET",
  }).then(function (response) {
    if (response.results.length < 1) {
      $("<div>")
        .text("No results found. Please search for another recipe.")
        .appendTo("#listResultsBox1");
    } else {
      var queryURL =
        "https://api.spoonacular.com/recipes/" +
        response.results[indexID].id +
        "/information?includeNutrition=false&apiKey=0dd700bb292b45f0808607207442926f";
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        $("#imageRecipe" + targetRow).attr("src", response.image);
        $("#dataTitle" + targetRow).text(response.title);
        $("#dataRating" + targetRow).text(
          "Spoonacular Rating: " + response.spoonacularScore + "%"
        );
        $("#dataReadyMins" + targetRow).text(
          "Ready in: " + response.readyInMinutes + " Mins"
        );
        $("#dataServings" + targetRow).text("Servings: " + response.servings);
        $("#dataLinkToRecipe" + targetRow).attr("href", response.sourceUrl);
        $("#dataLinkToRecipe" + targetRow).text(response.sourceUrl);
      });
    }
  });
}
for (b = 0; b < 5; b++) {
  getDataAndAttach(b, b + 1);
}

$("#inputRecipeBtn").on("click", function () {
  localStorage.setItem("foodItem", $("#inputRecipe").val());
  for (b = 0; b < 5; b++) {
    getDataAndAttach(b, b + 1);
  }
});

$(document).on("keypress", function (e) {
  if (e.which === 13) {
    localStorage.setItem("foodItem", $("#inputRecipe").val());
    for (b = 0; b < 5; b++) {
      getDataAndAttach(b, b + 1);
    }
  }
});
