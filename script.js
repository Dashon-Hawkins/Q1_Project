$(document).ready(function() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    //After the load of the API, calls a function
    //Search for a specific string

    $.getJSON('https://www.googleapis.com/youtube/v3/search?id=webdevpomodoro&key=AIzaSyD4zfdhI_Ep2mpZtQ3jQluyBjE373lfbLA&part=snippet&q=pomodoro study timer-classical music', function(data) {

        // loop through all of the results in the data,
        // and push items 0,1, and 4 into a new array.
        // then use that array for your page.

        var contents = [];
        var original_array = data.items;
        for (var i = 0; i < original_array.length; i++) {
            if (i === 0 || i === 1 || i === 4) {
                contents.push(original_array[i]);
            }
        }
        var randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber);
        $("iframe").attr("src", "https://www.youtube.com/embed/" + contents[randomNumber].id.videoId);

    })
});
