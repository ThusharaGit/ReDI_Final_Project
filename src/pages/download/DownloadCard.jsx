import React from 'react'
import './download.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import { useState } from 'react'



function DownloadCard({ wish, image, bcColour, textColour, font, message }) {
    
    return (
       
            <div className='DownloadCompleteCard '>
                <div style={{ backgroundColor: `${bcColour}` }} className='printPages printPage1' >
                    <div style={{ backgroundColor: `${textColour}` }} className='midLine'></div>
                    <div className='Page'>
                        <div className='printPgSide printRight1'>
                            <div className='logoBox'>
                                <div className='logo'></div>
                            </div>
                        </div>
                        <div className='printPgSide printLeft1' >
                            <p style={{ fontSize: '1.5em', fontFamily: `${font}`, padding: '10px', color: `${textColour}` }} >{wish}</p>
                            <div className='picDownload' style={{ backgroundImage: `url(${image})` }} ></div>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: `${bcColour}` }} className='printPages printPage2' >
                    <div style={{ backgroundColor: `${textColour}` }} className='midLine'></div>
                    <div className='Page'>
                        <div className='printPgSide printRight2' >

                        </div>
                        <div className='printPgSide printLeft2' >
                            <p style={{ fontSize: '1.5em', fontFamily: `${font}`, padding: '10px', color: `${textColour}` }} >{message}</p>
                        </div>
                    </div>
                </div>

            </div>
      
       
    )
}

export default DownloadCard
