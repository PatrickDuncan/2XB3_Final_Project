var csv;
var row;

/**
 * The initial loading in of the data set.
 * The data set is split into 6 parts. The funciton loads in the first one
 * and displays it. Then it loads in the other 5 in the background. This
 * decreases the idle time of the user from 10 seconds to 1.5 seconds.
 */
function initial() {
	var initial = "assets/Consumer_Complaints0.csv";
	row = 0;
	$.get(initial, function(data) {
		// Break up the first part of the dataset into thousands of arrays
		csv = Papa.parse(data);
		display();
	});
	// Only start loading the other data sets once the first is loaded and displayed
	setTimeout(function wait() {
		for (var j = 1; j < 6; j++) {
			$.get("assets/Consumer_Complaints" + j + ".csv", function(data) {
				var temp = Papa.parse(data);
				for (var k = 0; k < temp.data.length; k++)
					csv.data.push(temp.data[k]);
			});
		}
	}, 2000);

}

/**
 * Display the next 500 entries from the row index in a table.
 * Each entry will have a link that can trigger a modal window to appear
 */
function display() {
	var display = "";
	// The headings of the table
	display += "<thread>" + "<tr id='head'>" + "<th><span class='text'>"
			+ "Date Received" + "</span></th>" + "<th><span class='text'>"
			+ "Product" + "</span></th>" + "<th><span class='text'>" + "Issue"
			+ "</span></th>" + "<th><span class='text'>" + "Sub-Issue"
			+ "</span></th>" + "<th><span class='text'>" + "Company"
			+ "</span></th>" + "<th><span class='text'>" + "State"
			+ "</span></th>" + "</tr>" + "</thread>";
	display += "<tbody>";
	// If its not at the end of the table, loop through row to row+500 (inclusive) 
	// and add a new entry to the table from the csv.data array.
	if (row < csv.data.length - 500) {
		for (var i = row; i < row + 501; i++) {
			display += "<tr id='entry'>" + "<td><a onclick='pop(" + i + ")'" +
					" href='#'data-toggle='modal' data-target='.popup'>"
					 + csv.data[i][0] + "</a></td>"
					 
					+ "<td><a onclick='pop(" + i + ")' href='#'data-toggle='modal'" +
							" data-target='.popup'>" + csv.data[i][1] + "</a></td>"
							
					+ "<td><a onclick='pop(" + i + ")' href='#'data-toggle='modal'" +
							" data-target='.popup'>" + csv.data[i][3] + "</a></td>" 
							
					+ "<td><a onclick='pop(" + i + ")' " + "href='#'data-toggle='modal'" +
							" data-target='.popup'>" + csv.data[i][4] + "</a></td>"
					
					+ "<td><a onclick='pop(" + i + ")' href='#'data-toggle='modal'" +
							" data-target='.popup'>" + csv.data[i][7] + "</a></td>" 
					
					+ "<td><a onclick='pop(" + i + ")' href='#'data-toggle='modal'" +
							" data-target='.popup'>" + csv.data[i][8] + "</a></td>" + "</tr>";
		}
	} 
	// If its at the end of the table, loop through row to csv.data length (exclusive) 
	// and add a new entry to the table from the csv.data array.
	else {
		for (var i = row; i < csv.data.length; i++) {
			display += "<tr id='entry'><td><a onclick='pop(" + i + ")'" +
					" href='#'data-toggle='modal' data-target='.popup'>" + csv.data[i][0] + "</a></td>"
					
					+ "<td><a onclick='pop(" + i + ")' href='#'data-toggle='modal'" +
							" data-target='.popup'>" + csv.data[i][1] + "</a></td>"
							
					+ "<td><a onclick='pop(" + i + ")' href='#'data-toggle='modal'" +
							" data-target='.popup'>" + csv.data[i][3] + "</a></td>" 
					
					+ "<td><a onclick='pop(" + i + ")' " + "href='#'data-toggle='modal'" +
							" data-target='.popup'>" + csv.data[i][4] + "</a></td>"
							
					+ "<td><a onclick='pop(" + i + ")' href='#'data-toggle='modal'" +
							" data-target='.popup'>" + csv.data[i][7] + "</a></td>"
							
					+ "<td><a onclick='pop(" + i + ")' href='#'data-toggle='modal'" +
							" data-target='.popup'>" + csv.data[i][8] + "</a></td>" + "</tr>";
		}
	}
	display += "</tbody>";
	document.getElementById("entries").innerHTML = display;
	document.getElementById("loading").style.display = "none";
	document.getElementById("sorting").style.display = "none";
	document.getElementById("searching").style.display = "none";
}

/**
 * Set the row index to display the next page of entries
 * 
 * @param next if going to te previous or next page
 */
function step(next) {
	if (next) {
		if (row < csv.data.length - 500) {
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

window.onload = initial;