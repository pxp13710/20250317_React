import React, { useState } from "react";

function A04CreateDOM() {
  const baseArray = ["NC", "두산", "엘지", "KT", "키움"];

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
    setBaseObject(baseObject.concat({ id: 4, team: "삼성", value: "Samsung" }));
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
        </select>
      </div>

      <div className="mb-3">
        SelectBox: {data.teamTwo}
        <select name="teamTwo" className="form-control" onChange={changeValue}>
          <option value="">선택해주세요</option>
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
          <tbody></tbody>
        </table>
        <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
      </div>

      <div className="input-group mb-3">
        <input type="text" className="form-control" value={data.team} onChange={changeTeam} />
        <button className="btn btn-outline-primary btn-sm" onClick={addBaseArray}>ADD</button>
      </div>

      <button className="btn btn-outline-primary btn-sm" onClick={showHide}>
        HIDE
      </button>
    </div>
  );
}
export default A04CreateDOM;
