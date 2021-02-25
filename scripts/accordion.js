$(function() {
	$(".accordion > .accordion-item").click(function() {
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});
});