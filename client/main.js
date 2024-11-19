//named export => import {} from '...'으로 해야함 -> 여러개도 가능함 ->as ...로 이름을 바꿀수 있음
//default export => import from '...' -> 하나만 내보낼수 있음 -> 이름을 자유롭게 변경가능

// import { getNode } from './lib/dom/getNode.js';
// import { insertLast } from './lib/dom/insert.js';
// import { clearContents } from './lib/dom/clearContents.js';

import {
  getNode as $,
  getNodes,
  typeError,
  insertLast,
  clearContents,
} from './lib/dom/index.js';
// 1. input 선택하기
// 2. input 이벤트 바인딩
// 3. input의 value 값 가져오기
// 4. 숫자 더하기
// 5. result에 출력하기

/* global clearContents */

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

function handleInput() {
  const firstValue = Number(first.value);
  const secondValue = +second.value;
  const total = firstValue + secondValue;

  clearContents(result);
  insertLast(result, total);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
