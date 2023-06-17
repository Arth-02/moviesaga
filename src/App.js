import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Movie from './pages/movie/Movie';
import Tv from './pages/tv/Tv';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/movie/:id' element={<Movie/>} ></Route>
              <Route path='/tv/:id' element={<Tv/>} ></Route>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
