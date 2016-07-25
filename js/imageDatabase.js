$(document).ready( function() {

  // addImagesToDom();

});

var imageJson = {
  "poppy-pot" : {
    "name" : "Poppy Pot",
    "src" : "images/poppy-pot.jpg",
    "type": "still-life",
    "size" : {"width" : 51, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  "the-harbour" : {
    "name" : "The Harbour",
    "src" : "images/the-harbour.jpg",
    "type": "landscape",
    "size" : {"width" : 25, "height" : 13},
    "medium" : "oil on board",
    "status" : "sold"
  },
  "rock-regatta" : {
    "name" : "Rock Regatta",
    "src" : "images/rock-regatta.jpg",
    "type": "landscape",
    "size" : {"width" : 24, "height" : 18},
    "medium" : "oil on board",
    "status" : "sold"
  },
  "red-poppies" : {
    "name" : "Red Poppies",
    "src" : "images/red-poppies.jpg",
    "type": "still-life",
    "size" : {"width" : 76, "height" : 61},
    "medium" : "oil on board",
    "status" : "sold"
  },
  "the-red-chair" : {
    "name" : "The Red Chair",
    "src" : "images/the-red-chair.jpg",
    "type": "still-life",
    "size" : {"width" : 80, "height" : 65},
    "medium" : "oil on board",
    "status" : "sold"
  },
  "summer-still-life" : {
    "name" : "Summer Still Life",
    "src" : "images/summer-still-life.jpg",
    "type": "still-life",
    "size" : {"width" : "n/a", "height" : "n/a"},
    "medium" : "oil on board",
    "status" : "sold"
  },
  "table-of-flowers" : {
    "name" : "Table of Flowers",
    "src" : "images/table-of-flowers.jpg",
    "type": "still-life",
    "size" : {"width" : 65, "height" : 81},
    "medium" : "oil on board",
    "status" : "sold"
  },
  "the-red-flower" : {
    "name" : "The Red Flower",
    "src" : "images/the-red-flower.jpg",
    "type": "still-life",
    "size" : {"width" : 81, "height" : 65},
    "medium" : "oil on board",
    "status" : "sold"
  },
  "sussex-farmhouse" : {
    "name" : "Sussex Farmhouse",
    "src" : "images/sussex-farmhouse.jpg",
    "type": "landscape",
    "size" : {"width" : 60, "height" : 50},
    "medium" : "oil on canvas",
    "status" : "sold"
  },
  "sussex-farmhouse" : {
    "name" : "Sussex Farmhouse",
    "src" : "images/sussex-farmhouse.jpg",
    "type": "landscape",
    "size" : {"width" : 60, "height" : 50},
    "medium" : "oil on canvas",
    "status" : "sold"
  },
  "coming-out-of-the-woods" : {
    "name" : "Coming Out of the Woods",
    "src" : "images/coming-out-of-the-woods.jpg",
    "type": "landscape",
    "size" : {"width" : 50, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
  "blue-coffee-pot" : {
    "name" : "Blue Coffee Pot",
    "src" : "images/blue-coffee-pot.jpg",
    "type": "still-life",
    "size" : {"width" : 65, "height" : 80},
    "medium" : "oil on canvas",
    "status" : "sold"
  },
  "road-to-binibecca" : {
    "name" : "Road to binibecca",
    "src" : "images/road-to-binibecca.jpg",
    "type": "landscape",
    "size" : {"width" : 70, "height" : 50},
    "medium" : "oil on canvas",
    "status" : "sold"
  },
  "after-the-party" : {
    "name" : "After the party",
    "src" : "images/after-the-party.jpg",
    "type": "still-life",
    "size" : {"width" : 80, "height" : 65},
    "medium" : "oil on canvas",
    "status" : "sold"
  },
  "the-wedding" : {
    "name" : "The Wedding",
    "src" : "images/the-wedding.jpg",
    "type": "figure-portrait",
    "size" : {"width" : 50, "height" : 38},
    "medium" : "oil on board",
    "status" : "sold"
  },
};

function addImagesToDom() {

  //
  // fiveImages = [];
  // var i = 0
  // for(var key in imageJson) {
  //   if (i < 5) { fiveImages.push(imageJson[key]) };
  //   i++;
  // }



  for (var key in imageJson) {
    var content =  "<div class='grid-item " + imageJson[key]["type"] + "'" + ">" +
        "<a href='#'>" +
          "<div class='rollover'></div>" +
          "<div class='details'>" +
            "<div class='title'>" + imageJson[key]["name"].toUpperCase() + "</div>" +
            "<div class='image-size'>" + imageJson[key]["size"]["width"] + "x" + imageJson[key]["size"]["height"] + "</div>" +
            "<div class='image-medium'>" + imageJson[key]["medium"] + "</div>" +
          "</div>" +
        "</a>" +
        "<img src=" + "'" + imageJson[key]["src"] + "'" + ">" +
      "</div>"

    $(".grid").append(content);
  }
}
