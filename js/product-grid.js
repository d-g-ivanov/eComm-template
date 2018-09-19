/**********
	ADD RESIZE DETECTOR FOR TRACKING PRODUCT GRID RESIZING AND UPDATING COLUMNS
***********/
//add resize listener for product grid
var prgrid = document.querySelector('#product-grid ul');
var prgridcurrency = 'EUR' // update
function productGridResizer() {
	var width = prgrid.getBoundingClientRect().width;
	if (width > 1300) {
		prgrid.className = 'col-5';
	} else if (width > 1000) {
		prgrid.className = 'col-4';
	} else if (width > 700) {
		prgrid.className = 'col-3';
	} else if (width > 420) {
		prgrid.className = 'col-2';
	} else if (width > 0) {
		prgrid.className = 'col-1';
	}
}

addResizeListener(prgrid, productGridResizer);
productGridResizer();

/**********
	CONSTRUCT PRODUCT GRID ON PAGE LOAD
***********/

// create grid item
function createGridItem(data) {
	//greate grid item
	var item = document.createElement('li');
	item.classList.add('grid__item');
	item.setAttribute('data-item', data.index);
	item.setAttribute('data-filter', data.keywords);
	//prep grid item content
	var content = '';
	content += '<article>';
	content += '<img src="images/grid/' + data.image +'" alt="product image" />';
	content += '<div class="hr-line"></div>';
	content += '<span class="item__type">' + data.type + '</span>';
	content += '<span class="item__title">' + data.title + '</span>';
	content += '<span class="item__price">' + data.price.toFixed(2) + ' ' + prgridcurrency + '</span>';
	content += '<div class="buttons">';
	content += '<button type="button" data-action="toggleDetails">Details</button> ';
	content += '<button type="button" data-action="triggerCartUpdate">Add to cart</button>';
	content += '</div>';
	content += '</article>';
	//assign grid content to grid item
	item.innerHTML = content;
	
	//return ready item
	return item;
}

// append grid item
function populateGrid(items) {
	var item;
	var grid = document.querySelector('#product-grid ul');
	for (var i = 0; i < items.length; i++) {
		items[i].index = i;
		item = createGridItem(items[i]);
		grid.appendChild(item);
	}
}

// test item population
populateGrid(products);

/**********
	SHOW PRODUCT DETAILS
***********/
function createProductModal(data) {
	var modal = '';
	modal += "<section class='product-images'>";
	modal += "<img src='images/grid/" + data.image + "' />";
	modal += "</section>";
	modal += "<section class='product-details'>";
	modal += "<h3>" + data.title + "</h3>";
	modal += "<div class='product-price'>" + data.price.toFixed(2) + ' ' + prgridcurrency + "</div>";
	
	if (data.specs) {
		modal += "<dl>";
		
		for ( spec in data.specs ) {
			modal += "<dt>" + spec + "</dt>";
			modal += "<dd>" + data.specs[spec]  + "</dd>";
		}
		
		modal += "</dl>";
	}
		
	modal += "<div class='product-purchase'>";
	modal += "<div class='product-quantity'>";
	modal += "<a type='button' data-action='quantityDecrement'>-</a>";
	modal += "<input type='tel' value='1' id='quantity' name='quantity' class='quantity' readonly />";
	modal += "<a type='button' data-action='quantityIncrement'>+</a>";
	modal += "</div>";
	modal += "<div class='product-links'>";
	modal += "<a type='button' data-action='triggerCartUpdate'>Add to cart</a>";
	
	if (data.affiliates) {
		for (affiliate in data.affiliates) {
			modal += "<a href='" + data.affiliates[affiliate] + "' target='_blank'>Buy on " + affiliate + "</a>";
		}
	}
	
	modal += "</div>";
	modal += "</div>";
	modal += "</section>";

	return modal;
}

var productModal = document.getElementById('product-modal');
function toggleDetails(event) {
	//show/hide modal
	productModal.classList.toggle('show');
	setBodyScroll();
	
	//populate modal if it is being displayed
	if (productModal.classList.contains('show')) {
		var btn = event.target;
		//find which item was clicked on
		var parentLi = findAncestor(btn, 'data-item');
		var itemNumber = parseInt( parentLi.getAttribute('data-item') );
		
		//if the product has not already been loaded on modal, load the product, else, simply display currently populated modal
		if ( itemNumber !== parseInt(productModal.getAttribute('data-item')) ) {
			productModal.setAttribute('data-item', itemNumber);
			var item = products[ itemNumber ];
			//construct modal for the item
			var modalContent = createProductModal(item);
			//update the contents with the item data
			productModal.children[0].innerHTML = modalContent;
		}
	}
}

function findAncestor(el, attribute) {
    while ((el = el.parentElement) && !el.getAttribute(attribute));
    return el;
}


























