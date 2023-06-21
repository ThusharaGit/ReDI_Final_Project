import React from 'react'
import { useState } from 'react'

function CategoryCard({ category, setQuotes, setTheme }) {

    

    

    return (
        <div>
            <div className={(category.id % 2 ? "card w-96 text-primary-content card bg-primary" : "card w-96 text-primary-content card bg-secondary")}>
                <div className="card-body">
                    <h2 style={{ color: 'white', fontSize: '2em' }} className="card-title">{category.name}</h2>
                    <p>{category.quotes[0]}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => {
                            setQuotes(category.quotes)
                            setTheme(category.name)
                            
                            

                        }} className="btn">Select</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard