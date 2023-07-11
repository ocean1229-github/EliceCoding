// 다음은 Express.js로 구현한 간단한 서버 프로그램입니다.

// 지시사항에 따라 path parameter를 사용해 봅니다.


// 지시사항
// path parameter를 사용하여 메시지를 응답으로 보내는 라우팅을 완료합니다.

// /say/ 뒤에 어떤 문자열이 오든지 해당 문자열을 응답으로 출력합니다.

// ex)
// /say/hi라는 요청이 들어오면 응답으로 “hi” 가 출력됩니다.

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("hi");
});

/* 지시사항의 내용을 따라 아래 코드를 수정해보세요. */
app.get('/say/:greeting', (req, res) => {
    const { greeting } = req.params;
    res.send(greeting);
});

app.listen(8080);