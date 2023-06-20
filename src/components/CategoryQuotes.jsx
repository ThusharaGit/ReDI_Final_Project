import React from 'react'

function CategoryQuotes({ quotes, setQuotes }) {
    return (
        <div>
            <div className="cardQuotesDiv">
               
                    <div className='cardPrev'></div>
             
                <div className="quotesDivBody">
                    <h2 className="card-title">Select The Quote</h2>
                    {
                        quotes.map(quote => <p className='quote'>{quote}</p>)
                    }

                    <div className="card-actions justify-end">
                        <button onClick={() =>
                        {
                            setQuotes("")
                        }} className="btn btn-primary">Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryQuotes