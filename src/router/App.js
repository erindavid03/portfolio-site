
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// begin react imports here
import Header from '../components/Header';
import HomePage from "../components/pages/HomePage";
import AboutPage from '../components/pages/AboutPage';



function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
