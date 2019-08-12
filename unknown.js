/**  ./yidengWorks/ */

/**预读班JavaScript基础测试.js */
// 1.
/**解释
 * 在浏览器的发展过程中
 * 浏览器会把函数的提升到当前的作用域顶端
 * 但是会把函数名提升到作用域顶级 (全局作用域 或者是函数作用域顶级)
 * js 作用域分为 函数作用域 全局作用域 和 eval()作用域
 *
 */
if (false) {
  var a;
  function b() {}
}
console.log(a); // undefined
console.log(b); // undefined 这里为什么b 是undefined

/** firstweek.js */
/** 2. with / new Function("") / eval("") /try..catch 
*/
/**3. 
 * 1..a 
 * / 
 * function Person() {};
 * var yideng = new Person();
 * console.log(yideng.__proto__.__proto__.constructor.constructor.constructor); 
*/

/**4.
 * class 类 / 
 * Object.create() /
 * Reflect
 */

 /**5.
  * async await 
  * 
  */