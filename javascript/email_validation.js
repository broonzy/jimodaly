$(document).ready( function() {
	$('#emailForm').submit( function() {
		if( !isEmail( this.email.value ) ) {
			$('#email').css('background-color','#f7bebe');
			$('#emailTip').toggle(1000);
			return false;
		}
	});
});

function isEmail(string)
{
	// A variable containing a regular expression representing an email address
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

	if (emailPattern.test(string))
	{
		return true;
	}
	else 
	{
		return false; // Stops form details from being submitted
	}
}