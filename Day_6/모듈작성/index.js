// index.js에서 작성한 counter.js 모듈을 호출하는 코드를 올바르게 동작할 수 있도록 수정합니다.

const counter = require('./counter');

for (let i = 0; i < 10; i++) {
    /* 지시사항 2번 내용을 따라 코드를 수정해보세요. */
    console.log(counter());
}