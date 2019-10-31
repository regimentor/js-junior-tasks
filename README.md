

## Напишите код, который при клике на любой div внутри root будет выводить в консоль его id.
```javascript
<div id="root" style="background: red;">
    root
    <span id="id1" style="background: lightblue;">id1</span>
    <div id="id2" style="background: green;">
        id2
        <div id="id3" style="background: yellow;">id3</div>
    </div>
</div>
```

## Напишите код, который сделает из массива объект
```javascript
var arr = [
 {name: 'width', value: 10}, 
 {name: 'height', value: 20}
]

console.log(createObj(arr)) // {width: 10, height: 20}
```

## Что вернёт этот код 
```javascript
console.log(typeof (function(){})()) // ??
```

##  Используя функцию foo выведите в консоль слово "Hello"
```javascript
function foo() {
    return this.name;
}
```

## Модифицируйте код что бы вывод в консоль был от 0 до 10
```javascript
for (var i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}
```

## Реализуйте сортировку пузырьком
### Функция bubleSort должна быть чистой
```javascript
function bubleSort(arr) {}

const arr = [5, 2, 7, 0, 3, 1];
const sortedArr = bubleSort(arr);
console.log(sortedArr) // [0, 1, 2, 3, 5, 7]
```
