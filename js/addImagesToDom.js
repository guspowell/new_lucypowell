$(document).ready(function(){
  addImagesToDom();
});

function addImagesToDom(){
  var imagesToAddToDom = [];
  for (var i = 0; i < 10; i++) {
    imagesToAddToDom.push(imagesData[i]);
    var content =
    "<div class='box " + imagesToAddToDom[i]["type"] + "'" + ">" +
      "<div class='box-wrapper'>" +
        "<img src='" + imagesToAddToDom[i]["src"] + "' />" +
      "</div>"
    "</div>"
    $("#grid").append(content);
  }
  imagesData.splice(0,10);
};

var timer;

$(window).scroll(function() {
    // timeout to wait 500 ms
    timer = setTimeout(scrollEvt, 500);
});

function scrollEvt() {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var docuHeight = $(document).height();

  if(scrollTop + windowHeight == docuHeight){
    nextTenImages = imagesData.splice(0,10);
    var content = ""
    for (var i = 0; i < nextTenImages.length; i++) {
        content +=
        "<div class='box " + nextTenImages[i]["type"] + "'" + ">" +
          "<div class='box-wrapper'>" +
            "<img src='" + nextTenImages[i]["src"] + "' />" +
          "</div>" +
        "</div>"
    };

    $('body').append('<div id="temp-load"><div id="grid"></div></div>');
    $('#temp-load > #grid').append(content)

    $('#temp-load > #grid').children().css({
        opacity: 0
    });

    var toAdd = $('#temp-load > #grid').html();
    var $container = $('#grid');

    $container.isotope('insert', $(toAdd), function(){
      $container.children().css({
        opacity: 1
      });
      $('#temp-load').remove();
    });
  }
}

var imagesData = [
  { "name" : "After the Party",
    "src" : "images/after-the-party.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Blue Coffee Pot",
    "src" : "images/blue-coffee-pot.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Coming Out of the Woods",
    "src" : "images/coming-out-of-the-woods.jpg",
    "type": "landscape",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Oil on Board",
    "src" : "images/oil-on-board.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Poppy Pot",
    "src" : "images/poppy-pot.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Red Poppies",
    "src" : "images/red-poppies.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Road to Binibecca",
    "src" : "images/road-to-binibecca.jpg",
    "type": "landscape",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Rock Regatta",
    "src" : "images/rock-regatta.jpg",
    "type": "landscape",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Summer Still Life",
    "src" : "images/summer-still-life.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Sussex Farmhouse",
    "src" : "images/sussex-farmhouse.jpg",
    "type": "landscape",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Table of Flowers",
    "src" : "images/table-of-flowers.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "The Harbour",
    "src" : "images/the-harbour.jpg",
    "type": "landscape",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "The Red Chair",
    "src" : "images/the-red-chair.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "The Red Flower",
    "src" : "images/the-red-flower.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "The Wedding",
    "src" : "images/the-wedding.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
]
