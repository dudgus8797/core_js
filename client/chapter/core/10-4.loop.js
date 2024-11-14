/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2024,
  hasOwnProperty() {
    return '안녕!';
  },
};

Object.prototype.nickName = 'tiger';

'toString' in javaScript; // true

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log( javaScript.hasOwnProperty('toString') );

// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'creator'));
// 조상인 Object에 .prototype을 넣어 hasOwnProperty는 객체메소드를 다시 정의하면 오작동을 함
// 그래서 함수를 부르는 call이라는 것을 사용해야 오작동을 안함

// console.log(Object.hasOwn(javaScript, 'nickName'));

// for ~ in 문
// in 문은 하나 조횐
// for ... in 문은 여러개를 조회
// - 객체 자신의 속성만 순환하려면?

for (const key in javaScript) {
  // console.log(javaScript[key]);
  if (Object.hasOwn(javaScript, key)) {
    const value = javaScript[key];
    console.log(value);
  }
}

// - 배열 객체 순환에 사용할 경우?
// 배열도 for...in문으로 순환이 가능은하다.
// 하지만 for...in보다 반복문을 사용하는것이 좋다

// 배열은 순서에 굉장히 민감한 데이터 => for...in문은 순서를 보장하지 않는다.
const tens = [10, 100, 1000, 10000];

for (const key in tens) {
  console.log(tens[key]);
}
// enumerable : 열거 가능한
for (const key in javaScript) {
  console.log(key);
}

const obj = {};

obj.nickName = 'tiger';

Object.defineProperty(obj, 'age', {
  value: 30,
  enumerable: true,
  writable: false,
  configurable: false,
});

Object.defineProperties(obj, {
  age: {
    value: 30,
    enumerable: true,
    writable: false,
    configurable: false,
  },
  email: {},
});

console.log(obj);

for (const key in obj) {
  console.log(key);
}
