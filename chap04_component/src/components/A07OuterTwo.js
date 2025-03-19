import React from "react";
// HOC (Higher Order Component)
import A07InnerOne from './A07InnerOne'
import A07InnerTwo from './A07InnerTwo'

function A07OuterTwo(props) {
  return (
    <div className="mb-5">
      <h3>A07 Outer Two</h3>

      <div className="mb-3">
        props: {props.name}
      </div>

      <div className="mb-3">
        Age: {props.age}<br />
        Address: {props.address}<br />
        Tel: {props.tel}
      </div>

      <button onClick={() => props.setAge(50)}>AGE</button>
      <button onClick={() => props.setAddress('Busan')}>ADDRESS</button>
      <button onClick={() => props.setTel('010-1234-5678')}>TEL</button>
    </div >
  );
}

export default A07InnerTwo(A07InnerOne(A07OuterTwo));
