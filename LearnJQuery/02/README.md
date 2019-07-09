# Selecting Elements #

The jQuery library harnesses the power of Cascading Style Sheets (CSS) selectors to let us quickly and easily access elements or groups of elements in Document Object Model (DOM).


## Using the $() function ##

Selector type|CSS|jQuery|What it does
---|---|---|---
Tag name|p { }|$('p')|This selects all paragraphs<br/>in the document.
ID|#some-id { }|$('#some-id')|This selects the single element in the document that has an ID of some-id.
Class|.some-class{ }|$('.someclass')|This selects all elements in the document that have a class of some-class.


[More](../C#)

## Accessing DOM elements ##

	var myTag = $('#my-element').get(0).tagName;

	varmyTag = $('#my-element')[0].tagName;


## Chaining ##

	$('td:contains(Henry)') // Find every cell containing "Henry"
		.parent() // Select its parent
		.find('td:eq(1)') // Find the 2nd descendant cell
		.addClass('highlight') // Add the "highlight" class
		.end() // Return to the parent of the cell containing "Henry"
		.find('td:eq(2)') // Find the 3rd descendant cell
		.addClass('highlight'); // Add the "highlight" class

## Accessing DOM elements ##

**Every selector expression and most jQuery methods return a jQuery object.** This is almost always what we want because of the implicit iteration and chaining capabilities that it affords.

**Still, there may be points in our code when we need to access a DOM element directly.** For example, we may need to make a resulting set of elements available to another JavaScript library, or we might need to access an element's tag name, which is available as a property of the DOM element.


	var myTag = $('#my-element').get(0).tagName;

	var myTag = $('#my-element')[0].tagName;


