//use js to set page width
//generate webpage modals via siteObj

document.addEventListener("DOMContentLoaded", function() {
  var x = screen.width;
  console.log("screen width is: " + x);

  var siteObj = {
    1: {
      name: "Nicole Frank: The Wardrobe Evolution",
      description: "Proprietary code is unavailable for public access.",
      link: "https://www.nicolefranktwe.com",
      github: "#"
    },
    2: {
      name: "Nicole Frank: The Wardrobe Evolution",
      description: "Proprietary code is unavailable for public access.",
      link: "https://nfrank.myshopify.com",
      github: "#"
    },
    3: {
      name: "RKC Sales Alliance",
      description: "Proprietary code is currently public but is subject to change.  Please note that this project is under development and is subject to change",
      link: "http://www.tylerhipke.com/rck-codehead/store.html",
      github: "#"
    },
    4: {
      name: "New Gateway Solutions",
      description: "Proprietary client code and internal infranstructure code is unavailable for public access.",
      link: "https://newgateway.org",
      github: "#"
    },
    5: {
      name: "Check Yo Pill",
      description:
        "Check Yo Pill was designed to help save lives.  Use our app to check adverse reactions amongst your prescribed medicines.  Our custom APIs pull information from hosted servers.  The medicine you add to your personal profile is then compared, and data is shown." +
        "<br><br> This is a full-stack web application, with the server and multiple APIs being written from scratch.<br><br>" +
        "See GitHub Link for code credits.",
      link: "https://checkyopill.herokuapp.com",
      github: "https://github.com/ucsd-teamwork-projects/groupProj2"
    },
    6: {
      name: "Pre-Game",
      description:
        "Pre-Game was created with the intention of you having a great start to your night. Centered around your event of the night, enter the venue/location you'll attend to find all the nearby local spots. Please enjoy responsibly! Don't be that guy, don't drink and drive!" +
        "<br><br> See GitHub Link for code credits.",
      link: "https://tylerhipke.github.io/tyler-pre-game",
      github: "https://www.github.com/tylerhipke/tyler-pre-game"
    }
  };
  $(".card").click(function() {
    var clickedCard = $(this).attr("id");
    var currentKey = siteObj[clickedCard];
    console.log(currentKey);
    $("#site-title").html(currentKey.name);
    $("#site-text").html(currentKey.description);
    $("#site-link").attr("href", currentKey.link);
    $("#site-github").attr("href", currentKey.github);
    $("#site-modal").modal("show");
  });

  $(".card").hover(
    function() {
      $(this).css("background-color", "#dcdcdc");
    },
    function() {
      $(this).css("background-color", "#ffffff");
    }
  );
});
