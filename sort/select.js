// 选择排序
class Select {
  constructor(data) {
    this.data = data;
  }
  swap(target, index1, index2) {
    let temp = target[index1];
    target[index1] = target[index2];
    target[index2] = temp;
  }
  index() {
    let a = 1;
    let length = this.data.length;
    for (let outer = 0; outer < length - 1; ++outer) {
      // 记录最小值的位置
      let min = outer;
      /**
       * 内部循环：从第一个位置开始
       * 当找到一个比当前值小的值时，将小值的位置赋值给min
       * 下次内部循环会拿着新的小值去比较
       * 最后当数组遍历完时，将拿到的最小值的与当前位置的值进行交换
       */
      for (let inner = outer + 1; inner < length; ++inner) {
        if (this.data[inner] < this.data[min]) {
          min = inner;
        }
        console.log(a++);
      }
      this.swap(this.data, outer, min);
    }
  }
}
var select = new Select([8, 9, 7, 6, 5, 4, 3, 2, 1]);
select.index();
console.log(select.data);
