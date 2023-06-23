import React from 'react'
import { useState } from 'react'

function CardPrev({ wish, image, bcColour, textColour, font }) {

    return (
        <div style={{ backgroundColor: `${bcColour}` }} className='cardPrev'>
            <p style={{ fontWeight: 'bold', fontStyle: 'italic', textShadow:'2px 2px 10px rgb(141, 145, 146)', color: `${textColour}`,fontFamily: `${font}`  }}>{wish}</p>
            <div className='selectedPicDiv' style={{ backgroundImage: `url(${image})` }}></div>
        </div>
    )
}

export default CardPrev


