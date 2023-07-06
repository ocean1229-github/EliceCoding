const name = 'elice';
const age = 5;
const nationality = 'korea';

module.exports = {
    name,
    age,
    nationality,
};

---

const student = require('.\elice');
// student 출력값 { name: 'elice', age:5, nationality: 'korea'}

//module
module.exports = {
    name,
    age, 
    nationality
}

// 모듈이 load될 때 사용될 값을 module.exports로 내보냄

//module
exports.name = name;
exports.age = age;
exports.nationality = nationality;

// 변수명으로 export 하는 모듈 작성법
// 모듈을 object로 만들고, 각 key - value를 지정해서 내보냄

module.exports = (name, age, nationality) => {
    return {
        name,
        age,
        nationality,
    };
}

--
const student = require('./elice')('elice', 5, 'korea');
// student 출력값 {name: 'elice', age: 5, nationality: 'korea'}

const dayjs = require('dayjs');
console.log(dayjs());
의존성 패키지들은 require('package-name')로 load 할 수 있음
패키지를 사용하려면 node_modules에 내려받아져 있어야 함

// 직접 작성한 모듈
const myModule = require('.\my-module');
console.log(myModule);
// 직접 작성한 모듈은 현재 파일과의 상대 디렉터리로 load 
// my-module이 .js파일인 경우 해당 파일 로드
// my-module이 디렉터리인 경우 my-module index.js 파일 load

const myFunctionModule = require('./my-function-module');
console.log(myFunctionModule(name, age, nationality)),
// 함수형 모듈은 load한 경우 모듈이 바로 실행되지 않음
// 필요한 시점에 load된 함수를 실행하여 모듈을 사용할 수 있음

// json파일 가져오기
// require-my-data
// my-data.json을 가지고 있음
const myData = require('./my-data');
console.log(myData);

// require로 json 파일도 load 가능
// object로 자동파싱

// module.exports를 사용하여 모듈을 작성할 수 있음
// require를 사용하여 의존성 패키지, 모듈, json 파일을 사용할 수 있음
// 모듈은 첫 require 시에만 실행하고 cache 되므로
// 여러 번 실행할 모듈은 함수형으로 작성해야 함