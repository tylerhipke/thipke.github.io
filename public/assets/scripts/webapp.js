//webapp handlers

document.addEventListener("DOMContentLoaded", function () {
    readLink();
});

function readLink() {
    $('a').click(function () {
        var href = $(this).attr("href");
        console.log(href);
        if (href == "#contact") {
            console.log("Contact dialog has been clicked");
        } else {
            console.log("not contact link so lets read database", href);
        }
    });
    $('#testtrigger').click(function () {
        enterArticle();
    })
    $('#gohome').click(function () {
        exitArticle();
    })
}

function enterArticle(type) {
    $('#homeblock').removeClass('t-visible').addClass('t-hidden');
    setTimeout(function () {
        $('#homeblock').toggle();
        $('#articleblock').toggle();
    }, 250)

    setTimeout(function () {
        $('#articleblock').removeClass('t-hidden').addClass('t-visible');
    }, 400);
}

function exitArticle(type) {
    $('#articleblock').removeClass('t-visible').addClass('t-hidden');
    setTimeout(function () {
        $('#articleblock').toggle();
        $('#homeblock').toggle();
    }, 250)

    setTimeout(function () {
        $('#homeblock').removeClass('t-hidden').addClass('t-visible');
    }, 400);
}