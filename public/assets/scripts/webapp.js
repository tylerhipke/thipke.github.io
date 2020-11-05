//webapp handlers

var articles = {
    0: {
        0: {
            type: "header",
            content: ["Nicole Frank TWE"]
        },
        1: {
            type: "subheader",
            content: ["full-stack shopify project"]
        },
        2: {
            type: "text",
            content: ["nicole frank twe here shows the different options blah blah"]
        },
        3: {
            type: "image",
            content: ["./assets/graphics/blackbox.png", "image text here"]
        }
    }
}

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
    renderArticle(0);
};

function enterArticle(type) {
    $('#homeblock').removeClass('t-visible').addClass('t-hidden');
    setTimeout(function () {
        $('#homeblock').toggle();
        $('#articleblock').toggle();
    }, 250)

    setTimeout(function () {
        $('#articleblock').removeClass('t-hidden').addClass('t-visible');
    }, 400);
};

function exitArticle(type) {
    $('#articleblock').removeClass('t-visible').addClass('t-hidden');
    setTimeout(function () {
        $('#articleblock').toggle();
        $('#homeblock').toggle();
    }, 250)

    setTimeout(function () {
        $('#homeblock').removeClass('t-hidden').addClass('t-visible');
    }, 400);
};

function renderArticle(id) {
    //pull in proper article via id 
    //begin for loop that reads the article and processes information
    var thisArticle = articles[id];
    console.log("render Article triggered on id " + id);

    var articleKeys = Object.keys(articles[id]);
    var articleLength = articleKeys.length;
    console.log(articleLength);

    for (i = 0; i < articleLength; i++) {
        console.log(thisArticle[i]);
        var blockType = thisArticle[i].type;
        console.log(blockType);
    }
};

function renderHeaderBlock(){

}

function renderSubheaderBlock(){

}

function renderImageBlock(){

}

function renderTextBlock(){

}

function renderGalleryBlock(){

}