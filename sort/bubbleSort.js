class Bubble {
  constructor(source) {
    this.source = source;
  }
  main() {
    let length = this.source.length;
    /**
     * 外层循环：当数组内部元素跟其他元素一一对比之后再执行下一次对比
     * 每次对比完成后outer减一，因为上次循环对比之后数组的最后一个元素肯定是最大的值，不用再比较
     * outer>=2：因为对比到了最后2次数组的第一个元素肯定是最小的值
     */
    for (let outer = length; outer >= 2; --outer) {
      /**
       * 内层循环：每次从数组第一个元素开始对比，每次循环会比上一次循环少一次
       * 如果当前元素比后一个元素大，则替换两个元素的位置
       */
      for (let inner = 0; inner < outer - 1; inner++) {
        if (this.source[inner] > this.source[inner + 1]) {
          this.swap(this.source, inner, inner + 1);
        }
      }
    }
  }
  swap(arr, cur, next) {
    let temp = arr[cur];
    arr[cur] = arr[next];
    arr[next] = temp;
  }
}
let bub = new Bubble([8, 9, 7, 6, 5, 4, 3, 2, 1]);
bub.main();
console.log("aaaaaaa   ", bub.source);
