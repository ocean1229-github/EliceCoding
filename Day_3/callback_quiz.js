// countDown(count, callback) 함수는 count 값을 초 단위로 카운트 다운한 후 callback 함수를 실행하는 함수입니다.

// 다음을 만족하도록 코드를 작성합니다.

// 5초 후에 callback이 실행되도록 수정합니다.
// callback은 “BOOM!”이라는 문자열이 출력되는 함수로 구성 합니다. 출력은 console.log 함수를 사용합니다.
// 함수는 ES6의 arrow function을 사용합니다.

const countDown = require('./countdown');

/* 지시사항의 내용을 코드로 작성해보세요. */

countDown(5, () => {
    console.log("BOOM!");
})