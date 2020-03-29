var sliderIndex = 1;

function prevSlide(){
	showSlide(sliderIndex -= 1);
}

function nextSlide(){
	showSlide(sliderIndex += 1);
}

function currentSlide(n){
	showSlide(n);
}

function showSlide(n){
	var i;
	var slides = document.getElementsByClassName("item");
	
	if(n > slides.length){
		sliderIndex = 1;
	}
	
	if(n < 1){
		sliderIndex = slides.length;
	}
	
	for(var i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	
	slides[sliderIndex - 1].style.display = "block";	
	
}

































