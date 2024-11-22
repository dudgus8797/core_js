import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';
import { insertLast } from './../dom/insert.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(()=>{
//   first.style.top = '-100px';

//   delay(()=>{
//     first.style.transform = 'rotate(360deg)'

//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })

//     second.style.transform = 'rotate(360deg)'
//   })
//   second.style.top = '100px';
// })

const shouldRejected = false;

const p = new Promise((성공, 실패) => {
  if (!shouldRejected) {
    성공('성공입니다~');
  } else {
    실패('실패입니다~');
  }
});

p.then((res) => {
  // console.log( res );
});

// promise 객체를 반환하는 함수 => 재사용

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

export function delayP(options) {
  let config = { ...defaultOptions };
  if (isNumber(options)) {
    config.timeout = options;
  }
  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }
  const { shouldRejected, data, errorMessage, timeout } = config;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

delayP(2000);

// delayP(false)
// .then((res)=>{

//   return delayP(false)
// })
// .then((res)=>{

//   console.log( res );

// })

// delayP(false)
//   .then((res) => {

//     first.style.top = '-100px';
//     return delayP(false);
//   })
//   .then((res) => {

//     first.style.transform = 'rotate(360deg)';
//     return delayP(false);
//   })
//   .then((res) => {

//     first.style.top = '0px';
//     return delayP(false);
//   });

//재설명
// const str = 'aa'
// const str = new String('aa')
// const data = {
//   method: 'GET',
// };

// const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// function xhr(options) {
//   const { method, url } = { ...data, ...options };

//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send();
//   return new Promise((resolve, reject) => {
//     xhr.addEventListener('readystatechange', () => {
//       if (xhr.readyState === 4) {
//         if (xhr.status >= 200 && xhr.status < 400) {
//           const data = JSON.parse(xhr.response);
//           resolve(data);
//         } else {
//           reject('실패');
//         }
//       }
//     });
//   });
// }

// xhr({
//   method: 'GET',
//   url: END_POINT,
// }).then((result) => {
//   // console.log( result );
// });

// const p = new Promise((resolve, reject) => {
//   if (false) {
//     resolve('오예!');
//   } else {
//     reject('오예!'); // 에러 터짐
//   }
// });

// p.then((res) => {
//   console.log(res);
// })
//   .then(
//     (res) => {
//       console.log(res);
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .then((res) => {
//     console.log(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const defaultOptions = {
//   timeout: 1000,
//   data: '더미 데이터',
// };

// function delayP(options) {
//   let config = { ...defaultOptions };

//   if (typeof options === 'number') {
//     config.timeout = options;
//   }

//   if (typeof options === 'object') {
//     config = { ...defaultOptions, ...options };
//   }

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, config.timeout);
//   });
// }

// delayP().then((res) => {
//   console.log(res);
// });

async function d() {
  return 1;
}
const _d = d();
_d.then(console.log);

console.log();
//_d then(console.log)
// async 함수는 무.조.건. Promise Object를 반환
// await 2가지 기능 수행
//        1. 코드 실행 흐름 제어
//        2. result 꺼내오기

async function delayA() {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve('성공');
    }, 2000);
  });

  const result = await p;

  console.log(result);

  return result;
}

// console.log( delayA() );

function _라면끓이기() {
  delayP({ data: '물' })
    .then((res) => {
      console.log(res);

      return delayP({ data: '스프' });
    })
    .then((res) => {
      console.log(res);

      return delayP({ data: '면' });
    })
    .then((res) => {
      console.log(res);

      return delayP({ data: '계란' });
    })
    .then((res) => {
      console.log(res);

      return delayP({ data: '그릇' });
    })
    .then((res) => {
      console.log(res);
    });
}

async function 라면끓이기() {
  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  // const c = await delayP({data:'면'})
  console.log('면');

  // const d = await delayP({data:'계란'})
  console.log('계란');

  const e = await delayP({ data: '그릇' });
  console.log(e);
}

// 라면끓이기()(delayA());

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/50');

  insertLast(
    document.body,
    `<img src="${data.sprites.other.showdown['front_default']}" alt="" />`
  );
}

// getData();
