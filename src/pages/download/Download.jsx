import React from 'react'
import './download.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import { useState } from 'react'


function Download({ wish, image, bcColour, textColour, font }) {
    const [pageNo, setPageNo] = useState(7)
    const prev = '/pay'
    const next = '/thankyou'
    return (
        <div className='allPageLayout'>
            <h1 className='pageHeadings'>Download Card</h1>

            <div className='printPages printPage1' >
                <div className='midLine'></div>
                <div className='printPgSide printLeft1'></div>
                <div className='printPgSide printRight1' >
                    <p style={{fontSize:'0.5em', fontFamily:`${font}`, padding:'10px'}} >{wish}</p>

                </div>
            </div>

            <div className='printPages printPage2' >
                <div className='midLine'></div>
                <div className='printPgSide printLeft2' ></div>
                <div className='printPgSide printRight2' ></div>
            </div>


            <Roadmap pageNo={pageNo} />
            <PrevNext prev={prev} next={next} />
        </div>
    )
}

export default Download
