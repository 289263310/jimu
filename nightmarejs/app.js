var Nightmare = require('nightmare');
var nightmare = Nightmare();

nightmare
	.goto('https://box.jimu.com/Venus/List')
	.evaluate(function(){
		var project = document.querySelectorAll('.project');
		var projectLen = project.length;
		var res = [];
		project.forEach(function(item, index) {
			res[index] = {
				name: item.querySelector('.title').innerHTML,
				rate: item.querySelector('.invest-item-profit').innerText,
				month: item.querySelector('.time .num').innerText,
				status: item.querySelector('.status .num').innerText,
			};
		});
		return res;
	})
	.then(function (res) {
		console.log(res);
	});