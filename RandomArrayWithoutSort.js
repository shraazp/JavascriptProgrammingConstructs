let randomNumber=new Array();
for(var i=0;i<10;i++){
    //to get 3 digit random number
    randomNumber.push(Math.floor(Math.random()*(999-100+1)+100))
}
console.log(randomNumber)
var arr=randomNumber
// get the max of the array
var max = Math.max.apply(null, arr); 
//remove the maximum element
arr.splice(arr.indexOf(max), 1); 
//print the second largest
console.log(Math.max.apply(null, arr))
//get the min of the array
var min=Math.min.apply(null,arr)
//remove the min of the array
arr.splice(arr.indexOf(min))
//print the second smallest
console.log(Math.min.apply(null,arr));