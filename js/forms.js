var formActions = {
	"shipping-form": 'shipping-form-action', 			//update
	"contact-form": 'contact-form-action', 				//update
	"subscription-form": 'subscription-form-action' 	//update
};


// get all data in form and return object
function getFormData(triggered_form) {
	var elements = triggered_form.elements; // all form elements
	var fields = Object.keys(elements).map(function(k) {
	if(elements[k].name !== undefined) {
		return elements[k].name;
	}
	}).filter(function(item, pos, self) {
		return self.indexOf(item) == pos && item;
	});
	var data = {};
	fields.forEach(function(k){
		data[k] = elements[k].value;
	});

	return data;
}

//submit form data
function handleFormSubmit(event) {
	if (event.target.name === 'shipping-form') {
		if ( isEmptyObject(myCart.items) ) {
			event.preventDefault();
			console.log('your cart is empty');
			return;
		}
		event.target.querySelector('input[type="hidden"').value = JSON.stringify(myCart);
	}

	event.preventDefault();
	var data = getFormData(event.target);
	var url = event.target.action;
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	// xhr.withCredentials = true;
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function() {
		console.log('success');
		return;
	};
	// url encode form data for sending as post data
	var encoded = Object.keys(data).map(function(k) {
		return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
	}).join('&')
	xhr.send(encoded);
}

function loaded() {
	// bind to the submit event of our form
	var forms = document.getElementsByTagName('form');
	
	Array.prototype.forEach.call(forms, function(form) {
		//handle form action attribute update
		var name = form.name;
		name && name in formActions ? form.setAttribute('action', formActions[name]) : '';
		//handle form submit
		form.addEventListener("submit", handleFormSubmit, false);
	});
};

document.addEventListener('DOMContentLoaded', loaded, false);

















