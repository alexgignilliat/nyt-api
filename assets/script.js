$(".btn-secondary").on("click", function() {

var SearchTerm = document.getElementById("search-term-form").value;
var numResults = 5;
var yearbeg = document.getElementById("start-year-form").value;;
var yearend = document.getElementById("end-year-form").value;;


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + SearchTerm + "&page=" + numResults + "&begin_date="  + yearbeg + "0101&end_date=" + yearend + "0101&api-key=mXyNr2iOtjbdhpk5dAR4WjUVoO6JQW2d"




$.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

console.log(response);

        


    
    });


});
