import React from 'react'
import './message.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import {useState} from 'react'

function Message() {

    const [pageNo,setPageNo] = useState(5)
    const prev = '/colours'
    const next = '/pay'
  return (
    <div>
    <h1 className='pageHeadings'>Write Your Message Here</h1>
            <Roadmap pageNo= {pageNo}/>
            <PrevNext prev={prev} next={next} />
    </div>
  )
}

export default Message