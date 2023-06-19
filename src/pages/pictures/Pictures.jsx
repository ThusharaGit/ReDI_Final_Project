import React from 'react'
import './pictures.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import {useState} from 'react'

function Pictures() {
    const [pageNo,setPageNo] = useState(3)
    const prev = '/categories'
    const next = '/colours'
    return (
        <div className='allPageLayout'>
            
                <h1 className='pageHeadings'>Select The Picture</h1>
                <Roadmap pageNo = {pageNo}/>
                <PrevNext prev={prev} next={next} />
          
        </div>
    )
}

export default Pictures