let randomNumber=new Array();
for(let i=0;i<10;i++){
    //to get 3 digit random number
    randomNumber.push(Math.floor(Math.random()*(999-100+1)+100));
}
console.log(randomNumber);
//sort the array
let Number=randomNumber.sort((a,b)=>{return  a - b})
console.log("second largest number:"+randomNumber[randomNumber.length-2]+" second smallest number:"+randomNumber[1]);
