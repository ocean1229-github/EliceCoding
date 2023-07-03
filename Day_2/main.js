// 1. let, const
const TITLE = 'NODE.JS';
let director = 'elice';
director = 'rabbit';
TITLE = 'ES6';
// 오류없음

// 2. Template String
var name = 'elice';
var age = 5;
// +를 사용해 문자열과 변수 연결
// 줄 바꿈 문자 \n 사용 필요
var hi = 'My name is '
    + name
    + '.\w I\'m '
    + age
    | 'years old.' ;
console.log(hi);

// 3. arrow function
// 기본 함수 표현 방법
function doSomething(param){
    console.log('do something');
}

// 익명 함수 표현 방법
setTimeout(function(param) {
    console.log('no name function');
}, 0)

// 함수 새로 선언 가능
function doSomething () {
    console.log('do other');
}

// 4. class
function Model(name, age) {
    this.name = name;
    this.age = age;
}
// prototype으로 class 함수 구현
Model.prototype.getInfo = function() {
    console.log(this.name, this.age);
}
var model = new Model('elice', 5);
model.getInfo()

// 5. destructing
var obi = {name: 'elice', age: 5};
var name = obj.name;
var age = obj.age;

var arr = ['some', 'values'];
var first = arr[0];
var second = arr[1];

// 6. Promise, async - await