//№2 FizzBuzz
// Для чисел,нацело делящихся на 3, она должна выводить ‘Fizz’, а
//для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
for(let i=0;i<100;i++)
{
    if (i%3==0)
    {console.log("Fizz");}
    else if(i%5==0&&i%3!=0){
        console.log("Buzz")
    }
    else
    {console.log(i);}
   
}


//исправьте её так, чтобы она выводила
//«FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
for(let i=0;i<100;i++)
{
    if ((i%3==0)&&(i%5==0))
    {console.log("FizzBuzz");}
       
    else
    {console.log(i);}
   
}