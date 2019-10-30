# ES5新增
## forEach
对数组的每个元素执行一次提供的函数(不会改变原数组)
```
var array1 = ['a', 'b', 'c'];
array1.forEach(function(element) {
  console.log(element);
});
```
语法: arr.forEach(callback[,thisArg])
callback(currentValue,index,array)
forEach 方法按升序为数组中含有效值的每一项执行一次callback函数,那些已删除或者未初始化的项将被跳过(例如稀疏数组上)
forEach为每个数组元素执行callback函数,不像map或者reduce,总是返回undefined,不会改变原数组,但是callback被调用时可能会改变原数组。不能中止或者跳出循环,除了抛出一个异常
## map
创建一个新数组,其结果是该数组中的每个元素都调用一个提供的函数后返回的结果(不会改变原数组)
```
var array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
语法 
```
var result = arr.map(function callback(currentValue[,index[,arr]]){
    return ****
}[,thisArg])
```
map跟forEach一样都会将原数组中的每个元素按顺序都调用一次callback,同时数组元素的范围在callback方法第一次调用之前就已经确定了,如果已经存在的元素被改变或者删除了,则调用callback时传入的参数还是数组在没有改变前的值,而被删除的元素将不会被访问到
## some
测试是否至少有一个元素通过由提供的函数实现的测试(不会改变原数组)
注意：对于放在空数组上的任何条件,此方法都返回false
```
var array = [1, 2, 3, 4, 5];
var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};
console.log(array.some(even));
```
语法:
arr.some(callback( currentValue [,index[,array]]){}[,thisArg])
some 为数组中的每一个元素执行一次callback函数,直到找到一个使得callback返回一个"真值",同时返回true,否则返回false。callback只会在那些"有值"的索引上被调用,不会在那些被删除或者从未被赋值的索引调用
## every
测试一个数组内的所有元素是否都能通过某个指点函数的测试,返回一个Boolean值(不会改变原数组)
注意：若收到一个空数组,次方法在一切情况下都返回true
语法
arr.every(callback[,thisArg])
every方法为数组中的每个元素执行一次callback,直到找到一个会使callback返回false的元素,否则callback会为每一个元素返回true。every不会为那些被删除或从未被赋值的索引调用。
every遍历的元素范围在第一个调用callback时就已确定了,在调用every之后添加的元素不会被callback访问
## filter
创建一个新数组,其包含通过所提供函数实现的测试的所有元素(不会改变原数组)
```
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```
语法
var result = arr.filter(callback(currentValue[,index[,array]]){}[,thisArg])
filter遍历的元素范围在第一次调用callback之前就已经确定,在调用filter之后添加的元素不会被访问到,同时被删除或从未被赋值的元素不会被遍历到
## indexOf
返回在数组中可以找到一个给定元素的第一个索引,如果不存在,返回-1
```
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// expected output: 1
// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4
console.log(beasts.indexOf('giraffe'));
// expected output: -1
```
语法
arr.indexOf(currentValue[,fromIndex=0])
fromIndex 开始查找的位置,如果该值大于或等于数组长度,意味着不会在数组里查找,返回-1.
如果为负数则将其作为数组末尾的一个抵消,-1表示从最后一个元素开始,-2表示从倒数第二个元素开始
## lastIndexOf
返回指定元素在数组中的最后一个索引,不存在则返回-1。从数组的后面向前查找,从fromIndex处开始
```
var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
// expected output: 3
console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
```
语法
arr.lastIndexOf(currentValue[,fromIndex=arr.length-1])
fromIndex 从此位置开始逆向查找,如果为负值,将其视为从数组末尾向前的偏移
lastIndexOf 使用严格相等(===)来比较currentValue
## reduce
对数组中的每个元素执行一次reducer函数,将其结果汇总为单个返回值
```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```
reducer函数接收4个参数
1. Accumulate(acc)累计器
2. Current Value (cur) 当前值
3. Current Index(idx)当前索引
4. Source Array(src) 源数组
reducer函数的返回值分配给累计器,该返回值在数组的每个迭代中被记住,并最后成为最终的单个结果值
语法
arr.reduce(callback(accumulator,currentValue[,index[,array]]){}[,initialValue])
如果提供了initialValue 从数组中第1个值开始
如果没有提供initialValue 从数组中第2个值开始
## reduceRight
接受一个函数作为累加器和数组的每个值(从右到左)将其减少为单个值
```
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]
```
语法
arr.reduceRight(callback[,initialValue])

## trim(String.prototype)
去掉字符串前后空白
trim不影响原字符串本身,它返回的是一个新的字符串

# 总结
1. 不改变源数组
forEach map reduce reduceRigth some every indexOf lastIndexOf
2. 遍历的数组在遍历开始时就确定,忽略遍历开始后新增的元素和被删除的元素
forEach map some every
3. 返回新数组
map 
