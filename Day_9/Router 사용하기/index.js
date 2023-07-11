// ./routes/users.js는 get, post, put, delete 라우팅을 가진 라우터 모듈입니다.

// index.js 파일을 수정하여 라우터 모듈을 app 객체에 ‘/users’ 경로로 연결합니다.

// 1. routes 디렉터리 안에 위치한 users 모듈을 불러옵니다.

// 2. 불러온 users 모듈을 사용하여 “/users” 경로로 연결합니다

const express = require('express');

/* 지시사항 1번 내용을 코드로 작성해보세요. */
const userRouter = require('./routes/users');

const app = express();

app.get('/', (req, res) => {
    res.send("OK");
});

/* 지시사항 2번 내용을 코드로 작성해보세요. */
app.use('/users', userRouter);


app.listen(8080);