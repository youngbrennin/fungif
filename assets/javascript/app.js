var gifList = [];

function createStuff() {

    var fillGif = $(this).attr("data-name");
    var APIkey = "0emzCKL1a7sCMkjMLF5Mz0M4N4WxiMUE"
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + APIkey + "&tag=" + fillGif;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var imageUrl = response.data.image_original_url;
        var newImage = $('<img>');
        newImage.attr("src", imageUrl);
        newImage.attr("alt", "random image");
        $('#imageArea').prepend(newImage);
    });
};

function addButton() {

    $("#buttonArea").empty();

    for (var i = 0; i < gifList.length; i++) {

        var makeButton = $("<button>");
        makeButton.addClass("gif-btn");
        makeButton.attr("data-name", gifList[i]);
        makeButton.text(gifList[i]);
        $("#buttonArea").append(makeButton);
    }
}

$("#searchButton").on("click", function (event) {
    event.preventDefault();
    var fillGif = $("#gifInput").val().trim();
    gifList.push(fillGif);
    addButton();
});

$(document).on("click", ".gif-btn", createStuff);

addButton();














