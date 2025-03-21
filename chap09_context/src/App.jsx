import { useState } from 'react'
import ColorBox from './components/ColorBox.jsx'
import SelectColor from './components/SelectColor.jsx'
import TodoTemplate from './components/TodoTemplate.jsx'

// Provider => 정보 제공
// Consumer => 정보 수신(Hook으로 사용)
import ColorContext from './context/ColorContext.jsx'
import { SelectContextProvider } from './context/SelectContext.jsx'
import { TodoContextProvider } from './context/TodoContext.jsx'

function App() {
  const [color, setColor] = useState('green');
  const value = {
    contextName: 'Color Context',
    color,
    setColor
  }
  return (
    <div className="m-3">
      <h1>Chap10 Context</h1>

      <ColorContext.Provider value={value}>
        <SelectContextProvider>
          <ColorBox></ColorBox>
          <SelectColor></SelectColor>
        </SelectContextProvider>
      </ColorContext.Provider>

      <hr />

      <TodoContextProvider>
        <TodoTemplate></TodoTemplate>
      </TodoContextProvider>
    </div>
  );
}

export default App;
