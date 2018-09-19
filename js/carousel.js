var slideIndex = 1;
var slideInterval = 9000;
showSlides(slideIndex);

function plusSlides(n, event) {
	var e = event || window.event;
	showSlides(slideIndex += n, e);
}

function currentSlide(n, event) {
	var e = event || window.event;
	showSlides(slideIndex = n, e);
}

function showSlides(n, event) {
	var i;
	var slides = document.getElementsByClassName("hero");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) slideIndex = 1;  
	if (n < 1) slideIndex = slides.length;
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].classList.remove('active');
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].classList.add('active');
	
	if (event) {
		clearInterval(intervalId);
		intervalId = setInterval(function(){
			slideIndex++;
			showSlides(slideIndex);
		}, slideInterval);
	}
}

var intervalId = setInterval(function(){
	slideIndex++;
	showSlides(slideIndex);
}, slideInterval);