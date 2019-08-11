# 第一周 linux作业
## MVC模式
M:Model数据模型
V:View视图
C:Controller控制器
![MVC](../images/MVC.png "MVC")
一个典型的Web MVC流程
1. Controller截取用户发出的请求
2. Controller调用Model完成状态的读写操作
3. Controller吧数据传递给View
4. View选人最终结果并呈现给用户
![MVC-detail](../images/MVC-detail.png "MVC-detail")
### 数据流:
1. 数据从数据库中拿出来,生成数据模型(Model)
2. Controller 从 Model中把数据拿出来,放入View中
3. 最后由浏览器生成界面
4. 由用户在浏览器界面中操作,
5. 向Controller提交请求
6. 由Controller接收到由用户提交过来的数据,将数据写入Model
7. Model将数据持久化(写入数据库)
View、Model提供API,然后由Controller来控制什么时候读什么时候写流程由Controller控制,视图渲染由View 控制,读写数据库由Model控制
Controller可以有多个,你有几个处理逻辑就有几个Controller