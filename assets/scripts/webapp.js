//webapp handlers
//ABSTRACT:
//listen to events, trigger article rendering on card click
//
//

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
    $('.card').click(function () {
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
    $('#sidebarnavigate').removeClass('t-visible').addClass('t-hidden');
    $('#articleblock').removeClass('t-visible').addClass('t-hidden');
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
        '<div id=' + thisDivID + ' class="row"></div>'
    );

    for (i = 0; i < article.content.length; i++) {
        $('#' + thisDivID).append('<div class="col-6 mt-2">'
            + '<img src=' + article.content[i] + ' class="img-fluid">'
            + '</div>');
    };
};

var articles = {
    0: {
        0: {
            type: "header",
            content: ["Nicole Frank: The Wardrobe Evolution"]
        },
        1: {
            type: "subheader",
            content: ["Full-Stack Shopify eCommerce Project"]
        },
        2: {
            type: "text",
            content: [
            "Listed below are various aspects of projects that I have worked on.  Changes are made to existing code."]
        },
        3: {
            type: "image",
            content: ["./assets/content/code/nftwe/twe_buttons.png", 
            "Color swatch buttons.  These take in JSON response and display different color options with a for loop.  The tabs below the Add to Cart button are custom as well."]
        },
        4: {
            type: "image",
            content: ["./assets/content/code/nftwe/twe_swatch.png", 
            "+ more colors. Code displays text when product has multiple variants."]
        },
        5: {
            type: "image",
            content: ["./assets/content/code/nftwe/twe_offsetlogo.png", 
            "Custom Logo offset. This template has limited navbar customization.  As such, I found a workaround by injecting custom CSS with position: relative to move the logo into a custom position because of its awkward size."]
        },
        6: {
            type: "image",
            content: ["./assets/content/code/nftwe/twe_custompage.png", 
            "Shopify does not allow you to merge multiple collections.  Here, I used a modified template to congregate different collections on the same page, giving the impression of a custom collection."]
        },
    },
    1: {
        0: {
            type: "header",
            content: ["Tyler Hipke Portfolio"]
        },
        1: {
            type: "subheader",
            content: ["Personal Portfolio, written from scratch to push boundaries of how content should be presented, following modern design trends."]
        },
        2: {
            type: "image",
            content: [""]
        }
    }
}