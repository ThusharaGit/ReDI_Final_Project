import React from 'react'
import './pictures.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'

function Pictures() {
    const prev = '/categories'
    const next = '/colours'
    return (
        <div>
            
                <h1 className='pageHeadings'>Select The Picture</h1>
                <Roadmap />
                <PrevNext prev={prev} next={next} />
          
        </div>
    )
}

export default Pictures