// 1.请写出如下代码输出值，并解释为什么
console.log(a);
console.log(typeof yideng(a));
var flag = true;
if (!flag) {
  var a = 1;
}
if (flag) {
  function yideng(a) {
    yideng = a;
    console.log("yideng1");
  }
} else {
  function yideng(a) {
    yideng = a;
    console.log("yideng2");
  }
}
/**
 * 解：
 * undefined
 * yideng is not a function
 * 原因: js 在执性时分为编译阶段和执行阶段
 * 编译阶段会将var 声明的变量和function进行声明提前
 * 所以a 为undefined 而 function的声明提前会将方法名提升到
 * 当前顶级作用域的顶部,而函数体会提升到当前作用域的顶部
 * 所以yideng 为undefined
 * 扩展：匿名函数的函数名不能被重写,普通函数的函数名可以被重写，所以yideng被重写了
 */

// 2.请写出如下输出值，并完成附加题的作答
function fn() {
  console.log(this.length);
}
var yideng = {
  length: 5,
  method: function() {
    "use strict";
    fn();
    arguments[0]();
  }
};
const result = yideng.method.bind(null);
result(fn, 1);
/**
 * 解：
 * 0
 * 2
 * 原因：result 的this 被绑定为 null 也就是window
 * 而yideng.method方法内部使用了 "use strict",按道理来说使用了
 * "use strict"的函数体内部 this应该指向 undefined但是 fn函数是在
 * 外部定义的,所以method 方法内的严格模式对fn不起作用所以 fn,的this
 * 还是指向 window。
 * arguments[0]()  :result(fn,1) 调用时fn是由arguments调用的,所以fn内部的
 * this指向arguments ,arguments.length 表示函数的参数个数
 */

// 附加题：
function yideng(a, b, c) {
  debugger;
  console.log(this.length);
  console.log(this.callee.length);
}
function fn(d) {
  arguments[0](10, 20, 30, 40, 50);
}
fn(yideng, 10, 20, 30);
/**
 * 解：
 * 5
 * 3
 * 答：
 * 4
 * 1
 * 原因：fn(yideng,10,20,30)执行时,arguments[0]() 是arguments调用,arguments[0]为yideng()
 * 所以yideng的this指向arguments 为fn的参数长度 4 ,this.callee表示 当前调用函数的函数,即fn
 * 而fn(d) fn.length 为 1
 */

// 3.请问变量a会被GC回收么，为什么呢
function test() {
  var a = "aaa";
  return function() {
    eval("");
    window.eval(""); // 将eval()的作用域提升到window;
  };
}
test()();

var station = "outer";
function init() {
  var station = "inner";
  var fn = new Function("console.log(station)"); // outer
  var fn2 = new Function(console.log(station)); // inner
  fn();
  fn2();
}
init();

//with 内部会产生全局变量
with (true) {
  name = "yideng";
}
console.log(name);
/**
 * 解： 会
 * 答： 不会
 * 原因：因为 eval("")没法做静态语法分析,当当前作用域有eval("")是,则当前作用域所有的变量都不会被GC回收。
 * 解决：将 eval("")提升到全局作用域去, 即使用 window.eval(""),则作用域下的变量会被回收
 *
 * 扩展：eval()并不是不能用,而是看如何使用，webpack中就使用了eval()
 * 1. eval()，不会对词法作用域(LexicalEnvironment)进行任何解绑,除非使用 window.eval();
 * 2. new Function(""),将当前的作用域绑定到了全局的词法作用域(LexicalEnvironment)
 * 3. with() ,放弃掉全部变量的回收
 * 4. try()catch(e) , GC会回收定义的变量,但是不会回收catch中的e,因为e延长了词法作用域的链(e并没有定义,但是却可以使用)
 */

// 4.清写出以下代码输出值，并解释原因。
Object.prototype.a = "a";
Function.prototype.a = "a1";
function Person() {}
var yideng = new Person();
console.log(Person.a);
console.log(yideng.a);
console.log((1).a); // (1.)有意义typeof(1.) ==="number"
// console.log(1.a);
console.log(yideng.__proto__.__proto__.constructor.constructor.constructor);
console.log(Object.prototype);
console.log(Function.prototype);
//  Object.prototype 和 Function.prototype 打印的内容差距过大的原因是什么
/**
 * 解：a1 , a ,  a1 , 报错 , Function
 * 答：a1 , a , a , 报错
 * 原因：Function.prototype使用v8引擎内部创建的
 */

// 5.请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承
// 要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。
// Cruze子 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：
// 将 红色的 Cruze买给了小王价格是14万。很多库里会使用Object.create(null)是什么原因么
// ES6
class Car {
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }
  sall() {}
}
class Cruze extends Car {
  constructor(color, price) {
    super(color, price);
    this.color = color;
    this.price = price;
  }
  sall() {}
}
// ES5
function Car(color, price) {
  this.color = color;
  this.price = price;
}
Car.prototype.sall = function() {
  console.log(this.color);
};
function Cruze(color, price) {
  Car.call(this, color, price);
}
// Cruze.prototype = new Car();// 这是按引用传递,一旦Car.prototype改变，那么Cruze的prototype也改变，所以只能先拷贝一份Car.prototype,这就是使用Object.create()的原因
const __proto = Object.create(Car.prototype); // 复制一份Car.prototype
__proto.constructor = Cruze; //修正 constructor
Cruze.prototype = __proto; 
var cruze = new Cruze("blue");
console.log(cruze.sall());
// 6.请写出你了解的ES6元编程
/**
 * 
 */

// 7.请按照下方要求作答，并解释原理？请解释下babel编译后的async原理
let a = 0;
++a;
let yideng = async () => {
  a = a + (await 10);
  console.log(a);
};
yideng();
console.log(++a); // 1
/**
 * 解：1 ,10
 * 原因：async 是异步执行,会等同步代码执行完毕之后才开始执行,并且async会将使用的变量
 * 保存在栈中,使得变量不会随着同步代码的执行而受到影响
 * 目的：为了保证结果按照正常语序执行，是原来genrator 的特性 async 保留了下来
 */

// 8.请问点击<buttion id=“test”></button>会有反应么？为什么？能解决么
$("#test").click(function(arguments) {
  console.log(1);
});
setTimeout(function() {
  console.log(2);
}, 0);
while (true) {
  console.log(Math.random());
}
/**
 * 解：不会有反应,因为代码会一直在 while中执行
 * 原因：while(true) 是一个死循环,一旦进入就不会再停止
 * 解决：再给JS开启一个线程来执行 while(true){} 部分的代码
 const myWorker = new Worker("while.js");
 myWorker.onmessage = function(event) {
  console.log(event.data);
 };
 //  while.js
 while (true) {
  postMessage(Math.random());
 }
 *
 */

// 9.请先书写如下代码执行结果，并用ES5实现ES6 Promise A+规范的代码，
// 同时你能解 释下如何使用Promise完成事物的操作么？
const pro = new Promise((resolve, reject) => {
  const innerpro = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    });
    console.log(2);
    resolve(3);
  });
  innerpro.then(res => console.log(res));
  resolve(4);
  console.log("yideng");
});
pro.then(res => console.log(res));
console.log("end");
/**
 * 解：2 ,yideng, end , 3 ,4
 * 原因：new Promise()部分是同步执行的,并且一旦Promise内部的状态一旦改变了就定型了,不会再次改变
 */

// 10.请写出如下输出值，并解释为什么
var s = [];
var arr = s;
for (var i = 0; i < 3; i++) {
  var pusher = {
      value: "item" + i
    },
    tmp;
  if (i !== 2) {
    tmp = [];
    pusher.children = tmp;
  }
  arr.push(pusher);
  arr = tmp;
}
console.log(s[0]);
/**
 * 解：{value:item1,children:[]}
 * 答：
 s[0] = {
  value: "item0",
  children: [
    {
      value: "item1",
      childen: [
        {
          value: "item2"
        }
      ]
    }
  ]
};
 * 原因： s 和 arr的地址相同 ,在第一次循环之后arr的类型改变了 s由于和arr的地址相同 所以arr.push() 就是向操作的s ，
 * 而s.value 又是一个对象，所以pusher.childen = tmp ([])
 */

// 【附加题】.请描述你理解的函数式编程，
// 并书写如下代码结果。那么你能使用 Zone+RX 写出一段FRP的代码么
var Container = function(x) {
  this.__value = x;
};
Container.of = x => new Container(x);
Container.prototype.map = function(f) {
  return Container.of(f(this.__value));
};
Container.of(3)
  .map(x => x + 1)
  .map(x => "Result is " + x);
