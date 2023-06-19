import React from 'react'
import './categories.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import {useState} from 'react'


function Categories() {
    const [pageNo,setPageNo] = useState(2)
    const prev = '/'
    const next = '/pictures'
  return (
    <div> 
        <h1 className='pageHeadings'>Select Your Card Category</h1>
    <Roadmap pageNo = {pageNo}/>
    <PrevNext prev = {prev} next = {next}/>
    </div>
  )
}

export default Categories