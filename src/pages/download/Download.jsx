import React from 'react'
import './download.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import { useState, useRef } from 'react'
import ReactToPrint from 'react-to-print';
import DownloadCard from './DownloadCard'
//  import { ComponentToPrint } from './ComponentToPrint';
import JsPDF from 'jspdf'


function Download({ wish, image, bcColour, textColour, font, message }) {
    const [pageNo, setPageNo] = useState(7)
    const prev = '/pay'
    const next = '/thankyou'


    const componentRef = useRef();

    const generatePDF = () => {

        const report = new JsPDF('landscape', 'px', [4000,2002]);
        var img = new Image()
img.src = `${image};base64`
report.addImage(img, 'png', 0, 0, 12, 15)
        report.html(document.querySelector('#waldcard')).then(() => {
            report.save('WaldCard.pdf');
        });
    }


        return (
            <div className='allPageLayout'>
                <button onClick={generatePDF} type="button">Export PDF</button>
                <div id='waldcard'>
                <DownloadCard wish={wish} image={image} bcColour={bcColour} textColour={textColour} font={font} message={message} ref={componentRef} />

                
                </div>

                <h1 className='pageHeadings'>Download Card</h1>
                <h2 style={{ color: 'red' }}>Download Preview is not available in mobile and tablet devices.</h2>

                {/* <DownloadCard wish={wish} image={image} bcColour={bcColour} textColour={textColour} font={font} message={message} /> */}

                {/* <button onClick={() => {
                console.log("Hello");
                window.print()
            }} className="btn btn-secondary">Download Card</button> */}


                {/* <div>
                <ReactToPrint
                    trigger={() => {
                        return <a href="#">Print this out!</a>;
                    }}
                    content={() => this.componentRef}
                />
                <DownloadCard wish={wish} image={image} bcColour={bcColour} textColour={textColour} font={font} message={message} ref={el => (this.componentRef = el)} />

            </div> */}


                {/* <div>
                    <ReactToPrint
                        trigger={() => <button>Print this out!</button>}
                        content={() => componentRef.current}
                    />
                    <DownloadCard wish={wish} image={image} bcColour={bcColour} textColour={textColour} font={font} message={message} ref={componentRef} />
                </div> */}


                <Roadmap pageNo={pageNo} />
                <PrevNext prev={prev} next={next} />
            </div>
        )

    }

    export default Download
