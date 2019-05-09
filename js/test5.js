//№5 Про range
function newArray()
{
    let n= +prompt("Введите начало диапазона n?","");//левая граница массива
    let m= +prompt("Введите конец диапазона m?","");//правая граница массива
    let testArray=[];// объявление пустого массива, подлежащего заполнению
    
if(m>n){
for(i=n;i<=m;i++){//цикл заполнения массива
    testArray.push(i);
    }
}
else{
for(i=n;i>=m;i--){
    testArray.push(i);
    }
}
return testArray; //возвращаем массив
}

let resultArray=newArray();
alert(resultArray);

//Подсчитываем сумму полученного массива

let sumOfArray=resultArray.reduce(function(accum,currentValue){return accum+currentValue;});
alert(sumOfArray);







// function newArray()
// {
//     let n= +prompt("Введите начало диапазона n?","");//левая граница массива
//     let m= +prompt("Введите конец диапазона m?","");//правая граница массива
//     let testArray=[];// объявление пустого массива, подлежащего заполнению
//     let j=0;//объявление начального индекса массива

// for(i=n;i<=m;i++)//цикл заполнения массива
//     {
//     testArray[j]=i;
//     j++;
//     }
// return testArray; //возвращаем массив
// }

// g=newArray();
// console.log(g);
// alert(g);


// //Подсчитываем сумму полученного массива
// function sum(task){
//     let sum=0;
//     for(i=0;i<task.length;i++)
//     {
//         sum=sum+task[i];
//     }
//     return sum;
// }

// alert(sum(g));

