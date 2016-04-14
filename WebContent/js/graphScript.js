var categories = new Array(11);

/**
 * the function has no parameters; it reads csv.data and parses entries that are in that 
 * array into another 2d array named "categories" based on what the value of 
 * csv.data[row#][1] is, which is essentially the type of service
 */
function graphing() {	
	//construct 2d array to hold all categories of services
	for (var i = 0; i < 11; i++) {
		categories[i] = [];
	}
	//read csv.data and append into 2d array based on what category of service it falls under
	for (var j = 0; j < csv.data.length; j++) {
		if (csv.data[j][1] == "Mortgage") {
			categories[0].push(csv.data[j]);
		} else if (csv.data[j][1] == "Debt collection") {
			categories[1].push(csv.data[j]);
		} else if (csv.data[j][1] == "Credit card") {
			categories[2].push(csv.data[j]);
		} else if (csv.data[j][1] == "Student loan") {
			categories[3].push(csv.data[j]);
		} else if (csv.data[j][1] == "Bank account or service") {
			categories[4].push(csv.data[j]);
		} else if (csv.data[j][1] == "Credit reporting") {
			categories[5].push(csv.data[j]);
		} else if (csv.data[j][1] == "Money transfers") {
			categories[6].push(csv.data[j]);
		} else if (csv.data[j][1] == "Consumer loan") {
			categories[7].push(csv.data[j]);
		} else if (csv.data[j][1] == "Payday loan") {
			categories[8].push(csv.data[j]);
		} else if (csv.data[j][1] == "Prepaid loan") {
			categories[9].push(csv.data[j]);
		} else {
			categories[10].push(csv.data[j]);
		}
	}
	setTimeout(function wait() {
		graphPop(categories);
	}, 2000);
}


