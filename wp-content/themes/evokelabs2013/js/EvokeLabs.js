$(function () {
  //RollOvers
  $('#headerIcons li').hover(
    function () {
      $('img', this).stop().animate(
        {
          bottom: '5px'
        },
        250
      )
      $(this).stop().animate(
        {
          backgroundColor: '#8e0e04'
        },
        250
      )
    },

    function () {
      $('img', this).stop().animate(
        {
          bottom: '1px'
        },
        250
      )
      $(this).stop().animate(
        {
          backgroundColor: '#FFFFFF'
        },
        250
      )
    }
  )

  $('footer li:lt(2)').hover(
    function () {
      $('.footericon', this).stop().animate(
        {
          backgroundColor: '#8e0e04'
        },
        250
      )
      $(this).stop().animate(
        {
          backgroundColor: '#8e0e04',
          color: '#FFFFFF'
        },
        250
      )
    },

    function () {
      $('.footericon', this).stop().animate(
        {
          backgroundColor: '#ffffff'
        },
        250
      )
      $(this).stop().animate(
        {
          backgroundColor: '#FFFFFF',
          color: '#ff8c32'
        },
        250
      )
    }
  )
  $('.video-reel').hover(
    function () {
      $('img', this).stop().animate(
        {
          borderColor: '#8e0e04'
        },
        250
      )
    },

    function () {
      $('img', this).stop().animate(
        {
          borderColor: '#fff'
        },
        250
      )
    }
  )

  function workFeatureRollOvers() {
    $('#workfeature-right h1').hover(
      function () {
        $(this).stop().animate(
          {
            backgroundColor: '#ff8c33',
            color: '#8e0e04'
          },
          150
        )
      },

      function () {
        $(this).stop().animate(
          {
            backgroundColor: '#8e0e04',
            color: '#ff8c33'
          },
          150
        )
      }
    )
    $('#workfeature h2').hover(
      function () {
        $(this).stop().animate(
          {
            backgroundColor: '#ff8c33',
            color: '#8e0e04'
          },
          150
        )
      },

      function () {
        $(this).stop().animate(
          {
            backgroundColor: '#8e0e04',
            color: '#ff8c33'
          },
          150
        )
      }
    )

    $('#workfeature-right img').hover(
      function () {
        $(this).stop().animate(
          {
            borderColor: '#8e0e04'
          },
          150
        )
      },

      function () {
        $(this).stop().animate(
          {
            borderColor: '#fff'
          },
          150
        )
      }
    )
  }

  function showCaseRollOvers() {
    $('#showcase li').hover(
      function () {
        $('h3', this).stop().animate(
          {
            backgroundColor: '#ff8c33',
            color: '#8e0e04'
          },
          250
        )
        $('video', this).stop().animate(
          {
            borderColor: '#8e0e04'
          },
          250
        )
        //$("h3", this).stop().animate({opacity:'0.0'}, 400)
      },

      function () {
        $('h3', this).animate(
          {
            backgroundColor: '#8e0e04',
            color: '#ff8c33'
          },
          250
        )
        $('video', this).stop().animate(
          {
            borderColor: '#FFFFFF'
          },
          250
        )
        //  $("h3", this).stop().animate({opacity:'1'}, 400)
      }
    )
  }

  //Change Text

  const likeArray = randomItemWithNoRepetition([
    'like spicegirls do the 90s',
    'like ufos does xfiles',
    "like that's just your opinion man",
    'like you know whatever',
    'like baratheon does the fury',
    'like the pacific does oceans',
    'like night follows day',
    'like lannisters pay their debts',
    'like a moth to the flame',
    'like michael bay does explosions',
    'like awkward dancing at proms',
    'like pens that disappear',
    'like shakespeare doesth betrayal',
    'like pilgrim vs the world',
    'like a ninja does stealth',
    'like arnold does termination',
    'like gandalf guards bridges',
    'like skynet does AI',
    'like jedi use the force',
    'like the matrix does bullet time',
    'like the dark knight does justice',
    'like avengers does marvel',
    'like walking dead does zombies',
    'like creatives do coffee',
    'like developers do all nighters',
    'like children do laughter',
    'like jeans do butts',
    'like react does components',
    'like unreal does epic engines',
    'like leeloo dallas multipass',
    'like government does debt',
    'like github does pulling',
    'like jquery does javascript',
    'like gsap does motion',
    'like the internet does memes',
    'like youtube does cat videos',
    'like VR does motion sickness'
  ])

  const soloArray = randomItemWithNoRepetition([
    'a creative technologist',
    'a motion designer',
    'a frontend developer',
    'a creative director',
    'a digital designer',
    'a web developer',
    'a UI designer',
    'a backend developer',
    'a MERN stack enjoyer',
    'an ActionScript programmer',
    'a javascript engineer',
    'a small business owner',
    'an experienced freelancer',
    'a HTML5 banner developer',
    'an UXer',
    'a digital designer',
    'a digital developer',
    'an eDM & CRM specialist',
    'a landing page developer',
    'a digital specialist',
    'a 3d artist',
    'an unreal engine artist',
    'a VR developer',
    'a digital artist',
    'a digital developer',
    'a 3dsmax specialist',
    'a 3d animator',
    'a 3d generalist',
    'a single man digital agency',
    'a youtube content creator',
    'an animator',
    'a multi-disciplinary unicorn',
    'a public speaker'
  ])

  const powerArray = randomItemWithNoRepetition([
    'Figma',
    'CSS',
    'typescript',
    'React',
    'JSON',
    'components',
    'JSX',
    'javascript',
    'NPM',
    'traditional principles',
    'fonts',
    'Adobe Audition',
    'Cubase',
    'Adobe Illustrator',
    'Wordpress',
    'WebGL',
    'Adobe After Effects',
    'Adobe Premiere Pro',
    'Adobe Animate',
    'Visual Studio Code',
    'Adobe XD',
    'Adobe Photoshop',
    '3dsmax',
    'the Unreal Engine',
    'VR',
    'motion graphics',
    'programming',
    'frontend',
    'backend',
    'APIs',
    'Node',
    'Express',
    'Mongoose',
    'HTML5',
    'SASS',
    'GSAP',
    'GitHub',
    'Mailchimp',
    'colour theory',
    'typography',
    'responsive design',
    'the web',
    'motion',
    'strategy'
  ])

  const describeArray = randomItemWithNoRepetition([
    'elegant',
    'awesome',
    '1337',
    'surprising',
    'awesome',
    'cheesy',
    'mesmerising',
    'sexy',
    'unforgettable',
    'affordable',
    'enjoyable',
    'user centric',
    'focused',
    'goal-oriented',
    'engaging',
    'rememberable',
    'hassle-free',
    'slick',
    'explosive',
    'accessible',
    'innovative',
    'interactive',
    'engaging',
    'memorable',
    'powerful',
    'dynamic'
  ])

  const testimonialsArray = randomItemWithNoRepetition([
    '<i>“BTW, the CD-Rom got a round of applause at Toyota so well done mate.  Appreciated your help on this one!”</i> -Enscape Director',
    '<i>“I shit you not – your work is great.”</i> -AJFPartnership Digital Project Manager',
    '<i>“As always, amazing to work with. Thank you.”</i> -Akcelo Senior Project Manager',
    '<i>“THANK YOU SO MUCH for jumping on this and smashing it so quickly. We really appreciate it. Got us out of a massive hole.”</i> -Akcelo Managing Partner',
    '<i>“You are amazing Adrian! Seriously – you always impress me by going above and beyond!”</i> -Akcelo Senior Project Manager',
    '<i>“You’re doing great work and have helped get us out of a jam more than a few times.”</i> -Akcelo Senior Producer',
    '<i>“Amazing, really appreciate the work on this one – looks great.”</i> -Hyland Senior Manager'
  ])

  function randomItemWithNoRepetition(array) {
    if (!Array.isArray(array) || array.length === 0) return -1
    var copyOfArray = array.slice()
    return function () {
      copyOfArray.length < 1 && (copyOfArray = array.slice())
      var index = Math.floor(Math.random() * copyOfArray.length),
        item = copyOfArray[index]
      return copyOfArray.splice(index, 1), item
    }
  }

  function getRandomString(ArrayStringValue) {
    randomNumber = Math.floor(Math.random() * ArrayStringValue.length)
    console.log(randomNumber)
    return ArrayStringValue[randomNumber]
  }

  function replacetext() {
    const timer = 500
    $('#likeText').animate(
      {
        color: '#8e0e04'
      },
      timer,
      function () {
        $(this).text(likeArray())
        $(this).animate(
          {
            color: '#ff8d34'
          },
          timer
        )
      }
    )

    $('#soloText').animate(
      {
        color: '#8e0e04'
      },
      timer,
      function () {
        $(this).text(soloArray())
        $(this).animate(
          {
            color: '#ff8d34'
          },
          timer
        )
      }
    )

    $('#powerText').animate(
      {
        color: '#8e0e04'
      },
      timer,
      function () {
        $(this).text(powerArray())
        $(this).animate(
          {
            color: '#ff8d34'
          },
          timer
        )
      }
    )
    $('#describeText').animate(
      {
        color: '#8e0e04'
      },
      timer,
      function () {
        $(this).text(describeArray())
        $(this).animate(
          {
            color: '#ff8d34'
          },
          timer
        )
      }
    )
    $('#testimonials').animate(
      {
        opacity: '0'
      },
      timer,
      function () {
        $(this).html(testimonialsArray())
        $(this).animate(
          {
            opacity: '1'
          },
          timer
        )
      }
    )
  }

  function firstText() {
    $('#likeText').text(likeArray())
    $('#soloText').text(soloArray())
    $('#powerText').text(powerArray())
    $('#describeText').text(describeArray())
    $('#testimonials').html(testimonialsArray())
  }

  function clientsSlider() {
    var clientsVar = $('#aboutSlider').position()
    if (clientsVar.top > -1600) {
      $('#aboutSlider').animate(
        {
          bottom: '+=220'
        },
        1000
      )
    } else {
      $('#aboutSlider').animate(
        {
          bottom: '0'
        },
        1000
      )
    }
  }

  var durationNumber = 500

  function showCaseInteractive() {
    $('#showcase li').click(function () {
      var numberToLoad = $(this).index()

      $('#showcase').hide(durationNumber, loadContent)
      $('#load').remove()
      $('#wrapper').append('<span id="load">LOADING...</span>')
      $('#load').fadeIn(durationNumber)

      function loadContent() {
        $('#workfeature').replaceWith(caseStudyItemArray[numberToLoad])
        workFeatureRollOvers()
        backButtonsInteractive()
        enablezoom()
        $('#workfeature').hide()
        $('#workfeature').show(durationNumber)
      }

      function hideLoader() {
        $('#showcase').fadeOut(durationNumber)
      }

      return false
    })

    function backButtonsInteractive() {
      $('#workfeature a').click(function () {
        $('#workfeature .main-video video').prop('muted', true)
      })

      $('#workfeature h2:eq(1), h1.back').click(function () {
        // var toLoad = $(this).attr('href')+' #content';

        $('#workfeature .main-video video').prop('muted', true)
        $('#workfeature').hide(durationNumber, loadContent)
        $('#load').remove()
        $('#wrapper').append('<span id="load">LOADING...</span>')
        $('#load').fadeIn('slow')

        function loadContent() {
          // $('#showcase').load(toLoad,'',showNewContent())
          $('#showcase').show(durationNumber)
        }

        function hideLoader() {
          $('#workfeature').fadeOut(durationNumber)
        }

        return false
      })
    }

    $('#workfeature').hide(0)
  }

  var $caseStudyXML

  function xmlLoader() {
    $.ajax({
      type: 'GET',
      url: 'casestudies.xml',
      dataType: 'xml',
      success: parseXml
    })
  }

  var caseStudyItemArray = []

  //Zoom effects

  function enablezoom() {
    $('#workfeature-right').magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function () {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace(
            'mfp-figure',
            'mfp-figure mfp-with-anim'
          )
          this.st.mainClass = this.st.el.attr('data-effect')
        }
      },
      closeOnContentClick: true,
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    })
  }

  function parseXml(data) {
    var loopCounter = 0

    $(data)
      .find('caseStudyItem')
      .each(function () {
        loopCounter++
        var $heading = $(this).find('heading').text()
        var $client = $(this).find('client').text()
        var $link = $(this).find('link').text()
        var $techonology = $(this).find('technology').text()
        var $techonologyArray = $techonology.split(',')
        var $brief = $(this).find('brief').text()
        var $desc = $(this).find('desc').text()
        var $thumb = $(this).find('thumb').text()
        var $thumbArray = $thumb.split(',')
        var $link = $(this).find('link').text()
        var $graphA = $(this).find('graphA').text()
        var $graphB = $(this).find('graphB').text()
        var $video = $(this).find('video').text()
        var $mainvideo = $(this).find('main-video').text()

        if (!$video) {
          $('#showcase ul').append(
            "<a href='#'><li><img src=" +
              $thumbArray[0] +
              ' /><h3>' +
              $heading +
              '</h3><h3>' +
              $client +
              '</h3><h3>' +
              $techonologyArray +
              '</h3><p>' +
              $brief +
              '</p></li></a>'
          )
        } else {
          $('#showcase ul').append(
            "<li><a href='#'><div class='orange-video-shadow'><video loop autoplay muted poster='" +
              $thumbArray[0] +
              "'><source src='" +
              $video +
              "' type='video/mp4'></video></div><div class='showcase-video-caption'><h3>" +
              $heading +
              '</h3><h3>' +
              $client +
              '</h3><h3>' +
              $techonologyArray +
              '</h3><p>' +
              $brief +
              '</p></div></li></a>'
          )
        }
        var $video = $(this).find('video').text()

        var $technologoString = ''

        jQuery.each($techonologyArray, function (index, value) {
          $technologoString += '<li>' + value + '</li>'
        })

        var $thumbsString = ''

        jQuery.each($thumbArray, function (index, value) {
          $thumbsString +=
            '<a href="' +
            value +
            '" data-effect="mfp-zoom-in"><img src=' +
            value +
            ' /></a>'
        })

        var $graphAString = ''
        var $graphBString = ''

        if ($graphA.length > 5) {
          $graphAString =
            '<div class="HR"></div><div class="GraphPaperOne">' +
            $graphA +
            '</div>'
        }

        if ($graphB.length > 5) {
          {
            $graphBString = '<div class="GraphPaperTwo">' + $graphB + '</div>'
          }
        }

        if ($mainvideo) {
          var linkString =
            "<a href='" +
            $link +
            "' target='_blank' style='display:none'><h2>View this piece</h2></a>"
          if ($link) {
            linkString =
              "<a href='" +
              $link +
              "' target='_blank'><h2>View this piece</h2></a>"
          }
          mainvideoString =
            '<div class="main-video"><video loop autoplay controls><source src="' +
            $mainvideo +
            '" type="video/mp4"></video></div>'
        }
        caseStudyItemArray.push(
          '<div id="workfeature"><h1>' +
            $heading +
            '</h1>' +
            // "<ul>" + $technologoString + "</ul>" +
            $desc +
            mainvideoString +
            // $thumbsString +
            // '<div class="HR"></div>' +
            $graphAString +
            $graphBString +
            linkString +
            '<a href="#"><h2>Back to works</h2></a></div>   <!-- work feature-->'
        )
      })

    showCaseRollOvers()
    showCaseInteractive()
  }

  firstText()
  xmlLoader()
  var changeText = setInterval(replacetext, 4000)
  var clientSliderTimer = setInterval(clientsSlider, 4000)
})
