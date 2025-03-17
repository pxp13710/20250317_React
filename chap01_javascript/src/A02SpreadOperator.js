// ES2015+
// 펼침 연산자
console.log([10, 11, 100]);
// 객체가 존재, 객체의 요소값은 없음 => undefined (에러가 아님)
console.log([10, 11, 100][0], [10, 11, 100][1], [10, 11, 100][2], [10, 11, 100][3]);
// []를 제거해서 각 요소의 값을 개별 요소처럼 취급
console.log(...[10, 11, 100]);
console.log('');

// iterator 객체, 유사배열도 가능
console.log(...'NolBu');
console.log('');

// ...rest는 spread operator가 아니다. rest 연산자라 한다
// ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷
function spreadFun(a, b, c, d, e, ...rest) {
  console.log(`a => ${a}`);
  console.log(`b => ${b}`);
  console.log(`c => ${c}`);
  console.log(`d => ${d}`);
  console.log(`e => ${e}`);
  console.log(`rest => ${rest} / ${rest.length}`);
}

spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
console.log('');

// 배열 합치기.
const arrOne = [10, 20, 30];
// const one = ...arrOne;     // const one = 10, 20, 30;
const one = [...arrOne]; // const one = [10, 20, 30]; => 복사
const two = arrOne;
console.log(arrOne === one); // false => 값 복사
console.log(arrOne === two); // true => 주소값 복사
console.log('');

// 불변성
// const three = arrOne.push(1000, 1001);     // 기존 배열 수정
const three = [...arrOne, 1000, 1001];
const four = arrOne.concat(2000, 2001);
console.log(three);
console.log(four);
console.log(arrOne);
console.log('');

const arrTwo = [1, 2, 3, ...arrOne];
console.log(arrTwo);
console.log('');

// Object
// React에서 객체의 요소 추가, 변경은 스프레드 연산자로 구현
// 배열의 추가는 concat 함수, 수정은 map, 삭제는 filter 메서드 사용
const objOne = {
  id: 1,
  name: 'NolBu',
};

const objTwo = {
  id: 2,
  address: 'Seoul',
};
console.log(objTwo);

const objThree = {
  id: 3,
  address: 'InChen',
};
console.log(objThree);
