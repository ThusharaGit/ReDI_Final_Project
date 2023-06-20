import React from 'react'
import './pictures.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import {useState} from 'react'

function Pictures({wish}) {
    const [pageNo,setPageNo] = useState(3)
    const prev = '/categories'
    const next = '/colours'
    return (
        <div className='allPageLayout'>
            
                <h1 className='pageHeadings'>Select The Picture</h1>
                <h2 style={{marginTop:'20px'}} className="card-title">Preview</h2>
                <div className='cardImagePrev' >
                    <h1 style={{fontWeight:'bold', fontStyle:'italic'}}>{wish}</h1>
                </div>

                <h2 style={{marginTop:'20px'}} className="card-title">Select The Picture</h2>
                
                
                <Roadmap pageNo = {pageNo}/>
                <PrevNext prev={prev} next={next} />

                
          
        </div>
    )
}

export default Pictures