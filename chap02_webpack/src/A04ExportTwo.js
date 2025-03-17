// module scope에 있는 파일을 불러와 사용. 즉 개별적으로 각각 import되지 않는다
import { name as kick } from './A04ExportOne.js';

const func = function () {
  const x = 10;

  return x;
};
const value = func();
console.log(value);
// console.log(x);      // Error

const jumsu = (function () {
  const progName = '점수 프로그램: ' + kick;
  const name = '놀부';

  const getName = function () {
    return name + ' ' + progName;
  };
  const getTotal = function (x, y) {
    return x + y;
  };
  const getAvg = function (total, num) {
    return total / num;
  };

  return {
    name: getName,
    total: getTotal,
    getAvg,
  };
})();
// console.log(jumsu);
// const jumsu = { name: getName, total: getTotal, getAvg }

// default는 한 파일에서 1개의 요소에만 지정 할 수 있다.
// default가 두번 오면 에러
export default jumsu; // 객체(여러 값이 묶인 형태)

// 개별 export는 따로 얼마든지 사용 가능하다.
export const x = 10;
export const y = 20;
