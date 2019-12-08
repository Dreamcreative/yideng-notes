// 插入排序
class Insert {
  constructor(data) {
    this.data = data;
  }
  index() {
    let length = this.data.length;
    let temp, inner;
    /**
     * 外层循环：从第二个值开始遍历
     * temp用来存储第二个值
     * inner用来存储第二个值的位置
     */
    for (let outer = 1; outer < length; outer++) {
      inner = outer;
      temp = this.data[outer];
      /**
       * 内部循环：判断第二个值小于等于它前面位置的值
       * 如果小于，则将前面位置的值赋值给后一位置的值，同时将位置inner进行--，使得位置向前移动
       */
      while (inner > 0 && this.data[inner - 1] >= temp) {
        this.data[inner] = this.data[inner - 1];
        inner--;
      }
      this.data[inner] = temp;
    }
  }
}
var insert = new Insert([8, 9, 7, 6, 5, 4, 3, 2, 1]);
insert.index();
console.log(insert.data);
