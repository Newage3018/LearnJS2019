// alert("HI!");//проверка запуска скрипта и просто уважительный жест

// // Ниже функция определения - целое число или нет?
// function isInteger(num){
//     let number=num;
//     if ((number%1)==0){
//         alert("Это целое число");
//     }
//     else{
//         alert("Это нецелое число");
//     }
// }
// // Конец функции определения - целое число или нет?

// // Цикл для проверки работоспособности функции, определяющей целостность числа
// for(i=0;i<1;i++)
// {
// let testNumber=prompt("Введите число , проверим его целое или нет","");
// isInteger(testNumber);
// }
// // конец цикла для проверки работоспособности функции, определяющей целостность числа

// //Создайте страницу, которая спрашивает имя и выводит его.
// let message=prompt("Как Вас зовут?","");
// alert('Привет дорогой(ая) '+ message + " !");

// //Используя конструкцию if..else, напишите код,
// // который будет спрашивать: «Каково «официальное» название JavaScript?».
// let testName=prompt("Каково официальное название JavaScript?","");

// if(testName=="EcmaScript"){
//     alertr("Вы правы!");
// }
// else{
//     alert('Не знаете? "EcmaScript"!');
// }

// //Получить знак числа
// //Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:

// let number1=prompt("Введите любое число","");
// number1= + number1;
// if (number1<0)
//     {
//     alert("-1");
//     }

// else if(number1==0)
//         {
//             alert("0");
//         }
    
// else {alert("1");}

// // Проверка логина
// // Напишите код, который будет спрашивать логин (prompt).
 
// let whoAreYou=prompt("Кто пришел!","");
// if (whoAreYou==undefined){
//     alert("Вход отменен");
// }
// else if (whoAreYou != "Админ"){
//     alert("Я Вас не знаю");
// }
// else {
//     let passCheck=prompt("Введите пароль","");
//     if(passCheck=="Чёрный Властелин"){
//         alert("Добро пожаловать!");
//     }
//     else{
//         alert("Пароль не верен!");
//     }
// }

// // Перепишите if с использованием оператора '?':
// // if (a + b < 4) {
// //     result = 'Мало';
// //   } else {
// //     result = 'Много';
// //   }

//     // (a+b)<4? result="Мало":result="Много";// я написал

//     // result = (a + b < 4) ? 'Мало' : 'Много'; //правильно вот так

//     // Перепишите if..else с использованием нескольких операторов '?'.
// //     var message;

// // if (login == 'Вася') {
// //   message = 'Привет';
// // } else if (login == 'Директор') {
// //   message = 'Здравствуйте';
// // } else if (login == '') {
// //   message = 'Нет логина';
// // } else {
// //   message = '';
// // }

// // message=(login=="Вася")?"Привет":
// //     (login=="Директор")?"Здравствуйте":
// //     (login=="")?"Нет логина": "";

// // Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.
// let age=prompt("Введите уже что нибудь из целых чисел","");
// if (age<14||age>90){
//     alert ("Введенное число НЕ находится между 14 и 90 включительно");
// }
// else {
//     alert ("Введенное число находится между 14 и 90 включая 14 и 90");

// }

// // Второй вариант с НЕ!
// let age1=prompt("Введите уже что нибудь из целых чисел","");
// if (!(age1<14||age1>90)){
//     alert ("Введенное число находится между 14 и 90 включая 14 и 90");
// }
// else {
//     alert ("Введенное число НЕ находится между 14 и 90 включительно");
// }

// //Эксперименты с преобразованием типов
// let testString=" 456";
// alert(testString);
// alert(+testString);
// alert(typeof(testString));
// testString=+testString;
// alert(typeof(testString));
// alert(typeof(Number(null)));
// alert(typeof(Number(true)));

// alert( "\n" == false );
// let a=756;
// alert(a),alert(typeof(a));
// let b =""+a;
// alert(b);
// alert(typeof(b));

// // Подумайте, какой результат будет у выражений ниже. Тут не только преобразования типов. 
// // Когда закончите – сверьтесь с решением.

// // 10;
// // -1;
// // truefalse; неверно 1
// // 2;
// // 6;
// // 45px; неверно 9px;
// // $45;
// // 2;
// // Infinity;
// // " -9\n5";
// // -14;
// // 2
// // 5
// // 5
// // 5
// // 1
// // NaN
// // true неверно false;
// // true

// // //Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// // Префиксный вариант

// // var i = 0;
// // while (++i < 5) alert( i );
// // Постфиксный вариант

// // var i = 0;
// // while (i++ < 5) alert( i ); 

// // Префиксный вариант
// // 1 1
// // 2 2
// // 3 3
// // 4 4

// // Постфиксный вариант
// // 0 1
// // 1 2
// // 2 3
// // 3 4
// // 4 5

// // // 
// //  0
// //  1
// //  2
// //  3
// //  4

// //  0
// //  1
// //  2
// //  3 
// //  4

// for (let i=2;i<=10;i++){
//     if (!(i%2)){
//         alert(i);
//     }

// }

// // Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// // for (var i = 0; i < 3; i++) {
// //     alert( "номер " + i + "!" );
// //   }
// // let j=0;
// // while(j<3) 
// //     {
// //     alert ( "номер " + j + "!" );
// //     j++;
// //     }

// // let number100;
// // while(true){
// //     let number100=prompt("Введите число больше 100","");
// //     if ((number100>=100)||(number100==null)) break;
// //     }   
// //     alert("введенное число больше 100, ура! или отказ от ввода");
    
 
// // let n;
// // for(let i=2;i<n,i++)
// // {

// //     for(let j=2;j<i;j++){
// //         if((i%j)==0){
// //     }

// //     alert(n);
// // }
// // }



// let browser=prompt("What browser are user you?")
// if (browser=="IE"){
//     alert( 'О, да у вас IE!' );
// }
// else if (browser=="Chrome"||browser=="Firefox"||browser=="Safari"||browser=="Opera"){
//     alert('Да, и эти браузеры мы поддерживаем' );
// }
// else{
//     alert('Мы надеемся, что и в вашем браузере все ок!')
// }



// // var a = +prompt('a?', '');

// // if (a == 0) {
// //   alert( 0 );
// // }
// // if (a == 1) {
// //   alert( 1 );
// // }

// // if (a == 2 || a == 3) {
// //   alert( '2,3' );
// // }

// let g= +prompt('g?','');
// switch(g){
//     case 0:
//     alert(0);
//     break;

//     case 1:
//     alert(1);
//     break;

//     case 2:
//     case 3:
//     alert('2,3');
//     break;

// }

//Перепишите функцию, используя оператор '?' или '||'
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
    
// function checkAge(age){
//     return (age>18)?true:confirm ('Родители разрешили?');
// }

// function checkAge(age){
//     return (age>18)||confirm ('Родители разрешили?');
// }

// function findMinNumber(a,b){
//     if(a==b){
//         return "Нет минимального a равно b";
//     }
//     return (a>b)?b:a;
// }

// pow(){
//     let x= +prompt("введите число","");
//     let n= +prompt("введите степень","");
//     let promx=1;
//     for (i=1;i<=n;i++){
//         promx=promx*x;
//          }
//         return promx;


// }

// factorial(n){
//     return (n=!1)?n*factorial(n-1):1;
// }


// fib(n){
//     fib
// }
let num3= +prompt("Задайте число, а мы просуммируем все числа включая его, n?","");

function sumAll(n){ 
    if(n==1){return 1;}
    else {
        return n+sumAll(n-1); 
    }
    
    
    
}

alert(sumAll(num3));



let numfac=+prompt("Посчитаем факториал, число n?","");
function fac(n){
    if(n==1) return 1;
    return n*fac(n-1);
}
alert(fac(numfac));


let numfib=+prompt("Поискать число Фибоначи, число n?","");
function fib(n){
    return 2*n-3;
}
alert(fib(numfib));