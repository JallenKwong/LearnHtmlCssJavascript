# Selecting Elements #

The jQuery library harnesses the power of Cascading Style Sheets (CSS) selectors to let us quickly and easily access elements or groups of elements in Document Object Model (DOM).

## Understanding the DOM ##

## Using the $() function ##

Selector type|CSS|jQuery|What it does
---|---|---|---
Tag name|p { }|$('p')|This selects all paragraphs<br/>in the document.
ID|#some-id { }|$('#some-id')|This selects the single element in the document that has an ID of some-id.
Class|.some-class{ }|$('.someclass')|This selects all elements in the document that have a class of some-class.

## Accessing DOM elements ##

	var myTag = $('#my-element').get(0).tagName;

	varmyTag = $('#my-element')[0].tagName;


[More](../C#)


