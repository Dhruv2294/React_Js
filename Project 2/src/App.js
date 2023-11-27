import logo from './logo.svg';
import './App.css';
import ClassBase from "./Component/ClassBase";
import FunbaseComponant from "./Component/FunbaseComponant";
import IncDic from "./Component/IncDic";
import OnChange from "./Component/OnChange";

function App() {
  return (
    <div className="App">
      
      <ClassBase />
      <hr/>
      <FunbaseComponant />
      <hr/>
      <IncDic />
      <hr/>
      <OnChange />
    </div>
  );
}

export default App;
