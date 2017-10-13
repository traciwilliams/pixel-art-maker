//testing to make sure files are connected
/*window.onload = function(){
	console.log("JS is working")
};


$(document).ready(function(){
	$('body').on('click', function(){
		$(this).toggleClass('clicked');
		console.log('clicked');
	});
});
*/



function makeGrid() {

	let gridHeight = document.getElementById('input_height').value;
	let gridWidth = document.getElementById('input_width').value;
	let tableBegin = '<table border="1">\n';
	let tableBody = '';
	

	for (var i = 0; i < gridHeight; i++) {
		
		tableBody += '<tr>';
		for (var j = 0; j < gridWidth; j++) {
			tableBody += '<td class="clicked">'; 
			//tableBody += 'Cell' + i + ',' + j;
			tableBody += '</td>';
		}
		tableBody += '</tr>\n';
	}
	let tableEnd = '</table>';
	document.getElementById('pixel_canvas').innerHTML = tableBegin + tableBody + tableEnd;

	let colorPicker = document.getElementById('colorPicker');

	$('#pixel_canvas').on("click", 'td', function() {
	    $(this).css("background-color", function() {
	    	return colorPicker.value;
	    })
	})
};

function resetGrid() {
	document.getElementById('pixel_canvas').innerHTML = '';

};








