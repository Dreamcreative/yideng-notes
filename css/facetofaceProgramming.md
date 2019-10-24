# 面向切面编程

面向对象：就是用抽象去描述社会中各种抽象的复杂关系 封装：代码复用性,对外暴露接口而不需要知道具体的实现方式，而得到自己想要的功能 继承：通过原型链实现，js 不是面向对象语言，而是基于对象的 多态：父类对象基于子类实例，父类对象调用相同的方法产生不同的行为

## SOLID 设计原则

高内聚，低耦合的实现 SOLID(单一功能：，开闭原则，里式替换，接口隔离，依赖反转)
高内聚：一个函数只完成一个功能
开闭原则：对扩展开放，对修改关闭。想实现一个方法，直接在子类上添加，而不能直接去修改原有的实现
里式替换：
接口隔离：将一个逻辑复杂的接口，分离为多个功能单一，逻辑清晰的独立接口
依赖反转：

## 控制反转 IOC

## 依赖注意 DI

## 面向切面编程 AOP(装饰者模式)

- 主要作用：将一些跟核心逻辑模块无关的代码逻辑抽离出来(比如：在执行核心模块前后，分别新增执行前输出什么内容，执行后再输出什么内容)而执行前后分别执行的代码逻辑只是为了给主要逻辑模块做装饰使用，随时可以替换或者是拿掉，而无论是替换还是拿掉都对核心模块的业务没有任何的影响**好处：可以保证核心模块的纯净和高内聚**
- 对函数添加 AOP
1. 函数执行前

```javascript
Function.prototype.before = function(beforeFn) {
  const _this = this; // 保留原函数的引用
  return function() {
    // 返回包含新函数的代理函数和原函数
    beforeFn.apply(this, arguments); //执行改变了this指向的新函数
    return _this.apply(this, arguments); //返回原函数的执行
  };
};
```

2. 函数执行后

```JavaScript
Function.prototype.after=function(afterFn ){
    const _this = this //保留原函数
    return function(){ //返回原函数的执行和新函数
        let result=_this.apply(this,arguments)
        afterFn.apply(this,arguments)
        return result
    }
}
```

- 案例：在当前输出天气的逻辑前，先输出当前时间

1.  传统解决方案：看懂代码逻辑直接在输出天气的函数中调用输出当前时间的函数
2.  装饰器模式解决方案：不需要看代码，直接给输出天气的函数装饰一下，而装饰的东西就是输出当前时间的函数

## ts 装饰器 类 属性 参数 方法 访问符(get,set)

装饰器执行顺序 参数装饰器》属性装饰器》类装饰器

## symbal

reflect-metadata 元编程
inversify

> 参考
> [js-AOP](https://www.cnblogs.com/yonglin/p/8059183.html)
> [java-AOP](https://www.jianshu.com/p/92acc69d7c66)
