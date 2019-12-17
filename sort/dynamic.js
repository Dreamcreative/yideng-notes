/**
 * 动态规划
 * 被认为是一种与递归相反的技术。
 * 递归从顶部开始分解出多个小问题，合并成一个解决方案。
 * 动态规划解决方案从底部分解很多小问题解决掉，组成解决方案
 */
function fiber(n) {
  if (n < 2) {
    return n;
  } else {
    return fiber(n - 1) + fiber(n - 2);
  }
}
console.log("递归 斐波那契", fiber(12));

function dynaFiber(n) {
  let val = [];
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    val[0] = 0;
    val[1] = 1;
    val[2] = 1;
    for (let i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2];
    }
    console.log(val);
  }
}
console.log("动态规划实现 斐波那契", dynaFiber(10));

function iterFiber(n) {
  if (n > 0) {
    var pre = 1;
    var next = 1;
    var result = 1;
    for (let i = 2; i < n; i++) {
      result = pre + next;
      pre = next;
      next = result;
    }
    return result;
  } else {
    return 0;
  }
}
console.log("动态规划,不使用数组 斐波那契", iterFiber(10));
