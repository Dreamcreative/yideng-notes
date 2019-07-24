// 1 .写出弹出值，并解释为什么
// alert(a)
// a();
// var a=3;
// function a(){
// alert(10)
// }
// alert(a)
// a=6;
// a();

/**
 *  扩展 ： 变量提升如果是使用var声明的变量会提升到 当前执行环境的顶部
 * 而如果是let const 或者是function 定义的
 * function只会提升到当前作用域的顶部
 * 而let const 不会发生变量的提升
 */
// if(false){
//     var a 
//     function b(){}
// }
// console.log(a); // undefined
// console.log(b); // undefined  在 unknown.js


//执行循序
// function a(){}
// var a ;
// alert(a)
// a()
// a=3;
// a=6
// a()
/**
 * 原因 : 函数的变量提升比 变量优先级高 
 * 在代码编译阶段，js会将函数，变量的声明提升到当前作用域顶部，
 * 此时如果有 同名的函数和变量a ,那么此时输出a得到的是函数(因为变量只是被声明还没有被赋值，所以同名时取函数)
 * 当代码执行时，一直到 变量a 被赋值的哪一行，输出a才会变为变量a
 */
function a(){}  //因为js代码在执行过程中分为编译阶段和执行阶段 alert会阻塞代码的执行
10
3
// 2.请写出如下输出值，并写出把注释掉的代码取消注释的值，并解释为什么(去掉代码注释后的答案)
// this.a = 20;
// var test = {
//     a: 40,
//     init:()=> {
//         console.log(this.a);
//         function go() {
//             this.a = 60;
//             console.log(this.a);
//         }
//         go.prototype.a = 50;
//         return go;
//     }
// };
// var p = test.init();
// p();
// new(test.init())();

/**
 * 原因 : es6 的箭头函数没有this,箭头函数内this指向当前箭头还是最近的对象
 * 
 */
20
60  
60
60 

// var num = 1;
// function yideng() {
//     "use strict";
//     console.log(this.num++);
// }
// function yideng2() {
//     console.log(++this.num);
// }
// (function() {
//     "use strict";
//     yideng2();
// })();
// yideng();

// 答案： 2 报错  //严格模式下this 指向 undefined
/**
 * 原因：在非严格模式下，this如果没有指向默认会指向window,
 * 在严格模式下 this如果没有指向的话表示 undefined 
 * 在函数内写严格模式则表示，严格模式只在当前的函数作用域内有效
 * 如果 当前函数内使用严格模式，里面调用了外面的函数，那么这个严格模式对调用函数没有任何影响
 * 想要对所有代码都使用严格模式,就 将"use strict" 写在整个js 文件的顶部
 */
NaN //严格模式下this 指向 undefined

// 2.1
// function C1(name) {
// if (name) this.name = name;
// }
// function C2(name) {
// this.name = name;
// }
// function C3(name) {
// this.name = name || 'fe';
// }
// C1.prototype.name = "yideng";
// C2.prototype.name = "lao";
// C3.prototype.name = "yuan";
// console.log((new C1().name) + (new C2().name) + (new C3().name));
/**
 * 原因 ：new C2().name 为undefined  js 运算符优先级
 * c2.name 优先级高于  new C2() ， 所以相当于先是 var c2 = new C2() ,再 c2.name
 * 而 C2 函数并没有传入name 所以 C2 的name 为undefined
 */
yidenglaofe  // yidengundefinedfe

// 3   
// 请写出如下点击li的输出值，并用三种办法正确输出li里的数字。(12分)
// <ul>
// <li>1</li>
// <li>2</li>
// <li>3</li>
// <li>4</li>
// <li>5</li>
// <li>6</li>
// </ul>
// <script type="text/javascript">
// var list_li = document.getElementsByTagName("li");
// for (var i = 0; i < list_li.length; i++) {
// list_li[i].onclick = function() {
// console.log(i);
// }
// }
// </script>

/**
 * 使用 let 声明 产生快作用域
 */
for(let i=0; i<list_li.length;i++){
    list_li[i].onclick=function(){}
}
/**
 * 使用闭包，但是 onclick事件默认会传入 envent 
 * 所以需要使用变量，把传入闭包的 i保存起来
 */
for(var i =0;i<list_li.length;i++){
    (function(i){
        var j=i;
        list_li[j].onclick=function(){
            console.log(i)
        }
    })(i)
}
/**
 * this表示调用的对象 ，在这里就是 list_li[i]，可以直接获取
 */
for(var i=0 ; i<list_li.length;i++){
    list_li[j].onclick=function(){
        console.log(this.innerHTML);
    }
}

// 4.
// 写出输出值，并解释为什么。(5分)
// function test(m) {
// m = {v:5}
// }
// var m = {k: 30};
// test(m);
// alert(m.v); // undefined
// 函数的传入参数是按值传递， 如果是引用类型传入的是它的地址
/**
 * 原因 ：函数的传参是按值传递,基本类型是值,引用类型是 引用的地址,
 * 这里 将 m的地址传入了 test(), 而 test()函数内，将传入的 m的地址重写了，(就是 test()将外面传入的地址用 {v:5}的地址替换掉了)
 * 所以alert(m.v)的时候,使用的地址还是重写之前的地址，但是 test()函数已经将这个地址改变了，所以就访问不到了
 */

// 5.请写出代码执行结果，并解释为什么？（5分）
// function yideng() {
//     console.log(1);
// }
// (function () {
//     if (false) {
//         function yideng() {
//             console.log(2);
//         }
//     }
//     yideng();
// })();

/**
 * 原因： yideng is not a function
 * 因为 浏览器的发展阶段
 * 函数作用域会提升到当前作用域的顶端
 * 但是会把 函数名提升到作用域顶级
 */


// 6.
// 请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等
// 生以此类推。不允许使用if switch等。
/**
 * 答案 Math.floor((100-x)/10)+1;
 */
function rank(score){
    var rank={
        "10":"特等生",
        "9":"一等生",
        "8":"二等生",
        "7":"三等生",
        "6":"四等生",
        "5":"五等生",
        "4":"六等生",
        "3":"七等生",
        "2":"八等生",
        "1":"九等生",
        "0":"十等生",
    };
    return rank[Math.floor(score/10)];
}

// 7.
// 请用一句话遍历变量a。(禁止用for 已知var a = “abc”)
var a = "abc";
[... a ];
function index(a){
    a=a.split("");
    while(a.length>0){
        a.shift();
    }
}
// 8.
// 请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
// 要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子
// 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：将 红色的
// Cruze买给了小王价格是14万。

class Car{
    constructor(color,price){
        this.color=color;
        this.price=price;
    }
    sale(){

    }
}
class Cruze extends Car{
    constructor(){
        super();
        this.color = "red";
        this.price=140000;
    }
    sale(){
        console.log(`将${this.color}的Cruze卖给了小王价格是${this.price}`)
    }
}
// 9.
// 请你写出如何利用EcmaScript6/7（小Demo）优化多步异步嵌套的代码？
async function better(a,b){
    let resulta = await a();
    let resultb = await b();
}
function better2(a,b){
    return Promise.resolve().then(res=>{
        return a();
    }).then(res=>{
        return b ();
    })
}
// 10.
// 写出如下代码执行结果，并解释为什么。
//  var length = 10; 
//  function fn() {   console.log(this.length); }
// var yideng = {   
//     length: 5,   
//     method: function(fn) {     fn();     arguments[0]();   } 
// }; 
// yideng.method(fn, 1);
/**
 * 原因： arguments 代表实参 fn挂在 arguments 上 所以是arguments 调用的fn
 */
10 
2
