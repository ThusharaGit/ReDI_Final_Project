
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/home/Home';
import {Routes, route, Route} from 'react-router-dom'
import Roadmap from './components/Roadmap';
import Categories from './pages/categoriesPage/Categories';
import Pictures from './pages/pictures/Pictures';
import Colours from './pages/colours/Colours';
import Message from './pages/message/Message';
import Pay from './pages/pay/Pay';
import Thankyou from './pages/thankyou/Thankyou';
import data from './data.json'



function App() {

  return (
    <div className="App min-h-screen">
      <Nav />
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/categories' element={<Categories data = {data}/>}/>
       <Route path='/pictures' element={<Pictures/>}/>
       <Route path='/colours' element={<Colours/>}/>
       <Route path='/message' element={<Message/>}/>
       <Route path='/pay' element={<Pay/>}/>
       <Route path='/thankyou' element={<Thankyou/>}/>
     

      </Routes>

      
      <Footer />







    </div>
  );
}

export default App;
