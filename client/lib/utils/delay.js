import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';

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

function delayP(options) {
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
