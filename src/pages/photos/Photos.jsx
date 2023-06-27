import React from 'react'
import './photos.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'




function Photos() {

    // const [userName,setUserName] = useState("")



    return (
        <div className='allPageLayout'>
            <h1 className='nameBoard'>Photo Gallery</h1>
            <div className='allPhotos'>
                <div className='photos' id='photo1'></div>
                <div className='photos' id='photo2'></div>
                <div className='photos' id='photo3'></div>
                <div className='photos' id='photo4'></div>
                <div className='photos' id='photo5'></div>
                <div className='photos' id='photo6'></div>
            </div>



            <Link to={'/'}> <button className="btn btn-secondary">Home</button></Link>
            <br />
            <br />


        </div>
    )
}

export default Photos