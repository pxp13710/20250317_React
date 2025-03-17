// ESM - ECMAScript Module

// 개별 Export
export const name = '놀부';
export const age = 30;
export const check = true;

const arr = [10, 20];
const user = { name: '흥부', age: 20 };
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

// 묶어서 개별 Export
// as로 export 이름을 변경할 수 있다
export { arr, user, onAdd as add };

console.log(`Export ONE - ${name} / ${arr[0]} / ${user.name} / ${onAdd(1, 2)}`);
