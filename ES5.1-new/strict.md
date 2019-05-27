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
   "use strict";

　　var v = 1;

　　with (o){ // 语法错误 
　　　　v = 2;
　　}
   * 创设eval作用域
    正常模式下,JavaScript有两种变量作用域(scope)：全局作用域和函数作用域
    严格模式创设了第三种作用域：eval作用域

    正常模式下,eval的作用域,取决于它处于全局还是函数作用域.严格模式下,eval语句本身就是一个作用域,不在能够生产全局变量,它所生产的变量只能用于eval内部
    "use strict";
　　var x = 2;
　　console.info(eval("var x = 5; x")); // 5
　　console.info(x); // 2
5. 参考
[Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)