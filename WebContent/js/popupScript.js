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