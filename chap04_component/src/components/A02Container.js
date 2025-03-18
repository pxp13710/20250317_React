import React, { useState } from 'react'
import A02Props from './A02Props'
import A02PropsTwo from './A02PropsTwo'

import A01State from './A01State'
/*
  하위 컴포넌트에 속성 형식으로 값을 전달한다.
  리엑트는 상위 컴포넌트(컨테이너 컴포넌트)가 하위 컴포넌트(표현 컴포넌트)에게만 값을 전달할 수 있다
*/
function A02Container() {
  const [name, setName] = useState('A');
  const changeName = () => {
    if (name === 'A') setName('B')
  }

  return (
    <>
      <A02Props today="date" btnName="ADD" name={name} changeName={setName}
        age={30} address={'seoul'} check={true}>
      </A02Props>
      <A02Props today="time" btnName="UPDATE" name={name} age={20}></A02Props>
      <A02Props></A02Props>

      <hr />

      <A02PropsTwo name={name} changeName={changeName}>
        <>
          <h4>부모가 전달하는 ONE</h4>
          <div>
            Parent Name: {name}<br />
            <button onClick={changeName}>Name</button>
          </div>
        </>
      </A02PropsTwo>

      <A02PropsTwo>
        <>
          <h4>부모가 전달하는 TWO</h4>
          <div>
            Parent Name: {name}<br />
            <button onClick={changeName}>Name</button>
          </div>
        </>
      </A02PropsTwo>

      <A02PropsTwo>
        <A01State></A01State>
      </A02PropsTwo>

    </>
  )
}

export default A02Container
