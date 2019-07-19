// 1 . 
function a(){}  //因为js代码在执行过程中分为编译阶段和执行阶段 alert会阻塞代码的执行
// 2. 
60  
50    

NaN //严格模式下this 指向 undefined 
// 2.1
yidenglaofe

// 3   
for(let i=0; i<list_li.length;i++){
		list_li[i].onclick=function(){}
	}
for(var i =0;i<list_li.length;i++){
    (function(i){
        list_li[i].onclick=function(){}
    
    })(i)
}
for(var i=0 ; i<list_li.length;i++){
    
}

// 4.
5

// 5.
1

// 6.
function rank(score){
    var rank={
        "10":"特等生",
        "9":"一等生",
        "8":"二等生",
        "7":"三等生",
        "6":"四等生",
        "5":"五等生",
        "4":"六等生",
        "3":"七等生",
        "2":"八等生",
        "1":"九等生",
        "0":"十等生",
    };
    return rank[Math.floor(score/10)];
}

// 7.
function index(a){
    a=a.split("");
    while(a.length>0){
        a.shift();
    }
}
// 8.
class Car{
    constructor(color,price){
        this.color=color;
        this.price=price;
    }
    sale(){

    }
}
class Cruze extends Car{
    constructor(){
        super();
        this.color = "red";
        this.price=140000;
    }
    sale(){
        console.log(`将${this.color}的Cruze卖给了小王价格是${this.price}`)
    }
}
// 9.
async function better(a,b){
    let resulta = await a();
    let resultb = await b();
}
function better2(a,b){
    return Promise.resolve().then(res=>{
        return a();
    }).then(res=>{
        return b();
    })
}
// 10.
10 
2
