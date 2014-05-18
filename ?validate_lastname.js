$(document).ready( function() {
	$('#emailForm').submit( function() {
		if( !islastname( this.lastname.value ) ) {
			$('#lastname').css('background-color','#f7bebe');
			$('#lastnameTip').toggle(1000);
			return false;
		}
	});
});

function islastname(string)
{
	// I found this expression from part of my notes - Ger
	var lastNamePattern = /^[A-Ya-y]{1,8}$/; 

	if (lastNamePattern.test(string))
	{
		return true;
	}
	else 
	{
		return false; 
	}
}