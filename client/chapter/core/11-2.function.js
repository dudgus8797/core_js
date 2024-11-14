/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  //함수 안에서만 접근 가능한 인수들의 집합 객체 존재 : arguments라고 한다. => 유사배열 => 지역변수 함수 안에서만 사용가능
  let total = 0;
  //for문
  // for (let i=0; i < arguments.length; i++){
  // total += arguments[i];
  // }
  // for (const value of arguments) {
  //   total += value;
  // }
  // arguments는 유사배열 => array 진짜 배열로 만들어야함
  // const arr = [...arguments]; // spread syntax
  // const arr = Array.from(arguments); 배열의 statuc method
  const arr = Array.prototype.slice.call(arguments); //배열의 instnce method 구식방법
  //instance method <=배열만 사용가능한 메소드

  //forEach function(value,index,array)순으로 결과가 나옴
  // forEach => 배열을 순환 => 값을 반환하지 않음

  //value arr의 각각의 아이템들이 나옴
  //index arr의 순서 0번째 1번째 등등
  //array 자기 자신이 나옴 forEach()를 호출한 배열
  // arr.forEach(function (price, i) {
  //   total += price;
  // }); //콜백 함수

  // console.log(arr);

  // reduce(function(첫번째 아이템값, 첫번째를 제외한 아이템들, 인덱스){})
  // reduce => 배열을 순환 => 값을 반환 문자,숫,불린,배열,객체...
  // const result = arr.reduce(function (acc, cur) {
  //   return arr + cur;
  // }, 0);
  // total = arr.reduce(function (acc, cur) {
  //   return acc + cur;
  // }, 0);
  // reduce + arrow function
  // return arr.reduce((acc.cur)=> acc + cur)

  //arguments 한번만 빌려쓰기 가능
  // Array.prototype.forEach.call(arguments, function (price) {
  //   total += price;
  // });

  // 부모를 바꿔치기
  arguments.__proto__ = Array.prototype;
  console.log(arguments);
  console.log(total);
};
const result = calculateTotal(10000, 30000, 45000, 2500 + 30000 + 25000);
console.log(result);

//map => 배열을 순환 => 값을 변환 : ⭐️새로운 배열

const friends = ['박혜미', '이강현', '공세현', 'MJ'];

const f = friends.map(function (name, index) {
  return `<li data-order="${index + 1}"> 이름 : ${name} </li>`;
});

f.forEach(function (tag) {
  document.body.insertAdjacentHTML('beforebegin', tag);
});

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (condition, success, fail) {
  if (condition) success();
  else fail();
};

cb(
  true,
  function () {
    console.log('성공입니다!');
  },
  function () {
    console.log('실패입니다!');
  }
);

// arrow function
cb(
  true,
  () => console.log('성공입니다!'),
  () => console.log('실패입니다!')
);

a(1);

function a(a) {
  console.log(a);
}

function movePage(url, success, fail) {
  if (url.includes('https')) {
    // 서버 통신 끝나면 나중에 해줘.  success(url);
  } else {
    fail();
  }
}

// 콜백함수 => arrow function

movePage(
  'https://www.daum.net',
  function (url) {
    return `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`;
  },
  function () {
    console.log('잘못된 경로를 입력하셨습니다.');
  }
);

// arrow function

movePage(
  'https://www.daum.net',
  (url) => `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`,
  () => console.log('잘못된 경로를 입력하셨습니다.')
);

function getGeolocation(success, fail) {
  let data;

  navigator.geolocation.getCurrentPosition((so) => {
    success(so.coords.latitude);
  });
  return data;
}

getGeolocation(
  (data) => {
    console.log(data);
  },
  () => {}
);
// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
// 함수가 선언됨과 동시에 실행되는 것을 말함
// var는 블록 스코프: x
// var는 함수 스코프: o

//encapsulation (캡슐화)
//모듈 프로그램 => import 내보내기  export  가져오기
// import { css } from "./css.js";

const MASTER = (function (g) {
  console.log(g);

  var uuid = 'asdkjfxzc!@4ja8QKEAnqw^@';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})(window);

const css = (function () {
  function setCss(node, prop, value) {
    if (typeof node === 'string') node = document.querySelector(node);

    if (!(prop in document.body.style))
      throw new ReferenceError(
        'setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.'
      );

    if (!value)
      throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.');

    node.style[prop] = value;
  }

  function getCss(node, prop) {
    if (typeof node === 'string') {
      node = document.querySelector(node);
    }

    if (!(prop in document.body.style)) {
      throw new ReferenceError(
        'getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.'
      );
    }

    return getComputedStyle(node)[prop];
  }

  function css(node, prop, value) {
    return !value ? getCss(node, prop) : setCss(node, prop, value);
  }

  return css;
})();
