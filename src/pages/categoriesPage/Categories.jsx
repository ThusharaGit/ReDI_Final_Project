import React from 'react'
import './categories.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'

function Categories() {
    const prev = '/'
    const next = '/pictures'
  return (
    <div> 
        <h1 className='pageHeadings'>Select Your Card Category</h1>
    <Roadmap/>
    <PrevNext prev = {prev} next = {next}/>
    </div>
  )
}

export default Categories