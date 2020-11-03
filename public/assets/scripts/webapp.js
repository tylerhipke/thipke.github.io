// portfolio app script


// get card width
// var element = document.getElementById('leadingcard');
// var positionInfo = element.getBoundingClientRect();
// var cardWidth = positionInfo.width + "px";

// var cardWidth 

//set card height to width
//document.getElementById("leadingcard").style["height"] = cardWidth ;

// var cardElement = document.getElementsByClassName('t-code_card');

// start code reading links
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
}

function showLoading(){

}

function showHomeSidebar(){

}

function showArticleSidebar(){
    
}

// pull id from link, show loading screen , change header to dark color, and attempt to pull data from database

// if entry exists, drop all elements and display loading screen, set loading bar to zero
// if entry doesnt exist, show error display and go back home
// download database entry from server
// count how many blocks are needed
// set block amount to progress bar amount
// render each block, when its done increase progress bar
// when progress bar is 100, drop loading screen and show article

// link clicked- pull js code and use for statement to read each block, then call specific render method

// methods for different render calls