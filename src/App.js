import './App.css';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import Logout from './Logout';

function App() {
  return (
    <div className="App">

      {/* <Login /> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
