//Heavily modified from: http://stackoverflow.com/questions/9709209/html-select-only-one-checkbox-in-a-group
$("input:checkbox").on('click', function() {
	var $box = $(this);
	if ($box.is(":checked")) {
		var group = "input:checkbox[name='" + $box.attr("name") + "']";
		$(group).prop("checked", false);
		$box.prop("checked", true);
		if ($box.attr("name") == "minMax") {
			var label = document.getElementById("optionsLabel");
			if (label.innerHTML == 'A - Z <span class="caret"></span>')
				label.innerHTML = 'Z - A <span class="caret"></span>';
			else
				label.innerHTML = 'A - Z <span class="caret"></span>';
		} else if ($box.attr("name") == "sorting") {
			var id = $box.attr("id");
			var label = document.getElementById("optionsLabel2");
			var searchBar = document.getElementById("find");
			if (id == "zero") {
				label.innerHTML = 'Company <span class="caret"></span>';
				searchBar.placeholder = "Search for Company...";
			} else if (id == "one") {
				label.innerHTML = 'Issue <span class="caret"></span>';
				searchBar.placeholder = "Search for Issue...";
			} else if (id == "two") {
				label.innerHTML = 'Product <span class="caret"></span>';
				searchBar.placeholder = "Search for Product...";
			} else if (id == "three") {
				label.innerHTML = 'State <span class="caret"></span>';
				searchBar.placeholder = "Search for State...";
			}
		}
	} else
		$box.prop("checked", true);
});