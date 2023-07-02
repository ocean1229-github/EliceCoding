class Animal {
    constructor(name, sound) {
        /* 지시사항 1번 내용을 코드로 작성해보세요. */
        this.name = name;
        this.sound = sound;
    }
    
    explain() {
        console.log(`${this.name} says ${this.sound}`)
    }
}

/* 지시사항 2번 내용을 코드로 작성해보세요. */
const duck = new Animal("duck", "quack");

module.exports = duck;