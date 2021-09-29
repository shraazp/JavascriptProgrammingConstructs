function reverseDigits(num)
{
    let rev_num = 0;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev_num
}
repatDigits=new Array()
for(let i=0;i<=100;i++)
{
    if(i==reverseDigits(i)&&i>10)
    {
        repatDigits.push(i)
    }
}
console.log(repatDigits)