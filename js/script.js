function initCarousel () {
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
}

function DisplayTime(){
	var today = new Date();
	
	var day = today.getDate();
	if (day<10) day = "0"+day;
	var month = today.getMonth()+1;
	if (month<10) month = "0"+month;
	var year = today.getFullYear();
	
	var hour = today.getHours();
	if (hour<10) hour = "0"+hour;
	var minute = today.getMinutes();
	if (minute<10) minute = "0"+minute;
	var seconds = today.getSeconds();
	if (seconds<10) seconds = "0"+seconds;
	
	document.getElementById("clock").innerHTML = day+"/"+month+"/"+year+" | "+hour+":"+minute+":"+seconds;
	setTimeout("DisplayTime()", 1000);
}

$(function(){

	initCarousel();
	
	DisplayTime();	
	
	$("nav a").on('click',function(){
	var link = $(this).attr('href');
	$('html,body').animate({scrollTop: ($(link).offset().top - 50)},'slow');
    return false;
  });
  
  $('.open-menu, .hide, .hide-mobile').click(function(){
    $('nav').toggleClass('show');  
  });

	
	
});

