/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// css 파일명을 "파일명.module.css"로 변경
// import는 default 방식으로 import 한다
// A02Style1.module.css 일부 스타일을 전역으로 사용하고자 하는 경우는 클래스 이름앞에 :global을 붙인다

import one from './css/A02Style1.module.css'
import two from './css/A02Style2.module.css'

function A02StyleModule() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="mb-5">
      <h3 className={one.title}>A02 Style <span className="innerColor">Module</span> Component</h3>
      <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
      <h3 className={[two.title, two.reverse].join(' ')}>A02 Style Module Component</h3>

      <h3 className={isChecked ? `${two.title} ${two.reverse}` : ''}>A02 Style Module Component</h3>
    </div >
  );
}

export default A02StyleModule;
