
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/home/Home';
import { Routes, route, Route } from 'react-router-dom'
import Roadmap from './components/Roadmap';
import Categories from './pages/categoriesPage/Categories';
import Pictures from './pages/pictures/Pictures';
import Colours from './pages/colours/Colours';
import Message from './pages/message/Message';
import Pay from './pages/pay/Pay';
import Thankyou from './pages/thankyou/Thankyou';
import data from './data.json'
import { useState } from 'react'



function App() {

  const [wish, setWish] = useState("")
  const [image,setImage] = useState("")

  return (
    <div className="App min-h-screen">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories data={data} wish={wish} setWish={setWish} />} />
        <Route path='/pictures' element={<Pictures data={data} wish={wish} image={image} setImage={setImage} />} />
        <Route path='/colours' element={<Colours wish={wish} image={image} />} />
        <Route path='/message' element={<Message />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/thankyou' element={<Thankyou />} />


      </Routes>


      <Footer />







    </div>
  );
}

export default App;
