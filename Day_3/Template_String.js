// + 를 사용하여 선언되는 문자열을 Template String 표현 방법으로 수정해 봅니다.

// + 를 사용하지 않고 문자열과 변수를 연결합니다.
// Template String 변수 표현 방법을 적절하게 활용해 봅니다.
// 줄바꿈과 따옴표를 \ 로 escape 하지 않고 사용해 봅니다.


const animal = 'Cat';
const legs = 4;
const sound = 'meow';

/* 지시사항의 내용을 따라 아래 코드를 수정해보세요. */

const explain = `${animal} has ${legs} legs.
${animal} says "${sound}".`;

console.log(explain);
