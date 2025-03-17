const jumsu = (function () {
  const progName = '점수 프로그램';
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
    getAvg
  };
})();
// console.log(jumsu);

// default는 한 파일에서 1개의 요소에만 지정 할 수 있다. default가 두번 오면 에러


// 개별 export는 따로 얼마든지 사용 가능하다.
const x = 10;
const y = 20;
