/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import A04Table from './A04Table'

const baseArray = ["NC", "두산", "엘지", "KT", "키움"];
let id = 4;

function A04CreateDOM() {
  // useState와 동일. useState와 달리 값이 변경되도 화면 갱신(리렌더링)은 하지 않는다
  const count = useRef(4);
  // console.log(count)

  const [baseObject, setBaseObject] = useState([
    { id: 1, team: "NC", value: "NC" },
    { id: 2, team: "두산", value: "Doosan" },
    { id: 3, team: "엘지", value: "LG" },
  ]);

  const [data, setData] = useState({
    teamOne: "",
    teamTwo: "",
    team: "",
    isChecked: false,
  });

  const changeValue = (evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }
  const addTeam = () => {
    // setBaseObject(baseObject.concat({ id: id++, team: "삼성", value: "Samsung" }));
    setBaseObject(baseObject.concat({ id: count.current++, team: "삼성", value: "Samsung" }));
  }
  const showHide = () => {
    setData({ ...data, isChecked: !data.isChecked });
  }

  const changeTeam = (evt) => {
    setData({ ...data, team: evt.target.value });
  }
  const addBaseArray = () => {
    baseArray.push(data.team);
  }

  return (
    <div className="mb-5">
      <h3>A04 Make DOM</h3>

      <div className="mb-3">
        SelectBox: {data.teamOne}
        <br />
        <select name="teamOne" className="form-control" onChange={changeValue}>
          <option>선택해주세요</option>
          {baseArray.map((item, idx) => {
            return <option key={`${item}_${idx}`}>{item}</option>
          })}
        </select>
      </div>

      <div className="mb-3">
        SelectBox: {data.teamTwo}
        <select name="teamTwo" className="form-control" onChange={changeValue}>
          <option value="">선택해주세요</option>
          {baseObject.map((item) => {
            // item => { id: 1, team: "NC", value: "NC" },
            return <option key={item.id} value={item.value}>{item.team}</option>
          })}
        </select>
      </div>

      <div className="mb-3">
        <table className="table">
          <thead>
            <tr>
              <th>NO</th>
              <th>Team</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {/* item => { id: 1, team: "NC", value: "NC" }, */}
            {baseObject.map(item => <A04Table key={item.id} item={item} />)}

            {/* 
            {baseObject.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.team}</td>
                <td>{item.value}</td>
              </tr>
            ))}
             */}
          </tbody>
        </table>
        <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
      </div>

      {data.isChecked &&
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={data.team} onChange={changeTeam} />
          <button className="btn btn-outline-primary btn-sm"
            onClick={addBaseArray}>ADD</button>
        </div>
      }

      <button className="btn btn-outline-primary btn-sm" onClick={showHide}>
        {data.isChecked ? 'HIDE' : 'SHOW'}
      </button>
    </div>
  );
}
export default A04CreateDOM;
