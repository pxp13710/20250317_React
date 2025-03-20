import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function StateComp() {
  // 주소줄 관련 정보
  const location = useLocation();
  console.log(location.state?.name)

  const [name, setName] = useState("NolBu");
  const [age, setAge] = useState(20);

  const changeName = () => setName("HungBu");
  const changeAge = (num) => setAge(num);

  return (
    <div className="mb-3">
      <h3>STATE ONE</h3>

      <div className="mb-2">
        Name: {name} <br />
        Age: {age + 100}
      </div>

      <div className="mb-3">
        <button onClick={changeName}>Name</button>
        <button onClick={() => changeAge(100)}>Age</button>
      </div>
    </div>
  );
}
export default StateComp;
