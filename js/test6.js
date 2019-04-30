//Вариант простой
function reverseArray(testArray){
    let newArray=[];//создаем новый пустой массив
    for(let i=0;i<testArray.length;i++)
    {
        newArray[testArray.length-1-i]=testArray[i];//разворачивааем в новом;
    }
    return newArray;

}

testArr=[1,2,3,4,5,6,7];//тестовый массив
console.log(reverseArray(testArr));
alert(reverseArray(testArr));//вывод результата

//Первый вариант  arrayInPlace
function  reverseArrayInPlace1(testArray){
    let timeArray=testArray;//создаем временный массив и копируем в него входящий массив
    testArray=[];
    for(let i=0;i<timeArray.length;i++)
    {
        testArray[timeArray.length-1-i]=timeArray[i];//разворачивааем в старом наоборот;
    }

    return testArray;

}

//Второй вариант arrayInPlace
function  reverseArrayInPlace2(testArray){
    
    for(let i=0;i<(testArray.length)/2;i++)
    {
        let timeElement=testArray[i];//сохраняем i элемент во временной переменной;
        testArray[i]=testArray[(testArray.length-1-i)];//меняем местами крайние (и т.д) разворачивааем в старом наоборот;
        testArray[(testArray.length-1)-i]=timeElement;//дописываем крайний правый = крайний левый
    }

    return testArray;

}

//Странный третий вариант, формально подпадающий под условие
function  reverseArrayInPlace3(testArray){
    let timeArray=testArray;//создаем временный массив и копируем в него входящий массив
    testArray=[];
    
    for(let i=0;i<timeArray.length;i++)
    {
        testArray[timeArray.length-1-i]=timeArray[i];//разворачивааем в старом наоборот;
    }

    return testArray;

}

testArr=[1,2,3,4,5,6,7,8,9];//тестовый массив

alert(reverseArrayInPlace1(testArr));//вывод результата
alert(reverseArrayInPlace2(testArr));//вывод результата
alert(reverseArrayInPlace3(testArr));//вывод результата работает только при отключении двух верхних над ним строк????
