import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './component/Layout'
import Leaderboard from './component/leaderboard'
import Registration from './component/Registration';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}/>
        <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="Registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
