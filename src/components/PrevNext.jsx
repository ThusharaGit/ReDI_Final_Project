import React from 'react'
import {useNavigate} from 'react-router-dom'

function PrevNext({prev, next}) {
    const navigate = useNavigate()
    return (
        <div style={{textAlign:'center'}}>
            <div style={{margin: '20px'}} className="join">
                <button onClick={() => {
                    navigate(prev)
                }} className="join-item btn">Previous</button>
                <button onClick={() => {
                    navigate(next)
                }}className="join-item btn btn-active">Next</button>
                
            </div>
        </div>
    )
}

export default PrevNext