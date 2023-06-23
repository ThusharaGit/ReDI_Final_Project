import React from 'react'
import Quote from './Quote'
import { useState } from 'react'
import CardPrev from './CardPrev'
import { Link } from 'react-router-dom'

function CategoryQuotes({ quotes, setQuotes ,wish ,setWish, theme, }) {

     //const [wish, setWish] = useState("")
     
     

    return (
        <div>
            <div className="cardQuotesDiv">
                <div className='prevBox'>

                    <h2  className="quoteTitle">Preview</h2>

                    <CardPrev wish= {wish}/>

                </div>

                <div className="quotesDivBody">
                    <h2 className=" quoteTitle">Select The Quote for {`${theme} `}Card</h2>
                    {
                        quotes.map(quote => <Quote quote={quote} setWish={setWish} />)
                    }

                    <div className="card-actions justify-end">
                        <button onClick={() => {
                            setQuotes("")
                        }} className="btn btn-secondary">Back</button>
                        <Link to= {'/pictures'}> <button className="btn btn-primary">Next</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryQuotes