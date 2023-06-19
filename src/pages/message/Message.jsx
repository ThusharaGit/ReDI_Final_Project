import React from 'react'
import './message.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'

function Message() {
    const prev = '/colours'
    const next = '/pay'
  return (
    <div>
    <h1 className='pageHeadings'>Write Your Message Here</h1>
            <Roadmap />
            <PrevNext prev={prev} next={next} />
    </div>
  )
}

export default Message