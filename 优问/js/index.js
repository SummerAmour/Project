//banner大图无缝滚动
var item = document.getElementById("banner");
var itemCon = document.getElementById("bannerCon");
itemCon.innerHTML += itemCon.innerHTML;
//item.scrollLeft=500;
var picWidth = 1366;
var moveT, moveS;
var tout = 2000;

function moveO() {
	if(item.scrollLeft % picWidth == 0) {
		clearInterval(moveT);
		moveS = setTimeout("moveF()", tout);
	}
	if(item.scrollLeft <= itemCon.scrollWidth / 2) {
		item.scrollLeft++;
	} else {
		item.scrollLeft = 0;
	}
}

function moveF() {
	item.scrollLeft++;
	moveT = setInterval("moveO()", 10);
}
moveF();
item.onmouseover = function() {
	clearInterval(moveT);
	clearInterval(moveS);
}
item.onmouseout = function() {
	moveT = setInterval("moveO()", 10);
}

//tab切换
/*var tabTop = document.getElementById("tabTop").getElementsByTagName("li");
var tabCen = document.getElementById("tabCen").getElementsByTagName("ul");
//var tabFoot = docuemnt.getElementById("topFoot").getElementsByTagName("ul");
for(var i = 0; i < tabTop.length; i++){
	tabTop[i].onmouseover = function(){
		tabs(this);
	}
}
function tabs(obj){
	for(var i = 0; i < tabCen.length; i++){
		if(tabTop[i] == obj){
			tabCen[i].className = "";
//			tabTop[i].className = "active";
//			tabCen[i].className = "active";
		}else{
			tabCen[i].className = "hid";
			tabTop[i].className = "";
		}
	}
}
*/
var oDiv = document.getElementById("tabTop").getElementsByTagName("li");
var oD = document.getElementsByName("course");

var oo = document.getElementsByName("subject");
var gg = document.getElementById("topFoot").getElementsByTagName("li");
for(var i = 0; i < oDiv.length; i++) {
	oDiv[i].onmouseover = function() {
		add(this);
	}
}

function add(o) {
	for(var j = 0; j < oD.length; j++) {
		if(oDiv[j] == o) {
			oDiv[j].className = "act";
			oD[j].className = "bl1";
		} else {
			oDiv[j].className = "";
			oD[j].className = "hid";
		}
	}
}

for(var i = 0; i < oo.length; i++) {
	oo[i].onmouseover = function() {
		agg(this);
	}
}

function agg(c) {
	for(var j = 0; j < gg.length; j++) {
		if(oo[j] == c) {
			oo[j].className = "act1";
			gg[j].className = "bl1"
		} else {
			oo[j].className = "";
			gg[j].className = "hid";
		}
	}
}

//图片旋转
var xz = document.getElementById("rotating").getElementsByTagName("li");
for(var i = 0; i < xz.length; i++) {
	xz[i].onmouseover = function() {
		//		this.style.transform="rotateX(360deg)";
		this.setAttribute('style', 'transform: rotateX(360deg)');

	}
}

//var retu = document.getElementById("retu");
//window.onscroll = function(){
//	var st = document.body.scrollTop||document.documentElement.scrollTop;
//	if(st > 0){
//		retu.onclick = function(){
//			st = 0;
//		}
//	}
//}

//图片缩放
var sf = document.getElementById("size").getElementsByTagName("a");
for(var i = 0; i < sf.length; i++) {
	sf[i].onmouseover = function() {
		this.setAttribute("style", 'transform: scale(1.2)')
	}
	sf[i].onmouseout = function() {
		this.setAttribute("style", 'transform: scale(1)')
	}
}


//三级联动
//声明阶段
var pres = ["小学", "初中", "高中", "冲刺班"]; //直接声明Array
//声明年级
var cities = [
	["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
	["初一", "初二", "初三"],
	["高一", "高二", "高三"],
	["小五班", "预备班", "中考冲刺", "高考冲刺"]
];
//声明科目
var areas = [
		[//小学课程
			["语文", "数学", "英语"],
			["语文", "数学", "英语"],
			["语文", "数学", "英语"],
			["语文", "数学", "英语"],
			["语文", "数学", "英语"],
			["语文", "数学", "英语"]
		],
		[//初中课程
			["语文", "数学", "英语"],
			["语文", "数学", "英语", "物理"],
			["语文", "数学", "英语", "物理", "化学"]
		],
		[//高中课程
			["语文", "数学", "英语", "物理", "化学"],
			["语文", "数学", "英语", "物理", "化学"],
			["语文", "数学", "英语", "物理", "化学"]
		],
		[//冲刺班课程
			["语文", "数学", "英语"],
			["语文", "数学", "英语"],
			["语文", "数学", "英语", "物理", "化学"],
			["语文", "数学", "英语", "物理", "化学"]
		]
	]
	//设置一个省的公共下标
var pIndex = -1;
var preEle = document.getElementById("pre");
var cityEle = document.getElementById("city");
var areaEle = document.getElementById("area");
//先设置省的值
for(var i = 0; i < pres.length; i++) {
	//声明option.<option value="pres[i]">Pres[i]</option>
	var op = new Option(pres[i], i);
	//添加
	preEle.options.add(op);
}

function chg(obj) {
	if(obj.value == -1) {
		cityEle.options.length = 0;
		areaEle.options.length = 0;
	}
	//获取值
	var val = obj.value;
	pIndex = obj.value;
	//获取ctiry
	var cs = cities[val];
	//获取默认区
	var as = areas[val][0];
	//先清空市
	cityEle.options.length = 0;
	areaEle.options.length = 0;
	for(var i = 0; i < cs.length; i++) {
		var op = new Option(cs[i], i);
		cityEle.options.add(op);
	}
	for(var i = 0; i < as.length; i++) {
		var op = new Option(as[i], i);
		areaEle.options.add(op);
	}
}

function chg2(obj) {
	var val = obj.selectedIndex;
	var as = areas[pIndex][val];
	areaEle.options.length = 0;
	for(var i = 0; i < as.length; i++) {
		var op = new Option(as[i], i);
		areaEle.options.add(op);
	}
}