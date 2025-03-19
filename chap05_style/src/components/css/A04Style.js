import styled from 'styled-components'

// div요소에 백틱 내부의 CSS를 적용해서 MYBOX라는 컴포넌트를 생성
export const MYBOX = styled.div`
  background-color: lightgray;
  color: white;
  padding: 10px;
  margin: 5px;
`;
export const MYBOXTWO = styled(MYBOX)`
  padding: 20px;
`;
export const MYBTN = styled.button`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  padding: ${props => `${props.size}px` || '5px'};
  margin: 5px;

  &:hover {
    background-color: black;
  }
`;
