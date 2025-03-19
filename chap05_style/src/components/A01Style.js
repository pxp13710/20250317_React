/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";

// CSS 파일은 외부에 정의 후 import '패스명..' 형태로 불러와 사용
import './css/A01Style.css'

// 설치 - 설치 후 프로젝트 재 시작
// 설치 후 추후 설정은 없이 바로 scss 파일을 import
// npm i sass

// scss, sass 파일도 위와 동일한 방식으로 import
import './css/A01Style.scss'


// 다른 파일에 정의하고 export로 지정 후 이 파일에서 import로 불러와 사용
const styleOne = { color: 'orange', backgroundColor: 'lightgray', padding: '10px', fontSize: '30pt' };
const classOne = 'title color';
const title = 'title';
const color = 'color';

function A01Style() {
  const [styleTwo, setStyleTwo] = useState({ color: 'orange', backgroundColor: 'lightgray', padding: '10px', fontSize: '30pt' })
  const [classTwo, setClassTwo] = useState('title color');
  const [isChecked, setIsChecked] = useState(false);

  const enterEvent = useCallback(() => {
    setStyleTwo((data) => { // data => styleTwo
      return { ...data, backgroundColor: 'orange', color: 'lightgray' }
    })
  }, []);
  const leaveEvent = useCallback(() => {
    setStyleTwo(data => {
      return { ...data, backgroundColor: 'lightgray', color: 'orange' }
    })
  }, []);

  const enterClassEvent = useCallback(() => {
    setClassTwo((data) => { // data => classTwo
      return 'title'
    })
  }, []);
  const leaveClassEvent = useCallback(() => {
    setClassTwo(data => {
      return 'title color'
    })
  }, []);


  return (
    <div className="mb-5">
      <h3>style 속성</h3>
      JSX에서 style 속성은 값을 JavaScript의 객체 형식으로 정의해야 한다
      {/* <h3 style="color: orange; font-size: 20pt">A01 Style</h3> => Error */}
      <h3 style={{ color: 'orange', backgroundColor: 'lightgray', padding: '10px', fontSize: '30pt' }}>A01 Style</h3>
      <h3 style={styleOne}>A01 Style</h3>
      <h3 style={styleTwo} onMouseEnter={enterEvent} onMouseLeave={leaveEvent}>A01 Style</h3>

      <h3>class 속성</h3>
      class가 예약어(new class { } 정의)
      <h3 className="title color">A01 Style</h3>
      <h3 className={classOne}>A01 Style</h3>
      <h3 className={classTwo} onMouseEnter={enterClassEvent} onMouseLeave={leaveClassEvent}>A01 Style</h3>

      <h3 className={"title color"}>A01 Style</h3>
      <h3 className={`${title} ${color}`}>A01 Style</h3>

      <h3 className={isChecked ? `${title} ${color}` : undefined}>A01 Style</h3>

      <h3 className="scssTitle">A01 Style</h3>
    </div>
  );
}

export default A01Style;
