import './App.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin';
import Profile from './Components/Admin/profile';
import ProfileList from './Components/Admin/ProfileList';
import Header from './Components/Admin/header';
function App() {
  return (
    <div className="App">


      <Header />
      <Routes>
        <Route exact path="/" element={<Admin />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/profilelist" element={<ProfileList />} />
      </Routes>
    </div>
  );
}

export default App;
