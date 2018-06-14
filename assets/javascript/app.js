$("#searchButton").on("click", function () {

    var APIkey = "0emzCKL1a7sCMkjMLF5Mz0M4N4WxiMUE"

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + APIkey + "&tag=" + "deadpool";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var imageUrl = response.data.image_original_url;
        var newImage = $('<img>');
        newImage.attr("src", imageUrl);
        newImage.attr("alt", "random image");
        $('#images').prepend(newImage);
    });
});

















