# Handling Events #

## Alternate syntax for .ready() ##

	$(document).ready(function() {
	// Our code here...
	});

or

	$(function() {
	// Our code here...
	});

## Passing an argument to the .ready() callback ##

	<script src="prototype.js"></script>
	<script src="jquery.js"></script>
	<script>
	jQuery.noConflict();
	</script>
	<script src="myscript.js"></script>

---

	jQuery(document).ready(function($) {
	// In here, we can use $ like normal!
	});

---

	jQuery(function($) {
	// Code that uses $.
	});

## Handling simple events ##

	$(document).ready(function() {
		$('#switcher-large').on('click', function() {
			$('body').addClass('large');
		});
	});

---

	$(document).ready(function() {
		$('#switcher-default').on('click', function() {
			$('body').removeClass('narrow');
			$('body').removeClass('large');
		});
		$('#switcher-narrow').on('click', function() {
			$('body').addClass('narrow');
			$('body').removeClass('large');
		});
		$('#switcher-large').on('click', function() {
			$('body').removeClass('narrow');
			$('body').addClass('large');
		});
	});

## Consolidating code using the event context ##

	$(document).ready(function() {
		$('#switcher-default').addClass('selected').on('click', function() {
		$('body').removeClass();
		});
		$('#switcher-narrow').on('click', function() {
			$('body').removeClass().addClass('narrow');
		});
		$('#switcher-large').on('click', function() {
			$('body').removeClass().addClass('large');
		});
		$('#switcher button').on('click', function() {
			$('#switcher button').removeClass('selected');
			$(this).addClass('selected');
		});
	});

---

	$(document).ready(function() {
		$('#switcher h3').click(function() {
			$('#switcher button').toggleClass('hidden');
		});
	});

[More](../C)







