
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
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';




function App() {
  const [orders, setOrders] = useState("")
  const [categories, setCategories] = useState("")
  const [pictures, setPictures] = useState("")
  const [theme, setTheme] = useState("")

  useEffect(() => {
    //API Code goes here
    axios("https://thushara-render.onrender.com/orders").then(i => setOrders(i.data)).catch(i => console.log(i))
    axios("https://thushara-render.onrender.com/categories").then(i => setCategories(i.data)).catch(i => console.log(i))
    axios("https://thushara-render.onrender.com/photos").then(i => setPictures(i.data)).catch(i => console.log(i))

  },[])
  



  const [wish, setWish] = useState("")
  const [image,setImage] = useState("")
  const [bcColour, setBcColour] = useState("")
  const [textColour, setTextColour] = useState("")
  const [message, setMessage] = useState("Your Message Shows Here")

  return (
    <div className="App min-h-screen">
      <Nav />

     {/* {orders && orders.map(i => <p>{i.quote}</p> )}  */}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories categories={categories} wish={wish} setWish={setWish} theme= {theme} setTheme={setTheme}/>} />
        <Route path='/pictures' element={<Pictures pictures={pictures} wish={wish} image={image} setImage={setImage} />} />
        <Route path='/colours' element={<Colours wish={wish} image={image} bcColour={bcColour} setBcColour={setBcColour} textColour={textColour} setTextColour={setTextColour}/>} />
        <Route path='/message' element={<Message wish={wish} image={image} bcColour={bcColour} textColour={textColour} message={message} setMessage={setMessage}/>} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/thankyou' element={<Thankyou />} />


      </Routes>


      <Footer />







    </div>
  );
}

export default App;
