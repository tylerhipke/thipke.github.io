//webapp handlers
//ABSTRACT:
//listen to events, trigger article rendering on card click
//
//

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
        },
        4: {
            type: "gallery",
            content: 
                ["./assets/graphics/blackbox.png",
                "./assets/graphics/blackbox.png",
                "./assets/graphics/blackbox.png",
                "./assets/graphics/blackbox.png"]
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    linkEvents();
});

function linkEvents() {
    $('#contact').click(function () {
        $('#contactModal').modal('show');
    });
    $('#testtrigger').click(function () {
        enterArticle();
    })
    $('#gohome').click(function () {
        exitArticle();
    })
    $('.card').click(function(){
        var thisClickedID = ($(this).attr('id'));
        thisClickedID -= 1;
        console.log(thisClickedID);

        $('#blockrenderinput').empty();
        renderArticle(thisClickedID);
        enterArticle();
    })
};

function enterArticle(type) {
    $('#homeblock').removeClass('t-visible').addClass('t-hidden');
    $('#sidebarcontent').removeClass('t-visible').addClass('t-hidden');
    setTimeout(function () {
        $('#homeblock').toggle();
        $('#articleblock').toggle();
        $('#sidebarcontent').toggle();
        $('#sidebarnavigate').toggle();
    }, 250)

    setTimeout(function () {
        $('#articleblock').removeClass('t-hidden').addClass('t-visible');
        $('#sidebarnavigate').removeClass('t-hidden').addClass('t-visible');
    }, 400);
};

function exitArticle(type) {
    $('#articleblock').removeClass('t-visible').addClass('t-hidden');
    $('#sidebarnavigate').removeClass('t-visible').addClass('t-hidden');
    setTimeout(function () {
        $('#articleblock').toggle();
        $('#homeblock').toggle();
        $('#sidebarnavigate').toggle();
        $('#sidebarcontent').toggle();
    }, 250)

    setTimeout(function () {
        $('#homeblock').removeClass('t-hidden').addClass('t-visible');
        $('#sidebarcontent').removeClass('t-hidden').addClass('t-visible');
    }, 400);

    $('#blockrenderinput').empty();
};

function renderArticle(id) {
    //pull in proper article via id 
    //begin for loop that reads the article and processes information
    var thisArticle = articles[id];
    console.log("render Article triggered on id " + id);

    var articleKeys = Object.keys(articles[id]);
    var articleLength = articleKeys.length;
    console.log("this article has " + articleLength + " block(s)");

    for (i = 0; i < articleLength; i++) {
        var blockType = thisArticle[i].type;
        console.log("for loop is on id number " + i);
        switch (blockType) {
            case "header":
                console.log("header initialized");
                renderHeaderBlock(thisArticle[i]);
                break;
            case "subheader":
                console.log("subheader initialized");
                renderSubheaderBlock(thisArticle[i]);
                break;
            case "image":
                console.log("image initialized");
                renderImageBlock(thisArticle[i]);
                break;
            case "text":
                console.log("text initialized");
                renderTextBlock(thisArticle[i]);
                break;
            case "gallery":
                console.log("gallery initialized");
                renderGalleryBlock(thisArticle[i]);
                break;
        };
    }
};

function renderHeaderBlock(article) {
    console.log("header render function activated");
    $('#blockrenderinput').append('<div class="row mt-2">'
        + '<div class="col-12">'
        + '<h3 class="t-card_header_font">'
        + article.content
        + '</h3>' + '</div>' + '</div>'
    );
};

function renderSubheaderBlock(article) {
    console.log("subhead render function activated");
    $('#blockrenderinput').append('<div class="row">'
        + '<div class="col-12">'
        + '<h6 style="color: #DCE2F7;">'
        + article.content
        + '</h6>' + '</div>' + '</div>'
    );
};

function renderImageBlock(article) {
    console.log("img render function activated");
    $('#blockrenderinput').append('<div class="row mt-2">'
        + '<div class="col-6">'
        + '<img src='
        + article.content[0]
        + ' class="img-fluid">'
        + '</div>'
        + '<div class="col-6">'
        + '<p>' + article.content[1] + '</p>'
        + '</div>' + '</div>'
    );
};

function renderTextBlock(article) {
    console.log("header render function activated");
    $('#blockrenderinput').append('<div class="row mt-2">'
        + '<div class="col-12">'
        + '<p>'
        + article.content
        + '<p>' + '</div>' + '</div>'
    );
}

function renderGalleryBlock(article) {
    console.log(article.content.length + 
        " images in this gallery, gallery render activatied");
    var thisDivID = Math.floor(Math.random() * 1000) + 200;
    $('#blockrenderinput').append(
        '<div id=' + thisDivID +' class="row"></div>'
    );

    for(i=0; i < article.content.length; i++){
        $('#' + thisDivID).append('<div class="col-md-6 mt-2">' 
        + '<img src=' + article.content[i] + ' class="img-fluid">'
        + '</div>');
    };
};