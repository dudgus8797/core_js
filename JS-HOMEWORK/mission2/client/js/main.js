import { getNode } from '../../../../client/lib/dom/getNode.js';
import { data } from './data.js';
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
//nav에 있는 li에 접근해서 is-active 추가 하기
//만약 있다면 is-active 지우기
const navigation = getNode('.nav');
const img = getNode('button > li');

function handler(e) {
  e.preventDefault();
  const target = e.target.closest('li');
  const list = [...this.children];
  if (!target) return;
  // list.forEach((li) => li.classList.remove('is-active'));
  if (target.classList.contains('is-active')) {
    target.classList.remove('is-active');
  } else {
    target.classList.add('is-active');
  }
  //data 라는 배열 안에 객체...객체 안에 키와 value가져오기
  // img.src = `./../assets/${data}.jpeg`;

  // for (let element of data) {
  //   if(element ){}
  //}
  //forEach를 통해서 이름찾기
  data.forEach((data) => {
    console.log(data.name);
    return data.name;
  });
  target.src = `./assets/${data.name}.jpeg`;
  target.alt = data.alt;
}

navigation.addEventListener('click', handler);
