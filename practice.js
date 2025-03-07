
function Anagram(str1, str2) {
    let arr=[];
    str1=str1.sort();
    str2=str2.sort();
    if(str1===str2){
        return true;
    }
    else{
        return false;
    }

    //.split("").sort().join("")
    // let str3="Garvit Banga" ;
    // console.log(str3.split(" "));

}

class Calculator {
    constructor(){
        this.res=0;
    }
    add(x){
        res+=x;
    }
    subtract(x){
        res-=x;
    }
    multiply(x){
        res*=x;
    }
    divide(x){
        res/=x;
    }
    getResult(){
        return res;
    }
}
// Transaction - an object like 
// {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
// }
function TotalSpent(transactions) {
    let total={};
    for(let i=0;i<transactions.length;i++){
        if(transactions[i].category in total){
            total[transactions[i].category]+=transactions[i].price;
        }
        else{
            total[transactions[i].category]=transactions[i].price;
        }
    }
    let res=[];
    for(let key in total){
        res.push({category:key,price:total[key]});
    }
    return res;
}
