// 归并排序
class Merge {
  constructor(data) {
    this.data = data;
  }
  index() {
    let data = this.data;
    if (data.length < 2) return;
    var step = 1;
    var left, right;
    /**当每次比较的长度小于数组长度时执行 */
    while (step < data.length) {
      /**left 为数组开始的起点 */
      left = 0;
      /**right为每次比较的长度 */
      right = step;
      /**right+step <= data.length 防止当前操作的值超出了数组的范围 */
      while (right + step <= data.length) {
        this.mergeArray(data, left, left + step, right, right + step);
        /**
         * 当上一组比较完后，需要进行下一组的比较
         * 此时就需要将left和right的位置同时向后移动step长度的位置
         */
        left = right + step;
        right = left + step;
      }
      /**
       * 这里就是当数组还有剩余的元素，当时却无法为剩余元素进行分组比较时，
       * 直接将剩余元素拼接到rightArr然后在进行下一轮的大小比较
       */
      if (right < data.length) {
        this.mergeArray(data, left, left + step, right, data.length);
      }
      step *= 2;
    }
  }
  mergeArray(data, startLeft, stopLeft, startRight, stopRight) {
    var leftArr = new Array(stopLeft - startLeft + 1);
    var rightArr = new Array(stopRight - startRight + 1);
    var l = startLeft;
    /**从data中为leftArr取值*/
    for (var i = 0; i < leftArr.length - 1; i++) {
      leftArr[i] = data[l++];
    }
    var r = startRight;
    /**从data中为rightArr取值 */
    for (var j = 0; j < rightArr.length - 1; j++) {
      rightArr[j] = data[r++];
    }
    /**为leftArr、rightArr的尾下标赋值 作为一个守卫值 */
    leftArr[leftArr.length - 1] = Infinity;
    rightArr[rightArr.length - 1] = Infinity;
    console.log(leftArr);
    console.log(rightArr);
    var left = 0;
    var right = 0;
    /**
     * 因为leftArr与rightArr的值是从data的startLeft->stopRight 位置上取得值
     * 所以遍历startLeft->stopRight
     * 从leftArr、rightArr的第一个值开始判断值的大小
     * 如果leftArr的值小于rightArr的值，
     * 就将当前leftArr的值赋值给data k下标，同时leftArr的下标向后移动
     * 如果leftArr的值大于rightArr的值，
     * 则将rightArr的值赋值给data k下标，同时rightArr的下标向后移动
     *
     * 这里加入leftArr的数组值已经遍历到了最后一个下标值，因为我们在上面为它赋值了一个Infinity，
     * 所以下次再对比的时候rightArr的值就肯定比leftArr的值小，这就是为它们添加守卫值的作用
     */
    for (var k = startLeft; k < stopRight; k++) {
      if (leftArr[left] <= rightArr[right]) {
        data[k] = leftArr[left++];
      } else {
        data[k] = rightArr[right++];
      }
    }
  }
}
let merge = new Merge([8, 9, 7, 11, 6, 5, 4, 3, 2, 1]);
merge.index();
console.log(merge.data);
