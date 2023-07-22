import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import UserHomepage from './pages/UserHomepage';
import WelcomePage from './pages/WelcomePage';
import CreateTask from './pages/CreateTask';
import AllTask from './pages/AllTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/homepage' element={<UserHomepage/>}/>
        <Route path='/createtask' element={<CreateTask/>} />
        <Route path='/alltasks' element={<AllTask/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
