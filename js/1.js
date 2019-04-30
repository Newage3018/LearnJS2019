// var fruits = ["Яблоко", "Апельсин", "Груша"];

// alert( fruits.shift() ); // удалили Яблоко

// alert( fruits ); // Апел

// var fruits = []; // создать массив

// fruits[99999] = 5; // присвоить свойство с любым номером

// fruits.age = 25; 

// alert(fruits.length);
// alert(fruits[99999]);
// alert(fruits[100000]);
// alert(fruits[age]);

var time = {
    year: 2345,
    month: 11,
    day: 10,
    hour: 11,
    minute: 12,
    second: 13,
    microsecond: 123456
  }
  
  console.log(time); // (*)
  time.microsecond++; // (**)
  
  console.log(time);
  time.microsecond++;
  
  console.log(time);
  time.microsecond++;