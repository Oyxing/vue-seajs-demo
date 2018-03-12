define(function(require,exports,moudle){
//引用html文件
    var temp=require("../views/home.tpl")
//引用首页组件
    // var index=require("index");
// 引用底部组件
    // var footerCom=require("components/footerCom");
    var app={
        data:function(){
            return{
                msgess:'home'
            }
        },
        template:temp,
    }
    exports.app=app
})