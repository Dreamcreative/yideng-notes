// 希尔排序
class Shell {
  constructor(data, gaps) {
    this.data = data;
    this.gaps = gaps;
  }
  index() {
    console.log(this.data);
    for (let g = 0; g < this.gaps.length; g++) {
      for (let j = this.gaps[g]; j < this.data.length; j++) {
        let temp = this.data[j];
        console.log("j ------ ", temp);
        for (
          var i = j;
          i >= this.gaps[g] && this.data[i - this.gaps[g]] > temp;
          i -= this.gaps[g]
        ) {
          console.log("i+++ ", i);
          this.data[i] = this.data[i - this.gaps[g]];
        }
        this.data[i] = temp;
      }
      console.log("调换后", this.data);
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
