const name = 'elice';
const age = 5;
const nationality = 'korea';

module.exports = {
    name,
    age,
    nationality,
};

---

const student = require('.\elice');
// student 출력값 { name: 'elice', age:5, nationality: 'korea'}

//module
module.exports = {
    name,
    age, 
    nationality
}