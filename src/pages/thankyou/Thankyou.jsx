import React from 'react'
import './thankyou.css'
import PrevNext from '../../components/PrevNext'
import {useState} from 'react'



function Thankyou() {
  const [pageNo,setPageNo] = useState(8)
    const prev = '/download'
    const next = '/thankyou'
  return (
    <div>
        <h1 className='pageHeadings'>Thank You for Purchasing A Waldcard</h1>
            
            <PrevNext prev={prev} next={next} pageNo = {pageNo} />
    </div>
  )
}

export default Thankyou