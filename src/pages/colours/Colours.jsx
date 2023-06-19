import React from 'react'
import './colours.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
function Colours() {
    const prev = '/pictures'
    const next = '/message'
    return (
        <div>
            <h1 className='pageHeadings'>Add Colours For Your Card</h1>
            <Roadmap />
            <PrevNext prev={prev} next={next} />
        </div>
    )
}

export default Colours