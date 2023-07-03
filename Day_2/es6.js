// 1. let, const
const TITLE = 'NODE.JS';
let director = 'elice';
director = 'rabbit';
TITLE = 'ES6';
//오류 발생

// 2. Template String
const name = 'elice';
const age = 5;
// 문자열 사이에 간단하게 변수 사용 가능
// 따옴표 간단하게 사용 가능
// 줄 바꿈 지원
const hi = 
`My name is ${name}.
I'm ${age} years old`;
console.log(hi);

// 3. arrow function
// 상수형으로 표현가능
const doSomething = (param) => {
    console.log('do something');
}

// 익명 함수 간결하게 표현 가능
setTimeout((param) => {
    console.log('no name function');
}, 0)

// 함수 새로 선언 불가능
doSomething = () => {
    console.log('do other');
}

// 4. class
// 일반적인 형태의 class 구현 가능
class Model{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo(){
        console.log(this.name, this.age);
    }
}
const model = new Model('elice', 5);
model.getInfo();

//= 5. destructing
const obj = {name: 'elice', age:5};
// Object의 key와 같은 이름으로 변수 선언 가능
const {name, age} = obj;
// 다른 이름으로 변수 선언하는 방법
const {name:n1, age: a1 } = obj;

const arr = ['some', 'values'];
// arr에서 순차적으로 변수 선언 가능
const [first, second] = arr;

// 6. Promise, async - await