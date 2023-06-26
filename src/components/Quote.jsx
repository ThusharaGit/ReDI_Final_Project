  import React from 'react'

  function Quote({quote, setWish}) {
    return (
      <div>
          <button onClick={() => 
          {
              setWish(quote)
          }
          } className='quote'>{quote}</button>
      </div>
    )
  }

  export default Quote