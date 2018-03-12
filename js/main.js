
define(function(require,exports,moudle){
    var Router = require("../router/router.js");
//定义路由对象
    var router = new VueRouter({
        history: true,
        routes:Router.router    
    });
//创建Vue实例
    var app = new Vue({
        el:'#app',
        router:router,
        data:function(){
            return {
                msg:'aaaaa'
            }
        }
    });
})