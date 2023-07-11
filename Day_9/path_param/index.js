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