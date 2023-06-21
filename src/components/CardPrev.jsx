import React from 'react'
import { useState } from 'react'

function CardPrev({ wish, image, bcColour, textColour }) {

    return (
        <div style={{ backgroundColor: `${bcColour}` }} className='cardPrev'>
            <p style={{ fontWeight: 'bold', fontStyle: 'italic', textShadow:'2px 2px 10px rgb(141, 145, 146)', color: `${textColour}` }}>{wish}</p>
            <div className='selectedPicDiv' style={{ backgroundImage: `url(${image})` }}></div>
        </div>
    )
}

export default CardPrev


