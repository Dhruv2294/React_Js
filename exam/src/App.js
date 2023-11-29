import logo from './logo.svg';
import './App.css';
import Q1 from './Component/Q1';
import Q2 from './Component/Q2';
import Q3 from './Component/Q3';

function App() {
  return (
    <div className="App">
      <p><b>Question 1</b></p>
      <Q1/>
      <br/>
      <hr/>
      <hr/>
      <p><b>Question 2</b></p>
      <Q2/>
      <br/>
      <hr/>
      <hr/>
      <p><b>Question 3</b></p>
      <Q3/>
    </div>
  );
}

export default App;
