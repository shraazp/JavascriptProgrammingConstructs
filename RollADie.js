const rollDice =new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]])
let f=0
while(f==0)
{
   result=(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
   let value=rollDice.get(result)
   rollDice.set(result,value+1)
   rollDice.forEach((value,key)=>{
      if(value==10)
         {
            console.log("Maximum times:"+key)
            f=1
     }  });
}
let minKey=1
let minValue=rollDice.get(minKey)
rollDice.forEach((value,key)=>{
  if(minValue>value) {
     minKey=key
     minValue=value}
});
console.log("Minimum times:"+minKey)
console.log(rollDice)