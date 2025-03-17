// 함수 리터럴. 함수 표현식
const onAdd = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
};

const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};

onAdd(10, 20);
console.log(onMin(10, 20));
console.log('');

// ES6.
// 함수 리터럴 방식만 변경 가능
// 1. function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다


// 2. { } 내부의 구문이 1줄만 존재하는 경우 { }와 return 생략 가능 (한 줄에 기술)
// => 뒤가 구문이면 실행
// => 뒤가 값이면 리턴 값으로 취급한다


// 3. 매개변수가 1개인 경우 () 생략 가능
// 2 * 2 * 2 => 2 ** 3


// 4. this가 존재하지 않는다
const obj = {
  name: 'HungBu',
  age: 25,
  child: ['one', 'two'],
  info: {
    tel: '010-1234-5678',
    add: 'Seoul',
  },
  view() {
    console.log(`${this.name}님의 나이는 ${this.age}세 입니다`);
  },
};
obj.view();
console.log('');

const arr = [10, 11, 100, 101, 1000];
