import React from 'react'
import './message.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import { useState } from 'react'
import CardPrev from '../../components/CardPrev'
import CardPrevTwo from '../../components/CardPrevTwo'

function Message({ wish, image, bcColour, textColour, message, setMessage, font, setFont }) {



  const [pageNo, setPageNo] = useState(5)
  const prev = '/colours'
  const next = '/pay'

  
  return (
    <div className='allPageLayout'>
      <h1 className='pageHeadings'>Write Your Message </h1>

      <div className='twoPagesPrevDiv'>

        <div className='messagePrevDiv'>
          <h2 style={{ marginTop: '20px' }} className="card-title">Page One Preview</h2>
          <CardPrev wish={wish} image={image} bcColour={bcColour} textColour={textColour} font= {font} />
        </div>


        <div className='messagePrevDiv'>
          <h2 style={{ marginTop: '20px' }} className="card-title">Page Two Preview</h2>
          <CardPrevTwo textColour={textColour} bcColour={bcColour} message={message} font= {font} />
        </div>

      </div>

      <div className='messageBox'>
        <h2 style={{ marginTop: '20px' }} className="card-title">Type Your Message Here</h2>

          <textarea onChange= {(e) => {
             e.preventDefault();
             setMessage(e.target.value)
          }} type="text" name="message" id="message"  className="textarea textarea-primary textFeild" placeholder="Sending Love And Happiness....."></textarea>
 
      </div>

      <select onChange={(e)=> {
         setFont(e.target.value)
      }
      } className="select select-primary w-full max-w-xs">
        <option disabled selected>Select your Favourite Font</option>
        <option value={'Open Sans'}>Open Sans</option>
        <option value={'Lobster'}>Lobster</option>
        <option value={'Berkshire Swash'}>Berkshire Swash</option>
        <option value={'Henny Penny'}>Henny Penny</option>
        <option value={'Luckiest Guy'}>Luckiest Guy</option>
        <option value={'Snowburst One'}>Snowburst One</option>
        <option value={'Bonbon'}>Bonbon</option>
        <option value={'Tapestry'}>Tapestry</option>
      </select>




      <Roadmap pageNo={pageNo} />
      <PrevNext prev={prev} next={next} />
    </div>
  )
}

export default Message



