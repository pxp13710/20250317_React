import React, { useCallback, useState } from 'react'
import { createContext } from 'react'

const SelectContext = createContext({
  state: {
    contextName: '',
    color: '',
    age: '',
  },
  action: {
    setColor: () => { },
    changeAge: () => { }
  }
});

// 컨테이너
function SelectContextProvider(props) {
  const [color, setColor] = useState('orange');
  const [age, setAge] = useState(10);
  const changeAge = useCallback((x) => {
    setAge(x)
  }, []);

  const value = {
    state: {
      contextName: 'Select Context',
      color, age
    },
    action: { setColor, changeAge }
  }

  return (
    <SelectContext.Provider value={value}>
      {props.children}
    </SelectContext.Provider>
  )
}

export { SelectContext, SelectContextProvider }