//helpers
function isEmptyObject(obj) {
    var name;
    for (name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
}

/**********
	UPDATE THE CART
***********/
// cart
var myCart = {
	total: 0,
	shipping: 0,
	tax: 0,
	items: {}
};

function updateCartData(itemNumber, quantity) {
	if (!myCart.items[itemNumber]) {
		addItem(itemNumber, quantity);
	} else {
		updateItem(itemNumber, quantity);
	}
	//update cart total data
	updateCartTotalData();
}

function addItem(itemNumber, quantity) {
	var price = products[itemNumber].price;
	var item = {
		quantity: quantity,
		price: price,
		total: price * quantity,
		title: products[itemNumber].title,
		image: products[itemNumber].image,
	};
	//add to cart
	myCart.items[itemNumber] = item;
}

function updateItem(itemNumber, quantity) {
	var item = myCart.items[itemNumber];
	item.quantity += quantity;
	item.total = item.price * item.quantity;
}

function removeItem(itemNumber) {
	delete myCart.items[itemNumber];
	
	updateCartTotalData();
	updateCartIcon();
	updateCartSummaryTable(myCart);
}

function updateCartTotalData() {
	myCart.total = 0;
	if (myCart.items) {
		for (var item in myCart.items) {
			myCart.total += myCart.items[item].total;
		}
	}
}

function updateCartIcon() {
	document.querySelector('.cart-total').textContent = (Math.round(myCart.total * 100) / 100).toFixed(2) + ' lv';
}

function updateCartSummaryTable(data) {
	var table = '';
	table += "<li><span>SUBTOTAL</span><span>" + data.total.toFixed(2) + "</span></li>";
	table += "<li><span>Tax</span><span>" + data.tax.toFixed(2) + "</span></li>";
	table += "<li><span>Shipping</span><span>" + data.shipping.toFixed(2) + "</span></li>";
	table += "<li><span>TOTAL</span><span>" + (data.total + data.tax + data.shipping).toFixed(2) + "</span></li>";
	document.querySelector('.total-breakdown').innerHTML = table;
}

function triggerCartUpdate(event) {
	var item = findAncestor(event.target, 'data-item');
	var itemNumber = parseInt( item.getAttribute('data-item') );
	var quantity;
	
	if ( item.querySelector('input[type="tel"]') ) {
		quantity = parseInt( item.querySelector('input[type="tel"]').value );
	} else {
		quantity = 1;
	}
	
	//update cart data
	updateCartData(itemNumber, quantity);
	
	//update cart icon
	updateCartIcon();
	
	//add status message
	addStatusMessage('success', quantity === 1 ? "1 item added to your cart!" : quantity + " items added to your cart!");
}

//add status message
function addStatusMessage(type, message) {
	var container = document.getElementById('status-modal');
	
	var sts = document.createElement('div');
	sts.className = type;
	sts.textContent = message;
	
	container.insertBefore(sts, container.firstChild);
	
	setTimeout(function(){
		container.removeChild(sts);
	}, 10000);
}

// decrease number of items to be added to cart
function quantityDecrement(event) {
	var input = event.target.parentElement.getElementsByTagName('input')[0];
	input.value = parseInt(input.value) === 1 ? 1 : parseInt(input.value) - 1;
	
	return parseInt(input.value);
}

// increase number of items to be added to cart
function quantityIncrement(event) {
	var input = event.target.parentElement.getElementsByTagName('input')[0];
	input.value = parseInt(input.value) + 1;
	
	return parseInt(input.value);
}

// update cart if user updates contents from within the cart modal
function updateBreakdownSection(event) {
	var quantity = event.target.textContent === '+' ? quantityIncrement(event) : quantityDecrement(event);
	var itemNumber = parseInt( findAncestor(event.target, 'data-item').getAttribute('data-item') );
	
	var item = myCart.items[itemNumber];
	item.quantity = quantity;
	item.total = item.price * item.quantity;

	updateCartTotalData();
	updateCartIcon();
	
	updateCartSummaryTable(myCart);
}

// build-up the cart modal based on user basket
function createCartModal(data) {
	var modal = '';
	
	modal += "<h3>Basket</h3>";
	modal += "<ul class='total-breakdown'>";
	modal += "<li><span>SUBTOTAL</span><span>" + data.total.toFixed(2) + "</span></li>";
	modal += "<li><span>Tax</span><span>" + data.tax.toFixed(2) + "</span></li>";
	modal += "<li><span>Shipping</span><span>" + data.shipping.toFixed(2) + "</span></li>";
	modal += "<li><span>TOTAL</span><span>" + (data.total + data.tax + data.shipping).toFixed(2) + "</span></li>";
	modal += "</ul>";
	
	modal += "<ul class='cart-contents'>";
	
	if ( !isEmptyObject(data.items) ) {
		//populate items from current basket
		for (var item in data.items) {
			modal += "<li class='cart__item' data-item='" + item + "'>";
			modal += "<div class='cart__image'>";
			modal += "<img src='images/grid/" + data.items[item].image + "' alt='product image' />";
			modal += "</div>";
			modal += "<div class='product__details'>";
			modal += "<h2><a type='button' data-action='toggleDetails'>" + data.items[item].title + "</a></h2>";
			modal += "<div>" + data.items[item].price.toFixed(2) + "</div>";
			modal += "</div>";
			modal += "<div class='quantity__correction'>";
			modal += "<a type='button' data-action='updateBreakdownSection' data-place='cart'>+</a>";
			modal += "<input type='tel' value='" + data.items[item].quantity + "' id='quantity_correction' name='quantity_correction' class='quantity_correction' readonly />";
			modal += "<a type='button' data-action='updateBreakdownSection' data-place='cart'>-</a>";
			modal += "</div>";
			modal += "<div class='actions'><a type='button' data-action='deleteThisItem'>×</a></div>";
			modal += "</li>";
		}
	} else {
		// ask user to go buy something
		modal += "<a type='button' style='text-decoration: underline;' data-action='toggleCart'>You have not added any items to your basket. Go grab some, you will not regret it!</a>";
	}
	
	modal += "</ul>";
	
	return modal;
}

function setBodyScroll() {
	var modals = document.getElementsByClassName('modal');
	var noscroll = false;
	
	for (var i = 0; i < modals.length; i++) {
		if ( modals[i].classList.contains('show') ) noscroll = true;
	}
	
	noscroll ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
}

var cartModal = document.getElementById('cart-modal');
function toggleCart() {
	//show/hide modal
	cartModal.classList.toggle('show');
	setBodyScroll();
	
	//populate modal if it is being displayed
	if (cartModal.classList.contains('show')) {
		//construct modal for the item
		var modalContent = createCartModal(myCart);
		//update the contents with the item data
		cartModal.querySelector('.order-summary').innerHTML = modalContent;
	}
}

function deleteThisItem(event) {
	var item = findAncestor(event.target, 'data-item');
	
	//remove from myCart
	removeItem(parseInt( item.getAttribute('data-item') ));
	
	//remove from basket
	item.parentElement.removeChild(item);
}



/**********
	PRODUCT GRID EVENTS
***********/
//activate events for buttons within product grid
prgrid.addEventListener('click', function(event) {
	var target = event.target;
	if (target.tagName !== 'BUTTON') return;
	
	var action = target.getAttribute('data-action');
	if (action) window[action](event);
});

// activate events for links in modals
Array.prototype.forEach.call(document.getElementsByClassName('modal'), function(modal) {
	modal.addEventListener('click', function(event) {
		var target = event.target;
		if (target.tagName !== 'A') return;
		
		var action = target.getAttribute('data-action');
		if (action) window[action](event);
	});
});

//activate cart icon link
document.querySelector('.cart a').addEventListener('click', function() {
	toggleCart();
});




/**********
	PayPal Checkout
***********/
/*
Need to add paypal scripts to html file along with paypal button

paypal.Button.render({

	env: 'sandbox', // sandbox | production

	// PayPal Client IDs - replace with your own
	// Create a PayPal app: https://developer.paypal.com/developer/applications/create
	client: {
		sandbox:    '',
		production:    '',
	},

	// Show the buyer a 'Pay Now' button in the checkout flow
	commit: true,

	// payment() is called when the button is clicked
	payment: function(data, actions) {
		var amountEUR = (myCart.total * 0.51).toFixed(2);
		// Make a call to the REST api to create the payment
		return actions.payment.create({
			payment: {
				transactions: [
					{
						amount: { total: amountEUR, currency: 'EUR' }
					}
				]
			}
		});
	},

	// onAuthorize() is called when the buyer approves the payment
	onAuthorize: function(data, actions) {

		// Make a call to the REST api to execute the payment
		return actions.payment.execute().then(function() {
			window.alert('Payment Complete!');
		});
	}

}, '#paypal-button-container');*/













