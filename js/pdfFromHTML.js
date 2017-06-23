
function pdfToHTML(){

var pdf = new jsPDF('p', 'pt', 'a4')
source = $('#pdf2htmldiv')[0];
 
myTable = $('#myTable')[0];
pdf.setTextColor(0, 158, 212, 1);
pdf.setFont("helvetica");
specialElementHandlers = {
	'#bypassme': function(element, renderer){
		return true
	}
}
margins = {
    top: 0,
    left: 0,
    width: 522
  };
 

pdf.fromHTML(
  	source // HTML string or DOM elem ref.
  	, margins.left // x coord
  	, margins.top
     // y coord
  	, {
  		'width': margins.width // max width of content on PDF
  		, 'elementHandlers': specialElementHandlers
  	},
  	function (dispose) {
  	  // dispose: object with X, Y of the last line add to the PDF
  	  //          this allow the insertion of new lines after html
        pdf.save('PrinchPoster.pdf');
      }
  )		

}


