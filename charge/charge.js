
(function ($) {

Drupal.behaviors.chargelogFieldsetSummaries = {
	attach: function (context) {
		$('fieldset#edit-user', context).drupalSetSummary(function (context) {
			var searchUserStudentID = $('.form-item-idcard-num input', context).val();
			var searchUserRealName = $('.form-item-username input', context).val();
			
			if(searchUserStudentID=="" && searchUserRealName=='')
				return Drupal.t('List orders of all users');
			else
				return Drupal.t('Search orders related to @uid @name', { '@uid': searchUserStudentID, '@name': searchUserRealName});
		});

		$('fieldset#edit-orders', context).drupalSetSummary(function (context) {
			var searchOrderNumber = $('.form-item-orderno input', context).val();
			var searchOrderStatus = $('.form-item-orderstatus select', context).val();
			var a = Drupal.t('All'); a = Drupal.t('any order number'); a = Drupal.t('All date'); a = Drupal.t('All gateways');
			
			return Drupal.t('List @status orders with @orderno', {
				'@status': (searchOrderStatus==-1 ? '': $('.form-item-orderstatus select option:selected', context).text()),
				'@orderno': (searchOrderNumber=='' ? Drupal.t('any order number') : searchOrderNumber)
			});
		});
	}
};

})(jQuery);

(function ($) {
Drupal.behaviors.setfailListener = {
	attach: function () {
		var which;
		$("#onlinecharge-log-form input").click(function () {
		    which = $(this).attr("name");
		});
		$("#onlinecharge-log-form").submit(function () {
			if(which.match("^setfail"))
				return window.confirm(Drupal.t("Use this feature will refresh the order number. Only do this AFTER relative operations was done in payment gateway.")+"\n\n"+Drupal.t("Are you sure?"));
			else return true;
		});
	}
};
})(jQuery);

(function($) {
	$(document).ready(function() {
		jQuery("#onlinecharge-user-orders input[type=hidden][name=screenwidth]").val(window.screen.width);
	});
}(jQuery));
