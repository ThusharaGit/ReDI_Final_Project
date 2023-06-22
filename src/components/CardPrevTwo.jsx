import React from 'react'
import { useState } from 'react'

function CardPrevTwo({ textColour, bcColour, message }) {

    return (
        <div>
            <div style={{ backgroundColor: `${bcColour}` }} className='cardPrev'>
                <p style={{ fontWeight: 'bold', fontStyle: 'italic', color: `${textColour}` }}>{message}</p>
            </div>

            
        </div>
    )
}

export default CardPrevTwo
