// №3 Шахматная доска
// for(i=0;i<7;i++)
// if(i%2==0)
// {   
//     console.log('# # # #');
// }
// else{
//     console.log(' # # # #'); 
// }
// alert("Привет!");

// function cheesBoard(){
//     let str="";
//     for(i=0;i<8;i++){ //проход по столбцам
//         for(j=0;j<8;j++)//проход по строке
//             {
//             if (j%2==0) {str=str+"#";}
//             else     {str=str+" ";}
//             }
//         if(i%2==0) {str=str+"\n"+" ";}//добавляем символ перевода строки + если надо пробел
//         else    {str=str+"\n";}   
//     }
//     return str;
// }

// alert(cheesBoard());


// с применением тернарного оператора
function cheesBoard(){
    let str="";
    for(i=0;i<8;i++){ //проход по столбцам
        
        for(j=0;j<8;j++){//проход по строке
            (j%2==0)?(str=str+"#"):(str=str+" ");
        }
        (i%2==0)?(str=str+"\n"+" "):(str=str+"\n"); //добавляем символ перевода строки + если надо пробел
    }
    return str;
}

alert(cheesBoard());