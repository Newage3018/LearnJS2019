// №4 Четность + рекурсия доделанный вариант

let testNumber= +prompt("Проверим число на четность? n?","");
alert(isEven(testNumber));

function isEven(inputNumber){ //определение четности для любого числа, с использовнием вспомогательной функции 
    return  isEvenForPositive(Math.abs(inputNumber));// здесь отрицвтельное становится положительным и вызов вспомогательной
    }

function isEvenForPositive(n){ //определение четности для положительного числа 
    if(n==0) {
            // alert("Четное");
        val=true;
            }
    else if (n==1)
            {
            // alert("НЕЧетное");
        val=false;
            }
    else
            {
            isEven(n-2);
            } 
   return val;     //возвращаемое значение (четное = true, нечетное = false)
}



/*// let n= +prompt("Проверим число на четность? n?","");// блок без проверки на отрицательное значение
// let eventResult = isEven(n);
// alert(isEven(n));*/

//Блок преобразования отрицательного числа в положительное
// let str= prompt("Проверим число на четность? n?","");//получаем введенное число в виде строки в переменную str
// let testSinc= str.substring(0,1);//получаем первый символ полученной строки (для проверки на минус)
// if (testSinc=="-"){
// str=str.substring(1);// проводим проверку, если первый символ "-", то обрезаем его  
// }

// let n=+str; //Преобразование строки в число

// alert(isEven(n));//Вызов функции



