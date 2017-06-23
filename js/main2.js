	"use strict";
	$(document).ready(function() {

		$.getJSON('/data/cars.json', function(data) {

			$('#a4-bw-price').append(data.format['A4'][1].price);   // 1
			$('#a4-col-price').append(data.format['A4'][0].price); 
			$('#a3-bw-price').append(data.format['A3'][1].price);
			$('#a3-col-price').append(data.format['A3'][0].price);
			
   
			
				console.log(data);
				
		});

	});