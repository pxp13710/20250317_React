import React from "react";

import { MYBOX, MYBOXTWO, MYBTN } from "./css/A04Style";
/*
// npm i styled-components
// https://styled-components.com/
// 기존의 HTML요소 + CSS = React Component
import styled from 'styled-components'

// div요소에 백틱 내부의 CSS를 적용해서 MYBOX라는 컴포넌트를 생성
const MYBOX = styled.div`
  background-color: lightgray;
  color: white;
  padding: 10px;
  margin: 5px;
`;
const MYBOXTWO = styled(MYBOX)`
  padding: 20px;
`;
const MYBTN = styled.button`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  padding: ${props => `${props.size}px` || '5px'};
  margin: 5px;

  &:hover {
    background-color: black;
  }
`;
*/

function A04StyledComponent() {
  return (
    <div className="mb-5">
      <h3>A04 Styled Component</h3>

      <MYBOX>
        Each year we explore the tools and technologies developers are currently using and the ones they want to use.
        This year, we included new questions about embedded technology tools and industry-sourced, community-vetted technology options.
      </MYBOX>

      <MYBOXTWO>
        Each year we explore the tools and technologies developers are currently using and the ones they want to use.
        This year, we included new questions about embedded technology tools and industry-sourced, community-vetted technology options.
      </MYBOXTWO>

      <MYBTN color="orange" size="20">CLICK</MYBTN>
      <MYBTN>HOME</MYBTN>
    </div>
  );
}

export default A04StyledComponent;
