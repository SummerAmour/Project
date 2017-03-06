//滚动一定高度导航栏出现

//fullPage配置
(function() {
	$('#box').fullpage({
		sectionsColor: ['#F6F4F5', '#fff', '#fff', '#F6F4F5', '#fff'],
//		scrollBar: true,
		controlArrowColor: 'rgba(245,245,245,0.55)',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		menu: '#menu'
	});
})();
//雨滴效果
(function demo() {
	var engine = new RainyDay('canvas', 'demo1', window.innerWidth, window.innerHeight);
	engine.gravity = engine.GRAVITY_NON_LINEAR;
	engine.trail = engine.TRAIL_DROPS;
	engine.rain([
		engine.preset(0, 2, 500)
	]);
	engine.rain([
		engine.preset(3, 3, 0.88),
		engine.preset(5, 5, 0.9),
		engine.preset(6, 2, 1),
	], 100);
})();

//返回顶部
(function(){
	$("#top").click(function(){
		var speed=200;//滑动的速度
		$('body,html').animate({ scrollTop: 0 }, speed);
		return false;
	});
})();

(function(){
	$('.fa-renren').click(function(){
		alert("恭喜你，收藏成功！");
	});
})();
