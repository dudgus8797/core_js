import {
  tiger,
  getNode,
  delayP,
  insertLast,
  changeColor,
  renderSpinner,
  renderEmptyCard,
  renderUserCard,
} from './lib/index.js';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    const response = await tiger.get(END_POINT);

    // getNode('.loadingSpinner').remove();
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        // console.log('애니메이션 끝!');
        this._targets[0].remove();
      },
    });

    const data = response.data;

    await delayP(1000);

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      // delay: 1,
      x: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });
  } catch {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

// 1. user 데이터 fetch 해주세요.

// 2. fetch 데이터 유저의 이름만 콘솔에 출력
function handleDeleteCard(e) {
  const button = e.target.closest('button');
  if (!button) return;
  const article = button.parentElement;
  const index = article.dataset.index.slice(5);
  tiger.delete(`${END_POINT}/${index}`).then(() => {
    alert('삭제가 완료됐습니다.'); //await을 줄려면 async를 주면 됨
  });
}

userCardInner.addEventListener('click', handleDeleteCard);
