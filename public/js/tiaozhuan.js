$(function(){
//跳转至预约
$("#yuyue").on("tap",function(){
	window.location.href="./yuyue.html"
})
//跳转至信息
$("#xinxi").on("tap",function(){
	window.location.href="./xinxi_xiaoxi.html"
})
//跳转至我
$("#wo").on("tap",function(){
	window.location.href="./me.html"
})
//跳转至首页
$("#shouye").on("tap",function(){
	window.location.href="./first.html"
})
//弹出发布窗口
$("#fabu").on("tap",function(){
	$(".fabu_background").show()
	$(".fabu_foot_box").css("height","auto")
	$(".guanbi").show()
})
document.getElementsByClassName('fabu_background')[0].addEventListener('touchstart', function(e){
	e.preventDefault();
})
$(".guanbi").on("tap",function(){
	$(".fabu_background").hide()
	$(".fabu_foot_box").css("height","0")
	$(".guanbi").hide()
})
//跳转到发布需求
$(".fabu_xuqiu").on("tap",function(){
	window.location.href="./fabuxuqiu.html"
})
//跳转到发布房源
$(".fabu_fangyuan").on("tap",function(){
	window.location.href="./fabufangyuan.html"
})



})