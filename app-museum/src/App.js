
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Test from './Pages/Annexe/Annexe'; //Page brouillon
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import Search from './Pages/Search/Search';
import Details from './Pages/Details/Details';
import NoFound from './Pages/NoFound/NoFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/a_propos' element={<About/>}/>
        <Route path='/galerie' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path="/museum" element={<Test/>}/> 
        <Route path="*" element={<NoFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
