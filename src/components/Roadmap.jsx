import React from 'react'

function Roadmap({pageNo}) {
    return (
        <div>
            <ul className="steps steps-vertical lg:steps-horizontal">
                 <li className= {pageNo >= 2 ? 'step step-primary' : 'step'}>Select Category</li> 
                <li className={pageNo >= 3 ? 'step step-primary' : 'step'}>Select Picture</li>
                <li className={pageNo >= 4 ? 'step step-primary' : 'step'}>Add Colours</li>
                <li className={pageNo >= 5 ? 'step step-primary' : 'step'}>Write Message</li>
                <li className={pageNo >= 6 ? 'step step-primary' : 'step'}>Pay & Download Card </li>
            </ul>
        </div>
    )
}

export default Roadmap