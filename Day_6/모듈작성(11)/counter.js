// 현재 counter 모듈을 실행할 때 값이 증가하지 않는 동작을 하고 있습니다.

// counter 모듈이 정상적으로 동작할 수 있도록 counter.js 파일을 올바르게 수정하고 index.js 파일에서 해당 모듈을 사용하는 부분을 올바르게 수정합니다.

// counter.js에 작성된 module.exports = count += 1 이라고 작성된 코드를 호출할 때 마다 값이 1씩 증가하도록 코드를 수정합니다.

let count = 0;

/* 지시사항 1번 내용을 내용을 따라 코드를 수정해보세요. */
// module.exports = count += 1;
module.exports = () => {
    count += 1;
    return count;
};