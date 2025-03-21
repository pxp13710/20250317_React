// ColorContext.js
import { createContext } from 'react'

const ColorContext = createContext({
  // 타입만 정의
  contextName: '',
  color: '',
  setColor: () => { }
});
export default ColorContext;
