import React from 'react'
import './pay.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'

function Pay() {
    const prev = '/message'
    const next = '/thankyou'
  return (
    <div>
        <h1 className='pageHeadings'>Preview Your Card</h1>
            <Roadmap />
            <PrevNext prev={prev} next={next} />
    </div>
  )
}

export default Pay