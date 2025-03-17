import { name as nick, age, check, arr, user, add } from './A04ExportOne.js';
import * as one from './A04ExportOne.js';
import two, { x, y } from './A04ExportTwo.js';

// 외부 라이브러리
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

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

// JavaScript
document.getElementById('root').innerHTML = dom;

// jQuery
$('#app').html(dom);
