// 希尔排序
class Shell {
  constructor(data, gaps) {
    this.data = data;
    this.gaps = gaps;
  }
  index() {
    console.log(this.data);
    let gaps=this.gaps
    let data=this.data
    /**
     * 循环增量
     */
    for(let g=0;g<gaps.length;g++){
      /**
       * 从增量的位置开始遍历，直到遍历数组的末尾
       */
      for(let i=gaps[g];i<data.length;i++){
        let temp=data[i]
        /**
         * 从增量位置开始取值，向增量位置之前取值，然后跟当前的位置的值进行比较
         * 如果增量之前位置的值大于当前位置的值，则进行位置的替换
         * j>=0是为了防止向前遍历取值时超出了数组的范围
         * data[j-gaps[g]]>temp是作为内部进行数组值替换的条件
         * j-=gaps[g]是将数组的值按照当前增量进行分组对比
         */
        for(var j=i;j>=0&&data[j-gaps[g]]>temp;j-=gaps[g]){
          data[j]=data[j-gaps[g]]
        }
        /**
         * data[j]=temp
         * 两个值满足data[j-gaps[g]]>temp的情况下,会将当前小的值赋值给大值，
         * 而j变为了大值的位置，但是只是将大值赋值给了小值，而之前大值的位置值却没有改变
         * 此时j=j-gaps[g] 为之前大值的位置，将temp值保存的小值赋值给大值，
         * 完成两个值位置的替换
         */
        data[j]=temp
      }
    }
  }
}
let shell = new Shell([8, 9, 7, 11, 6, 5, 13, 4, 3, 2, 1, 10], [5, 2, 1]);
shell.index();
console.log(shell.data);
// 8 5 1
// 9 13 10
// 7 4
// 11 3
// 6 2
// 1 9 4 3 2  5 10 7 11 6 8 13
