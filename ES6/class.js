class Car {
    constructor(car) {
        this.name = car.name;
        this.price = car.price;
        this.year = car.year;
    }
}

drive(){
    console.log('bobobobobob');
}


const avante = new Car({
    name: '아반떼',
    price: 2500,
    year: 2019 });

const morning = new Car({
    name: '모닝',
    price: 150,
    yesar: 2017,
})

avante.drive();
morning.drive();

class SuperCar extends Car {

}


// 실습1 - RPG 게임 개발 중
// Monster 클래스의 instance는 생성될 때, health가 100
// constructor는 options라는 인자를 받으며
// options는 name이라는 키가 있따.{name:''}
// Monster 만들고 피카츄라는 이름을 가진 몬스터를 만들자.

class Monster {
    constructor(options) {
        this.health = 100;
        this.name = options.name;
    }
}

const 피카츄 = new Monster({name: '피카츄'});
console.log(피카츄.health);

class Dinosaur extends Monster {
    constructor(options){
        super(options);
    }
    몸통박치기(monster) {
        monster.health -= 10;
    }
}

const tirano = new Dinosaur({name: '티라노'});
tirano.몸통박치기(피카츄);
console.log(피카츄.health);



