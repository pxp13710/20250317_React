import { useCallback, useState } from "react";

const innerOne = (Comp) => {
  // Container Component
  const InnerOne = (props) => {
    // console.log(props);
    const [age, setAge] = useState(20);
    const [address, setAddress] = useState('Seoul')

    const changeAddress = useCallback((value) => {
      if (typeof value === 'string' && value !== '') setAddress(value)
    }, [])

    return <Comp {...props} age={age} setAge={setAge} address={address} setAddress={changeAddress} />
  }

  return InnerOne;
}
export default innerOne;