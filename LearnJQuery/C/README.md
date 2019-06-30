# Quick Reference #

[1.Selector expressions](#selector-expressions)

[1.1.Simple CSS](#simple-css)

[1.2.Position among siblings](#position-among-siblings)

[1.3.Position among matched elements](#position-among-matched-elements)

[1.4.Attributes](#attributes)

[1.5.Forms](#forms)

[1.6.Miscellaneous selectors](#miscellaneous-selectors)

[2.DOM traversal methods](#dom-traversal-methods)

[2.1.Filtering](#filtering)

[2.2.Descendants](#descendants)

[2.3.Siblings](#siblings)

[2.4.Ancestors](#ancestors)

[2.5.Collection manipulation](#collection-manipulation)

[2.6.Working with selected elements](#working-with-selected-elements)

[3.Event methods](#event-methods)

## Selector expressions ##

与CSS的选择器的语法基本相同

### Simple CSS ###

Selector|Matches|Notes
---|---|---
*|All elements.|$("body \*") [example](000.html)
\#id|The element with the given ID.|$("#choose") [example](001.html)
.class|All elements with the given class.|$(".intro") [example](002.html)
element|All elements of the given type.|$("p") [example](003.html)
a, b|Elements that are matched by a or b.|$("h1, li") [example](004.html) 
a b|Elements b that are descendants后代 of a.|$("div li") [example](005.html)
a > b|Elements b that are children of a.|$("body > p") [example](006.html)
a + b|Elements b that immediately follow a.|$("div+p") [example](007.html)
a ~ b|Elements b that are siblings of a and follow a.|$("div+ p")  [example](008.html)

### Position among siblings ###

Selector|Matches|Notes
---|---|---
:nth-child(index)|Elements that are the index child of their parent element (1-based).|$("p:nth-child(2)") [example](009.html)
:nth-child(even)|Elements that are an even child of their parent element (1-based).|$("p:nth-child(even)") [example](010.html)
:nth-child(odd)|Elements which are an odd child of their parent element (1-based).|$("p:nth-child(odd)") [example](011.html)
:nth-child(formula)|Elements that are the nth child of their parent element (1-based). Formulas are of the form an+b for integers a and b.|$("p:nth-child(3n+0)") [example](012.html)
:nth-last-child(index)|The same as :nth-child(), but counting **from the last element to the first**.|[example](013.html)
:first-child|Elements that are the first child of their parent.|$("p:first-child") [example](014.html)
:last-child|Elements that are the last child of their parent.|$("p:last-child") [example](015.html)
:only-child|Elements that are the only child of their parent.|$("p:only-child") [example](016.html)
:nth-of-type()|The same as :nth-child(), but only counting elements of the same element name.|$("p:nth-of-type(2)") [example](017.html)
:nth-last-of-type()|The same as :nth-last-child(), but only counting elements of the same element name.|$("p:nth-last-of-type(2)") [example](018.html)
:first-of-type|Elements which are the first child of the same element name among their siblings.|$("p:first-of-type") [example](019.html)
:last-of-type|Elements that are the last child of the same element name among their siblings.|$("p:last-of-type") [example](020.html)
:only-of-type|Elements that are the only child of the same element name among their siblings.|$("p:only-of-type") [example](021.html)

### Position among matched elements ###

Selector|Matches|Notes
---|---|---
:first|The first element in the result set.|$("p:first") [example](022.html)
:last|The last element in the result set.|$("p:last") [example](023.html)
:not(a)|All elements in the result set that are not matched by a.|$("p:not(.intro)") [example](024.html)
:even|Even elements in the result set (0-based).|$("tr:even") [example](025.html)
:odd|Odd elements in the result set (0-based).|$("tr:odd")  [example](026.html)
:eq(index)|A numbered element in the result set (0-based).|$("p:eq(1)") [example](027.html)
:gt(index)|All elements in the result set after (greater than) the given index (0-based).|$("tr:gt(2)") [example](028.html)
:lt(index)|All elements in the result set before (less than) the given index (0-based).|$("tr:lt(2)") [example](029.html)

### Attributes ###

Selector|Matches|Notes
---|---|---
[attr]|Elements that have the attribute attr.|$("[id]"), $("div[id]") [example](030.html)
[attr="value"]|Elements whose attr attribute is value.|-
[attr!="value"]|Elements whose attr attribute is not value.|-
[attr^="value"]|Elements whose attr attribute begins with value.|与Regex的^相同
[attr$="value"]|Elements whose attr attribute ends with value.|与Regex的$相同
[attr*="value"]|Elements whose attr attribute contains the substring value.|$("div[class*='test']") [example](031.html)
[attr~="value"]|Elements whose attr attribute is a space-delimited set of strings, one of which is value.|例如title="tulip flower" $("[title~=flower]")
[attr &#124;="value"]|Elements whose attr attributes is either equal to value or begins with value followed by a hyphen.|$("[lang&#124;=en]") [example](032.html)


### Forms ###

Selector|Matches|Notes
---|---|---
:input|All `<input>`, `<select>`, `<textarea>`, and `<button>` elements.|$(":input") [example](033.html)
:text|The `<input>` elements with type="text".|$(":text") [example](034.html)
:password|The `<input>` elements with type="password".|-
:file|The `<input>` elements with type="file".|-
:radio|The `<input>` elements with type="radio".|-
:checkbox|The `<input>` elements with type="checkbox".|-
:submit|The `<input>` elements with type="submit".|-
:image|The `<input>` elements with type="image".|-
:reset|The `<input>` elements with type="reset".|-
:button|The `<input>` elements with type="button" and `<input>` elements.|-
:enabled|Enabled form elements.|-
:disabled|Disabled form elements.|-
:checked|Checked checkboxes and radio buttons.|-
:selected|Selected `<input>` elements.|-


### Miscellaneous selectors ###

Selector|Matches|Notes
---|---|---
:root|The root element of the document.|[example](035.html)
:header|Header elements (for example, `<h1>`, `<h2>`).|[example](036.html)
:animated|Elements with an animation in progress.|[example](037.html)
:contains(text)|Elements containing the given text.|[example](038.html)
:empty|Elements with no child nodes.|-
:has(a)|Elements containing a descendant element matching a.|[example](039.html)
:parent|Select all elements that have at least one child node (either an element or text).|[example](040.html)
:hidden|Elements that are hidden, either through CSS or because they are `<input type="hidden" />`.|[example](041.html)
:visible|The inverse of :hidden.|[example](042.html)
:focus|The element that has the keyboard focus.|-
:lang(language)|Elements with the given language code (either due to a lang attribute on the element or an ancestor, or a `<meta>` declaration).|[example](043.html)
:target|Whichever element is targeted by the URI's fragment identifier, if any.|For example, given a document with a URI of https://example.com/#foo, $( "p:target" ) will select the `<p id="foo">` element.

## DOM traversal methods ##

traversal遍历

### Filtering ###

选择器进一步的选择

Traversal method|Returns a jQuery object containing…|Notes
---|---|---
.filter(selector)|Selected elements that match the given selector.|[example](044.html)
.filter(callback)|Selected elements for which the callback function returns true.|[example](045.html)
.eq(index)|The selected element at the given 0-based index.|[example](046.html)
.first()|The first selected element.|[example](048.html)
.last()|The final selected element.|[example](048.html)
.slice(start, [end])|Selected elements in the given range of 0-based indices.|[example](048.html)
.not(selector)|Selected elements that do not match the given selector.|[example](049.html)
.has(selector)|Selected elements that have a descendant matching selector.|[example](047.html)

### Descendants ###

后代

Traversal method|Returns a jQuery object containing…|Notes
---|---|---
.find(selector)|Descendant elements that match the selector.|[example](050.html)
.contents()|Child nodes (including text nodes).|[example](051.html)
.children([selector])|Child nodes, optionally filtered by a selector.|[example](052.html)

### Siblings ###

兄弟姐妹 同胞

Traversal method|Returns a jQuery object containing…|Notes
---|---|---
.next([selector])|The sibling immediately following each selected element, optionally filtered by a selector.|[example](053.html)
.nextAll([selector])|All siblings following each selected element, optionally filtered by a selector.|[example](054.html)
.nextUntil([selector],[filter])|All siblings following each selected element up to and not including the first element matching selector, optionally filtered by an additional selector.|[example](055.html)
.prev([selector])|The sibling immediately preceding each selected element, optionally filtered by a selector.|[example](056.html)
.prevAll([selector])|All siblings preceding each selected element, optionally filtered by a selector.|[example](057.html)
.prevUntil([selector], [filter])|All siblings preceding each selected element up to and not including the first element matching selector, optionally filtered by an additional selector.|[example](058.html)
.siblings([selector])|All siblings, optionally filtered by a selector.|[example](059.html)

### Ancestors ###

Traversal method|Returns a jQuery object containing…|Notes
---|---|---
.parent([selector])|The parent of each selected element, optionally filtered by a selector.|[example](060.html)
.parents([selector])|All ancestors, optionally filtered by a selector.|[example](061.html)
.parentsUntil([selector], [filter])|All ancestors of each selected element up to and not including the first element matching selector, optionally filtered by an additional selector.|[example](062.html)
.closest(selector)|The first element that matches the selector, starting at the selected element and moving up through its ancestors in the DOM tree.|[example](063.html)
.offsetParent()|The positioned parent, either relative or absolute of the first selected element.|[example](064.html)

### Collection manipulation ###

这部分内容有点难理解。

Traversal method|Returns a jQuery object containing…|Notes
---|---|---
.add()|The selected elements, plus any additional elements that match the given selector.|[example](065.html) [more](https://api.jquery.com/add/#add-selector)
.addBack([selector])|The selected elements, plus the previous set of selected elements on the internal jQuery stack.|[example](068.html)
.end()|The previous set of selected elements on the internal jQuery stack.结束当前链中最近的一次筛选操作，并将匹配元素集合返回到前一次的状态。|[example](066.html)
.map(callback)|The result of the callback function when called on each selected element.|[example](067.html)
.pushStack(elements)| Add a collection of DOM elements onto the jQuery stack.|jQuery([])<br>.pushStack(<br>document.<br>getElementsByTagName("div"))<br>.remove().end();

### Working with selected elements ###

Traversal method|Description|Notes
---|---|---
.is(selector)|Determines whether any matched element is matched by the given selector expression.|[example](069.html) [more](https://api.jquery.com/is/#is-selector)
.index()|Gets the index of the matched element in relation to its siblings.|[more](https://api.jquery.com/index/)
.index(element)|Gets the index of the given DOM node within the set of matched elements.|[example](070.html)
$.contains(a, b)|Determines whether DOM node b contains DOM node a.|$.contains( document.documentElement, document.body ); // true <br>$.contains( document.body, document.documentElement ); // false
.each(callback)|Iterates over the matched elements, executing callback for each element.|[example](071.html)
.length|Gets the number of matched elements.|[example](072.html)
.get()|Gets an array of DOM nodes corresponding to the matched elements.|[example](073.html)
.get(index)|Gets the DOM node corresponding to the matched element at the given index.|[example](074.html)
.toArray()|Gets an array of DOM nodes corresponding to the matched elements.|[example](075.html)

## Event methods ##

