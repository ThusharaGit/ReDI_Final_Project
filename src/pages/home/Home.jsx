import React from 'react'
import './home.css'
import {useState} from 'react'
import Roadmap from '../../components/Roadmap'
import {useNavigate} from 'react-router-dom'

function Home() {
   const navigate = useNavigate()
   const [pageNo,setPageNo] = useState(1)
   

  return (
    <div className='grow'>

        <main>
        <div className="hero min-h-screen bg-base-200 mainBcGround">
          <div className="hero-content text-center">
            <div className="max-w-max-xl">
              <div className='thumbNail'></div>
              <h1 style={{marginTop:'1px'}}  className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">Are you interested in greeting in a very special way to your loved ones? <br />
                Here's an Idea for you.... <br />
                A customized greeting card can make the special day unforgettable....
                </p>
                <div style={{color:'rgb(235, 97, 150)', fontSize:'2em'}} heartsDiv>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                </div>
              <button onClick={() => {
                navigate('/categories')
              }} style={{margin:'20px'}} className="btn btn-primary">Let's Start</button>

              <Roadmap pageNo = {pageNo}/>
              
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home