# react 新的api
- react 是facebook写的，中国人认为外国的东西比较好
- react 的思想更自由
- react组件中 代码的复用不是继承而是组合
1. react的返回支持3种写法
- 直接返回DOM
- 返回一个字符串
- 返回一个React.creatClass()
- - react为什么不能返回多个组件：react语法不支持，React

2. 纯组件(PureComponent)：PureComponent也是继承自Component,只是自己实现了一个shouldComponentUpdate()生命周期 
3. 纯函数组件(无状态组件)：内部没有状态，只能接受外部传入的属性，来进行渲染页面,纯粹的UI组件
4. 高阶组件 维护难
5. 高阶函数
6. mixins
7. <></>(<React.Fragment></React.Fragment>)
8. 组件插槽
9. 同步写异步
10. memo:作用->PureComponent
11. ref 1. ref="aaa"  2. <TargetComponent ref={ ref=>this.targetRef = ref} />
12. error
13. 生命周期