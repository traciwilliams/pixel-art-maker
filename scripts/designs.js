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

// Select color input
//var colorPicker = document.getElementById("colorPicker").value;
// Select size input
//var gridHeight = document.getElementById("input_height").value;
//var gridWidth = document.getElementById("input_width").value;
//var tableBody = "";
// When size is submitted by the user, call makeGrid()

function makeGrid() {

	let gridHeight = document.getElementById('input_height').value;
	let gridWidth = document.getElementById('input_width').value;
	let tableHeader = '<table border="1">\n';
	let tableBody = '';
	

	let colorPicker = document.getElementById('colorPicker').value;

	for (var i = 0; i < gridHeight; i++) {
		
		tableBody += '<tr>';
		for (var j = 0; j < gridWidth; j++) {
			tableBody += '<td>'; 
			tableBody += 'Cell' + i + ',' + j;
			tableBody += '</td>';
		}
		tableBody += '</tr>\n';
	}
	let tableFooter = '</table>';
	document.getElementById('pixel_canvas').innerHTML = tableHeader + tableBody + tableFooter;
};