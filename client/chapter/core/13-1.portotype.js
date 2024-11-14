/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  // stomach: [], 모든 동물에게 상속이 됨
  get eat() {
    //getter
    return this.stomach; //get a set a 를 같은 메소드에서도 같은 이름이 쓸수 있음
  },
  set eat(food) {
    //setter
    this.stomach = [];
    this.stomach.push(food); //get은 get eat=a식으로 씀 set은 get.eat으로 불러올수있음
  },
};

const tiger = {
  pettern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  name: '백돌이',
  color: 'white',
  __proto__: tiger,
};

const 한라산호랑이 = {
  name: '한돌이',
  color: 'orange',
  __proto__: tiger,
};

// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.getEat = function () {
    return this.stomach ?? []; //stomach가 없음 []이 나옴
  };
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}
// const a = new Animal();
function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  };
}
// Tiger.prototype = a;
const 금강산호랑이 = new Tiger('금순이');

Tiger.bark = function (sound) {
  return sound;
};

// function instance method
//call -> 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수를 값으로 받음
//apply -> 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수를 배열로 받음
//bind -> 함수를 대신 실행하지 않음 ->빌려쓰기 (결과가 나중에 나와야하는 경우 함수가 값으로 나오는 경우)

function sum(a, b) {
  console.log(this);
}

sum.call('안녕', [10, 20]);
//배열로 넣어야함 그럼 a와 b에 알아서 들어감

sum.bind('안녕', 10, 20);
