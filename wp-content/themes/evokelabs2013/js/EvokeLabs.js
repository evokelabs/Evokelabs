$(function() {
  //RollOvers
  $("#headerIcons li").hover(
    function() {
      $("img", this)
        .stop()
        .animate({ bottom: "5px" }, 250);
      $(this)
        .stop()
        .animate({ backgroundColor: "#8e0e04" }, 250);
    },

    function() {
      $("img", this)
        .stop()
        .animate({ bottom: "1px" }, 250);
      $(this)
        .stop()
        .animate({ backgroundColor: "#FFFFFF" }, 250);
    }
  );

  $("footer li:lt(2)").hover(
    function() {
      $(".footericon", this)
        .stop()
        .animate({ backgroundColor: "#8e0e04" }, 250);
      $(this)
        .stop()
        .animate({ backgroundColor: "#8e0e04", color: "#FFFFFF" }, 250);
    },

    function() {
      $(".footericon", this)
        .stop()
        .animate({ backgroundColor: "#ffffff" }, 250);
      $(this)
        .stop()
        .animate({ backgroundColor: "#FFFFFF", color: "#ff8c32" }, 250);
    }
  );
  $(".video-reel").hover(
    function() {
      $(this)
        .stop()
        .animate({ backgroundColor: "#8e0e04" }, 250);
      $(this)
        .stop()
        .animate({ backgroundColor: "#8e0e04", color: "#FFFFFF" }, 250);
    },

    function() {
      $(this)
        .stop()
        .animate({ backgroundColor: "#ffffff" }, 250);
      $(this)
        .stop()
        .animate({ backgroundColor: "#FFFFFF", color: "#ff8c32" }, 250);
    }
  );

  function workFeatureRollOvers() {
    $("#workfeature-right h1").hover(
      function() {
        $(this)
          .stop()
          .animate({ backgroundColor: "#ff8c33", color: "#8e0e04" }, 150);
      },

      function() {
        $(this)
          .stop()
          .animate({ backgroundColor: "#8e0e04", color: "#ff8c33" }, 150);
      }
    );
    $("#workfeature h2").hover(
      function() {
        $(this)
          .stop()
          .animate({ backgroundColor: "#ff8c33", color: "#8e0e04" }, 150);
      },

      function() {
        $(this)
          .stop()
          .animate({ backgroundColor: "#8e0e04", color: "#ff8c33" }, 150);
      }
    );

    $("#workfeature-right img").hover(
      function() {
        $(this)
          .stop()
          .animate({ borderColor: "#8e0e04" }, 150);
      },

      function() {
        $(this)
          .stop()
          .animate({ borderColor: "#fff" }, 150);
      }
    );
  }

  function showCaseRollOvers() {
    $("#showcase li").hover(
      function() {
        $("h3", this)
          .stop()
          .animate({ backgroundColor: "#ff8c33", color: "#8e0e04" }, 250);
        $(this)
          .stop()
          .animate({ backgroundColor: "#8e0e04" }, 250);
        //$("h3", this).stop().animate({opacity:'0.0'}, 400)
      },

      function() {
        $("h3", this).animate({ backgroundColor: "#8e0e04", color: "#ff8c33" }, 250);
        $(this)
          .stop()
          .animate({ backgroundColor: "#FFFFFF" }, 250);
        //  $("h3", this).stop().animate({opacity:'1'}, 400)
      }
    );
  }

  //Change Text
  var likeArray = [
    "like spicegirls do the 90s",
    "like ufos do the xfiles",
    "like politicians tell lies",
    "like baratheon does the fury",
    "like the pacific does oceans",
    "like protoss players 4-gates",
    "like night follows day",
    "like lannisters pay their debts",
    "like a moth to the flame",
    "like michael bay does explosions",
    "like awkward dancing at proms",
    "like pens that disappear",
    "like shakespeare does betrayal",
    "like bruce willis does action",
    "like emma stone does waifua",
    "like pilgrim does the world",
    "like monroe does white dresses",
    "like clockwork does violence",
    "like arnold terminates",
    "like michael westen does cover",
    "like gandalf guards bridges",
    "like creatives do coffee",
    "like developers do all nighters",
    "like children do laughter",
    "like jeans do butts",
    "like leeloo dallas multipass",
    "like governments does debt",
    "like reddit does upvotes",
    "like github does pulling",
    "like jquery does javascript"
  ];
  var soloArray = [
    "a lone wolf",
    "a one man army",
    "an individualist",
    "a troglodyte",
    "a toastmaster",
    "a lover",
    "a soloist",
    "a multi-disciplinary",
    "a thinker",
    "an introvert",
    "a one-man band",
    "a free thinker",
    "a solitudinarian",
    "a cave dweller",
    "a solo flyer",
    "a tread setter",
    "a maverick",
    "a nonconformist",
    "a dreamer"
  ];
  var powerArray = [
    "seduction",
    "magic cards",
    "deceivement",
    "distraction",
    "plagiarism",
    "philosophy",
    "sex appeal",
    "humour",
    "knowledge",
    "google",
    "espionage",
    "taunts",
    "multitasking",
    "wizardry",
    "sorcery",
    "black magic",
    "bird calling",
    "surveying",
    "hiding",
    "laughter",
    "x-ray vision",
    "flight",
    "super-strength",
    "webslinging",
    "bait and switch",
    "karaoke",
    "pokemon",
    "vblogs",
    "mud-wrestling",
    "drinking"
  ];
  var describeArray = ["elegant", "awesome", "1337", "surprising", "awesome", "cheesy", "mesmerising", "sexy", "unforgettable", "affordable", "enjoyable", "user centric", "focused", "goal-oriented", "engaging", "rememberable", "hassle-free", "slick", "explosive"];

  function getRandomString(ArrayStringValue) {
    return ArrayStringValue[Math.floor(Math.random() * ArrayStringValue.length)];
  }

  function replacetext() {
    $("#likeText").animate({ color: "#8e0e04" }, 500, function() {
      $(this).text(getRandomString(likeArray));
      $(this).animate({ color: "#ff8d34" }, 500);
    });

    $("#soloText").animate({ color: "#8e0e04" }, 500, function() {
      $(this).text(getRandomString(soloArray));
      $(this).animate({ color: "#ff8d34" }, 500);
    });

    $("#powerText").animate({ color: "#8e0e04" }, 500, function() {
      $(this).text(getRandomString(powerArray));
      $(this).animate({ color: "#ff8d34" }, 500);
    });
    $("#describeText").animate({ color: "#8e0e04" }, 500, function() {
      $(this).text(getRandomString(describeArray));
      $(this).animate({ color: "#ff8d34" }, 500);
    });
  }
  function firstText() {
    $("#likeText").text(getRandomString(likeArray));
    $("#soloText").text(getRandomString(soloArray));
    $("#powerText").text(getRandomString(powerArray));
    $("#describeText").text(getRandomString(describeArray));
  }

  function clientsSlider() {
    var clientsVar = $("#aboutSlider").position();
    if (clientsVar.top > -1600) {
      $("#aboutSlider").animate({ bottom: "+=220" }, 1000);
    } else {
      $("#aboutSlider").animate({ bottom: "0" }, 1000);
    }
  }

  var durationNumber = 1000;
  function showCaseInteractive() {
    $("#showcase a").click(function() {
      var numberToLoad = $(this).index();

      $("#showcase").hide(durationNumber, loadContent);
      $("#load").remove();
      $("#wrapper").append('<span id="load">LOADING...</span>');
      $("#load").fadeIn(durationNumber);
      function loadContent() {
        $("#workfeature").replaceWith(caseStudyItemArray[numberToLoad]);
        workFeatureRollOvers();
        backButtonsInteractive();
        enablezoom();
        $("#workfeature").hide();
        $("#workfeature").show(durationNumber);
      }
      function hideLoader() {
        $("#showcase").fadeOut(durationNumber);
      }

      return false;
    });

    function backButtonsInteractive() {
      $("#workfeature a").click(function() {
        $("#workfeature .main-video video").prop("muted", true);
      });

      $("#workfeature h2:eq(1), #workfeature-right h1").click(function() {
        // var toLoad = $(this).attr('href')+' #content';

        $("#workfeature .main-video video").prop("muted", true);
        $("#workfeature").hide(durationNumber, loadContent);
        $("#load").remove();
        $("#wrapper").append('<span id="load">LOADING...</span>');
        $("#load").fadeIn("slow");
        function loadContent() {
          // $('#showcase').load(toLoad,'',showNewContent())
          $("#showcase").show(durationNumber);
        }
        function hideLoader() {
          $("#workfeature").fadeOut(durationNumber);
        }

        return false;
      });
    }

    $("#workfeature").hide(0);
  }

  var $caseStudyXML;

  function xmlLoader() {
    $.ajax({
      type: "GET",
      url: "casestudies.xml",
      dataType: "xml",
      success: parseXml
    });
  }

  var caseStudyItemArray = [];

  //Zoom effects

  function enablezoom() {
    $("#workfeature-right").magnificPopup({
      delegate: "a",
      type: "image",
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function() {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
          this.st.mainClass = this.st.el.attr("data-effect");
        }
      },
      closeOnContentClick: true,
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
  }

  function parseXml(data) {
    var loopCounter = 0;

    $(data)
      .find("caseStudyItem")
      .each(function() {
        loopCounter++;
        var $heading = $(this)
          .find("heading")
          .text();
        var $client = $(this)
          .find("client")
          .text();
        var $link = $(this)
          .find("link")
          .text();
        var $techonology = $(this)
          .find("technology")
          .text();
        var $techonologyArray = $techonology.split(",");
        var $brief = $(this)
          .find("brief")
          .text();
        var $desc = $(this)
          .find("desc")
          .text();
        var $thumb = $(this)
          .find("thumb")
          .text();
        var $thumbArray = $thumb.split(",");
        var $link = $(this)
          .find("link")
          .text();
        var $graphA = $(this)
          .find("graphA")
          .text();
        var $graphB = $(this)
          .find("graphB")
          .text();
        var $video = $(this)
          .find("video")
          .text();
        var $mainvideo = $(this)
          .find("main-video")
          .text();

        if (!$video) {
          $("#showcase ul").append("<a href='#'><li><img src=" + $thumbArray[0] + " /><h3>" + $heading + "</h3><h3>" + $client + "</h3><h3>" + $techonologyArray + "</h3><p>" + $brief + "</p></li></a>");
        } else {
          $("#showcase ul").append(
            "<a href='#'><li><video loop autoplay muted poster='" +
              $thumbArray[0] +
              "'><source src='" +
              $video +
              "' type='video/mp4'></video><img class='Image-Hide' src=" +
              $thumbArray[0] +
              " /><h3>" +
              $heading +
              "</h3><h3>" +
              $client +
              "</h3><h3>" +
              $techonologyArray +
              "</h3><p>" +
              $brief +
              "</p></li></a>"
          );
        }
        var $video = $(this)
          .find("video")
          .text();

        var $technologoString = "";

        jQuery.each($techonologyArray, function(index, value) {
          $technologoString += "<li>" + value + "</li>";
        });

        var $thumbsString = "";

        jQuery.each($thumbArray, function(index, value) {
          $thumbsString += '<a href="' + value + '" data-effect="mfp-zoom-in"><img src=' + value + " /></a>";
        });

        var $graphAString = "";
        var $graphBString = "";

        if ($graphA.length > 5) {
          $graphAString = '<div class="HR"></div><div class="GraphPaperOne">' + $graphA + "</div>";
        }

        if ($graphB.length > 5) {
          {
            $graphBString = '<div class="GraphPaperTwo">' + $graphB + "</div>";
          }
        }

        if ($mainvideo) {
          caseStudyItemArray.push(
            '<div id="workfeature"><div id="workfeature-left"><h1>' +
              $heading +
              "</h1><ul>" +
              $technologoString +
              "</ul>" +
              $desc +
              '<div class="main-video"><video loop autoplay controls><source src="' +
              $mainvideo +
              '" type="video/mp4"></video></div></div><!--workfeature-left--><div id="workfeature-right"><a href="#"><h1>Back X</h1></a>' +
              $thumbsString +
              '</div><!--workfeature-right--><div class="HR"></div>' +
              $graphAString +
              $graphBString +
              '<a href="' +
              $link +
              '" target="_blank"><h2>View this piece</h2></a><a href="#"><h2>Back to works</h2></a></div>   <!-- work feature-->'
          );
        } else {
          caseStudyItemArray.push(
            '<div id="workfeature"><div id="workfeature-left"><h1>' +
              $heading +
              "</h1><ul>" +
              $technologoString +
              "</ul>" +
              $desc +
              '<div class="main-video"></div></div><!--workfeature-left--><div id="workfeature-right"><a href="#"><h1>Back X</h1></a>' +
              $thumbsString +
              '</div><!--workfeature-right--><div class="HR"></div>' +
              $graphAString +
              $graphBString +
              '<a href="' +
              $link +
              '" target="_blank"><h2>View this piece</h2></a><a href="#"><h2>Back to works</h2></a></div>   <!-- work feature-->'
          );
        }
      });

    showCaseRollOvers();
    showCaseInteractive();
  }

  firstText();
  xmlLoader();
  var changeText = setInterval(replacetext, 4000);
  var clientSliderTimer = setInterval(clientsSlider, 4000);
});
