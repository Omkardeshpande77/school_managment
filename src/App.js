import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <>
  <BrowserRouter>

   <Navbar></Navbar>
   <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Aboutus" element={<About/>}></Route>
    </Routes>
   <Footer></Footer>
  </BrowserRouter>
    </>
  );
}

export default App;
