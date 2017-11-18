

//function to create the grid based on the user's input for height and width

function makeGrid() {

	let gridHeight = document.getElementById('input_height').value;
	let gridWidth = document.getElementById('input_width').value;
	let tableBegin = '<table border="1">\n';
	let tableBody = '';
	

	for (let i = 0; i < gridHeight; i++) {
		
		tableBody += '<tr>';
		for (let j = 0; j < gridWidth; j++) {
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

//function to delete entire grid
function deleteGrid() {
	document.getElementById('pixel_canvas').innerHTML = '';

};








