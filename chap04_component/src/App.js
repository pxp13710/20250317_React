import A01State from './components/A01State'
import A02Container from './components/A02Container'
import A03Event from './components/A03Event'
import A04CreateDOM from './components/A04CreateDOM'
import A05Hook from './components/A05Hook'
import A06Hook from './components/A06Hook'
import A07OuterOne from './components/A07OuterOne'
import A07OuterTwo from './components/A07OuterTwo'
import A08Immer from './components/A08Immer'

function App() {
  return (
    <div className="m-3">
      <h1>Chap04 Component</h1>

      <A08Immer></A08Immer>
      <A07OuterTwo name="홍길동"></A07OuterTwo>
      <A07OuterOne name="놀부"></A07OuterOne>
      <A06Hook></A06Hook>
      <A05Hook></A05Hook>
      <A04CreateDOM></A04CreateDOM>
      <A03Event></A03Event>
      <A02Container></A02Container>
      <A01State></A01State>
    </div>
  );
}

export default App;
