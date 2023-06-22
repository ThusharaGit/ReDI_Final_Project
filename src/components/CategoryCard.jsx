import React from 'react'
import { useState } from 'react'

function CategoryCard({ category, setQuotes, setTheme }) {

    

    

    return (
        <div>
            <div className={(category.id % 2 ? " card text-primary-content bg-primary" : "  card text-primary-content  bg-secondary")}>
                <div className="card-body">
                     {/* <p style={{ fontSize: '0.1em' }}>{category.quotes[0]}</p>  */}
                    <div style={{margin:'50px'}}>
                        <button style={{fontSize:'1em',color:'white', textShadow:'2px 2px 5px grey'}} onClick={() => {
                            setQuotes(category.quotes)
                            setTheme(category.name)
                            
                            

                        }} >{category.name}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard