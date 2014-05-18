$(document).ready( function() {
	$('#emailForm').submit( function() {
		if( !isfirstname( this.firstname.value ) ) {
			$('#firstname').css('background-color','#f7bebe');
			$('#firstnameTip').toggle(1000);
			return false;
		}
	});
});

function isfirstname(string)
{
	// A variable containing a regular expression representing an email address
	var firstNamePattern = /^[A-Za-z]{1,8}$/;  

	if (firstNamePattern.test(string))
	{
		return true;
	}
	else 
	{
		return false; // Stops form details from being submitted
	}
}