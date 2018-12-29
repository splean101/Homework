'use strict';

/*var array = [];

while(t === Number){
	var t = Number(prompt('?',''));
	var sum = 0;
	for(var k=0; k<=array.length; k++){
		sum += array[k]
	if (t === '' || t !== Number || t === Null) {
		break
	}else{
		array[i] = t;
	}
	 
	}
	console.log(sum);
}
 console.log(array);*/

 /*var arr1=[];
 var sum = 0;
for(var i=0; i !== false; i++){
 var c = Number(prompt("value",""));
 if (c ==="" || isNaN(c) || c === null){
  break;
 }else{
	arr1[i]= c;
	sum += arr1[i];
 }
 };
console.log(sum);

console.log(arr1);*/

//Есть объект salaries с зарплатами. Напишите код, который выведет среднее значение всех зарплат. Код должен работать с различным количеством зарплат в объекте.
//Примеры salaries:
/*var salaries1 = {
   John: 100,
   Bill: 300,
   Mike: 250
};

var salaries2 = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 50
};
function avs (salaries){
	var sum = 0;
	var i = 0;
	for(var key in salaries){
		sum += salaries[key];
		i++;
	};
	return sum/i;
}
//avs (salaries1);
console.log(avs (salaries2));*/


/*function mp3 (brand, model) {
	return {
		brand: brand,
		model: model,
		play: function(){
			console.log('mp3 '+ this.model + ' playing');
		}
	}
};

var MP3 = mp3('sony', 'walkman');
MP3.play();*/

/*Задание №3. Объекты в функциях
Напишите функцию, которая принимает в качестве параметра объект salaries с зарплатами и возвращает значение максимальной из зарплат.
Код должен работать с различным количеством зарплат в объекте.
Примеры salaries:*/
/*var salaries1 = {
   John: 100,
   Bill: 300,
   Mike: 250
};

var salaries2 = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 50
};
function max(salaries){
	var Max = 0;
	for(var key in salaries){
		if(salaries[key] > Max){
			Max = salaries[key];
		};
	};
	return Max;
};

console.log(max(salaries1));
console.log(max(salaries2));*/

/*Задание №4. Конструкторы объектов
Создайте тип объектов MP3 при помощи конструкторов объектов.*/
/*function Mp3 (brand, model) {
	this.brand = brand,
	this.model = model,
	this.play = function(){
			console.log('mp3 '+ this.model + ' playing');
		}
};
var myMp3 = new Mp3('apple', 'ipod');
myMp3.play();*/

/*Задание №5. Функция как объект
Напишите функцию mul(), которая принимает любое количество параметров разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.*/
/*function mul() {
  var res = 1;
   for(var i = 0; i < arguments.length; i++){
	   if(typeof arguments[i] === 'number' && arguments[i] !== 0){
		res *= arguments[i];
	   };
   };
   if(res === 1){
	   return 0;
   }else{
	return res;
   };
   
};
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0*/

/*Задание №6. Функция как объект. Явное указание this
Есть следующий код:*/
/*var country = {
   name: "Украина",
   language: "украинский",
   capital: {
      name: "Киев",
      population: 2907817,
      area: 847.66
   }
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
format.call(country, '<', '>'); // "<Украина>"
format.apply(country, ['[', ']']); // "[Украина]"
//format.call(...); // ""Киев""
//format.apply(...); // "Киев"
//Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях.*/

/*Задание №1. Привязка контекста
Есть следующий код:*/
/*var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"
/*Привяжите функцию format() к объекту user.
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию обвертку;
2. Метод bind().*/

/*Задание №2. Привязка контекста
Есть следующий код:*/
/*function mul(a, b) {
   return a * b;
}
var doubleMul = mul.bind(null, 2);
var qudraMul = mul.bind(null, 4);
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20*/
/*Используя функцию mul() и карринг создайте две функции doubleMul() и qadraMul(),
 которые умножают числа на 2 и на 4 соответственно.*/

/*Задание №3. Привязка контекста
Напишите аналог метода bind():*/
/*function bind(func, context) {
   return func();
}
function func() {
   console.log(this.name + " - "+ this.age);
}
var user = {
   name: "Tom",
   age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"*/

/*Задание №4. Инкапсуляция
Напишите конструктор для объектов Аудиоплеер, в котором есть приватное свойство
 громкость звука, для доступа к этому свойству реализуйте: 
1. Методы геттер и сеттер;
2. Единый метод геттер-сеттер. 
Громкость может быть в диапазоне от 0 до 100.*/

/*Задание №5. Инкапсуляция
Напишите конструктор для объектов Сумматор, со следующим функционалом:
1. Приватное свойство firstNumber;
2. Приватное свойство secondNumber;
3. Публичное свойство result;
4. Приватный метод calc(), который записывает в result сумму свойств firstNumber и secondNumber;
5. Единые методы геттер-сеттер для свойств firstNumber и secondNumber, во время работы методов
 как сеттер, должна происходить валидация (устанавливать можно только значения типа Number),
  если валидация происходит успешно, должен вызываться метод calc(). Получается, что при
   успешной установке либо firstNumber либо secondNumber, происходит перерасчет result.
*/
/*function sum (firstNumber, secondNumber){
	var _firstNumber, _secondNumber;
	this.result = 0;
	function calc (){
	   result =_firstNumber + _secondNumber;
	   return result;
	};
	function firstNumberValidation(firstNumber){
		if (typeof firstNumber === 'number' ){
			_firstNumber = firstNumber;
		};
	};
	function secondNumberValidation(secondNumber){
		if (typeof secondNumber === 'number'){
			_secondNumber = secondNumber;
		};
	};
	
	firstNumberValidation(firstNumber);
	secondNumberValidation(secondNumber);
	
	this._firstNumber = function (firstNumber) {
   if (!firstNumber) {
	  return _firstNumber;
	};
		firstNumberValidation(firstNumber);
		if(firstNumberValidation){
			return calc();
		};
	};
	
	this._secondNumber = function (secondNumber) {
	  if(!secondNumber){
	  return _secondNumber;
	};
		secondNumberValidation(secondNumber);
		if(secondNumberValidation){
			return calc();
		};
	};
	//console.log(result + '!!!');
	//console.log(this.result + '!!!');
 };
 var obj = new sum(3, 5);
console.log(obj._secondNumber());
console.log(obj._firstNumber());
console.log(obj.result);
obj._secondNumber(101);
console.log(obj._secondNumber());
console.log(obj.result);*/
/*Задание №6. Модули
Напишите код для "безопасного" вычисления периметра и площади прямоугольника в виде модуля.
Сторонами прямоугольника может быть только число (тип данных Number, значения других типов данных
	 нельзя устанавливать), значение которого, строго больше 0.*/
	 /*var moduleName = (function  () {
		var lenght;
		var height;
		function perimeter (){
			return 2*lenght + 2*height;
		}
		function square (){
			return lenght*height;
		}
		return {
			setLength: function (number){
				if (typeof number === 'number' && number > 0){
					lenght = number;
				}
			},
			setHeight: function (number){
				if (typeof number === 'number' && number > 0){
					height = number;
				}
			},
			perimeter: perimeter,
			square: square
		};
	 }());
	 
//window.moduleName = moduleName;*/

/*Задание №1. Функциональное наследование
Напишите конструктор объектов Геометрическая фигура, определите в нем приватные свойства для задания центра фигуры. 
Для доступа к этим свойствам определите необходимые метод/методы.
На основе этого конструктора создайте два новых (наследники) – Прямоугольник и Круг.
 В этих конструкторах определите особые приватные свойства. 
 (Например, длина диагонали для Квадрата и радиус для Круга). 
 В каждый из конструкторов добавьте публичный метод info(), который выводит на экран всю доступную информацию о фигуре.*/

/* function GeoFigura (){
	var _x0;
	var _y0;
	this.setX = function(x0){
		if (!x0){
			console.log (_x0)
		};
		_x0 = x0;

	};
	this.setY = function(y0){
		if (!y0){
			console.log (_y0)
		};
		_y0 = y0;
	};
	this.info = function (){
		console.log(_x0);
		console.log(_y0);
	}
};

function Rectangle () {
	GeoFigura.call(this);
	var _diagonal = 'd';
	this.setD = function(diagonal){
		if (!diagonal){
			console.log (_diagonal)
		};
		_diagonal = diagonal;
	};
	var parentInfo = this.info
	this.info = function (){
		parentInfo.call(this);
		console.log(_diagonal)
	};
};
function Circle (){
	GeoFigura.call(this);
	var _radius = 'r';
	this.setR = function(radius){
		if (!radius){
			console.log (_radius)
		};
		_radius = radius;
	};
	var parentInfo = this.info
	this.info = function (){
		parentInfo.call(this);
		console.log(_radius)
	};
};
var g = new GeoFigura();
var r = new Rectangle();
var c = new Circle();
g.setX(7);
g.setY(8);
g.info();

r.setX(9);
r.setY(10);
r.setD(17)
r.info();

c.setX(11);
c.setY(12);
c.setR('DDR')
c.info() */


/*Задание №2. Функциональное наследование. Полиморфизм
Напишите конструктор объектов Квадрат, определите защищенное свойство для хранения значения стороны. 
Для доступа к этому свойству определите необходимые метод/методы. Также определите публичный метод, 
который возвращает периметр.
На основе этого конструктора создайте конструктор Куб и переопределите метод получения периметра.
Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших расчетов).*/

/*function Square (){
	this._length;
	this.setLength = function(length){
		if (!length){
			console.log (_length)
		};
		if(typeof length === 'number' && length>0){
			_length = length;	
		}
		};
	this.perimeter = function(){
			return _length * 4;
		}
	};	
var s = new Square ();
s.setLength(81);
s.setLength();
console.log(s.perimeter());
function Cube (){
	Square.call(this);
	var parentPerimeter = this.perimeter;
	this.perimeter = function(){
		return parentPerimeter.call(this)*2.5;
		}
};
var cube = new Cube();
cube.setLength(111);
cube.setLength();
console.log(cube.perimeter());
function Cube1 (){
	Square.call(this);
	this.perimeter = function(){
		return _length * 10;
		}
};
var cube1 = new Cube1();
cube1.setLength(222);
cube1.setLength();
console.log(cube1.perimeter()); */

/*Задание №3. Прототипы. Типы объектов на прототипах
Создайте тип объектов MP3 при помощи прототипов.*/
/*function Mp3 (brand){
	this.brand = brand;
	this.state = false;
	this.track = 0;
	this.volume = 0;
};
Mp3.prototype.enable = function(){
	this.state = true;
	console.log('current state is enabled')
};
Mp3.prototype.disable = function(){
	this.state = false;
	console.log('current state is disabled')
};
Mp3.prototype.vol = function(volume){
	this.volume = volume;
	console.log('current volume is: ' + this.volume)
};
Mp3.prototype.info = function(){
	for (var key in this){
		if (typeof this[key] === 'function'){
			continue
		}else{
			console.log(key + ' : ' + this[key]);
		}
	}
};
var mp3 = new Mp3('ipod');
//console.log(typeof mp3.enable);
mp3.enable();
mp3.vol(18);
mp3.info();*/


/*Задание №4. Прототипное наследование
В Задание №1. Функциональное наследование измените наследование на прототипное.*/

/*function GeoFigura (){//class constructor
	this._x0;
	this._y0;
};
GeoFigura.prototype.X = function(x){
	if(!x){
		return this._x0
	}else{
		if(typeof x === 'number'){
			this._x0 = x;
		};
	};
};
GeoFigura.prototype.Y = function(y){
	if(!y){
		return this._y0
	}else{
		if(typeof y === 'number'){
			this._y0 = y;
		};
	};
};
GeoFigura.prototype.info = function(){
	for (var key in this){
		if (typeof this[key] === 'function'){
			continue
		}else{
			console.log(key + ' : ' + this[key]);
		}
	}	
}
var g = new GeoFigura();
g.X(21);
console.log(g.X());
g.Y(12);
console.log(g.Y());
g.info();

function Rectangle (){//child constructor Rectangle created
	GeoFigura.call(this);
	this._diagonal;
};
Rectangle.prototype = Object.create(GeoFigura.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.diagonal = function(diagonal){
	if(!diagonal){
		return this._diagonal
	}else{
		if(typeof diagonal === 'number'){
			this._diagonal = diagonal;
		};
	};
};

var r = new Rectangle();
r.X(32);
r.Y(43);
r.diagonal(54);
r.info();

function Circle(){
	GeoFigura.apply(this);
	this._radius;
};
Circle.prototype = Object.create(GeoFigura.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.radius = function(radius){
	if(!radius){
		return this._radius
	}else{
		if(typeof radius === 'number'){
			this._radius = radius;
		};
	};
};

var c = new Circle();
c.X(33);
c.Y(44);
c.radius(55);
c.info();*/



/*Задание №5. Прототипное наследование. Полиморфизм
В Задание №2. Функциональное наследование. Полиморфизм измените наследование на прототипное.*/

/*function Square(a){
	this._a = a;
};
Square.prototype.a = function(a){
	if(!a){
		return this._a
	}else{
		if(typeof a === 'number'){
			this._a = a;
		};
	};
};
Square.prototype.perimeter = function(){
	return this._a*4;
};
var s = new Square(3);
console.log('the perimeter is ' + s.perimeter());

function Cube1(){
	Square.apply(this, arguments);
};
Cube1.prototype.perimeter = function(){
	return this._a*10;
};
var c1 = new Cube1(4);
console.log('the perimeter is ' + c1.perimeter());

function Cube2(){
	Square.apply(this, arguments);
};
Cube2.prototype = Object.create(Square.prototype);
Cube2.prototype.constructor = Cube2;


Cube2.prototype.perimeter = function(){
	var tmp = Square.prototype.perimeter.call(this);
	return tmp*2.5;
};
var c2 = new Cube2(5);
console.log('the perimeter of c2 is ' + c2.perimeter());*/

/*Задание №1. Исключения
Напишите функцию sumSliceArray(arr, first, second), которая принимает массив arr и два числа 
(first и second) – порядковые номера элементов массива, которые необходимо суммировать. 
Например, если ввели 3 и 5 – суммируются 3-й и 5-й элементы.
Функция должна генерировать исключения если были введены не числа, и когда одно из чисел, 
или оба больше размера массива.
Напишите код, который использует данную функцию, предусмотрите обработку возможных исключений.*/

/*function sumSliceArray(arr, first, second){
	if (typeof first !== 'number' || typeof second !== 'number' || first > arr.length || second > arr.length){
		throw new RangeError('change one of numbers!');
	}else{
	return arr[first-1] + arr[second-1];
	};
};
var mass = [1,2,3,4,56,67,7,8,8,9,9,11];*/

/*try{
	console.log(sumSliceArray(mass, 4, 5));
	
}catch(error){
	console.dir(error)
};*/


/*Задание №2. Исключения
Возьмите функцию sumSliceArray(arr, first, second) из предыдущего задания и напишите код, 
который ее использует, но перед самим использованием проверяет все параметры на правильность. 
Таким образом, никогда не должны генерироваться исключения, которые есть внутри данной функции.*/

/*function sSliceArray (arr, first, second) {
	while(typeof first !== 'number'|| first > arr.length || isNaN(first)){
			first = Number(prompt('enter number',''));
	};
	while (typeof second !== 'number' || second > arr.length || isNaN(second)){
		second = Number(prompt('enter number',''));
	};
	return sumSliceArray(arr, first, second);
};
var mass = [1,2,3,4,56,67,7,8,8,9,9,11];
console.log(sSliceArray(mass, false, null));*/

/*Задание №3. Асинхронное программирование
Напишите функцию random(min, max, delay, callback), которая через delay миллисекунд помещает 
callback в очередь на выполнение.
Если min меньше max, функция генерирует случайно число в диапазоне от min до max и 
передает в callback вторым параметром.
Если min больше max, функция создает объект ошибки и передает в callback первым параметром.
Для генерации случайных чисел можно использовать метод Math.random().
Примеры использования функции:
function random(min, max, delay, callback) {
   // Ваш код
}
random(1, 100, 2000, function (error, data) {
   // Ваш код
});
random(1000, 100, 3000, function (error, data) {
   // Ваш код
});
Через две секунды, на экране должно появится случайной число от 1 до 100.
Через три секунды, на экране должна появится информация об ошибке.*/

/*function random(min, max, delay, callback) {
	var data;
	var error;
	if (min<max){
		data = Math.floor(Math.random() * (max - min)) + min;
	}else if(min>max){
		error = new Error ("Invalid parameters");
	};
	
	setTimeout(function () { callback(error, data) }, delay);
 };
 function callback(error, data){
	 if (error) {
	   throw error;
	}
	console.log(data);
 };
 
 random(-100, 100, 2000, callback);
 random(1, 300, 3000, callback);
 random(1000, 100, 4000,callback);
 random(1, 300, 5000, callback);*/

 /*Задание №1. Встроенные типы объектов
Создайте тип объектов Прямоугольник со свойствами координат верхнего левого (x1, y1) и нижнего правого (x2, y2) углов. 
Переопределите методы toString() и valueOf(). Метод toString() должен возвращать строку с описанием текущего состояния.
 Метод valueOf() должен возвращать текущий периметр.*/
 /*function Rectangle(x1, y1, x2, y2){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
};
Rectangle.prototype.toString = function(){
	console.log('this x1 = '+ this.x1);
	console.log('this y1 = '+ this.y1);
	console.log('this x2 = '+ this.x2);
	console.log('this y2 = '+ this.y2);
};
Rectangle.prototype.valueOf = function(){
	console.log('rectangle perimeter = '+ ((this.x2-this.x1)+(this.y2-this.y1))*2);
};

var r = new Rectangle(1,3,5,7);
r.toString();
r.valueOf();
//console.log(Rectangle.toString);
//console.log(r.toString);*/

/*Задание №2. Встроенные типы объектов
Дана строка, которая содержит имена пользователей, разделенные запятой – "Login1,LOgin2,login3,loGin4". 
Разбейте эту строку на массив строк (чтобы отдельно были логины), и приведите их все в нижний регистр.*/

/*var str = "Login1, LOgin2, login3, loGin4";
var strArr = str.split(", ");
console.log(strArr);
for(var key in strArr){
	strArr[key] = strArr[key].toLowerCase();
};
console.log(strArr);*/

/*Задание №3. Встроенные типы объектов
Напишите программу, которая запрашивает у пользователя строки (prompt()). 
Ввод строк должен быть завершен, когда пользователь вводит строку end. 
Далее программа проверяет, есть ли в строке цифры, если да, добавляет в начало строки текст "Numbers: ",
 если нет – "No numbers: " и выводит результат в виде следующей таблицы:

+-----------------+---------------------+
| Исходная строка | Обработанная строка |
+-----------------+---------------------+
| строка_1        | строка_1_обр        |
+-----------------+---------------------+
| строка_2        | строка_2_обр        |
+-----------------+---------------------+
*/
/*var arr = [];
for(var i = 0; i >= 0; i++){
	var tmp = prompt('put the string','some string');
	if( tmp !== 'end'){
		arr[i] = tmp;
	}else{
		break;
	};
};
var arr1 = arrslice();
for(var key in arr1){
	if(arr1[key].valueOf() !== NaN){
		arr1[key] = 'Numbers'.concat(arr1[key]);	
	}else {
		arr1[key] = 'No numbers'.concat(arr1[key]);
	};
	 
};*/

/*Задание №4. Встроенные типы объектов
Напишите функцию addTwoDays(date), которая принимает объект типа Date и добавляет к дате данного объекта два дня.*/

/*Задание №5. Встроенные типы объектов
1. Создайте массив с элементами "Джаз", "Блюз";
2. Добавьте в конец элемент "Рок-н-Ролл";
3. Замените предпоследний элемент с конца на "Классика". Код замены должен быть универсальный, т.е. работать для массивов любой длины;
4. Удалите первый элемент массива и выведите его на экран;
5. Добавьте в начало элементы "Рэп" и "Регги".*/

/*Массив в результате каждого шага:
1. ["Джаз", "Блюз"]
2. ["Джаз", "Блюз", "Рок-н-Ролл"]
3. ["Джаз", "Классика", "Рок-н-Ролл"]
4. ["Классика", "Рок-н-Ролл"]
5. ["Рэп", "Регги", "Классика", "Рок-н-Ролл"]*/

/*Задание №6. Встроенные типы объектов
Расширьте тип объектов Array методом sortDesc(), который сортирует массив по убыванию.
// Ваш код
var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]*/

/*Задание №7. Встроенные типы объектов
Напишите функцию deleteEvenNumbers(array), которая принимает массив array, 
удаляет из массива array четные числа и возвращает его.
function deleteEvenNumbers(array) {
   // Ваш код
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]*/

/*Задание №8. Встроенные типы объектов
Есть следующий код:
var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
   arrLength[i] = "<li>" + arr[i] + "</li>";
}
console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]
Перепишите данный код, заменив цикл for на метод map().*/

/*Задание №9. Встроенные типы объектов
Напишите функцию matrixToArray(matrix), которая принимает двумерный массив (матрицу) matrix,
 разворачивает двумерный массив в одномерный и возвращает его. Данное задание необходимо решить
  при помощи аккумулирующих методов.
function matrixToArray(matrix) {
   // Ваш код
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]*/

/*Задание №1. Регулярные выражения
Напишите функцию, которая проверяет корректность ввода логина. 
Корректным логином, является строка от 2-х до 10-ти символов, 
содержащая только буквы и цифры, при этом цифра не может быть первой.*/

/*var regExp = /^[a-z][a-z0-9]{1,9}$/i;
var login = prompt('put your login','from 2 to 9 characters');
function acc (string){
	if(string.length > 2 && string.length <= 9 && string.match(regExp) !== null){
		alert('Gratulation!!! Your login ' + string + ' is absolutly correct!');
		document.write('Your login is ' + string )
	}else{
		alert('Don`t worry! Try again!')
	};
};
acc (login);*/

/*Задание №2. Регулярные выражения
Разработайте регулярные выражения для поиска в тексте телефонных номеров.
Допустимые форматы телефонного номера +38(057)707-43-56 0(800)500-75-00
Напишите функцию, которая принимает строку и ищет в данной строке телефонные номера'
*/
/*var str = 'Допустимые форматы телефонного номера +38(057)707-43-56 0(800)500-75-00';
var regExp1 = /\+\d\d\(\d{3}\)\d{3}-\d{2}-\d{2}/g;
var regExp2 = /\d\(\d{3}\)\d{3}-\d{2}-\d{2}/g;
function acc (string){
	if(string.match(regExp1) !== null || string.match(regExp2) !== null){
		console.log('There are all numbers ' + string.match(regExp1) + string.match(regExp2));
	}else{
		console.log('No numbers')};
};
acc(str);*/
/*Задание №3. Регулярные выражения
Напишите функцию, которая принимает строку и ищет в данной строке все числа, в том числе и с десятичной точкой.*/

/*var regExp = /\d+\.\d+|\d+/g;
var numbersString = 'qwe1we356rty12.7uiop';
function acc (string){
	if(string.match(regExp) !== null){
		console.log('There are all numbers ' + string.match(regExp));
	}
};
acc (numbersString);*/

//Задание №1. Деструктуризация
//Есть следующий код:
/*let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]*/
//Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.

//Задание №2. Деструктуризация
//Есть следующий код:
/*let names = {
   first: "Tom",
   second: "Sam",
   third: "Ray", 
   fourth: "Bob"
};
let {first: f, third: x, fifth: fifth = 'Name №5'} = names;
console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"*/
//Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.

//Задание №3. Деструктуризация
//Есть следующий код:
/*let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {names: [, name2, , name4], ages: [, age2, , age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26*/
//Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.

//Задание №4. Функции
//Напишите функцию mul(), которая принимает любое количество параметров разного типа
// и возвращает произведение параметров типа Number.
//Если параметры типа Number отсутствуют, возвращает число 0.
/*function mul( ...rest) {
	let res = 1;
	/*if(typeof x === 'number' && x !== 0){
		res *= x;
	};*/
	/*for (let key in rest){
		if(typeof rest[key] === 'number' && rest[key] !== 0){
			res *= rest[key];
		};
	};
	if(res == 1){
		res = 0;
	}
	return res;
};
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0*/
//Нельзя использовать свойство arguments, но в функцию mul() можно добавить один параметр.

//Задание №5. Функции
//Есть следующий код:
/*let obj = {
   name: "obj",
   print: function () {
      // Ваш код
   }
};
function multiCaller(func, count) {
   for (let i = 0; i < count; i++) {
      func();
   }
}
multiCaller(obj.print(), 3);*/  // "obj", 3 раза
//Допишите код используя стрелочные функции, чтобы в консоли браузера появились строки, которые написаны в комментариях.

//Задание №6. Функции
//Есть следующий код:
/*let server = {
   data: 0,
   convertToString: function (callback) {
      callback((function () {
         return this.data + "";
      }).bind(this));
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return (function (callback) {
         this.result = callback();
      }).bind(this);
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result);*/ // "string"
//Измените код используя стрелочные функции, чтобы в коде не использовались методы bind().

//Задание №7. Строки
//Есть следующий код:
/*let names = {
   first: "Tom",
   second: "Sam",
   third: "Ray"
};*/
//console.log(/* Ваш код */); // "Первый: -Tom-, Второй - "Sam", Третий => 'Ray'"
//Допишите код используя интерполяцию, чтобы в консоли браузера появилась строка, которая написана в комментариях.

//Задание №8. Строки
//Напишите функцию шаблонизации format(), которая выводит строку в обратном порядке.
//Примеры использования функции format():
/*function format(s, ...v) {
   // Ваш код
}
let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
console.log(res1);
let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
console.log(res2);
let res3 = format`left${"<->"}right`; // "right<->left"
console.log(res3);*/

/*Задание №1. Объекты
1. Создайте новый объект tv;
2. Добавьте свойство currentChannel со значением 1;
3. Добавьте метод nextChannel(), который увеличивает currentChannel на единицу;
4. Добавьте метод previousChannel(), который уменьшает currentChannel на единицу;
5. Добавьте метод setChannel(number), который переходит на канал по номеру.*/
/*let tv = {
	currentChannel: 1,
	nextChannel(){
		return this.currentChannel += 1;
	},
	previousChannel(){
		return this.currentChannel -= 1;
	},
	setChannel(number){
		return this.currentChannel = number;
	}
} 
console.log(tv.nextChannel());
console.log(tv.previousChannel());
console.log(tv.setChannel(37));*/

/*Задание №2. Объекты
Создайте объект, который описывает MP3 плеер.*/

/*let mp3 = {
	brand: 'sony',
	model:'walkman',
	play(){
			console.log('mp3 '+ this.model + ' playing');
	}
};
mp3.play();*/

/*Задание №3. Классы
Напишите классы для объектов из Задание №1. Объекты и Задание №2. Объекты.*/

/*class TV {
	constructor(brand){
		this._brand = brand;
		this._currentChannel = 1;
	}
	nextChannel(){
		return this._currentChannel += 1;
	}
	previousChannel(){
		return this._currentChannel -= 1;
	}
	setChannel(number){
		return this._currentChannel = number;
	}
};
let tv = new TV('sony');
console.dir(tv);
console.log(tv.nextChannel());

class MP3 {
	constructor(brand, model){
		this._brand = brand;
		this._model = model;
	}
	play(){
		console.log('mp3 '+ this._model + ' playing');
	}
}
let mp3 = new MP3('sony', 'walkman');
console.dir(mp3);
mp3.play();*/

/*Задание №4. Классы
Напишите класс Геометрическая фигура, определите в нем приватные свойства для 
задания центра фигуры. Для доступа к этим свойствам определите необходимые метод/методы.
На основе этого класса создайте два новых (наследники) – Прямоугольник и Круг.
 В этих классах определите особые приватные свойства. (Например, длина диагонали для Квадрата
и радиус для Круга). В каждый из классов добавьте публичный метод info(), который выводит
на экран всю доступную информацию о фигуре.*/

class GeomFig{
	constructor(x0, y0){
		this._x0 = x0;
		this._y0 = y0;
	}
	get x0 (){
		return this._x0
	}
	set x0 (x0){
		if(typeof x0 === 'number'){
			this._x0 = x0;
		}
	}
	get y0 (){
		return this._y0
	}
	set y0 (y0){
		if(typeof y0 === 'number'){
			this._y0 = y0;
		}
	}
}
console.dir(GeomFig);
/*Задание №5. Классы
Напишите класс Квадрат, определите защищенное свойство для хранения значения стороны. 
Для доступа к этому свойству определите необходимые метод/методы. Также определите публичный 
метод, который возвращает периметр.
На основе этого класса создайте класс Куб и переопределите метод получения периметра.
Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших расчетов).*/

/*Задание №6. Классы
Напишите класс Круг и реализуйте следующий функционал:
1. Определите конструктор, который запрашивает координаты центра круга, его радиус и инициализирует объект;
2. Определите метод получения длины окружности для текущего объекта (L = 2 * π * R);
3. Определите статический метод, который принимает радиус и возвращает длину окружности для заданного радиуса (L = 2 * π * R);
4. Определите метод получения объекта-круга, который возвращает копию текущего объекта;
5. Определите статический метод, который принимает координаты центра круг, его радиус и возвращает объект круга с заданными параметрами;
6. Определите метод проверки попадания точки в круг;
7. Определите метод преобразования текущего состояния объекта в символьную строку (toString()).*/





































