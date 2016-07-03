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

});
