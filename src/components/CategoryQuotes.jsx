import React from 'react'
import Quote from './Quote'
import { useState } from 'react'

function CategoryQuotes({ quotes, setQuotes }) {

     const [wish, setWish] = useState("")

    return (
        <div>
            <div className="cardQuotesDiv">
                <div className='prevBox'>

                    <h2  className="card-title">Preview</h2>

                    <div className='cardPrev'>
                        <p style={{fontWeight:'bold',fontStyle:'italic'}}>{wish}</p>
                    </div>

                </div>

                <div className="quotesDivBody">
                    <h2 className="card-title">Select The Quote</h2>
                    {
                        quotes.map(quote => <Quote quote={quote} setWish={setWish} />)
                    }

                    <div className="card-actions justify-end">
                        <button onClick={() => {
                            setQuotes("")
                        }} className="btn btn-secondary">Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryQuotes