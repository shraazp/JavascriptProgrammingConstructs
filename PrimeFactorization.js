function isPrime(number)
{
    if(number==1)return true
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
            return false;
    }
    return true;
}
var number=process.argv[2]
var primeFactors=new Array()
for(let i=1;i<=number;i++)
{
    if(number%i==0&&isPrime(i))
    {
        primeFactors.push(i)
    }
}
console.log(primeFactors)