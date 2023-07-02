// ES6 desctructing을 사용해 봅니다.

// 다음은 오브젝트와 배열의 값을 다른 변수로 저장하는 예제입니다.

// 주어진 지시사항을 만족하도록 코드를 수정해 봅니다.

// object destructing과 array destructing을 사용하여 주어진 코드를 간결하게 표현해 봅니다.

// 1. name과 sound를 object destructing을 사용하여 한 줄 코드로 수정합니다.

// 2. first, second, third를 array destructing을 사용하여 한 줄 코드로 수정합니다.

const duck = {
    name: "duck",
    sound: "quack",
};

// /* 지시사항 1번 내용을 따라 코드를 수정해보세요. */
// const duckName = duck.name;
// const duckSound = duck.sound;

const { name : duckName, sound: duckSound} = duck

console.log("name", duckName);
console.log("sound", duckSound);

const animals = ["duck", "cat", "bear"];


/* 지시사항 2번 내용을 따라 코드를 수정해보세요. */
// const first = animals[0];
// const second = animals[1];
// const third = animals[2];

const [first, second, third] = animals;

console.log("first", first);
console.log("second", second);
console.log("third", third);
