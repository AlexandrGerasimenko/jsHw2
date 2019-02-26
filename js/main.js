//  Обязательная часть ( 3 балла )
// Создайте пустой массив letters

// Создайте строку из нескольких слов, например "Backend As A Service"

// Напилите код, который разбивает эту строку на массив слов и пушит в массив letters первый символ каждого слова

// Выведите результат в консоль

// Объедините все элементы массива letters в одну строку и выведите ее в консоль

var letters = [];
var string = "Backend As A Service";
letters = string.split(' ').map(function(item) {
  return item[0]
});
console.log(letters)
var newString = letters.join('');
console.log(newString);



//  Дополнительно ( 4 балла )
// Объявите функцию с одним формальным параметром, которая проверяет тип данных переданного аргумента и:

// если это число, возвращает текущую дату в формате "20.02.2019, 13:21:51"
// в противном случае возвращает строку "Неверный тип данных"
// Вызовите функцию

function isNumber(n){
    if(typeof n == "number"){
        var date = new Date();
        var formatDate = function (date) {

            var dd = date.getDate();
            if (dd < 10) dd = '0' + dd;
          
            var mm = date.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;

            var hh = date.getHours();
            if (hh < 10) hh = '0' + hh;

            var min  = date.getMinutes();
            if (min < 10) min = '0' + min;

            var sec = date.getSeconds();
            if (sec < 10) sec = '0' + sec;
          
            return dd + '.' + mm + '.' + date.getFullYear() + ", " + hh + ":" + min + ":" + sec;
          };
          
        console.log( formatDate(date) ); 
      
    }else{
        console.log("Неверный тип данных")
    }
}