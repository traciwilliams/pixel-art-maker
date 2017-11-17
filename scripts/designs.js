


//function to make grid
function makeGrid() {

	const gridHeight = document.getElementById('input_height').value;
	const gridWidth = document.getElementById('input_width').value;
	const tableBegin = '<table border="1">\n';
	const tableBody = '';
	

	for (let i = 0; i < gridHeight; i++) {
		
		tableBody += '<tr>';
		for (let j = 0; j < gridWidth; j++) {
			tableBody += '<td class="clicked">'; 
			tableBody += '</td>';
		}
		tableBody += '</tr>\n';
	}
	const tableEnd = '</table>';
	document.getElementById('pixel_canvas').innerHTML = tableBegin + tableBody + tableEnd;

	const colorPicker = document.getElementById('colorPicker');

	$('#pixel_canvas').on("click", 'td', function() {
	    $(this).css("background-color", function() {
	    	return colorPicker.value;
	    })
	})
};

//function to reset the grid
function resetGrid() {
	document.getElementById('pixel_canvas').innerHTML = '';

};








