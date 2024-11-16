const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
function emailReg(node, text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const login = document.getElementById('userEmail');
  if (login !== null) {
    console.log(login);
  }
  if (typeof text === 'string' && re.test(text)) {
    //만약 text가 문자이면 그리고 re.test가 문자면 true 아니면 false
    //클래스 지우기
    node.classList.remove('is--invalid');
  } else {
    //클랙스 추가 그리고 오류 던지기
    node.classList.add('is--invalid');
    throw new Error('아이디는 이메일 형식으로 입력해 주세요.');
  }

  return re.test(String(text).toLowerCase());
}

console.log(emailReg);
function pwReg(node, text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  if (typeof text === 'string') {
    node.classList.remove('is--invalid');
  } else {
    node.classList.remove('is--invalid');
    throw new Error('비밀번호는 특수문자 포함 6자리 이상 입력해 주세요.');
  }
  return re.test(String(text).toLowerCase());
}

//식을 쓸려면 말로라도 표현을 해야 식을 쓸텐데....말로 어떻게 표현해야할지 모르겠습니다...
