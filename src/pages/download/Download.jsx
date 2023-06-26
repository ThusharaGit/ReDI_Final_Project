import React from 'react'
import './download.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import { useState } from 'react'


import ReactToPrint from 'react-to-print';
import DownloadCard from './DownloadCard'
//  import { ComponentToPrint } from './ComponentToPrint';






function Download({ wish, image, bcColour, textColour, font, message }) {
    const [pageNo, setPageNo] = useState(7)
    const prev = '/pay'
    const next = '/thankyou'
    return (
        <div className='allPageLayout'>
            <h1 className='pageHeadings'>Download Card</h1>
            <h2 style={{ color: 'red' }}>Download Preview is not available in mobile and tablet devices.</h2>

            {/* <DownloadCard wish={wish} image={image} bcColour={bcColour} textColour={textColour} font={font} message={message} /> */}

            {/* <button onClick={() => {
                console.log("Hello");
                window.print()
            }} className="btn btn-secondary">Download Card</button> */}


            <div>
                <ReactToPrint
                    trigger={() => {
                        return <a href="#">Print this out!</a>;
                    }}
                    content={() => this.componentRef}
                />
                <DownloadCard wish={wish} image={image} bcColour={bcColour} textColour={textColour} font={font} message={message} ref={el => (this.componentRef = el)} />

            </div>



            <Roadmap pageNo={pageNo} />
            <PrevNext prev={prev} next={next} />
        </div>
    )
}

export default Download
