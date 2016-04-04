//http://stackoverflow.com/questions/9709209/html-select-only-one-checkbox-in-a-group
$("input:checkbox").on('click', function() {
	var $box = $(this);
	if ($box.is(":checked")) {
		var group = "input:checkbox[name='" + $box.attr("name") + "']";
		$(group).prop("checked", false);
		$box.prop("checked", true);
		var label = document.getElementById("optionsLabel");
		if (label.innerHTML == 'A - Z <span class="caret"></span>') {
			label.innerHTML = 'Z - A <span class="caret"></span>';
		} else {
			label.innerHTML = 'A - Z <span class="caret"></span>';
		}
	}
	else {
		$box.prop("checked", true);
	}
});