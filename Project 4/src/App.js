import logo from './logo.svg';
import './App.css';
import LocalStorage from './Component/LocalStorage';
import SessionStorage from './Component/SessionStorage';

function App() {
  return (
    <div>
      <div className="container border rounded border-primary mt-5 bg-info">
        <h1 className='text-center text-dark'>Session Storage</h1>
        <SessionStorage/>
      </div>
      <div className="container border rounded border-dark  mt-5 bg-primary">
        <h1 className='text-center text-light'>Local Storage</h1>
        <LocalStorage/>
      </div>
    </div>
  );
}

export default App;
