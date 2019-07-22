// 1.请手写实现拖拽
function drag(){

}
// 2.请实现一个浅拷贝和一个深拷贝
function clone( target ){
    let result = {};
    for(var prop in target){
        if( target.hasOwnProperty(prop)){
            result[prop] = target[prop]
        }
    }
    return result;
}
/**
 * 
 * @param {克隆对象} target 
 * @param {返回结果} result 
 * 1. 遍历 target
 * 2. 获取 克隆对象自身拥有的属性
 * 3. 当 typeof prop 不为对象 则为基础数据类型, 直接赋值给 result 
 * 4. 当prop为null 同时 typeof 不为object时，表示为引用数据类型
 *    判断是 数组还是 对象
 * 5. 递归
 */
function deepClone(target,result){
    let result =result || {};
    const toString = Object.prototype.toString;
    const arrStr = "[object Array]";
    for(let prop in target){
        if(target.hasOwnProperty(prop)){
            if(target[prop !==null && typeof target[prop] =="object"]){
                result[prop]=toString.call(target[prop])==arrStr?[]:{};
                deepClone(target[prop],result[prop]);
            }else{
                result[prop]=target[prop];
            }
        }
    }
    return result;
}
// 3.请实现ES5 map方法Polyfill
if(!Array.prototype.map){
    Array.propotype.map = function(callback , _this ){
        if(Object.prototype.toString.call(callback) !=="[object Function]"){
            throw new Error(callback + "is not a function");
        }

    }
}
// 4.请实现 instanceof的原理。  
// 5.请实现一个bind函数。 
// 6.请实现一个call函数 
// 7.请说明new本质，并写出实现代码 
function create(){
    let obj = new Object();
}
// 8.请实现一个 JSON.stringify 和 JSON.parse 