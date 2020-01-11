<<<<<<< HEAD
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=mXyNr2iOtjbdhpk5dAR4WjUVoO6JQW2d"
=======
$(".btn-secondary").on("click", function() {

var SearchTerm = $("search-term-form").val()
var numResults = 5;
var year = 1990;


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + SearchTerm + "&page=" + numResults + "&pub_year=" + year +"&api-key=mXyNr2iOtjbdhpk5dAR4WjUVoO6JQW2d"
>>>>>>> 46c20a52dfdfac8c2b65ec1c4a4b38f150ba6a0c



$.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
<<<<<<< HEAD


        }
=======
console.log(response);
    
    });
});
>>>>>>> 46c20a52dfdfac8c2b65ec1c4a4b38f150ba6a0c
