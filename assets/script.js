var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=mXyNr2iOtjbdhpk5dAR4WjUVoO6JQW2d"



$.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {


        }