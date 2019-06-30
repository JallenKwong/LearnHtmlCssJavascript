# Getting Started #


## What jQuery does ##

Access elements in a document

	$('div.content').find('p');

---

Modify the appearance of a web page

	$('ul > li:first').addClass('active');

---

Alter the content of a document

	$('#container').append('<a href="more.html">more</a>');

---

Respond to a user's interaction

	$('button.show-details').click(function() {
		$('div.details').show();
	});

---

Animate changes being made to a document

	$('div.details').slideDown();

---

Retrieve information from a server without refreshing a page

	$('div.details').load('more.html #content');

---

Simplify common JavaScript tasks

	$.each(obj, function(key, value) {
		total += value;
	});


## Why jQuery works well ##

- **Leverage knowledge of CSS**:By basing the mechanism for locating page elements on CSS selectors, jQuery inherits a terse简洁 yet legible清晰的 way of expressing a document's structure.

- **Support extensions** 插件

- **Abstract away browser quirks** 多种浏览器兼容

- **Always work with sets** When we instruct jQuery to find all elements with the class collapsible and hide them, there is no need to loop through each returned element. Instead, methods such as `.hide()` are designed to automatically work on sets of objects instead of individual ones.

- **Allow multiple actions in one line**

## Making our first jQuery-powered web page ##

### Downloading jQuery ###

[Downloading jQuery](https://jquery.com)

### Deciding on the version of jQuery to use ###

Version 2.0 of jQuery no longer supports old versions of Internet Explorer (6, 7, and 8) in order to provide faster, cleaner support for more modern browsers.

### Setting up jQuery in an HTML document ###

	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<title>Through the Looking-Glass</title>
			<link rel="stylesheet" href="01.css">

			<!-- -->
			<script src="jquery.js"></script>
			<script src="01.js"></script>
		</head>

		<body>
			...
		</body>
	</html>

[index.html](index.html)

[01.css](01.css)

## Adding our jQuery code ##

	$(document).ready(function() {
		$('div.poem-stanza').addClass('highlight');
	});

Finding the poem text

	$('div.poem-stanza')

---

Injecting the new class

	.addClass()

---

Executing the code

	$(document).ready()

With the `$(document).ready()` construct, jQuery allows us to schedule function calls for firing once the DOM is loaded—without necessarily waiting for images to fully render.

While this event scheduling is possible without the aid of jQuery, `$(document).ready()` provides an especially elegant cross-browser solution that includes **the following features**:

- It uses the browser's native DOM-ready implementations when available and adds a window.onload event handler as a safety net

- It allows for multiple calls to `$(document).ready()` and executes them in the order in which they are called

- It executes functions passed to `$(document).ready()` even if it is called after the browser event has already occurred

- It handles the event scheduling asynchronously to allow scripts to delay if necessary

- It simulates a DOM-ready event in some older browsers by repeatedly checking for the existence of a DOM method that typically becomes available at the same time that the DOM as a whole is ready


	$(document).ready(function() {
		$('div.poem-stanza').addClass('highlight');
	});

上面写法用到**闭包 JavaScript Closures**。


## Plain JavaScript versus jQuery ##

原生JS写法，写出上例的效果

	window.onload = function() {
	  var divs = document.getElementsByTagName('div');
	  for (var i = 0; i < divs.length; i++) {
	    if (hasClass(divs[i], 'poem-stanza') && !hasClass(divs[i], 'highlight')) {
	      divs[i].className += ' highlight';
	    }
	  }
	
	  function hasClass( elem, cls ) {
	    var reClass = new RegExp(' ' + cls + ' ');
	    return reClass.test(' ' + elem.className + ' ');
	  }
	};

[Plain JavaScript Way](01/listings)

## Chrome Developer Tools ##

	console.log()

## $(document).ready和window.onload的区别 ##

`$(document).ready`和`window.onload`都是在都是在页面加载完执行的函数，大多数情况下差别不大，但也是有区别的。

`$(document).ready`:是DOM结构绘制完毕后就执行，不必等到加载完毕。 意思就是DOM树加载完毕，就执行，不必等到页面中图片或其他外部文件都加载完毕。并且可以写多个.ready。

`window.onload`:是页面所有元素都加载完毕，包括图片等所有元素。只能执行一次。

	//以下代码无法正确执行： 
	window.onload = function()
	{ 
		alert(“text1”); 
	}; 

	window.onload = function()
	{ 
		alert(“text2”); 
	}; 


	//结果只输出第二个 能同时编写多个 
	//以下代码正确执行： 
	$(document).ready(function()
	{ 
		alert(“Hello World”); 
	}); 

	$(document).ready(function()
	{ 
		alert(“Hello again”); 
	}); 
	//结果两次都输出

[$(document).ready和window.onload的区别](https://www.cnblogs.com/fengchaoran/p/7493803.html)