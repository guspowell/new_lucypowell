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

  var page = 1;

  $(window).scroll(function(){

    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var docuHeight = $(document).height();

    if(scrollTop + windowHeight == docuHeight){

      $('body').append('<div id="temp-load"</div>');

      page += 1;

      $('#temp-load').load('pages/page' + page + '.html #grid', function(){

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

      });

    }

  });

});
