// ES2015+,  구조화 분해 할당
const user = {
  name: 'NolBu',
  age: 30,
  address: 'Seoul',
};
/*
const name = user.name;
const age = user.age;
const tel = user.tel;
*/
// 1. 객체의 값을 꺼낼때 선언할 변수명은 객체의 key 이름과 동일해야 한다
// 객체는 { }로 정의, 배열은 [ ]로 정의
const { name, age, tel } = user;
console.log(name, age, tel);

// 2. 변수가 먼저 사용되고 있다면 별칭 사용
const { name: nick, age: num } = user;
console.log(nick, num);

// 3. 기본값을 할당할 수 있다
const { name: x = 'unknown', age: y = 0, info = 'Good' } = user;
console.log(x, y, info);
console.log('');

const getOne = function ({ x = 0, y = 0, z = 0 }) {
  console.log(x, y, z);
};
const getTwo = function (props) {
  const { x = 0, y = 0, z = 0 } = props;
  console.log(x, y, z);
};
const obj = { x: 10, y: 20, z: 30 };
getOne(obj);
getTwo(obj);
console.log('');

// 배열은 key가 없으므로 임의의 중복되지 않는 변수명으로 선언해서 받는다
const arr = ['A', 'B', 'C'];
const [a, b, c] = arr;
console.log(a, b, c);

// 받고 싶은 위치의 값만 받는 것도 가능
const [, , c1] = arr;
console.log(c1);

// 기본값 할당 가능
const [a2 = 0, , c2 = 0, d2 = 0] = arr;
console.log(a2, c2, d2);

const getThree = ([x, y, z]) => {
  console.log(x, y, z);
};
const getFour = (props) => {
  const [x, y, z] = props;
  console.log(x, y, z);
};
getThree([100, 101, 102]);
getFour([100, 101, 102]);
