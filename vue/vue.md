# vue 解析

## dist 包名

1. common common 规范
2. esm es 规范
3. runtime (compiler+runtime)
4. runtime+common

- 包名有 runtime 走的是 runtime ,包名没有 runtime 走的是 compiler+runtime
  runtime: 运行时
  compiler: 编译时

- compiler 运行时编译

```javascirpt
/**
需要compiler
在浏览器运行时对template进行解析编译成 render()
性能不好
*/
 new Vue({
     tempalte:"<div>{{message}}</div>" //js代码
 })
```

- runtime 离线编译

```javascirpt
/**
只需要runtime
在webpack打包时
已经通过vue-loader 将template 处理成了 render()函数
runtime相当于静态文件
*/
 new Vue({
     render(h){
         return h("div",this.message)
     }
 })
```

- 带有 runtime 和不带 runtime 的文件可以作为性能优化的点


## Watcher 

## Object.defineProperty()