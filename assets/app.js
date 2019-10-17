//use js to set page width
//generate webpage modals via siteObj

document.addEventListener("DOMContentLoaded", function () {

    var x = screen.width;
    console.log("screen width is: " + x);

    var siteObj = {
        1: {
            name: "Pre-Game",
            description: "Pre-Game was created with the intention of you having a great start to your night. Centered arond your event of the night, enter the venue/location you'll attend to find all the nearby local spots. Please enjoy responsibly! Don't be that guy, don't drink and drive!" + 
            "<br><br> See GitHub Link for code credits.",
            link: "https://tylerhipke.github.io/tyler-pre-game",
            github: "https://www.github.com/tylerhipke/tyler-pre-game"
        },
        2: {
            name: "LIRI Bot",
            description: "LIRI Bot is a Siri Clone built in node.js." + 
            "<br><br>Currently in development, links are inactive.",
            link: "#",
            github: "#"
        },
        3: {
            name: "Totally Twisted Trivia: car edition",
            description: "Think you know cars?  Check your knowledge with this retro-modern game, written in JavaScript and styled with Bootstrap.",
            link: "https://tylerhipke.github.io/giphy-app",
            github: "https://www.github.com/tylerhipke/giphy-app"
        },
        4: {
            name: "GIPHY Downloader",
            description: "Download your favorite GIFs using this webapp.  This webapp uses API keys, along with JQuery's AJAX functions, to interact with server-side data.",
            link: "https://tylerhipke.github.io/giphy-app",
            github: "https://www.github.com/tylerhipke/giphy-app"
        },
    }
    $(".card").click(function () {
        var clickedCard = $(this).attr("id");
        var currentKey = siteObj[clickedCard];
        console.log(currentKey);
        $("#site-title").html(currentKey.name);
        $("#site-text").html(currentKey.description);
        $("#site-link").attr("href", currentKey.link);
        $("#site-github").attr("href", currentKey.github);
        $("#site-modal").modal("show");
    })


});