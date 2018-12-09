$(document).ready(function(){
	$('#main-nav-toggle').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parent().toggleClass('active');
	});
});