import React, { useState } from "react";

function StateComp() {
  const [name, setName] = useState("NolBu");
  const [age, setAge] = useState(20);

  const changeName = () => setName("HungBu");
  const changeAge = (num) => setAge(num);

  return (
    <div>
      <h3>State</h3>

      <div>
        Name: {name} <br />
        Age: {age + 100}
      </div>

      <div>
        <button onClick={changeName}>Name</button>
        <button onClick={(evt) => changeAge(100)}>Age</button>
      </div>
    </div>
  );
}
export default StateComp;
