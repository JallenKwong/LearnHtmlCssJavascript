# Sending Data with Ajax #

Asynchronous JavaScript and XML (Ajax)

Ajax method|Description|Notes
---|---|---
$.ajax([url], options)|Makes an Ajax request using the provided set of options. This is a low-level method that is often called via other convenience methods.|-
.load(url, [data], [callback])|Makes an Ajax request to url and places the response into the matched elements.|-
$.get(url, [data], [callback], [returnType])|Makes an Ajax request to url using the GET method.|-
$.getJSON(url, [data], [callback])|Makes an Ajax request to url, interpreting the response as a JSON data structure.|-
$.getScript(url, [callback])|Makes an Ajax request to url, executing the response as JavaScript.|-
$.post(url, [data], [callback], [returnType])|Makes an Ajax request to url using the POST method.|-


We have learned that the Ajax methods provided by jQuery can help us to load data in several different formats from the server without a page refresh. We can execute scripts from the server on demand and send data back to the server.