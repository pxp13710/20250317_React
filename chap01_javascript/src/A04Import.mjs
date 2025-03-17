// 개별 export 된 요소를 import
// 디스터럭처링 구문과 같이 변수명은 export 한 이름과 동일한 이름으로 선언

// 사용중인 변수명이 존재하면 as로 이름을 변경해서 사용 가능
import { name as nick, age, check, arr, user, add } from './A04ExportOne.js';

// 위의 구문에서 가져올 항목이 많다면 장황해 진다 => 하나의 이름으로 묶어 사용
import * as one from './A04ExportOne.js';
// one = { name, age, check, arr, user, add }

// default import
// 불러올 변수명은 사용하지 않은 임의의 변수명으로 { } 없이 정의 가능
// import two from './A04ExportTwo.js';
// import { x, y } from './A04ExportTwo.js';

// 항상 default가 먼저 정의되어야 한다.
import two, { x, y } from './A04ExportTwo.js';
// console.log(one);
// console.log(two);

/*
  || 연산자
  x의 값이 ''(빈문자열), 0, NaN, undefined, null, false가 아니면 x값 그대로 사용
  x의 값이 '', 0, NaN, undefined, null, false라면 10을 x에 대입
  const x = x || 10;
  const onAdd = function(x, y) {
    x = x || 0;
    y = y || 0;
  } 

  const onAdd = function(x = 0, y = 0) {

  }


  ?? 연산자 / null 병합 연산자 (ES2015+)
  x의 값이 undefined, null이 아니면 x값 그대로 사용
  x의 값이 undefined, null이면 10을 x에 대입
  const x = x ?? 10;
*/
const dom = `
  <div>
    React에서는 true, false, undefined, null은 화면에 출력 안됨<br>
    Name: ${name || 'unknown'} / ${nick} / ${one.name}<br>
    Age: ${age} / ${one.age}<br>
    Check:  ${check} / ${one?.check}<br>
    Array: ${arr[0]} / ${one?.arr?.[1]} / ${arr[2] ?? 2000}<br>
    User: ${user.name} / ${one?.user?.age} / ${user.address} <br>
    onAdd: ${add(10, 20)} / ${one.add(100, 200)}<br>
    undefined: ${undefined?.x}<br>
    <hr>

    Name: ${two.name()}<br>
    onTotal: ${two.total(100, 90)} <br>
    onAvg: ${two.getAvg(190, 2)}<br>
    X: ${x}, Y: ${y} 
  </div>
`;

// console 출력
console.log(dom);

// document에 출력
document.getElementById('root').innerHTML = dom;
