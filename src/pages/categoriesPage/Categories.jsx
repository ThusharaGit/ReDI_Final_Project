import React from 'react'
import './categories.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import { useState } from 'react'
import CategoryCard from '../../components/CategoryCard'
import CategoryQuotes from '../../components/CategoryQuotes'




function Categories({ wish, setWish, categories, theme, setTheme }) {
    const [pageNo, setPageNo] = useState(2)
    const [quotes, setQuotes] = useState([])


    const prev = '/'
    const next = '/pictures'

    return (
        <div className='allPageLayout'>
            <h1 className='pageHeadings'>Select Your Card Category</h1>

            {quotes.length > 0 && <CategoryQuotes quotes={quotes} setQuotes={setQuotes} wish={wish} setWish={setWish} theme={theme} />}
            <div className='categoriesCardsDiv'>
                {
                    categories ? (categories && categories.map(category => <CategoryCard key={category.id} category={category} setQuotes={setQuotes} setTheme={setTheme} />)) : <>
                        <div className='spinnersDiv'>
                        <span className="loading loading-spinner text-primary"></span>
                        <span className="loading loading-spinner text-secondary"></span>
                        <span className="loading loading-spinner text-accent"></span>
                        <span className="loading loading-spinner text-neutral"></span>
                        <span className="loading loading-spinner text-info"></span>
                        <span className="loading loading-spinner text-success"></span>
                        <span className="loading loading-spinner text-warning"></span>
                        <span className="loading loading-spinner text-error"></span>
                        </div>
                    </>
                }
            </div>


            <Roadmap pageNo={pageNo} />
            <PrevNext prev={prev} next={next} pageNo={pageNo} />
        </div>
    )
}

export default Categories