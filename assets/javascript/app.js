var gifList = [];

function createStuff() {

    console.log($(this))

    var fillGif = $(this).attr("data-name");
    var APIkey = "0emzCKL1a7sCMkjMLF5Mz0M4N4WxiMUE"
    // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&tag=" + fillGif + "&limit=10";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + fillGif + "&api_key=" + APIkey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)

        for(var i = 0; i < response.data.length; i++ ){
            
        var imageUrl = response.data[i].images.fixed_height_still.url;
        var newImage = $('<img>');
        newImage.attr("src", imageUrl);

        newImage.attr(
            {
                "data-still": response.data[i].images.fixed_height_still.url,
                "data-animate" : response.data[i].images.fixed_height.url,
                "data-state" : "still"
            }
        )
        newImage.attr("alt", "random image");
        $('#imageArea').prepend(newImage);
        }

        
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

$("#imageArea").on("click", 'img', function(){
this.src = $(this).attr("data-animate");
});

addButton();















