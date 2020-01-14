$(".btn-secondary").on("click", function() {

    var SearchTerm = $("search-term-form").val()
    var numResults = 5;
    // var year = 1990;
    var yearbeg = document.getElementById("start-year-form").value; // change to jquery selector
    var yearend = document.getElementById("end-year-form").value; // change to jquery selector
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + SearchTerm + "&page=" + numResults + "&begin_date=" + yearbeg + "0101&end_date=" + yearend + "0101&api-key=mXyNr2iOtjbdhpk5dAR4WjUVoO6JQW2d"



    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(response);

        });
});