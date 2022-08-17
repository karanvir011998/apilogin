import './App.css';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import Logout from './Logout';
import PrivateRoute from "./PrivateRoute"


function App() {
  return (
    <div className="App">

      {/* <Login /> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        {/* <Route path='/logout' element={<Logout/>}/> */}
        <Route path='/logout' element={<PrivateRoute><Logout/></PrivateRoute>}/>

      </Routes>
      
    </div>
  );
}

export default App;
