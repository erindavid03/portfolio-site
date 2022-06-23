
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// begin react imports here
import Header from '../components/Header';
import HomePage from "../components/pages/HomePage";
import AboutPage from '../components/pages/AboutPage';
import DevPage from '../components/pages/DevPage';
import ArtworkPage from '../components/pages/ArtworkPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import Footer from '../components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/artworks'} element={<ArtworkPage/>}/>
          <Route path={'/development'} element={<DevPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
