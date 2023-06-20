import React from 'react'
import './colours.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import { useState } from 'react'

function Colours({ wish, image }) {
    const [pageNo, setPageNo] = useState(4)
    const prev = '/pictures'
    const next = '/message'
    return (
        <div className='allPageLayout'>
            <h1 className='pageHeadings'>Add Colours For Your Card</h1>
            <h2 style={{ marginTop: '20px' }} className="card-title">Preview</h2>
            <div className='cardImgQuotePrev'>
                <h1 style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{wish}</h1>
                <div className='selectedPicDiv' style={{ backgroundImage: `url(${image})` }}></div>
            </div>

            <h2 style={{ marginTop: '20px' }} className="card-title">Select Colour For Background</h2>

            <h2 style={{ marginTop: '20px' }} className="card-title">Select Colour For Greeting</h2>

            <Roadmap pageNo={pageNo} />
            <PrevNext prev={prev} next={next} />
        </div>
    )
}

export default Colours