// 개별 export 된 요소를 import
// 디스터럭처링 구문과 같이 변수명은 export 한 이름과 동일한 이름으로 선언

// 사용중인 변수명이 존재하면 as로 이름을 변경해서 사용 가능
import { name as nick, age, check, arr, user, add } from './A04ExportOne.js';

const dom = `
  <div>
    React에서는 true, false, undefined, null은 화면에 출력 안됨<br>
    Name: ${name || 'unknown'} / ${nick}<br>
    Age: ${age}<br>
    Check:  ${check}<br>
    Array: ${arr[0]} / ${arr[1]} / ${arr[2]}<br>
    User: ${user.name} / ${user.age} / ${user.address} <br>
    onAdd: ${add(10, 20)}<br>

    <hr>

    Name: <br>
    onTotal: <br>
    onAvg: <br>
    X: , Y: 
  </div>
`;
console.log(dom);
