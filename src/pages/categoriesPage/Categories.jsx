import React from 'react'
import './categories.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import { useState } from 'react'
import CategoryCard from '../../components/CategoryCard'
import CategoryQuotes from '../../components/CategoryQuotes'




function Categories({ data }) {
    const [pageNo, setPageNo] = useState(2)
    const [quotes, setQuotes] = useState([])

    const prev = '/'
    const next = '/pictures'

    return (
        <div className='allPageLayout'>
            <h1 className='pageHeadings'>Select Your Card Category</h1>

            { quotes.length > 0 && <CategoryQuotes quotes = {quotes}  setQuotes= {setQuotes} />}

            <div className='categoriesCardsDiv'>

                {
                    data.categories.map(category => <CategoryCard key={category.id} category={category} setQuotes={setQuotes} />)
                }
            </div>

            <Roadmap pageNo={pageNo} />
            <PrevNext prev={prev} next={next} />
        </div>
    )
}

export default Categories