

//  Event listeners for form
//  Calls bish bosh function on submit
var form = document.getElementById('form');
form.addEventListener('submit', BishBosh, false);


// Event listeners for html input ranges 
// Shows current value of range slider 

var endNr = document.getElementById('end-nr');
document.getElementById('end-nr-show').innerHTML = endNr.value;
endNr.addEventListener('input', function() {

	document.getElementById('end-nr-show').innerHTML = endNr.value;

}, false);

var bishNr = document.getElementById('bish-nr');
document.getElementById('bish-nr-show').innerHTML = bishNr.value;
bishNr.addEventListener('input', function() {
	
	document.getElementById('bish-nr-show').innerHTML = bishNr.value;

}, false);

var boshNr = document.getElementById('bosh-nr');
document.getElementById('bosh-nr-show').innerHTML = boshNr.value;
boshNr.addEventListener('input', function() {
	
	document.getElementById('bosh-nr-show').innerHTML = boshNr.value;

}, false);


// Calculates values from 1 to end-nr and bish bosh values
function BishBosh(e) {

	e.preventDefault();

	var inputs = form.elements;
	var numbers = [];

	var bish = parseInt( inputs['bish-nr'].value );
	var bosh = parseInt( inputs['bosh-nr'].value );

	for ( var i = parseInt( inputs['end-nr'].value ); i > 0; i-- ) 
	{
		if ( i % bish == 0 && i % bosh == 0 ) 
		{
			numbers.push('bish bosh');
		}
		else if ( i % bish == 0 ) 
		{
			numbers.push('bish');
		}
		else if ( i % bosh == 0 ) 
		{
			numbers.push('bosh');
		}
		else
		{
			numbers.push(i);
		}
	}

	document.getElementById('answers').innerHTML = numbers;

	console.log( 'bish: ' + bish + '  bosh: ' + bosh )
	console.log(numbers)

}

