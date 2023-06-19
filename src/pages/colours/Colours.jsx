import React from 'react'
import './colours.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import {useState} from 'react'

function Colours() {
    const [pageNo,setPageNo] = useState(4)
    const prev = '/pictures'
    const next = '/message'
    return (
        <div className='allPageLayout'>
            <h1 className='pageHeadings'>Add Colours For Your Card</h1>
            <Roadmap pageNo = {pageNo} />
            <PrevNext prev={prev} next={next} />
        </div>
    )
}

export default Colours