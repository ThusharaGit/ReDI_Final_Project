import React from 'react'
import './pay.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import {useState} from 'react'

function Pay() {
    const [pageNo,setPageNo] = useState(6)
    const prev = '/message'
    const next = '/thankyou'
  return (
    <div>
        <h1 className='pageHeadings'>Preview Your Card</h1>
            <Roadmap pageNo = {pageNo} />
            <PrevNext prev={prev} next={next} />
    </div>
  )
}

export default Pay