import React from 'react'
import './thankyou.css'
import PrevNext from '../../components/PrevNext'
import {useState} from 'react'



function Thankyou() {
  const [pageNo,setPageNo] = useState(8)
    const prev = '/download'
    const next = '/thankyou'
  return (
    <div className='allPageLayout'>
       <div style={{color:'rgb(235, 97, 150)', fontSize:'2em', margin:'20px'}} >
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                </div>
        <h1 className='pageHeadings'>Thanks for Purchasing A Waldcard.</h1>

        <div style={{color:'rgb(235, 97, 150)', fontSize:'2em', margin:'20px'}} >
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                </div>

                <div className='flowers'></div>
            
            <PrevNext prev={prev} next={next} pageNo = {pageNo} />
            <br />
            <br />
            <br />
    </div>
  )
}

export default Thankyou