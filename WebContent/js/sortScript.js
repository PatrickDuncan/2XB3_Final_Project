/**
 * Sort the array by the x column
 * 
 * @param x either 0,1,3,7,8 i.e. which column to sort by
 */
function sort(x) {
	document.getElementById("sorting").style.display = "block";
	if (document.getElementById("min").checked) {
		// If sorting the date
		if (x == 0) { 
			setTimeout(function wait() {
				csv.data.sort(function(a, b) {
					// Split into day, month, and year
					var m = a[0].split("/");
					var n = b[0].split("/");
					// At 2 is the year in the date
					return m[2].localeCompare(n[2]);
				});
				display();
			}, 0);
		} else {
			setTimeout(function wait() {
				csv.data.sort(function(a, b) {
					return a[x].localeCompare(b[x]);
				});
				display();
			}, 0);
		}
	} else if (document.getElementById("max").checked) {
		// If sorting the date
		if (x == 0) {
			setTimeout(function wait() {
				csv.data.sort(function(a, b) {
					// Split into day, month, and year
					var m = a[0].split("/");
					var n = b[0].split("/");
					// At 2 is the year in the date
					return n[2].localeCompare(m[2]);
				});
				display();
			}, 0);
		} else {
			setTimeout(function wait() {
				csv.data.sort(function(a, b) {
					return b[x].localeCompare(a[x]);
				});
				display();
			}, 0);
		}
	}
	row = 1;	// Current is now the beginning of the array
}