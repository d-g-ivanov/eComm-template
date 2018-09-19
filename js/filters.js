/**********
	CONSTRUCT FILTER SECTION ON PAGE LOAD
***********/
//create filter group
function createFilterGroup(data) {
	//create gilter group
	var filter = document.createElement('li');
	filter.className = "filter-item";
	
	//populate filter contents
	var filterContent = '';
	
	filterContent += "<a type='button'>" + data.name + "</a>";
	filterContent += "<div class='filter-group'>";
	
	if (data.type === 'radio') {
		filterContent += "<input type='radio' id='radioAll" + data.name + "' value='radioAll' name='" + data.name  + "' /><label for='radioAll" + data.name + "'>All</label>";
	}
	
	for (key in data.content) {
		filterContent += "<input type='"+ data.type + "' id='" + data.content[key] + "' value='" + data.content[key] + "' name='" + data.name  + "' /><label for='" + data.content[key] + "'>" + key + "</label>";
	}

	filterContent += "</div>";
	
	//add content to filter group
	filter.innerHTML = filterContent; 

	//return the filter group
	return filter;
}

//append feature group
function populateFilters(filters) {
	var filter;
	var filter_list = document.querySelector('#filter-list ul');
	for (var i = 0; i < filters.length; i++) {
		filters[i].index = i;
		filter = createFilterGroup(filters[i]);
		filter_list.appendChild(filter);
	}
}

populateFilters(filters);


/**********
	ALLOW USER TO HIDE FILTERS TO EXPAND PRODUCT GRID AREA
***********/
//show/hide filters
var filter_toggle = document.getElementsByClassName('toggle-filters')[0];
filter_toggle.addEventListener('click', toggleFilters);

function toggleFilters() {
	var panel = document.getElementById('filter-list');
	panel.classList.toggle('contracted');
	
	if (panel.classList.contains('contracted')) {
		this.textContent = 'show';
	} else {
		this.textContent = 'hide';
	}
}

/**********
	FILTER PRODUCT GRID BASED ON SELECTED FILTERS
***********/
var allProducts;
var appliedFilters = {};

window.onload = function() {
	allProducts = document.querySelectorAll('#product-grid li');
}

//remove all filters
function removeAllFilters() {
	for (var i = 0; i < allProducts.length; i++) {
		allProducts[i].style.display = 'initial';
		allProducts[i].classList.remove('filtered');
	}
}

function activateFilter(query) {
	//check all products against the queries
	for (var i = 0; i < allProducts.length; i++) {
		var product = allProducts[i];
		var filter_data = product.getAttribute('data-filter');
		filter_data += ' radioAll';
		
		if (query.radio) {
			if (query.radio.test(filter_data)) {
				if (query.checkbox) {
					if (/*isHidden(product) && */query.checkbox.test(filter_data)) {
						product.classList.remove('filtered-out');
					} else {
						product.classList.add('filtered-out');
					}
				} else {
					product.classList.remove('filtered-out');
				}
			} else {
				product.classList.add('filtered-out');
			}
		} else if (query.checkbox) {
			if (query.checkbox.test(filter_data)) {
				product.classList.remove('filtered-out');
			} else {
				product.classList.add('filtered-out');
			}
		} else {
			product.classList.remove('filtered-out');
		}
	}
	
	var visible = document.querySelectorAll('.grid__item:not(.filtered-out)').length;
	
	if (visible) {
		visible > 1 ? addStatusMessage('success', visible + " matches found.") : addStatusMessage('success', "Only 1 match was found.");
	} else {
		addStatusMessage('info', "Sorry! We could not match any products with your filter criteria. Try another combination!");
	}
	
}

//create query
//https://stackoverflow.com/questions/31385584/check-if-element-contains-any-of-the-class-from-array
function composeQuery(appliedFilters) {
	var query = {
		radio: [],
		checkbox: []
	};

	for (key in appliedFilters) {
		if ( key.indexOf('_') === 0 ) {
			/*if (appliedFilters[key] !== 'radioAll')*/ query.radio.push(appliedFilters[key]);
		} else {
			query.checkbox.push(key);
		}
	}
	
	query.radio.length ? query.radio = new RegExp('\\b(' + query.radio.join('|') + ')\\b', 'i') : query.radio = '';
	query.checkbox.length ? query.checkbox = new RegExp('\\b(' + query.checkbox.join('|') + ')\\b', 'i') : query.checkbox = '';
	
	return query;
}

//check if element is hidden
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return ((style.display === 'none') || (style.visibility === 'hidden'))
}

/**********
	HANDLE FILTER SECTION EVENTS
***********/
var filter_section = document.querySelector('#filter-list ul');
filter_section.addEventListener('click', function(e) {
	//if not a link, do nothing
	if (e.target.tagName !== 'A') return;
	//if a link, act on it
	e.target.classList.toggle('show-filters');;
}, false);

filter_section.addEventListener('change', function(e) {
	//if not an input element, do nothing
	if (e.target.tagName !== "INPUT") return;
	
	//if an input element, act on it
	if (e.target.type === 'radio') {
		appliedFilters['_' + e.target.name] = e.target.value;
	} else if (e.target.type === 'checkbox') {
		if (e.target.checked) appliedFilters[e.target.value] = true;
		else delete appliedFilters[e.target.value];
	}
	//compose query and adjust filters
	var query = composeQuery(appliedFilters);
	activateFilter(query);
	
	//scroll to top of product list
	if (window.scrollY > filter_settings.top - 50) window.scrollTo(0, filter_settings.top - 50);
}, false);
	
	
	
	
	
	
	
	
	
	
	
	