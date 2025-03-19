import { useCallback, useState } from "react";

const innerTwo = (Comp) => {
  // Container Component
  const InnerTwo = (props) => {
    const [tel, setTel] = useState('010-0000-0000');

    const changeTel = useCallback((value) => {
      if (typeof value === 'string' && value !== '') setTel(value)
    }, [])

    return <Comp {...props} tel={tel} setTel={changeTel} />
  }

  return InnerTwo;
}
export default innerTwo;