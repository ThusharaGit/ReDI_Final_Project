import React from 'react'
import './colours.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import { useState } from 'react'
import CardPrev from '../../components/CardPrev'

function Colours({ wish, image, bcColour, setBcColour, textColour, setTextColour }) {
    const [pageNo, setPageNo] = useState(4)
    // const [bcColour, setBcColour] = useState("")
    // const [textColour, setTextColour] = useState("")

    const prev = '/pictures'
    const next = '/message'
    return (
        <div className='allPageLayout'>
            <h1 className='pageHeadings'>Add Colours For Your Card</h1>

            <h2 style={{ marginTop: '20px' }} className="card-title">Preview</h2>

            <CardPrev wish ={wish} image= {image} bcColour= {bcColour} textColour= {textColour}/>

            <h2 style={{ marginTop: '20px' }} className="card-title">Select Colour For Background</h2>
            
            <form onSubmit={(e) => {
                e.preventDefault()
                setBcColour(e.target.bcColour.value)
                
            }} action="">
            <input onChange={(e)=>{
               e.preventDefault();
               setBcColour(e.target.value)
            }} className='colourPallete'  type="color" name="bcColour" id="" />
            
            </form>
            

            <h2 style={{ marginTop: '20px' }} className="card-title">Select Colour For Greeting</h2>


            <form onSubmit={(e) => {
                e.preventDefault()
                setTextColour(e.target.value)    
            }} action="">

            <input onChange={(e)=>{
               e.preventDefault();
               setTextColour(e.target.value)
            }} className='colourPallete' type="color" name="textColour" id="" />
            
            </form>


            <Roadmap pageNo={pageNo} />
            <PrevNext prev={prev} next={next} />
        </div>
    )
}

export default Colours





