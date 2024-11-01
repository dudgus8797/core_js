const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland',
};
function getValueAtObject(obj, key) {
  if (key in obj) {
    return obj[key];
  } else {
    throw new Error('다른 값을 입력해 주세요');
  }
}
// console.log(getValueAtObject(person, 'name')); // 'Alice'
// console.log(getValueAtObject(person, 'age')); // 25
// console.log(getValueAtObject(person, 'city')); // 'Wonderland'
// console.log(getValueAtObject(person, 'country')); // Error !
// ()은 파라미터(매개변수)
// obj=객체 key= 존재해야하는 키 obj=person key= name, age, city...
// obj 안에 key가 존재한다면 true 아니면 false
// {}는 객체를 뜻하고 []는 배열을 뜻함, 배열은 문자 숫자 객체등등이 올수 있음
// throw는 예외를 발생시킴 예외가 발생하면 현재 함수의 실행을 중지하고
// throw이후의 명령문은 실행되지 않음
// catch블록이 없으면 프로그램 종료 첫번째 catch에 제어를 받음
// throw new Error 예외를 발생시킴 이 함수를 호출한 코드가 예외를 적절히 처리하지 못하면
// 프로그램의 실행 자체를 중단
// return new Error는 함수가 Error 객체를 반환하게 만듦
// 함수의 정상적인 흐름속에서, 실패했을 경우 대한 대처방법을 반환함
// throw new Error = 이 연산이 실패했다면 실행을 종료해줘
// return new Error = 이 연산이 실패했다면, 실패했을 떄 어떻게 대응할지 알려줄게 같은 의미

const numbers = [10, 20, 30, 40, 50];
function getNumberAtArray(arr, index) {
  if (index < 0 || index >= arr.length) {
    throw new Error('유효하지 않는 값입니다.');
  } else {
    return arr[index];
  }
}

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
// arr=numbers index=10,20,30,40,50 순서대로 0 1 2 3 4
// arr.length가 inex보다 크거나 같은경우 index >= arr.length ex) index는 4가 최대인데 arr이 5인경우
// index가 0보다 작은경우 ||(or)
// index가 0보다 작은 경우 혹은 5번째(길이가 맞지 않는경우)
// .length(문자열에 포함된 문자의 개수를 반환)
