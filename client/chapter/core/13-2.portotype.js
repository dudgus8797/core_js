/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// const { version } = require('uuid');

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// object literal -> function constructor -> class syntax
//프라이빗 필드 => #을 붙힘 console로 찍었을때 #name은 보호를 해줌 밖에서 접근이 안됨(해당 함수 안에서는 접근이 가능한데 함수 밖에 접근 못하게 하기 위해 캡술화와 비슷)
class Animal {
  // public class field 정적으로 쓸수 있는 공간 this와 차이점-> 명시를 해주는 공간 , 재할당이 불가능한 공간
  legs = 4;
  tail = true;
  #name = 'unknown';
  constructor(name) {
    //최초 1회만 실행됨, 강제로 실행시킬수도 강제로 실행을 안시킬 수도 없다->초기화 할때 많이 씀
    this.#name = name;
    this.stomach = [];
    console.log(this.#name);
    // this.legs = 4; //런타임 중에 돌아가는 공간, 재할당이 가능한 공간
    // this.tail = true;
  }
  get eat() {
    return this.stomach;
  }
  set eat(food) {
    this.stomach.push(food);
  }
}

const options = {
  version: '1.0.0',
  company: '8b-studio',
  ceo: '심선범',
};

//Animal 클래스를 확장 시켜 타이거를 만들겠다 라는 뜻
class Tiger extends Animal {
  static defaultProps = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };
  constructor(name) {
    //constructor를 값을 주면 super에도 값을 줘야함
    super(name); //call과 같은 의미
    this.pattern = '호랑이 무늬';
  }
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }
  static bark(sound) {
    return sound + '🐯';
  }
}

// const a = new Animal('몽실이'); //new를 사용하면 객체가 생성된다 //호랑이라는 객체만 쓸수있는 인스턴스 메서드
const 호랑이 = new Tiger('호돌이');

//객체 지향 프로그래밍 -> 객체에 의존함 this가 있어야함 mvc패턴 -> 설계를 바꾸기가 어려움
//함수형 프로그래밍 -> 설계를 바꾸기 쉬움 내가 뭘 넣느냐에 따라 값이 달라짐 그래서 여러가지 함수를 만들어 놓고 모듈처럼 사용함

/*
1.버튼 선택
2.클릭 이벤트
3.태그 만들기
4.태그 화면에 랜더링 하기
*/

// const button = document.querySelector('.btn');
// let count = 0;
// function handleClick() {
//   const tag = `
//     <div>${++count + 'clicked'}</div>
//   `;
//   document.body.insertAdjacentHTML('beforeend', tag);
// }
// button.addEventListener('click', handleClick);

//class
class Button {
  constructor(selector) {
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
  }

  createTag() {
    return `<div>${++this.count + 'clicked'}</div>`;
  }

  _render() {
    document.body.insertAdjacentHTML('beforeend', this.createTag());
  }

  handleClick() {
    this._render();
  }
  //이벤트 연결
  attachEvent() {
    this.button.addEventListener('click', () => this.handleClick());
  }
}

const button = new Button('.btn');

//분리한 함수
// const _button = document.querySelector('.btn');

// let count = 0;

// function createTag() {
//   return `<div>${++count + 'clicked'}</div>`;
// }

// function render(data) {
//   document.body.insertAdjacentHTML('beforeend', data);
// }

// function handleClick() {
//   render(createTag());
// }

// _button.addEventListener('click', handleClick);

class User {
  #password;
  constructor(userID, userPW) {
    this.userID = userID;
    this.#password = this.hashPassword(userPW);
  }
  hashPassword(pw) {
    return 'hashCODE' + pw + '소금챱챱';
  }
  checkPassword(pw) {
    return this.#password === this.hashPassword(pw);
  }
}
const user = new User('tiger', 'hello123');
