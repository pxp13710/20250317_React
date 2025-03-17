// 함수 리터럴. 함수 표현식
console.log(globalThis);

const onAdd = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`); // abc
};

const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};

onAdd(10, 20);
console.log(onMin(10, 20));
console.log('');

// ES2015+
// 함수 리터럴 방식만 변경 가능
// 1. function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const one = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`); // abc
};

const two = (x, y) => {
  return `${x} - ${y} = ${x - y}`;
};

one(20, 20);
console.log(two(20, 20));
console.log('');

// 2. { } 내부의 구문이 1줄만 존재하는 경우 { }와 return 생략 가능 (한 줄에 기술)
// => 뒤가 구문이면 실행
// => 뒤가 값이면 리턴 값으로 취급한다
const three = (x, y) => console.log(`${x} + ${y} = ${x + y}`);
const four = (x, y) => `${x} - ${y} = ${x - y}`;
three(30, 20);
console.log(four(30, 20));
console.log('');

// 3. 매개변수가 1개인 경우 () 생략 가능
// 2 * 2 * 2 => 2 ** 3      // ES2015+ => Math.pow(2, 3) => 2 * 2 * 2(2의 3승)
// 템플릿 리터럴 (ES2015+) => 백틱 사용 => `2의 3승의 값은 ${five(3)}`
const five = (x) => 2 ** x;

console.log(`2의 3승의 값은 ${five(3)}`);
console.log('');

// 4. this가 존재하지 않는다
globalThis.name = 'WINDOW';
globalThis.age = 1000;

const obj = {
  name: 'HungBu',
  age: 25,
  child: ['one', 'two'],
  info: {
    tel: '010-1234-5678',
    add: 'Seoul',
  },
  // ES2015+
  view() {
    console.log(`${this.name}님의 나이는 ${this.age}세 입니다`);
  },
  // 이전 방식
  display: function () {
    console.log(`${this.name}님의 나이는 ${this.age}세 입니다`);
  },
  // Arrow 함수의 자체적인 this 참조는 없다.
  // Arrow 함수의 this는 자신을 포함한 객체의 this를 사용
  show: () => {
    console.log(`${this.name}님의 나이는 ${this.age}세 입니다`);
  },
};
obj.view();
obj.display();
obj.show();

console.log('');

let arr = [10, 11, 100, 101, 1000];
arr.forEach(function (item, idx, self) {
  console.log(idx, item, self);
  self[idx] = item + 1000;
});
console.log('');

let total = 0;
arr = [10, 11, 100, 101, 1000];
arr.forEach((item) => (total += item));
console.log(total);

// 불변성
const newArr = arr.map((item) => {
  return item % 2 === 0 ? item * 2 : item;
});
console.log(newArr); // [20, 11, 200, 101, 2000]
console.log(arr); // [10, 11, 100, 101, 1000]
