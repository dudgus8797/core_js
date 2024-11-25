import {
  getNode,
  addClass,
  removeClass,
} from '../../../../client/lib/dom/index.js';
import data from './data.js';
import { AudioPlayer } from './audio.js';
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
const nav = getNode('.nav');
const list = [...nav.lastElementChild.children];
const title = getNode('.nickName');
const img = getNode('.visual img');

const audioList = [];

function createAudioList(data) {
  data.forEach(({ name }) => {
    audioList.push(new AudioPlayer(`./assets/audio/${name}.m4a`));
  });
}

function setName(data) {
  title.textContent = data.name;
}

function setBgColor({ target = document.body, colorA, colorB = '#000' }) {
  target.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

function setImage(target, data) {
  // if(target.tagName === 'IMG'){
  if (target.hasAttribute('src')) {
    target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
    target.alt = data.alt;
  }
}

function setAudioPlayer(index) {
  audioList.forEach((sound) => {
    sound.stop();
  });

  if (index === 1 || index === 3) {
    audioList[index].volume = 0.2;
  }

  audioList[index].play();
}

function handleNavigationClick(e) {
  const target = e.target.closest('li');

  if (!target) return;

  const index = target.dataset.index - 1;
  const source = data[index];

  setName(source);
  setBgColor({ colorA: source.color[0], colorB: source.color[1] });
  createAudioList(data);
  setAudioPlayer(index);

  setImage(img, source);

  const audio = new AudioPlayer(`./assets/audio/${source.name}.m4a`);

  list.forEach((li) => removeClass(li, 'is-active'));

  addClass(target, 'is-active');
}

nav.addEventListener('click', handleNavigationClick);
