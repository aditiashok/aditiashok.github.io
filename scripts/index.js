$(document).ready(function() {
				$('#slideshow').cycle({
				fx: 'fade',
				pager: '#smallnav',
				prev:   '#backButton',
    	next:   '#forwardButton', 
				pause:   0.5,
				speed: 1800,
				timeout:  3500
			});
		});
