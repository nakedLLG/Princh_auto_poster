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

				//$('#a4-bw-price').append(data.user.printer.format['A4'][1].price +' '+ data.user.curency);
				//$('#a4-col-price').append(data.user.printer.format['A4'][0].price +' '+ data.user.curency);
				//$('#a3-bw-price').append(data.user.printer.format['A3'][1].price +' '+ data.user.curency);
				//$('#a3-col-price').append(data.user.printer.format['A3'][0].price +' '+ data.user.curency);
				//$('#printer-id').append(data.user.printer.id);
				//$('#message').append("<p>" + data.user.printer.message + "</p>");
				//$('#qrcode').qrcode(data.user.printer.id);
				//$('#hello').append('Hello ' + data.user.name);
				//$('#bottom-section').append('<img id ="user-pic" src= "' + data.user.image.url + '">');

			});
			//console.log(data);
		},
		type: 'GET',
		cache: false
	});


// Reading file upload and outputs on poster 

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#user-pic').attr('src', e.target.result)
            $('#user-pic-modal').attr('src', e.target.result)
        }

        reader.readAsDataURL(input.files[0]);
    }
}
//Set max width and height for user logo upload on poster and modal
$('#user-pic').load(function(e) {

    $(this)
    .css('max-width', '300px')
    .css('max-height', '100px')

    .show();    
}).hide();
$('#user-pic-modal').load(function(e) {

    $(this)
    .css('max-width', '85px')
    .css('max-height', '22px')
    .show();    
}).hide();   

$("#logoimg").change(function(){
    readURL(this);
});




// Attach an event for when the user submits the form
$("#myForm").on('submit', function(event) {

        // Prevent the page from reloading
        event.preventDefault();

        // Set the text-output span to the value of each form inputs
        var $input = $(this).find('#a4-col-price-input');
        var input = $input.val();
        $('#a4-col-price').text(input);

        var $input2 = $(this).find('#a4-bw-price-input');
        var input2 = $input2.val();
        $('#a4-bw-price').text(input2);

        var $input3 = $(this).find('#a3-col-price-input');
        var input3 = $input3.val();
        $('#a3-col-price').text(input3);

        var $input4 = $(this).find('#a3-bw-price-input');
        var input4 = $input4.val();
        $('#a3-bw-price').text(input4);

        var $input5 = $(this).find('#message-box');
        var input5 = $input5.val();
        $('#message').text(input5);

        var $input6 = $(this).find('#qrcode-id');
        var input6 = $input6.val();
        $('#printer-id').text(input6);
        $('#qrcode').qrcode(input6);
        
        // appending currency on poster
        var $input1 = $(this).find('#myselect');
        var input1 = $input1.val();
        $('#a4-col-price, #a4-bw-price, #a3-col-price, #a3-bw-price').append(' '+input1);
        //$('#success').text(Success!);
        var modalBody = document.getElementsByClassName('modal-body');
        var successBtn = document.getElementById('success');
        var myBtn = document.getElementById('mybutton');
        
        myBtn.style.display = "none";

        successBtn.style.display = "inline";
        setTimeout(function() {
           window.print();
       }, 4000);
        

    });

// Get modal pop-up element
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var myBtn = document.getElementById('mybutton');

// When the user loads the document, open the modal after half-second second
$(document).ready(function() {
    setTimeout(function() {
     modal.style.display = "block";
 }, 0);
});

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
 //   modal.style.display = "none";
//}
//function myFunction() {
//    var x = $("#myText").value;
//    $("#demo").text = x;
//}
// When user clicks submit modal closes
//myBtn.onclick = function() {
//	myBtn.style.display = "none";
//}
// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//	if (event.target == modal) {
//		modal.style.display = "none";
//	}
//}

});