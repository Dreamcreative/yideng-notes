<?php
/**
 * 构造函数的基本语法与使用
 * 析构函数的基本语法与使用
 */
class Person{
    public function __construct($name, $age ){
        //当这个类 new的时候自动执行
        $this->age = $age;
        $this->name = $name;
        echo " hello {$this->name}";
        echo "<hr/>";
    }
    public function data(){
        return $this->age;
    }
    public function __destruct(){
        //用途 可以进行资源的释放操作 数据库关闭
        //对象被销毁的时候执行 没有代码再去运行
        echo "bye {$this->age}" ;
    }
}
new Person("111",111);
new Person("222",222);

?>


