//sticky navigation
var stickynav = document.getElementById('stickynav');
var navtop = stickynav.getBoundingClientRect().top > 100 ? stickynav.getBoundingClientRect().top : 150;
var nav_height = 70;

//sticky filters
var productstop = document.getElementById('products').getBoundingClientRect().top;
var filter = document.querySelector('#filter-list ul');
var filter_settings = {
	top: null,
	height: null,
	bottom: null,
	limit: null
};

function updateFilterSettings() {
	filter_settings.top = (window.scrollY || window.pageYOffset) + filter.parentElement.getBoundingClientRect().top - nav_height;
	filter_settings.height = filter.getBoundingClientRect().height;
	filter_settings.bottom = (window.scrollY || window.pageYOffset) + filter.getBoundingClientRect().bottom - nav_height;
	filter_settings.limit = (window.scrollY || window.pageYOffset) + filter.parentElement.getBoundingClientRect().bottom - nav_height;
}

function moveFilters() {
	if ((window.scrollY || window.pageYOffset) < filter_settings.top) { 																					// if window top edge is above the filters
		filter.style.top = '0px';
	} else if ((window.scrollY || window.pageYOffset) > filter_settings.top && (window.scrollY || window.pageYOffset) + filter_settings.height < filter_settings.limit) {			// if window top edge is within filter area
		filter.style.top = Math.abs(filter.parentElement.getBoundingClientRect().top - nav_height) + 'px';
	} else if (filter_settings.bottom > filter_settings.limit) {																	// account for filters openning and closing so that filter sticks to bottom
		var exceedsBy = filter_settings.bottom - filter_settings.limit;
		filter.style.top = ( parseFloat(filter.style.top) - exceedsBy ) + 'px';
		window.scrollTo(0, (window.scrollY || window.pageYOffset) - exceedsBy);
	}
}

function autoCloseFilters() {
	if (window.innerWidth < 580) {
		var panel = document.getElementById('filter-list');
		panel.classList.add('contracted');
		panel.querySelector('.toggle-filters').textContent = 'show';
	}
}

window.onscroll = function() {
	/* Navigation */
	if( (window.scrollY || window.pageYOffset) > navtop ) stickynav.classList.add('stuck');
    else stickynav.classList.remove('stuck');
	
	/* Filters */
	updateFilterSettings();
	moveFilters();
};

window.onresize = function() {
	updateFilterSettings();
	moveFilters();
	
	autoCloseFilters()
};

window.onload = function() {
	filter_settings.top = (window.scrollY || window.pageYOffset) + filter.parentElement.getBoundingClientRect().top - nav_height;
	filter_settings.height = filter.getBoundingClientRect().height;
	filter_settings.bottom = (window.scrollY || window.pageYOffset) + filter.getBoundingClientRect().bottom - nav_height;
	filter_settings.limit = (window.scrollY || window.pageYOffset) + filter.parentElement.getBoundingClientRect().bottom - nav_height;
	
	moveFilters();
	
	autoCloseFilters()
}

addResizeListener(filter, function(){
	updateFilterSettings();	
	moveFilters();
});



