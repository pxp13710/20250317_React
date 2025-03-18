import React, { useState } from 'react'

function A03Event() {
  const [show, setShow] = useState(false);

  // JavaScript와 동일한 방식으로 값 취득. React가 해 주는 기능은 없음
  // react-hook-form 라이브러리를 주로 이용
  const [data, setData] = useState({
    name: 'ABC',
    age: '',
    date: '2024-12-25',
    sports: 'baseball',
    isChecked: true,
    language: ['React'],
    baseball: '엘지',
    four: [],
  });

  const sendData = (evt) => {
    evt.preventDefault(); // DOM 요소가 가진 기본 자바스크립트를 취소(실행 안함)
    // console.log(data);

    // JavaScript 객체 => JSON 객체로 변경
    const jsonData = JSON.stringify(data); // 직렬화 후 서버에 전송
    console.log(jsonData);

    // JSON 데이터 => JavaScript 객체로 변경
    const jsData = JSON.parse(jsonData); // 서버에서 받은 값(JSON 데이터)
    console.log(jsData)
  };

  const changeString = (evt) => {
    // console.log(evt.target);
    // console.log(evt.target.name, evt.target.value);
    if (evt.target.value.trim().length >= 2) {
      const newData = { ...data, [evt.target.name]: evt.target.value };
      setData(newData);
      setShow(false)
    } else {
      setShow(true)
    }
  }
  const changeNumber = (evt) => {
    let result = Number(evt.target.value);
    if (Number.isNaN(result)) result = 0;
    const newData = { ...data, [evt.target.name]: result };
    setData(newData);
  }
  const changeCheck = (evt) => {
    const newData = { ...data, [evt.target.name]: !data[evt.target.name] }; // on
    setData(newData);
  }
  const changeCheckBox = (evt) => {
    const value = evt.target.value;
    if (!data[evt.target.name].includes(value)) {
      const newArr = [...data[evt.target.name], value];
      const newData = { ...data, [evt.target.name]: newArr };
      setData(newData);
    } else {
      const newArr = data[evt.target.name].filter(item => item !== value);
      const newData = { ...data, [evt.target.name]: newArr };
      setData(newData);
    }
  }
  const changeMultiSelect = (evt) => {
    const elem = evt.target.selectedOptions; // 유사배열
    // console.log(elem)
    const elemArr = Array.from(elem); // 배열
    // console.log(elemArr);

    const newArr = elemArr.map(elem => elem.value); // 선택된 값만 선택된 새로운 배열
    const newData = { ...data, four: newArr };
    setData(newData);
  }

  return (
    <div className="mb-5">
      <h3>B02 React Hook Form</h3>

      <form>
        <div className="mb-3">
          {show && <div>값이 입력되지 않았습니다</div>}
          <label htmlFor="name" className="form-label">Name: {data.name}</label>
          <input type="text" id="name" name="name" className="form-control"
            onChange={changeString} />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age: {data.age + 1}</label>
          <input type="number" id="age" name="age" className="form-control"
            onChange={changeNumber} />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date: {data.date}</label>
          <input type="date" id="date" name="date" className="form-control"
            onChange={changeString} />
        </div>

        <div className="mb-3">
          RadioButton: {data.sports}<br />
          <div className="form-check">
            <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
              onChange={changeString} defaultChecked={data.sports === "baseball"} />
            <label htmlFor="baseball" className="form-check-label">야구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input"
              onChange={changeString} defaultChecked={data.sports === "soccer"} />
            <label htmlFor="soccer" className="form-check-label">축구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input"
              onChange={changeString} defaultChecked={data.sports === "basketball"} />
            <label htmlFor="basketball" className="form-check-label">농구</label>
          </div>
        </div>

        <div className="mb-3">
          CheckBox One: {data.isChecked ? '동의' : '동의 안함'}<br />
          <div className="form-check">
            <input type="checkbox" id="isChecked" name="isChecked" className="form-check-input"
              onChange={changeCheck} />
            <label htmlFor="isChecked" className="form-check-label">동의</label>
          </div>
        </div>

        <div className="mb-3">
          CheckBox: {data.language.join(' - ')}<br />
          <div className="form-check">
            <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
              defaultChecked={data.language.includes('Angular')} onChange={changeCheckBox} />
            <label htmlFor="angular" className="form-check-label">앵귤러</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
              defaultChecked={data.language.includes('React')} onChange={changeCheckBox} />
            <label htmlFor="react" className="form-check-label">리엑트</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
              defaultChecked={data.language.includes('Vue')} onChange={changeCheckBox} />
            <label htmlFor="vue" className="form-check-label">뷰</label>
          </div>
        </div>

        <div className="mb-3">
          SelectBox: {data.baseball}<br />
          <select name="baseball" className="form-control mb-2"
            onChange={changeString} value={data.baseball}>
            <option>한화</option>
            <option>NC</option>
            <option>두산</option>
            <option>엘지</option>
            <option>기아</option>
            <option>삼성</option>
            <option>SSG</option>
          </select>
        </div>

        <div className="mb-3">
          SelectBox Multi: {data.four.join(', ')}<br />
          <select name="four" multiple size="5" className="form-control mb-2"
            onChange={changeMultiSelect}>
            <option>한화</option>
            <option>NC</option>
            <option>두산</option>
            <option>엘지</option>
            <option>기아</option>
            <option>삼성</option>
            <option>SSG</option>
          </select>
        </div>

        <button type="submit" onClick={sendData}>SEND</button>
      </form>
    </div>
  )
}

export default A03Event;
