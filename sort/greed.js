/**
 * 贪心算法：
 * 它是一种寻找"最优解"为手段达成整体解决方案的算法。
 * 这些优质的解决方案称为"局部最优解"。
 * 将有希望得到正确答案的最终解决方案称为"全局最优解"，
 * "贪心"会用那些看起来近乎无法找到完整解决方案的问题，次优解也是可以接受的
 */
function makeChange(originRmb, coins) {
  var remain = 0;
  if (originRmb % 50 < originRmb) {
    coins[3] = parseInt(originRmb % 50, 10);
    remain = originRmb % 50;
    originRmb = remain;
  }
  if (originRmb % 10 < originRmb) {
    coins[2] = parseInt(originRmb % 10, 10);
    remain = originRmb % 10;
    originRmb = remain;
  }
  if (originRmb % 5 < originRmb) {
    coins[1] = parseInt(originRmb % 5, 10);
    remain = originRmb % 5;
    originRmb = remain;
  }
  coins[0] = originRmb;
}
let coins = [];
makeChange(68, coins);
console.log("找零", coins);
