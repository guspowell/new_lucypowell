var $newItems = $('#temp-load > #grid').children();
var $container = $('#grid');
$container.isotope( 'insert', $newItems);

$('#temp-load').remove();
