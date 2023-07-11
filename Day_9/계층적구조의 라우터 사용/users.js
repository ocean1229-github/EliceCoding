const { Router } = require('express');
const petsRouter = require('./pets');
const router = Router();

router.get('/', (req, res) => {
    res.send('GET /users');
});

/* /:userId/pets 경로에 petsRouter 연결 */
// users가 앞에 있고 그 이후 이 라우터를 받게됨. (pet당담)
router.use('/:userId/pets', petsRouter);

module.exports = router;