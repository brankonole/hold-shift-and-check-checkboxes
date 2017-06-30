(function(){
	var $inputCheck = $('.js-item-checkbox');

	$inputCheck.on('click', function (e) {
		var $this = $(this);

		if (e.shiftKey === true) {
			if ($this.is(':checked')) {
				$inputCheck.prop("checked", true);
			} else {
				$inputCheck.prop("checked", false);
			}			
		}
	});
}());