import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './Components/ProfilePage';

function App() {
  return (
    <div>
     
        <Routes>
        <Route path="/" element={<Registration/>} />
        <Route path="/profilePage/:firstName/:lastName/:email" element={<ProfilePage/>} />
       </Routes>

      
    </div>
  );
}

export default App;
