//在kanbilibili下载视频文件信息收集工具脚本
//要确保加载了jQuery
var downloadUtils = {
	clickLoadMoreManyTimes:function(){
		//十次点击“加载更多”
		for(var i=0;i < 30;i++){$('.download~a.more')[0].click()}
	},
	getDownloadUrls:function(flag){//flag表示是否在URL前添加文件大小等相关信息
		//文件相关信息与下载地址们
		var str=''
		$('.download a[target="_blank"]').each(function( index ) {
			var $this = $(this)
			
			if(flag)
				str+=($this.text()+":")

			str+=($this.attr('href')+"\n")
		})
		console.log(str)
	},
	countFilesTotalSize:function(){
		//计算加载总文件大小
		var pf = window.parseFloat
		var total = 0

		$('p.size').each(function( index ) {
			var $this = $(this)
			
			var text = $this.text().slice(3)
			//50.83M
			if(text=="error"){
				console.log("There's a error.Index: " + index)
				return
			}else{
				total += pf(text)
			}
			
		})
		console.log(total + "M")//9559M		
	},
	getFileOfficialName:function(){
		//打印文件名 (按md的方式)
		var str = ''
		$('.list-box a').each(function(index, elem){
			var temp = ''
			var a = index + 1
			
			if (a < 10){
				temp = '00' + a
			}else if(a >= 10 && a < 100){
				temp = '0' + a
			}else{
				temp = '' + a
			}
			var title = $(elem).attr('title').replace('[','(').replace(']',')')
			str+=("["+title+"]("+temp+'.flv)\n\n')
		})
		console.log(str)
	},
	moveToFoot:function(){
		//跳转页面底部偏上一点
		$(document).scrollTop($(document).height() - 1800);
	}
};var du = downloadUtils
