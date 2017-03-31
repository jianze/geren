var aa=angular.module('app',['ngRoute']);
aa.config(function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"html/wo.html"
	}).when("/jinyan",{
		templateUrl:"html/jinyan.html",
		controller:"jinyan"
	}).when("/xiangmu",{
		templateUrl:"html/xiangmu.html",
		controller:"jinyan"
	}).when("/jineng",{
		templateUrl:"html/jineng.html",
		controller:"jinyan"
	});
});
var navarr=[
	{
		id:2,
		biao:"经验",
		tubiao:"icon-gongzuob",
		url:"#!/jinyan"
	},{
		id:3,
		biao:"作品",
		tubiao:"icon-xiangmu",
		url:"#!/xiangmu"
	},{
		id:4,
		biao:"技能",
		tubiao:"icon-renwujineng",
		url:"#!/jineng"
	}
];
var jinyanarr=[
	{
		id:1,
		sj:"2015年6月~至今",
		gs:"青岛嘉元正合科技有限公司",
		ms:"web前端开发工程师 负责前端页面的开发、修改、调试和优化、使用原生JS+angularJS进行前端开发"
	}
];
var xiangarr=[
	{
		id:1,
		biao:'太原市艺鸿菀晋韵文化项目',
		img1:'images/z7.jpg',
		img2:'images/z8.jpg'
	},{
		id:2,
		biao:'玩吧 混合app',
		img1:'images/z5.jpg',
		img2:'images/z6.jpg'
	},{
		id:3,
		biao:'IYOU 混合app',
		img1:'images/z4.jpg',
		img2:'images/z3.jpg'
	},{
		id:4,
		biao:'本地便签Web应用',
		img1:'images/z1.jpg',
		img2:'images/z2.jpg'
	}
];
var jinengarr=[
	{
		id:1,
		tubiao:'icon-h5',
		jn:'HTML5'
	},{
		id:2,
		tubiao:'icon-css',
		jn:'CSS3'
	},{
		id:3,
		tubiao:'icon-jquery',
		jn:'jQuery'
	},{
		id:4,
		tubiao:'icon-javascript',
		jn:'JavaScript'
	},{
		id:5,
		tubiao:'icon-06',
		jn:'MySQL'
	},{
		id:6,
		tubiao:'icon-socialangular',
		jn:'AngularJS'
	},{
		id:7,
		tubiao:'icon-bootstrap',
		jn:'Bootstrap'
	},{
		id:8,
		tubiao:'icon-nodejs',
		jn:'Node.js'
	},{
		id:9,
		tubiao:'icon-react',
		jn:'React'
	}
];
aa.controller('nav',function($scope,$http){
	$scope.navarr=navarr;
});
aa.controller('jinyan',function($scope,$http){
	$scope.jinyanarr=jinyanarr;
	$scope.xiangarr=xiangarr;
	$scope.jinengarr=jinengarr;
});