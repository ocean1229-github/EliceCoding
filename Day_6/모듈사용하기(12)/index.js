const module1 = require('./module1');
const module2 = require('./module2');
const data = require('./data');
const funcModule = require('./funcModule');

console.log(
    module1,
    module2,
    data.name,
    /* funcModule 사용 */
    funcModule()
);

// function Module로 위에서 링크 처리로 가져오는 방식.
// 이 코드 그대로가 모듈 참조하는 방식임.