import React from 'react'
import './about.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'




function About() {
    
    // const [userName,setUserName] = useState("")
   


  return (
    <div className='allPageLayout'>
       <h1 className='nameBoard'>About Me</h1>

       <div className='aboutDiv'>
         <div className='aboutPhoto'></div>
         <div className='aboutDetails' style={{fontWeight:'bold'}}>
            My name is Thushara Weeraparakrama and I live in Munich, Germany. Since my childhood I dreamed to do a job
            that can make me happy and satisfied. But when I was 20, I got selected as a bank employee and I worked
            more than 8 years in the bank. But I needed something more that can reflect "me" in whatever I do in my
            job. I had a great passion for designs. Then I started learning graphic design and frontend development.
            This is where I combine my graphic designs and frontend development together. 
         </div>
       </div>

       <h1 className='nameBoard'>My Projects</h1>
       <div className='projectDiv'>
       <a href='https://github.com/ThusharaGit/CakeFairyTestProjectRedI'>Cake Fairy</a>
       </div>
       <div className='projectDiv'>
       <a href='https://github.com/ThusharaGit/Travelbirdie'>Travel Birdie</a>
       </div>
       
       <a href='https://github.com/ThusharaGit/Budget_app'>Budget App</a>
       <a href='https://github.com/ThusharaGit/WeatherApp'>Weather App</a>
       <a href='https://github.com/ThusharaGit/Portfolio'>Personal Portfolio</a>

      
      <Link to= {'/'}> <button style={{margin:'25px'}} className="btn btn-secondary">Home</button></Link>
       <br />
       <br />
    
        
    </div>
  )
}

export default About