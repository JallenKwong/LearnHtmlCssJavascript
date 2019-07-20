# Styling and Animating #

## Modifying CSS with inline properties ##

	// Get a single property's value
	.css('property')
	// returns "value"

	// Get multiple properties' values
	.css(['property1', 'property-2'])
	// returns {"property1": "value1", "property-2": "value2"}

	//---

	// Single property and its value
	.css('property', 'value')
	// Object of property-value pairs
	.css({
		property1: 'value1',
		'property-2': 'value2'
	})

	.addClass()

jQuery变量命名用$开头可增加识别度

	//parseFloat可去除单位
	var num = parseFloat($speech.css('fontSize'));

## Hiding and showing elements ##

The basic `.hide()` and `.show()` methods,

	$(document).ready(function() {
		$('p').eq(1).hide();
		$('a.more').click(function(event) {
			event.preventDefault();
			$('p').eq(1).show();
			$(this).hide();
		});
	});

## Effects and duration ##

### Speeding in ###

Using .show('slow') makes the show effect complete in 600 milliseconds (0.6 seconds), .show('fast') in 200 milliseconds. If any other string is supplied, jQuery's default animation duration of 400 milliseconds will be used.

	
	$('p').eq(1).show('slow');
	$('p').eq(1).show('fast');

### Fading in and fading out ###

	$('p').eq(1).fadeIn('slow');
	//....fadeOut()

### Sliding up and sliding down ###

	$('p').eq(1).slideDown('slow');
	//....slideUp()

### Toggling visibility ###

jQuery provides a `.toggle()` method, which acts like `.show()` and `.hide()`, and like them, it can be used with or without a duration argument. Other compound methods include `.fadeToggle()` and `.slideToggle()`, which show or hide elements using the corresponding effects.

## Creating custom animations ##

`.animate()`有两种形式

	.animate({property1: 'value1', property2: 'value2'},
	duration, easing, function() {
		alert('The animation is finished.');
	});

	//---

	.animate({properties}, {options})

	.animate({
		property1: 'value1',
		property2: 'value2'
	}, {
		duration: 'value',
		easing: 'value',
		specialEasing: {
			property1: 'easing1',
			property2: 'easing2'
		},
		complete: function() {
			alert('The animation is finished.');
		},
		queue: true,
		step: callback
	});

## In a nutshell ##

With all the variations to consider when applying effects, it can become difficult to remember whether the effects will occur simultaneously or sequentially. A brief
outline might help.

Effects on a single set of elements are:
- Simultaneous when applied as multiple properties in a single `.animate()` method
- Queued when applied in a chain of methods, unless the queue option is set to false

Effects on multiple sets of elements are:

- Simultaneous by default
- Queued when applied within the callback of another effect or within the callback of the `.queue()` method


