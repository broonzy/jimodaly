	// This form blur taken from http://codecompendium.com/archives/video-tutorials/web-form-hint-text-using-jquery/
$(document).ready(function() {
	var originalVal = null;
	$('input:not(input[type=submit]), textarea').each(function() {       
		$(this).focus(function() {
			originalVal = $(this).val();
			if($(this).val() === originalVal) {
				$(this).val('');
			}
		})
		.blur(function() {
			if($(this).val() === '') {
				$(this).val(originalVal);	
			}
		});
    });		
});	
