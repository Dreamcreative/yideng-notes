// 1 . 
// 写出弹出值，并解释为什么
// alert(a)
// a();
// var a=3;
// function a(){
// alert(10)
// }
// alert(a)
// a=6;
// a();

function a(){}  //因为js代码在执行过程中分为编译阶段和执行阶段 alert会阻塞代码的执行
// 2. 
// 请写出如下输出值，并写出把注释掉的代码取消注释的值，并解释为什么(去掉代码注释后的答案)
// this.a = 20;
// var test = {
// a: 40,
// init:()=> {
// console.log(this.a);
// function go() {
// // this.a = 60;
// console.log(this.a);
// }
// go.prototype.a = 50;
// return go;
// }
// };
// //var p = test.init();
// //p();
// new(test.init())();

60  
50    

// var num = 1;
// function yideng() {
// "use strict";
// console.log(this.num++);
// }
// function yideng2() {
// console.log(++this.num);
// }
// (function() {
// "use strict";
// yideng2();
// })();
// yideng();

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

yidenglaofe

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

for(let i=0; i<list_li.length;i++){
		list_li[i].onclick=function(){}
	}
for(var i =0;i<list_li.length;i++){
    (function(i){
        list_li[i].onclick=function(){}
    
    })(i)
}
for(var i=0 ; i<list_li.length;i++){
    
}

// 4.
// 写出输出值，并解释为什么。(5分)
// function test(m) {
// m = {v:5}
// }
// var m = {k: 30};
// test(m);
// alert(m.v);

5

// 5.
// 请写出代码执行结果，并解释为什么？（5分）
// function yideng() {
// console.log(1);
// }
// (function () {
// if (false) {
// function yideng() {
// console.log(2);
// }
// }
// yideng();
// })();

1

// 6.
// 请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等
// 生以此类推。不允许使用if switch等。

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
// 请用一句话遍历变量a。(禁止用for 已知var a = “abc”)(
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
        return b();
    })
}
// 10.
10 
2
