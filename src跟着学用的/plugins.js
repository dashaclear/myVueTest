export default {
    install(Vue){
        //我们这里接受的形参就是 Vue构造函数，我们可以在这里用Vue的全局指令i
        //也可以在Vue.prorotype上定义方法,这样vm和组件实例对象就都
        // 可以去用这些方法（因为VueComponent构造函数继承了Vue构造函数）
        Vue.prototype.hello = function(){
            console.log('hello');
        }
        console.log('这是一个插件');
    }
}