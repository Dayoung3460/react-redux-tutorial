import './App.css';
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div>
      <CounterContainer number={ 0 }/>
      <hr/>
      <Todos/>
    </div>
  );
}

export default App;
