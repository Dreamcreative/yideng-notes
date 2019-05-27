# "use strict" 严格模式
1. 概述
除了正常运行模式,ES5添加了第二种运行模式,"严格模式"(strict mode).这种模式使得JavaScript在更严格的条件下运行
目的
* 消除JavaScript语法的一些不合理、不严谨之处,减少一些怪异行为
* 消除代码运行的一些不安全之处,保证代码运行的安全
* 提高编译器效率,增加运行速度
* 为未来新版本的JavaScript做好铺垫
2. 标志
```
"use strict"
```
老版本的浏览器会把它当做一行普通字符串,加以忽略
3. 如何调用
* 针对整个脚本文件
将"use strict" 放在脚本文件的第一行,则整个脚本将以"严格模式"运行.如果这行语句不在第一行,则无效
```
<script>
　　　　"use strict";
　　　　console.log("这是严格模式。");
　　</script>

　　<script>
　　　　console.log("这是正常模式。");kly, it's almost 2 years ago now. I can admit it now - I run it on my school's network that has about 50 computers.
　　</script>
```
* 针对单个函数
将"use strict"放在函数体的第一行,则整个函数以"严格模式"运行
```
function strict(){
　　　　"use strict";
　　　　return "这是严格模式。";
　　}

　　function notStrict() {
　　　　return "这是正常模式。";
　　}
```
* 脚本文件的变通写法
因为第一种调用方法不利于文件合并,所以更好的做法是,借用第二种方法,将整个文件放在一个立即执行的匿名函数中
```
(function (){
　　"use strict";
　　// some code here
})();
```
4. 语法和行为改变
严格模式对JavaScript 的语法和行为,都做了一些改变
* 全局变量显示声明
正常模式下,如果一个变量没有声明就赋值,默认是全局变量。严格模式禁止这种用法,全局变量必须显示声明
```
"use strict";

　　v = 1; // 报错，v未声明

　　for(i = 0; i < 2; i++) { // 报错，i未声明
　　}
```
因此,严格模式下,变量都必须先声明,然后使用
* 静态绑定
JavaScript语言的一个特点,就是运行"动态绑定",即某些属性和方法到底属于哪一个对象,不是在编译时确定的,而是在运行时确定的
严格模式对动态绑定做了限制。某些情况下,只运行静态绑定.也就是说,属性和方法到底归属那个对象,在编译阶段就确定.这样有利于编译效率的提高,也使得代码更易阅读,更少出现意外
   * 禁止使用 with语句
   因为with语句无法在编译时确定,属性到底归属那个对象
```
   "use strict";
　　var v = 1;
　　with (o){ // 语法错误 
　　　　v = 2;
　　}
```
   * 创设eval作用域
    正常模式下,JavaScript有两种变量作用域(scope)：全局作用域和函数作用域
    严格模式创设了第三种作用域：eval作用域
    正常模式下,eval的作用域,取决于它处于全局还是函数作用域.严格模式下,eval语句本身就是一个作用域,不在能够生产全局变量,它所生产的变量只能用于eval内部
```
    "use strict";
　　var x = 2;
　　console.info(eval("var x = 5; x")); // 5
　　console.info(x); // 2
```
* 增强的安全措施
   * 禁止this 关键字指向全局对象
```
function f(){
　　return !this;
} 
// 返回false，因为"this"指向全局对象，"!this"就是false

function f(){ 
　"use strict";
　return !this;
} 
// 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。
``` 
   * 禁止在函数内部遍历调用栈
```
function f1(){
 "use strict";
 f1.callee; // 报错
 f1.arguments //报错
}
f1();
```
   * 禁止删除变量
严格模式下无法删除变量,只有configurable 设置为true 的对象属性,才能被删除
```
"use strict";
var x ;
delete x; // 报错
var o = Object.create(null,{"x",{
   value:1,
   configurable:true
}})
delete o.x ; // 删除成功
```
   * 显式报错
1. 正常情况下,对一个对象的只读属性进行赋值,不会报错,只会默默地失败,在严格模式下,将报错
```
"use strict";
var o= {};
Object.defineProperty(o,"x",{
   value:1,
   writable:false
})
o.x =2 // 报错
```
2. 严格模式下,对一个使用getter方法读取的属性进行赋值,会报错
```
"use strict";
var o={
   get v(){
      return 1;
   }
}
o.v = 2 //报错
```
3. 严格模式下,对禁止扩展的对象添加新属性,会报错
```
"use strict";
var o={}
Object.preventExtensions(o);
o.v=1 ; // 报错
```
4. 严格模式下, 删除一个不可删除的属性,会报错
```
"use strict";
delete Object.prototype; //报错
```
   * 重名错误
严格模式新增了一些语法错误
1. 对象不能有重名的属性
正常模式下,如果对象有多个重名属性,则最后赋值的那个属性会覆盖前面的值.严格模式下,这个属于语法错误
```
"use strict";
　　var o = {
　　　　p: 1,
　　　　p: 2
　　}; // 语法错误
```
2. 函数不能有重名的参数
正常模式下,如果函数有多个重名的参数,可以用 arguments[i]读取.严格模式下,这属于语法错误
```
"use strict";
　　function f(a, a, b) { // 语法错误
　　　　return ;
　　}
```
  * 禁止八进制表示法
正常模式下,整数的第一位如果是0,表示八进制数,比如0100等于十进制的64,严格模式禁止这种表示法m整数第一位为0,将报错
```
"use strict";
var n=0100 ; // 报错
```
  * 对arguments对象的限制
arguments是函数的参数对象,严格模式对它的使用做了限制
1. 不允许对arguments赋值
```
"use strict";

　　arguments++; // 语法错误

　　var obj = { set p(arguments) { } }; // 语法错误

　　try { } catch (arguments) { } // 语法错误

　　function arguments() { } // 语法错误

　　var f = new Function("arguments", "'use strict'; return 17;"); // 语法错误
```
2. arguments不在追踪参数的变化
```
function f(a) {

　　　　a = 2;

　　　　return [a, arguments[0]];

　　}

　　f(1); // 正常模式为[2,2]

　　function f(a) {

　　　　"use strict";

　　　　a = 2;

　　　　return [a, arguments[0]];

　　}

　　f(1); // 严格模式为[2,1]
```
3. 禁止使用arguments.callee
这意味着,你无法在匿名函数内部调用自身了
```
"use strict";

　　var f = function() { return arguments.callee; };

　　f(); // 报错
```
   * 函数必须声明在顶层
   将来JavaScript的新版本会引入"块级作用域".为了与新版本接轨,严格模式只允许在全局作用域或函数作用域的顶层声明函数.也就是说,不允许在非函数的代码块内声明函数
```
"use strict";
if(true){
   function f (){} //报错
}
for(){
   function f (){} // 报错
}
```
   * 保留字
   为了向将来JavaScript的新版本过度,严格模式新增了一些保留字,implements, interface, let, package, private, protected, public, static, yield,class, enum, export, extends, import, super,const ,使用保留字作为变量名将会报错
```
function package( protected ){ // 语法错误
   "use strict";
   var implement; // 语法错误
}
```
5. 参考
* [Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)