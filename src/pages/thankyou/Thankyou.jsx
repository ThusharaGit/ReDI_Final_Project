import React from 'react'
import './thankyou.css'
import PrevNext from '../../components/PrevNext'



function Thankyou() {
    const prev = '/message'
    const next = '/thankyou'
  return (
    <div>
        <h1 className='pageHeadings'>Thank You for Perchasing A Waldcard</h1>
            
            <PrevNext prev={prev} next={next} />
    </div>
  )
}

export default Thankyou