
$(document).ready(function(){
  addImagesToDom();
});

function addImagesToDom(){

  imagesLeft = imagesData;
  imagesInDom = [];
  imagesToAddToDom = [];

  for (var i = 0; i < 10; i++) {
    imagesToAddToDom.push(imagesLeft[i]);

    var content =
        "<div class='box " + imagesToAddToDom[i]["type"] + "'" + ">" +
          "<div class='box-wrapper'>" +
            "<img src='" + imagesToAddToDom[i]["src"] + "' />" +
          "</div>"
        "</div>"
    }

    $("#grid").append(content);

};

var imagesData = [
  { "name" : "Poppy Pot",
    "src" : "images/poppy-pot.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  { "name" : "The Harbour",
    "src" : "images/the-harbour.jpg",
    "type": "landscape",
    "size" : {"width" : 25, "height" : 13},
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
  { "name" : "Poppy Pot",
    "src" : "images/poppy-pot.jpg",
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
  { "name" : "Poppy Pot",
    "src" : "images/poppy-pot.jpg",
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
  { "name" : "Poppy Pot",
    "src" : "images/poppy-pot.jpg",
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
  { "name" : "Poppy Pot",
    "src" : "images/poppy-pot.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
]
