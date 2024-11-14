function earth() {
  let water = true;
  let gravity = 10;

  return (value) => [water, gravity];
}

const ufo = earth();

ufo(false);

// 개념은 이해 했습니다. 근데, 어디다 써요?

const button = document.querySelector('button');

const handleClick = (() => {
  let clicked = false;

  return () => {
    if (!clicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    clicked = !clicked;
  };
})();

button.addEventListener('click', handleClick);

//handle이 붙으면 이벤트라는 것 관례적으로 씀
//변수를 보호하는데 사용
//즉시실행 EP패턴을 쓰고 즉시실행 함수를 사용

function useState(init) {
  let value = init;

  function read() {
    return value;
  }
  function write(newValue) {
    value = newValue;
  }
  return [read, write];
}

const [number, setNumber] = useState(10);
