// XPathExpression.js는 Node.js의 웹 프레임워크 중 가장 유명한 웹 프레임워크
// 필요에 따라 유연하게 구조 설정 가능
// 다양한 미들웨어를 통해 필요한 기능을 간단하게 추가 가능
// 모든 동작이 명시적으로 구성되기 때문에,
// 웹 프레임워크의 동작 방식을 이해하기 가장 좋은 프레임워크

// npm init express
// $mkdir my-web
// $cd my-web
// $npm init
// $npm i express

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);
// Express.js를 처음부터 작성할 수 있는 방법
// 직접 모든 구조를 작성해야 하기 때문에, Express.js를 처음 접하는 사용자에겐 쉽지 않음

// express-generator 사용하기
// $npm i -g express-generator
// $express my-web
// $cd my-web
// $npm i
// $npm start

// express.js는 express-generator라고 하는
// 프로젝트 생성기를 제공함

// express-generator를 사용하면
// 프로젝트의 기본구조를 자동으로 생성해줌

// 빠르게 프로젝트를 시작하기 좋은 방법

// 생성된 프로젝트는 npm start로 실행가능

// npx + express-generator 사용하기
// $npm express-generator my-web
// $cd my-web
// $npm i
// $npm start 
// npx를 사용하여 express-generator를 설치하지 않고, 바로 사용 가능.

// express-generator는
// 프로젝트 생성 이후엔 사용되지 않기 떄문에,
// npx를 사용하는 것도 좋은 방법