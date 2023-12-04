

// ЛОАДЕР
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
      mask.remove();
  }, 600)
});
 // ЛОАДЕР

//ЗНАХОДИМО НАШ НАВІГАЦІЮ, І МІНЯЄМО СТАН ACTIVE ПРИ НАТИСНЕННІ
 let link = document.getElementsByClassName("a__links");
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
    let standart = document.getElementsByClassName("active");
    standart[0].className = standart[0].className.replace(" active", "");
    this.className += " active";
  });
}
//ЗНАХОДИМО НАШ НАВІГАЦІЮ, І МІНЯЄМО СТАН ACTIVE ПРИ НАТИСНЕННІ


$(document).ready(function() {
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {

				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});



$(function() {

	let header = $("#navigation");
	let nav = $("#nav");
	let navH = nav.innerHeight();
	let scrollPos = $(window).scrollTop();
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, navH);

	$(window).on("scroll  resize", function(){

			navH = nav.innerHeight();
			scrollPos = $(this).scrollTop();

			checkScroll(scrollPos, navH);

	});

	function checkScroll(scrollPos, navH){
			if( scrollPos > navH ){
					header.addClass("fixed");
			} else{
					header.removeClass("fixed");
			}

	}

	$("[data-scroll]").on("click", function(event) {
			event.preventDefault();

			let elementId = $(this).data('scroll');
			let elementOffset = $(elementId).offset().top;

			nav.removeClass("show");

			$("html, body").animate({
					scrollTop: elementOffset - 0
			}, 700);



	});

		navToggle.on("click", function(event) {
			event.preventDefault();

			nav.toggleClass("show");


	});



});
