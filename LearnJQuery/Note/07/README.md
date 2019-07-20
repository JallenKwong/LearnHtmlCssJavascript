
安装jquery插件脚本

	<head>
		<meta charset="utf-8">
		<title>jQuery Book Browser</title>
		<link rel="stylesheet" href="07.css" type="text/css" />
		<script src="jquery.js"></script>
		<script src="jquery.cycle.all.js"></script>
		<script src="07.js"></script>
	</head>

---

目标段

	<ul id="books">
	<li>
	<img src="images/jq-game.jpg" alt="jQuery Game Development
	Essentials" />
	<div class="title">jQuery Game Development Essentials</div>
	<div class="author">Salim Arsever</div>
	</li>
	<li>
	<img src="images/jqmobile-cookbook.jpg" alt="jQuery Mobile
	Cookbook" />
	<div class="title">jQuery Mobile Cookbook</div>
	<div class="author">Chetan K Jain</div>
	</li>
	...
	</ul>


---

使用插件方法

	$(document).ready(function() {
		$('#books').cycle();
	});

---

修改参数默认值

	$.fn.cycle.defaults.timeout = 10000;
	$.fn.cycle.defaults.random = true;

---

关于cookie的jquery插件

[https://github.com/carhartl/jquery-cookie](https://github.com/carhartl/jquery-cookie)

---

EasyUI的Jquery插件

[http://www.jeasyui.net](http://www.jeasyui.net)

---

众多网页模板

[http://www.cssmoban.com](http://www.cssmoban.com)


