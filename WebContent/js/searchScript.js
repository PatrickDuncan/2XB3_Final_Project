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
	// setTimeout allows the Searching. . . text to appear properly
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