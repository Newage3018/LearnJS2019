// №1 Первая задача домашки
// let str=""
// for(let i=0;i<7;i++){
//     console.log(str+="#");
// }




//№2 FizzBuzz
// for(let i=0;i<100;i++)
// {
//     if (i%3==0)
//     {console.log("Fizz");}
//     else if(i%5==0&&i%3!=0){
//         console.log("Buzz")
//     }
//     else
//     {console.log(i);}
   
// }



// for(let i=0;i<100;i++)
// {
//     if ((i%3==0)&&(i%5==0))
//     {console.log("FizzBuzz");}
       
//     else
//     {console.log(i);}
   
// }


//№3 Шахматная доска
// for(i=0;i<7;i++)
// if(i%2==0)
// {   
//     console.log('# # # #');
// }
// else{
//     console.log(' # # # #'); 
// }
// alert("Привет!");

// //№3 Шахматная доска второй вариант ( уточненный)
// function cheesBoard(){
//     let str="";
//     for(i=0;i<8;i++){
//         for(j=0;j<8;j++)
//             {
//             if (j%2==0) {str=str+"#";}
//             else     {str=str+" ";}
//             }
//         if(i%2==0) {str=str+"\n"+" ";}
//         else    {str=str+"\n";}   
//     }
//     return str;
// }

// alert(cheesBoard());






// №4 Четность + рекурсия
// function isEven(n){
//     // let val;
//     if(n==0) {
//         // alert("Четное");
//         val=true;
//             }
//     else if (n==1)
//             {
//             // alert("НЕЧетное");
//         val=false;
//             }
//     else
//             {
//             isEven(n-2);
//             } 
//    return val;     //возвращаемое значение (четное = true, нечетное = false)
// }

// /*// let n= +prompt("Проверим число на четность? n?","");// блок без проверки на отрицательное значение
// // let eventResult = isEven(n);
// // alert(isEven(n));*/

// //Блок преобразования отрицательного числа в положительное
// let str= prompt("Проверим число на четность? n?","");//получаем введенное число в виде строки в переменную str
// let testSinc= str.substring(0,1);//получаем первый символ полученной строки (для проверки на минус)
// if (testSinc=="-"){
// str=str.substring(1);// проводим проверку, если первый символ "-", то обрезаем его  
// }
// // console.log(testSinc);
// // console.log(str);
// let n=+str; //Преобразование строки в число

// alert(isEven(n));//Вызов функции

// Конец  №4 Четность + рекурсия


//№5 Про range


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

// g=newArray();//Кладем массив в переменную
// console.log(g);//Выводим массив в консоль
// alert(g);//Выводим массив на экран

// //Подсчитываем сумму полученного массива
// function sum(task){
//     let sum=0;
//     for(i=0;i<task.length;i++){
//         sum=sum+task[i];
//     }
//     return sum;
// }

// alert(sum(g));

// function reverseArray(testArray){
//     let newArray=[];//создаем новый пустой массив
//     for(let i=0;i<testArray.length;i++)
//     {
//         newArray[testArray.length-1-i]=testArray[i];//разворачивааем в новом;
//     }
//     return newArray;

// }

// testArr=[1,2,3,4,5,6,7];//тестовый массив
// console.log(reverseArray(testArr));
// alert(reverseArray(testArr));//вывод результата

// //Первый вариант  arrayInPlace
// function  reverseArrayInPlace1(testArray){
//     let timeArray=testArray;//создаем временный массив и копируем в него входящий массив
//     testArray=[];
//     for(let i=0;i<timeArray.length;i++)
//     {
//         testArray[timeArray.length-1-i]=timeArray[i];//разворачивааем в старом наоборот;
//     }

//     return testArray;

// }

// //Второй вариант arrayInPlace
// function  reverseArrayInPlace2(testArray){
    
//     for(let i=0;i<(testArray.length)/2;i++)
//     {
//         let timeElement=testArray[i];//сохраняем i элемент во временной переменной;
//         testArray[i]=testArray[(testArray.length-1-i)];//меняем местами крайние (и т.д) разворачивааем в старом наоборот;
//         testArray[(testArray.length-1)-i]=timeElement;//дописываем крайний правый = крайний левый
//     }

//     return testArray;

// }

// //Странный третий вариант, формально подпадающий под условие
// function  reverseArrayInPlace3(testArray){
//     let timeArray=testArray;//создаем временный массив и копируем в него входящий массив
//     testArray=[];
    
//     for(let i=0;i<timeArray.length;i++)
//     {
//         testArray[timeArray.length-1-i]=timeArray[i];//разворачивааем в старом наоборот;
//     }

//     return testArray;

// }

// testArr=[1,2,3,4,5,6,7,8,9];//тестовый массив

// // alert(reverseArrayInPlace1(testArr));//вывод результата
// // alert(reverseArrayInPlace2(testArr));//вывод результата
// alert(reverseArrayInPlace3(testArr));//вывод результата  переворачивает если две верхние строки закоментить?????


// // Список связанный данное решение засчитывать не нужно, подсмотрено на ресурсе,
// let testArr=[1,2,3];
// let list=null;
// function arrayToList(testArr){

// for(i=testArr.length-1;i>=0;i=i-1)
//     {
//     list={value: testArr[i], next: list};
//     }
    
//     // данное решение засчитывать не нужно, подсмотрено на ресурсе, однако остался вопрос
//     //как в одном выражении переменная  list - list={value: array[i], next: list};
//     // может иметь разные значение, Это ведь так ? Иначе не работало бы!!! т.е в момент присвоения
//     //нового значения предыдущее где-то сохраняется и именно оно используется, т.е неявно где-то присутствует
//     //еще одна невидимая (системная переменная) через которую все это происходит???? или нет????
// return list;

// };

// alert(arrayToList(testArr));
// alert(list.next);
// alert(list.value);


// №8 Глубокое сравнение
function deepEqual(m,n){
    if (typeof(m)!==typeof(n)){// если типы разные то сравнивать дальше не стоит, возвращаем false
        return false;
    }
    else if (typeof(m)!='object')
        {return (m===n);}
    
    else{
        if (m.length!=n.length)// если длинны объектов равны; 
        {
            return false;
        }
        else{
         
        let result=true;
        for (let i=0;i<m.length;i++)
            
        {
            if(m[i]===n[i]) {result=true;}
            else            {result=false;}
        
        }
        return result;
        }
        }
        }
    
        alert(deepEqual([2,3],[2,1]));