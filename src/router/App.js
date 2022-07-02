
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// begin react imports here
import Header from '../components/Header';
import HomePage from "../components/pages/HomePage";
import AboutPage from '../components/pages/AboutPage';
import DevPage from '../components/pages/DevPage';
import ArtworkPage from '../components/pages/ArtworkPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import SingleArtwork from '../components/pages/SingleArtworkPage';
import SingleDev from '../components/pages/SingleDevPage';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <main>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/artworks'} element={<ArtworkPage/>}/>
          <Route path={'/development'} element={<DevPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
          <Route path='/artworks/:id' element={<SingleArtwork/>}/>
          <Route path='/development/:id' element={<SingleDev/>}/>
        </Routes>
        <Contact/>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
