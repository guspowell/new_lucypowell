$(document).ready(function(){

  var $container = $('#content');
  $container.isotope({
    filter: '*',
    animationOptions: {
     duration: 750,
     easing: 'linear',
     queue: false,
    }
  });

  $('#nav a').click(function(){
    var selector = $(this).attr('data-filter');
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
