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
  addTenImages();
});


function addTenImages() {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var docuHeight = $(document).height();

  if(scrollTop + windowHeight == docuHeight){
    console.log('EXECUTE')
    nextTenImages = imagesData.splice(0,1);
    var content = ""
    for (var i = 0; i < nextTenImages.length; i++) {
        content +=
        "<div class='box " + nextTenImages[i]["type"] + "'" + ">" +
          "<div class='box-wrapper'>" +
            "<img src='" + nextTenImages[i]["src"] + "' />" +
          "</div>" +
        "</div>"
    };
    nextTenImages = [];


    $('body').append('<div id="temp-load"><div id="grid"></div>');
    $('#temp-load > #grid').css({
      display: 'none'
    });
    $('#temp-load > #grid').append(content)

    var toAdd = $('#temp-load > #grid').html();

    var $newItems = $('#temp-load > #grid').children();
    var $container = $('.content > #grid')

    $container.isotope( 'insert', $newItems);

    $('#temp-load').remove();

  }

}

var imagesData = [
  { "name" : "After the Party",
    "src" : "images/grid-images/1.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Blue Coffee Pot",
    "src" : "images/grid-images/2.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Coming Out of the Woods",
    "src" : "images/grid-images/3.jpg",
    "type": "landscape",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Oil on Board",
    "src" : "images/grid-images/4.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Poppy Pot",
    "src" : "images/grid-images/5.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Red Poppies",
    "src" : "images/grid-images/6.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Road to Binibecca",
    "src" : "images/grid-images/7.jpg",
    "type": "landscape",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Rock Regatta",
    "src" : "images/grid-images/8.jpg",
    "type": "landscape",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Summer Still Life",
    "src" : "images/grid-images/9.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Sussex Farmhouse",
    "src" : "images/grid-images/10.jpg",
    "type": "landscape",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "Table of Flowers",
    "src" : "images/grid-images/11.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "The Harbour",
    "src" : "images/grid-images/12.jpg",
    "type": "landscape",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "The Red Chair",
    "src" : "images/grid-images/13.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "The Red Flower",
    "src" : "images/grid-images/14.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "The Wedding",
    "src" : "images/grid-images/15.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "xxx",
    "src" : "images/grid-images/16.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "xxx",
    "src" : "images/grid-images/17.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "xxx",
    "src" : "images/grid-images/18.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "xxx",
    "src" : "images/grid-images/19.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "xxx",
    "src" : "images/grid-images/20.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/21.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/22.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/23.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/24.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/25.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/26.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/27.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/29.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/30.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/31.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/32.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/33.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/34.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/35.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/36.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/37.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/38.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/39.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
  // { "name" : "xxx",
  //   "src" : "images/grid-images/40.jpg",
  //   "type": "still-life",
  //   "size" : {"width" : 51, "height" : 38},
  //   "medium" : "oil on board",
  //   "status" : "sold"
  // },
]
