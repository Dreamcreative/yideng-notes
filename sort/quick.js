// 快速排序
function quick(data){
    /**
     * 从数组中取一个值作为基准值
     * 拿着这个基准值与数组中的值进行对比，如果大于则放入大值数组中，
     * 如果小于则放入小值数组中
     * 这样递归对比，一直到大值数组、小值数组中清空，则完成了值的排序
     */
    if(data.length===0)return []
    let temp = data[0]
    let small=[]
    let big=[]
    for(let i=1;i<data.length;i++){
        if(data[i]>temp){
            big.push(data[i])
        }else{
            small.push(data[i])
        }
    }
    let result = quick(small).concat(temp,quick(big))
    console.log(result)
    return result
}
let result = quick([8, 9,11, 7, 6, 5,10, 4, 3, 2, 1])
// console.log(result)