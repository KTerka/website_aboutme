$(function(){
	var carouselList = $("#carousel ul");
	
	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	
	function changeSlide(){
		carouselList.animate({'marginLeft':-400}, 1000, moveFirstSlide);
	}
	
	setInterval(changeSlide, 2000);
	
	$('.slogan').delay(500).fadeIn(2000);
});

