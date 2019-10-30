# 专题五 面向切面编程

## 面向对象

- 就是用抽象去描述社会中各种抽象的复杂关系
- 三大特性

1. 封装：代码复用性,对外暴露接口而不需要知道具体的实现方式，而得到自己想要的功能
2. 继承：通过原型链实现，js 不是面向对象语言，而是基于对象的
3. 多态：父类对象基于子类实例，父类对象调用相同的方法产生不同的行为

## SOLID 设计原则(高内聚，低耦合的实现)

1. S:Single Resposibility Principle(**单一职责原则**)

- 任何一个软件模块都应该只对一类行为者负责，就是每个类的修改都不会牵扯其他类，也只对一类行为负责
- 简单的说，一个函数只完成一个功能

2. O：Open Closed Principle(**开闭原则**)

- 对扩展开放，对修改闭合。就是易于扩展，而同时限制其每次修改所影响的范围；比如你需要新增额外的功能，你就应该去通过基类去扩展，而不是在已创建的功能上修改。这样，在测试时，就只需要对新增功能进行测试
- 对扩展开放，对修改关闭。想实现一个方法，直接在子类上添加，而不能直接去修改原有的实现

3. L:Liskov Subsitution Principle(**里氏替换原则**)

- 派生的对象或类型必需是能够替换其基类

4. I:Interface Segregation Principle(**接口隔离原则**)

- 减少类与类之间没有必要的相互依赖，就是类不应该被迫依赖他们不使用的方法，也就是说接口应该拥有尽可能少的行为
- 将一个逻辑复杂的接口，分离为多个功能单一，逻辑清晰的独立接口

5. D:Dependence Inversion Principle(**依赖反转原则**)

- 在具体实现功能时，多使用抽象接口，尽量避免使用那些多变的具体实现类，我们应该依赖抽象，而不是依赖具体实现；低层的实现应该依赖高层概念

## 控制反转 IOC

- IOC 不是一种技术，只是一种思想，能指导我们开发出更低耦合，更灵活的程序
- 传统的应用程序，都是由我们类内部主动创建依赖对象，从而导致了类与类之间的高度耦合，难于测试
- 而有了 IOC 容器之后，把创建和查找依赖对象的控制权交给了容器，由容器进行注入和组合，所以对象与对象之间是松散耦合，易于测试，同时易于功能复用，更重要的是使得整个体系结构变得非常灵活

## 依赖注入 DI(Dependence Injection)

- 目的并非为软件系统带来更多功能，而是为了提升组件重用的频率
- DI 的关键是**谁依赖谁，为什么需要依赖，谁注入谁，注入了什么**

1. 谁依赖了谁：当然是应用程序依赖 IOC 容器
2. 为什么需要依赖：应用程序需要 IOC 容器来提供对象需要的外部资源
3. 谁注入谁：IOC 容器注入某个对象
4. 注入了什么：注入某个对象所需要依赖的外部资源(包括对象、资源、常量等等)

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

- [js-AOP](https://www.cnblogs.com/yonglin/p/8059183.html)
- [java-AOP](https://www.jianshu.com/p/92acc69d7c66)
- [JAVA SOLID 设计原则](https://www.jianshu.com/p/f555c5ace8d9)
- [JS SOLID 设计原则](https://blog.csdn.net/houzhizhen/article/details/79993880)
- [IOC/DI(控制反转/依赖注入)](https://blog.csdn.net/weixin_40834464/article/details/82831157)
