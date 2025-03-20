import ColorBox from './components/ColorBox.jsx'
import SelectColor from './components/SelectColor.jsx'
import TodoTemplate from './components/TodoTemplate.jsx'

function App() {
  return (
    <div className="m-3">
      <h1>Chap10 Context</h1>

      <ColorBox></ColorBox>
      <SelectColor></SelectColor>

      <hr />

      <TodoTemplate></TodoTemplate>
    </div>
  );
}

export default App;
