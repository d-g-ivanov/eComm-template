//smooth scrolling of link clicks to sections
var links = document.querySelectorAll('a[href*="#"]')
Array.prototype.forEach.call(links, function(link) {	
	link.addEventListener('click', function(event) {
		if (this.getAttribute('href') === '#') {
			event.preventDefault();
			return;
		}
		
		var target = document.querySelector( this.getAttribute('href') );
		if (target && target.scrollIntoView) {
			event.preventDefault();
			target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
		}
	});	
});