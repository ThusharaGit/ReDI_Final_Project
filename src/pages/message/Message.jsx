import React from 'react'
import './message.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import { useState } from 'react'
import CardPrev from '../../components/CardPrev'
import CardPrevTwo from '../../components/CardPrevTwo'

function Message({ wish, image, bcColour, textColour, message, setMessage }) {



  const [pageNo, setPageNo] = useState(5)
  const prev = '/colours'
  const next = '/pay'
  return (
    <div className='allPageLayout'>
      <h1 className='pageHeadings'>Write Your Message </h1>

      <div className='twoPagesPrevDiv'>

        <div className='messagePrevDiv'>
          <h2 style={{ marginTop: '20px' }} className="card-title">Page One Preview</h2>
          <CardPrev wish={wish} image={image} bcColour={bcColour} textColour={textColour} />
        </div>


        <div className='messagePrevDiv'>
          <h2 style={{ marginTop: '20px' }} className="card-title">Page Two Preview</h2>
          <CardPrevTwo textColour={textColour} bcColour={bcColour} message={message} />
        </div>

       
        <div className='messageBox'>
        <h2 style={{ marginTop: '20px' }} className="card-title">Type Your Message Here</h2>

          <form  className='messageForm' onSubmit={(e) => {
            e.preventDefault();
            setMessage(e.target.message.value)
            e.target.message.value = "";
          }} action="">
            {/* <textarea type="text" name="message" id="message" placeholder='Type Your message Here' /> */}
            <textarea type="text" name="message" id="message" className="textarea textarea-primary" placeholder="Sending Love And Happiness....."></textarea>
            <button type="submit">Submit</button>
          </form>

          <button onClick={() => {
            setMessage("")
          }}>Delete</button>

        </div>

      </div>



      <Roadmap pageNo={pageNo} />
      <PrevNext prev={prev} next={next} />
    </div>
  )
}

export default Message



