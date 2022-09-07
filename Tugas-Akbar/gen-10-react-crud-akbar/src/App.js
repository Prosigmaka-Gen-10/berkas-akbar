import logo from './logo.svg';
import './App.css';
import CrudLocal from './CrudLocal';
import CrudApi from './CrudApi';

function App() {
  return <>
    <div className='App'>
      {/* <CrudLocal /> */}
      <CrudApi/>
    </div>
  </>
}

export default App;
