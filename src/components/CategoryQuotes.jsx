import React from 'react'

function CategoryQuotes({ quotes, setQuotes }) {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl cardQuotesDiv">
                <div className='cardBg'>
                    <div className='cardPrev'></div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Select The Quote For The Card</h2>
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