	// When document ready, load requests and modal pop up
	$(document).ready(function() {

		// Get Json user-printer data and append in DOM
		$.ajax({
			url: '/data/user-with-printer.json',
			data: {
				format: 'json'
			},
			error: function() {
				alert('An error has occurred');
			},
			dataType: 'json',
			success: function(data) {

				$.each(data, function(key, value) {

					$('#a4-bw-price').append(data.user.printer.format['A4'][1].price +' '+ data.user.curency);
					$('#a4-col-price').append(data.user.printer.format['A4'][0].price +' '+ data.user.curency);
					$('#a3-bw-price').append(data.user.printer.format['A3'][1].price +' '+ data.user.curency);
					$('#a3-col-price').append(data.user.printer.format['A3'][0].price +' '+ data.user.curency);
					$('#printer-id').append(data.user.printer.id);
					$('#message').append("<p>" + data.user.printer.message + "</p>");
					$('#qrcode').qrcode(data.user.printer.id);
					$('#hello').append('Hello ' + data.user.name);
					$('#bottom-section').append('<img id ="user-pic" src= "' + data.user.image.url + '">');

				});
				console.log(data);
			},
			type: 'GET',
			cache: false
		});

// Get modal pop-up element
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user loads the document, open the modal after 2 seconds
$(document).ready(function() {
	setTimeout(function() {
		modal.style.display = "block";
	}, 500);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

});
	