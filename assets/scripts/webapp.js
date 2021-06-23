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
        var visualElement = document.getElementById(thisClickedID);
        var isVisual = false;

        thisClickedID -= 1;
        console.log(thisClickedID);
        console.log("visualElement", visualElement);

        if (visualElement.classList.contains('visual-content')){
            isVisual = true;
        };

        $('#blockrenderinput').empty();
        renderArticle(thisClickedID);
        enterArticle();
    })

    backButtonListen();
    setNum('2021965');
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
    }, 300);
};

function exitArticle(type) {
    $('#sidebarnavigate').removeClass('t-visible').addClass('t-hidden');
    $('#articleblock').removeClass('t-visible').addClass('t-hidden');
    setTimeout(function () {
        $('#articleblock').toggle();
        $('#homeblock').toggle();
        $('#sidebarnavigate').toggle();
        $('#sidebarcontent').toggle();
        $('#blockrenderinput').empty();

    }, 250)

    setTimeout(function () {
        $('#homeblock').removeClass('t-hidden').addClass('t-visible');
        $('#sidebarcontent').removeClass('t-hidden').addClass('t-visible');
    }, 300);

};

function backButtonListen(){

}

function setNum(num) {
    var con = num;
    $('#8675309').empty().attr('href', 'te' + 'l:20' + '9' + con);
    con = '209' + num;
    for (i = 0; i < con.length; i++) {
        var num = con.charAt(i);
        if ( i == '0') {
            $('#8675309').append('(' + num);
        } else if (i == '3') {
            $('#8675309').append(') ' + num);
        } else if (i == '6') {
            $('#8675309').append('-' + num);
        } else
            $('#8675309').append(num);
    }
}

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
            case "link":
                console.log("link inistialized");
                renderLinkBlock(thisArticle[i])
                break;
            case "hero":
                console.log("hero initialized");
                renderHeroBlock(thisArticle[i]);
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
        + '<div class="col-sm-6">'
        + '<img src='
        + article.content[0]
        + ' class="img-fluid">'
        + '</div>'
        + '<div class="col-sm-6">'
        + '<p>' + article.content[1] + '</p>'
        + '</div>' + '</div>'
    );
};

function renderHeroBlock(article) {
    console.log("img render function activated");
    $('#blockrenderinput').append('<div class="row mt-2">'
        + '<div class="col-12">'
        + '<img src='
        + article.content[0]
        + ' class="img-fluid"'
        + article.content[1] + '>'
        + '</div>'
        + '</div>'
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
        '<div><div id=' + thisDivID + ' class="row"></div></div>'
    );

    for (j = 0; j < article.content.length; j++) {
        $('#' + thisDivID).append('<div class="col-md-6 mt-2">'
            + '<img src=' + article.content[j] + ' class="img-fluid">'
            + '</div>' );
    };

    console.log("ending article function");
};

function renderLinkBlock(article) {
    console.log("subhead render function activated");
    $('#blockrenderinput').append('<div class="row">'
        + '<div class="col-12">'
        + '<a target="_blank" class="btn btn-secondary rounded-0 mt-2" href=' 
        + article.content[1]
        + '>'
        + ''
        + article.content[0]
        + '' + '</a>' + '</div>' + '</div>'
    );
}

var articles = {
    0: {                    //Nicole Frank TWE
        0: {
            type: "header",
            content: ["NICOLE FRANK: TWE"]
        },
        1: {
            type: "subheader",
            content: ["Full-Stack Shopify eCommerce Project"]
        },
        2: {
            type: "link",
            content: ["Visit Nicole Frank Now", "https://www.nicolefranktwe.com"]
        },
        3: {
            type: "text",
            content: [
                "Listed below are various aspects of projects that I have worked on.  Changes are made to existing code."]
        },
        4: {
            type: "image",
            content: ["./assets/content/code/nftwe/twe_buttons.png",
                "Color swatch buttons.  These take in JSON response and display different color options with a for loop.  The tabs below the Add to Cart button are custom as well."]
        },
        5: {
            type: "image",
            content: ["./assets/content/code/nftwe/twe_swatch.png",
                "+ more colors. Code displays text when product has multiple variants."]
        },
        6: {
            type: "image",
            content: ["./assets/content/code/nftwe/twe_offsetlogo.png",
                "Custom Logo offset. This template has limited navbar customization.  As such, I found a workaround by injecting custom CSS with position: relative to move the logo into a custom position because of its awkward size."]
        },
        7: {
            type: "image",
            content: ["./assets/content/code/nftwe/twe_custompage.png",
                "Shopify does not allow you to merge multiple collections.  Here, I used a modified template to congregate different collections on the same page, giving the impression of a custom collection."]
        },
    },
    1: {
        0: {
            type: "header",
            content: ["GREYTHON CONSTRUCTION"]
        },
        1: {
            type: "link",
            content: ["Visit Greython Now", "https://www.greython.com"]
        }
    },
    2: {                //TH PORTFOLIO
        0: {
            type: "header",
            content: ["VYBE"]
        },
        1: {
            type: "subheader",
            content: ["Visualizer, written with React.js"]
        },
        2: {
            type: "link",
            content: ["Visit VYBE Now", "https://project-vybe.herokuapp.com"]
        },
        3: {
            type: "link",
            content: ["Github Link","https://github.com/militara106/PROJECT-3"]
        }
    },
    3: {            //RK MEDIC LINE
        0: {
            type: "header",
            content: ["RK MEDIC LINK"]
        },
        1: {
            type: "subheader",
            content: ["Wholesale PPE distributor"]
        },
        2: {
            type: "image",
            content: ["./assets/content/code/rk/rk.png", "Professionally managed website, written and designed to inspire confidence in the quality of the products."]
        }
    },
    4: {        //CLIC APPAREL
        0: {
            type: "header",
            content: ["CLIC APPAREL"]
        },
        1: {
            type: "subheader",
            content: ["Client Commissioned Logos"]
        },
        2: {
            type: "gallery",
            content: ["./assets/content/code/clic/1.png", "./assets/content/code/clic/2.png",
                "./assets/content/code/clic/3.png", "./assets/content/code/clic/4.png", "./assets/content/code/clic/5.png", "./assets/content/code/clic/6.png"]
        },
        3: {
            type: "header",
            content: ["test"]
        }
    },
    5: {        //TWE ADOBE
        0: {
            type: "header",
            content: ["NICOLE FRANK: THE WARDROBE EVOLUTION"]
        },
        1: {
            type: "subheader",
            content: ["&nbsp"]
        },
        2: {
            type: "subheader",
            content: ["FABRIC ICONOGRAPHY"]
        },
        3: {
            type: "gallery",
            content: ["./assets/content/twevisual/fabric1.jpg", "./assets/content/twevisual/fabric2.jpg"]
        },
        4: {
            type: "header",
            content: ["&nbsp"]
        },
        5: {
            type: "subheader",
            content: ["STYLE BOOK"]
        },
        6: {
            type: "gallery",
            content: ["./assets/content/twevisual/stylebook/1.jpeg", "./assets/content/twevisual/stylebook/4.jpeg", "./assets/content/twevisual/stylebook/2.jpeg","./assets/content/twevisual/stylebook/3.jpeg"]
        },
        7: {
            type: "link",
            content: ["continue style book","./assets/content/twevisual/twestylebook.pdf"]
        },
        8: {
            type: "header",
            content: ["&nbsp"]
        },
        9: {
            type: "subheader",
            content: ["PHOTOGRAPHY PRODUCTION"]
        },
        10: {
            type: "gallery",
            content: ["./assets/content/twevisual/chocprod.jpg","./assets/content/twevisual/chocedit.jpg"]
        }


    },
    6: {        //hackintosh
        0: {
            type: "header",
            content: ["OPENCORE PC EFI EMULATION"]
        },
        1: {
            type: "subheader",
            content: ["OpenCore implements open source UNIX software to provide a boot environment for x86 PC systems."]
        },
        2: {
            type: "link",
            content: ["Public GitHub Access", "https://github.com/acidanthera/OpenCorePkg"]
        }
    },
    7: {  //iconography
        0: {
            type: "header",
            content: ["RK MEDIC LINE"]
        },
        1: {
            type: "subheader",
            content: ["Client Commissioned Iconography"]
        },
        2: {
            type: "hero",
            content: ["./assets/content/icons/rkc-logo-650-custom.png"]
        }
    }
}