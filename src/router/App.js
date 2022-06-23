
import { Router, Routes, Route } from 'react-router-dom';
// begin react imports here
import HomePage from "../components/pages/HomePage";
import Header from '../components/Header';

function App() {
  return (
    <Router basename='/' >
    <Header/>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
