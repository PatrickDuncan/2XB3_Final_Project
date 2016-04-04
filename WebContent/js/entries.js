var csvdata;
var i;
var row;
function initial() {
	var csv = "assets/Consumer_Complaints.csv";
	row = 0;
	$.get(csv, function(data) {
		csvdata = Papa.parse(data);
		display();
	});
}
/**
 * Display the next 500 entries from the row index in a table
 */
function display() {
	// console.log(csvdata.data);
	var display = "";
	display += "<thread>" + "<tr id='head'>" + "<th><span class='text'>"
			+ "Date Received" + "</span></th>" + "<th><span class='text'>"
			+ "Product" + "</span></th>" + "<th><span class='text'>" + "Issue"
			+ "</span></th>" + "<th><span class='text'>" + "Sub-Issue"
			+ "</span></th>" + "<th><span class='text'>" + "Company"
			+ "</span></th>" + "<th><span class='text'>" + "State"
			+ "</span></th>" + "</tr>" + "</thread>";
	display += "<tbody>";
	if (row < csvdata.data.length - 500) {
		for (var i = row; i < row + 501; i++) {
			display += "<tr id='shift'>" + "<td>" + csvdata.data[i][0]
					+ "</td>" + "<td>" + csvdata.data[i][1] + "</td>" + "<td>"
					+ csvdata.data[i][3] + "</td>" + "<td>"
					+ csvdata.data[i][4] + "</td>" + "<td>"
					+ csvdata.data[i][7] + "</td>" + "<td>"
					+ csvdata.data[i][8] + "</td>" + "</tr>";
		}
	} else {
		for (var i = row; i < csvdata.data.length; i++) {
			display += "<tr id='shift'>" + "<td>" + csvdata.data[i][0]
					+ "</td>" + "<td>" + csvdata.data[i][1] + "</td>" + "<td>"
					+ csvdata.data[i][3] + "</td>" + "<td>"
					+ csvdata.data[i][4] + "</td>" + "<td>"
					+ csvdata.data[i][7] + "</td>" + "<td>"
					+ csvdata.data[i][8] + "</td>" + "</tr>";
		}
	}
	display += "</tbody>";
	document.getElementById("entries").innerHTML = display;
	document.getElementById("loading").style.display = "none";
	document.getElementById("searching").style.display = "none";
}
/**
 * Sort the array by the x column
 * @param x either 0,1,3,4,7,8 i.e. which column to sort by
 */
function sort(x) {
	i = x;
	document.getElementById("loading").style.display = "block";
	if (document.getElementById("zero").checked) {
		if (i == 0) { // If sorting the date
			setTimeout(function wait() {
				csvdata.data.sort(function(a, b) {
					var m = a[i].split("/");
					var n = b[i].split("/");
					// At 2 is the year in the date
					return m[2].localeCompare(n[2]);
				});
				display();
			}, 0);
		} else {
			setTimeout(function wait() {
				csvdata.data.sort(function(a, b) {
					return a[i].localeCompare(b[i]);
				});
				display();
			}, 0);
		}
	} else if (document.getElementById("one").checked) {
		if (i == 0) { // If sorting the date
			setTimeout(function wait() {
				csvdata.data.sort(function(a, b) {
					var m = a[i].split("/");
					var n = b[i].split("/");
					// At 2 is the year in the date
					return n[2].localeCompare(m[2]);
				});
				display();
			}, 0);
		} else {
			setTimeout(function wait() {
				csvdata.data.sort(function(a, b) {
					return b[i].localeCompare(a[i]);
				});
				display();
			}, 0);
		}
	}
	row = 1;
}
/**
 * Set the row index to display the next page of entries
 * @param next
 */
function step(next) {
	if (next) {
		if (row < csvdata.data.length - 500) {
			row = row + 500;
			display();
		}
	} else {
		if (row > 500) {
			row = row - 500;
			display();
		}
	}
}

var keyword;
function searchC() {
	document.getElementById("searching").style.display = "block";
	keyword = document.getElementById("findC").value;
	var found = false;
	setTimeout(function wait() {
		for (var j=row; j<csvdata.data.length; j++) {
			var m = csvdata.data[j][7].toLowerCase();
			var n = keyword.toLowerCase();
			if (m.indexOf(n) > -1) {
				row = j;
				found = true;
				break;
			}
		}
		if (!found) {
			for (var j=0; j<row; j++) {
				var m = csvdata.data[j][7].toLowerCase();
				var n = keyword.toLowerCase();
				if (m.indexOf(n) > -1) {
					row = j;
					break;
				}
			}
		}
		display();
	}, 0);
}

function searchP() {
	document.getElementById("searching").style.display = "block";
	keyword = document.getElementById("findP").value;
	var found = false;
	setTimeout(function wait() {
		for (var j=row; j<csvdata.data.length; j++) {
			var m = csvdata.data[j][1].toLowerCase();
			var n = keyword.toLowerCase();
			if (m.indexOf(n) > -1) {
				row = j;
				found = true;
				break;
			}
		}
		if (!found) {
			for (var j=0; j<row; j++) {
				var m = csvdata.data[j][1].toLowerCase();
				var n = keyword.toLowerCase();
				if (m.indexOf(n) > -1) {
					row = j;
					break;
				}
			}
		}
		display();
	}, 0);
}

window.onload = initial;