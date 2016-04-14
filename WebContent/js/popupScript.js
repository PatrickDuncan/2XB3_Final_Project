/**
 * Creates the content of the popup window when you press an entry
 * 
 * @param i the index of the entry
 */
function pop(i) {
	var display = "<h1><b>" + csv.data[i][7] + "</b><br>" + "</h1>";
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
 * Changes the modal's content to display the graphing solution.
 * @param categories 2D array to hold all categories of services
 */
function graphPop(categories) {
	//set of variables to hold count of elements in each category
	var mortgageCount = categories[0].length;
	var debtCount = categories[1].length;
	var creditcardCount = categories[2].length;
	var studentloanCount = categories[3].length;
	var bankserviceCount = categories[4].length;
	var creditreportCount = categories[5].length;
	var moneytransfCount = categories[6].length;
	var consumerloanCount = categories[7].length;
	var paydayCount = categories[8].length;
	var prepaidCount = categories[9].length;
	var otherCount = categories[10].length;
	
	var display = "<h1><b>Number of Complaints</b><br></h1>";
	display += "<h3>Mortgage: " + mortgageCount + "</h3>";
	display += "<h3>Debt: " + debtCount + "</h3>";
	display += "<h3>Credit Card: " + creditreportCount + "</h3>";
	display += "<h3>Student Loan: " + studentloanCount + "</h3>";
	display += "<h3>Bank Service: " + bankserviceCount + "</h3>";
	display += "<h3>Credit Report: " + creditreportCount + "</h3>";
	display += "<h3>Money Transfer: " + moneytransfCount + "</h3>";
	display += "<h3>Consumer Loan: " + consumerloanCount + "</h3>";
	display += "<h3>Payday: " + paydayCount + "</h3>";
	display += "<h3>Prepaid: " + prepaidCount + "</h3>";
	display += "<h3>Other: " + otherCount + "</h3>";

	document.getElementById("work").innerHTML = display;
}