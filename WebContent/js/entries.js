var csvdata;

function initial() {
	var csv = "assets/Consumer_Complaints.csv";
	$.get(csv, function(data) {
		csvdata = Papa.parse(data);
		display();
	});
}

function display() {
	//console.log(csvdata.data);
	var display = "";
	display += "<thread>" + "<tr id='head'>" + "<th><span class='text'>"
			+ "Date Received" + "</span></th>" + "<th><span class='text'>"
			+ "Product" + "</span></th>" + "<th><span class='text'>" + "Issue"
			+ "</span></th>" + "<th><span class='text'>" + "Sub-Issue"
			+ "</span></th>" + "<th><span class='text'>" + "Company"
			+ "</span></th>" + "<th><span class='text'>" + "State"
			+ "</span></th>" + "</tr>" + "</thread>";
	display += "<tbody>";
	for (var i = 1; i < 500; i++) {
		display += "<tr id='shift'>" + "<td>" + csvdata.data[i][0] + "</td>"
				+ "<td>" + csvdata.data[i][1] + "</td>" + "<td>"
				+ csvdata.data[i][3] + "</td>" + "<td>" + csvdata.data[i][4]
				+ "</td>" + "<td>" + csvdata.data[i][7] + "</td>" + "<td>"
				+ csvdata.data[i][8] + "</td>" + "</tr>";
	}
	display += "</tbody>";
	document.getElementById("entries").innerHTML = display;
	document.getElementById("loading").style.display = "none";
}

var i;
function sort(x) {
	i = x;
	document.getElementById("loading").style.display = "block";
	if (document.getElementById("zero").checked) {
		setTimeout(function wait() {
			csvdata.data.sort(function(a, b) {
				return a[i].localeCompare(b[i]);
			});
			display();
		}, 0);
	}
	else if (document.getElementById("one").checked) {
		setTimeout(function wait() {
			csvdata.data.sort(function(a, b) {
				return b[i].localeCompare(a[i]);
			});
			display();
		}, 0);
	}
}

window.onload = initial;