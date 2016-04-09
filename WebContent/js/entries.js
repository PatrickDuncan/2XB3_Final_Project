var csv;
var row;

/**
 * The initial loading in other the data set.
 */
function initial() {
	var initial = "assets/Consumer_Complaints0.csv";
	row = 0;
	$.get(initial, function(data) {
		csv = Papa.parse(data);
		display();
	});
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
 * Display the next 500 entries from the row index in a table
 */
function display() {
	var display = "";
	display += "<thread>" + "<tr id='head'>" + "<th><span class='text'>"
			+ "Date Received" + "</span></th>" + "<th><span class='text'>"
			+ "Product" + "</span></th>" + "<th><span class='text'>" + "Issue"
			+ "</span></th>" + "<th><span class='text'>" + "Sub-Issue"
			+ "</span></th>" + "<th><span class='text'>" + "Company"
			+ "</span></th>" + "<th><span class='text'>" + "State"
			+ "</span></th>" + "</tr>" + "</thread>";
	display += "<tbody>";
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
	} else {
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
	document.getElementById("searching").style.display = "none";
}

/**
 * Creates the content of the popup window when you press an entry
 * 
 * @param i the index of the entry
 */
function pop(i) {
	var display="<h1><b>" + csv.data[i][7] + "</b><br>" + "</h1>";
	display += "<h2>" + csv.data[i][0] + "</h2>";
	display += "<h2><b>" + csv.data[i][1]  + "</b>" + "</h2>";
	display += '<h3><b>Consumer Response: "' + csv.data[i][5] + '"</b></h3>';
	display += '<h3><b>Company Response: "' + csv.data[i][6] + '"</b></h3><br>';
	display += '<h4>State: ' + csv.data[i][8] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
			"Zip Code: " + csv.data[i][9] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
			"Timely Response: " + csv.data[i][15] + "</h4>";
	document.getElementById("work").innerHTML = display;
}

/**
 * Sort the array by the x column
 * 
 * @param x either 0,1,3,4,7,8 i.e. which column to sort by
 */
function sort(x) {
	i = x;
	document.getElementById("loading").style.display = "block";
	if (document.getElementById("min").checked) {
		if (i == 0) { // If sorting the date
			setTimeout(function wait() {
				csv.data.sort(function(a, b) {
					var m = a[i].split("/");
					var n = b[i].split("/");
					// At 2 is the year in the date
					return m[2].localeCompare(n[2]);
				});
				display();
			}, 0);
		} else {
			setTimeout(function wait() {
				csv.data.sort(function(a, b) {
					return a[i].localeCompare(b[i]);
				});
				display();
			}, 0);
		}
	} else if (document.getElementById("max").checked) {
		if (i == 0) { // If sorting the date
			setTimeout(function wait() {
				csv.data.sort(function(a, b) {
					var m = a[i].split("/");
					var n = b[i].split("/");
					// At 2 is the year in the date
					return n[2].localeCompare(m[2]);
				});
				display();
			}, 0);
		} else {
			setTimeout(function wait() {
				csv.data.sort(function(a, b) {
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
/**
 * Searches for the keyword in the search bar.
 * It searches the current page for the keyword and if its not found
 * it goes through the other pages until it hits the length of the
 * csv object then it starts from the beginning up until the
 * starting point. If nothing is found nothing happens.
 */
function search() {
	document.getElementById("searching").style.display = "block";
	var keyword = document.getElementById("find").value;
	var i=-1;
	if (document.getElementById("zero").checked)
		i = 1;
	else if (document.getElementById("one").checked)
		i = 3;
	else if (document.getElementById("two").checked)
		i = 7;
	else if (document.getElementById("three").checked)
		i = 8;
	var found = false;
	setTimeout(function wait() {
		for (var j = row; j < csv.data.length; j++) {
			var m = csv.data[j][i].toLowerCase();
			var n = keyword.toLowerCase();
			if (m.indexOf(n) > -1) {
				row = j;
				found = true;
				break;
			}
		}
		if (!found) {
			for (var j = 0; j < row; j++) {
				var m = csv.data[j][i].toLowerCase();
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