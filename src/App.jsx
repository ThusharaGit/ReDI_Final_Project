
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/home/Home';
import {Routes, route, Route} from 'react-router-dom'
import Roadmap from './components/Roadmap';
import PrevNext from './components/PrevNext';



function App() {

  return (
    <div className="App min-h-screen">
      <Nav />
      <Routes>
       <Route path='/' element={<Home/>}/>
       

      </Routes>

     {/* <PrevNext/> */}
      <Footer />







    </div>
  );
}

export default App;
