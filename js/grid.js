$(window).load(function(){

  var $container = $('#grid');

  $container.imagesLoaded( function(){
    console.log("imagesLoaded")
    $container.isotope({
      filter: '*',
      animationOptions: {
       duration: 750,
       easing: 'linear',
       queue: false,
     },
    });
  });

  $('.sidebar a').click(function(){
    var selector1 = $(this).attr('title');
    var text = $(this).text();
    if(text == "All"){
    var selector = selector1;
    }
    else {
    var selector = "." + selector1;
    }
      $container.isotope({
      filter: selector,
      animationOptions: {
       duration: 750,
       easing: 'linear',
       queue: false,

     }
    });
    return false;
  });


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

      $container.isotope('insert', $(toAdd), function(){
        $container.children().css({
          opacity: 1
        });
        $('#temp-load').remove();
      });
    }
  }

});
