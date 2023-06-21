import React from 'react'
import Quote from './Quote'
import { useState } from 'react'
import CardPrev from './CardPrev'

function CategoryQuotes({ quotes, setQuotes ,wish ,setWish, theme, }) {

     //const [wish, setWish] = useState("")
     

    return (
        <div>
            <div className="cardQuotesDiv">
                <div className='prevBox'>

                    <h2  className="card-title">Preview</h2>

                    <CardPrev wish= {wish}/>

                </div>

                <div className="quotesDivBody">
                    <h2 className="card-title">Select The Quote for <span style={{color:'rgb(230, 51, 152)', fontWeight:'bold'}}>{`${theme}`}</span> Card</h2>
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