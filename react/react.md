# react 新的api
- react 是facebook写的，中国人认为外国的东西比较好
- react 的思想更自由
- react组件中 代码的复用不是继承而是组合
1. react的返回支持3种写法
- 直接返回DOM
- 返回一个字符串
- 返回一个React.creatClass()
- - react为什么不能返回多个组件：react语法不支持

2. 纯组件(PureComponent)：PureComponent也是继承自Component,只是自己实现了一个shouldComponentUpdate()生命周期 
3. 纯函数组件(无状态组件)：内部没有状态，只能接受外部传入的属性，来进行渲染页面,纯粹的UI组件
4. 高阶组件 维护难
5. 高阶函数
6. mixins
7. <></>(<React.Fragment></React.Fragment>)
8. 组件插槽
9. 同步写异步
10. memo:作用->PureComponent  useMemo
11. ref 1. ref="aaa"  2. <TargetComponent ref={ ref=>this.targetRef = ref} />
12. error
13. 生命周期
14. hooks  react15之前 ，纯函数组件没法操作状态,只能从外界传入 props;hooks出现后纯函数可以操作状态
useEffect 副作用 相当于生命周期
useCallback 作用相当于 useMemo
使用hooks useState()一定只能在最外层  hooks内部是通过数字为这些数据标识
hooks最大的作用是实现了UI和逻辑的分离
15. fiber  setState({}) setState(()=>{}) setState((state)=>{})  setState()是异步执行
16. react 为什么只能返回一个dom
17. diff 
18. 合成事件
node 事件循环  js事件循环
v8 GC