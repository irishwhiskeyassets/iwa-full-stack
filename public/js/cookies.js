$(document).ready(function() {
	var key = localStorage.getItem('key');
	if (!key) {
		$('#cookie-popup').css('display', 'block');
	};
});


function acceptCookies(){
	localStorage.setItem('key', true);
	$('#cookie-popup').css('display', 'none');
}




