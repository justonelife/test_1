$(document).ready(function() {

	$('#menu_btn').on('click', function() {


		let $menu = $('.nav__menu');

		if ($menu.css('right') != '0px') {


			$menu.css('right', '0');

			$('.ham-btn__stick:first-child').css({
				'transform': 'rotate(45deg)'
			});

			$('.ham-btn__stick:nth-child(2)').css({
				'transform': 'rotate(-45deg)',
				'top': '0'
			});
		}
		else {

			$menu.css('right', '100%');

			$('.ham-btn__stick:first-child').css({
				'transform': 'rotate(0deg)'
			});

			$('.ham-btn__stick:nth-child(2)').css({
				'transform': 'rotate(0deg) translateY(-50%)',
				'top': '50%'
			});
		}

	});

});