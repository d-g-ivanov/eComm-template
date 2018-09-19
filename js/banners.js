//create hero banner from data
function createHero(data) {
	var hero = document.createElement('div');
	hero.className = 'hero fade ' + data.settings.text_position + ' ' + data.settings.text_color  + ' ' + (window.innerWidth > 768 ? 'desktop' : 'mobile');
	
	var heroContent = '';
	heroContent += '<div class="background-image">';
	heroContent += '<img src="images/slider/' + (window.innerWidth > 768 ? data.desktop : data.mobile) + '" />';
	heroContent += '</div>';
	heroContent += '<div class="text">';
	heroContent += '<div class="title">' + data.title + '</div>';
	heroContent += '<div class="body">' + data.body + '</div>';
	
	for (key in data.button) {
		heroContent += '<a href="' + data.button[key] + '">' + key + '</a>';
	}
	
	heroContent += '</div>';

	hero.innerHTML = heroContent;
	
	return hero;
}

//update slider navigation
function updateNavigation(index) {
	var dot = '<span class="dot" onclick="currentSlide(' + (index + 1) + ', event)"></span>';
	
	return dot;
}

// append hero banners
function populateBanners(banners) {
	var banner;
	var grid = document.querySelector('.slideshow-container');
	var insBefore = grid.querySelector('.prev');
	var bannerNav = grid.querySelector('#dot-navigation');
	for (var i = 0; i < banners.length; i++) {
		banners[i].index = i;
		banner = createHero(banners[i]);
		grid.insertBefore(banner, insBefore);
		bannerNav.innerHTML += updateNavigation(i);
	}
}

// test hero population
populateBanners(banners);
	
	
		
		
		
	
