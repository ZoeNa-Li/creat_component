//构造函数
function Router(){
	this.routes = {};
	this.currentUrl = "";

}
//存储路由更新时的回调函数，变量名为hash值，值为回调函数，用于更新回调
Router.prototype.route = function(path, callback){
	this.routes[path] = callback || function (){};
}

//refer执行对应url时更新页面
Router.prototype.refresh = function(){
	this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();//执行回调函数
}
//init 监听url hash 事件，事件回调函数为refresh用于执行回调函数，更新页面
Router.prototype.init = function(){
	window.addEventListener('load', this.refresh.bind(this), false);
	window.addEventListener('hashchange', this.refresh.bind(this), false);
}
//window对象挂载
window.Router = new Router();
window.Router.init();