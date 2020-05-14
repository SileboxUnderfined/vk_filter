//let changeColor = document.getElementById('changeColor');
//
//chrome.storage.sync.get('color', function(data) {
//	changeColor.style.backgroundColor = data.color;
//	changeColor.setAttribute('value', data.color);
//});
document.getElementById("create-file").addEventListener("click", function(){
	let formelement = document.getElementById("getkeywords");
	formelement.style.display = "block";
});



document.querySelector("#inputfile").addEventListener('change', function() {
	if(document.querySelector("#inputfile").files.length == 0) {
		console.log('Error : No file selected');
		return;
	}

	// first file selected by user
	var file = document.querySelector("#inputfile").files[0];

	// perform validation on file type & size if required

	// read the file
	var reader = new FileReader();

	// file reading started
	reader.addEventListener('loadstart', function() {
		console.log('File reading started');
	});

	// file reading finished successfully
	reader.addEventListener('load', function(e) {
		// contents of file in variable     
		var text = e.target.result;

		console.log(text);
		let ftext = text.split(',');
		console.log(ftext);
	});

	// file reading failed
	reader.addEventListener('error', function() {
		alert('Error : Failed to read file');
	});

	// file read progress 
	reader.addEventListener('progress', function(e) {
		if(e.lengthComputable == true) {
			var percent_read = Math.floor((e.loaded/e.total)*100);
			console.log(percent_read + '% read');
		}
	});

	// read as text file
	reader.readAsText(file);		
});