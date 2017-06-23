	$(document).ready(function() {
		$.ajax({
			url: '/data/cars.json',
			data: {
				format: 'json'
			},
			error: function() {
				$('#info').html('<p>An error has occurred</p>');
			},
			dataType: 'json',
			success: function(data) {
				var $title = $('<h1>').text(data.format['A4'][1].price);
				var $description = $('<p>').text(data.message);
				$('#info')
				.append($title)
				.append($description);
				console.log(data)
			},
			type: 'GET',
			cache: false
		});
		});