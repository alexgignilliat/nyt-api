$(".btn-secondary").on("click", function() {

var SearchTerm = $("search-term-form").val()
var numResults = 5;
var year = 1990;


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + SearchTerm + "&page=" + numResults + "&pub_year=" + year +"&api-key=mXyNr2iOtjbdhpk5dAR4WjUVoO6JQW2d"



$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
console.log(response);
    
    });
});