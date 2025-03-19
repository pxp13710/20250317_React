import React from "react";
// npm i classnames
import cns from 'classnames'

import './css/A03Style.css'
import two from './css/A02Style2.module.css'

function A03Classnames() {
  const txt = "text";
  const isChecked = true;

  return (
    <div className="mb-5">
      <h3 className="bg text space">A03 ClassNames Module</h3>
      <h3 className={cns("bg text space")}>A03 ClassNames Module</h3>
      <h3 className={cns("bg", { text: false, space: isChecked })}>A03 ClassNames Module</h3>

      <h3 className={cns("bg", { [txt]: true, space: isChecked })}>A03 ClassNames Module</h3>

      <h3 className={cns(two.title, two.reverse)}>A03 ClassNames Module</h3>
      <h3 className={cns({ [two.title]: isChecked, [two.reverse]: isChecked })}>A03 ClassNames Module</h3>
    </div>
  );
}

export default A03Classnames;
