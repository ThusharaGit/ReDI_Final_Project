import React from 'react'

function Roadmap() {
    return (
        <div>
            <ul className="steps steps-vertical lg:steps-horizontal">
                <li className="step step-primary">Select Category</li>
                <li className="step step-primary">Select Picture</li>
                <li className="step">Add Colours</li>
                <li className="step">Write Message</li>
                <li className="step">Pay & Download Card </li>
            </ul>
        </div>
    )
}

export default Roadmap