import React from "react";
import { Link } from "react-router-dom";

function StateComp() {
  return (
    <div className="mb-3">
      <h3>STATE TWO</h3>

      <div className="mb-3">
        {/* 패스가 /state, /state/100 과 같이 되어 있으므로 ..은 상위 페이지 즉 /state를 의미. relative가 없으면 /로 이동 */}
        <Link>TOP</Link> | {' '}                      {/* Root Router로 이동 즉 /로 이동 */}
        <Link>TOP</Link> | {' '}      {/* 상위 패스 즉 /state로 이동. path, route(기본값) 설정 가능 */}
        <Link>RELOAD</Link> | {' '}            {/* 현재 페이지에서 reload */}
        <Link>ALL RELOAD</Link> | {' '} {/* App로 이동 후 reload  */}
      </div>
    </div>
  );
}
export default StateComp;
