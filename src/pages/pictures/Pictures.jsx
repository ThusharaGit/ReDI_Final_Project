import React from 'react'
import './pictures.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import {useState} from 'react'
import CardPrev from '../../components/CardPrev'


function Pictures({pictures, wish, image, setImage}) {
    const [pageNo,setPageNo] = useState(3)
    // const [image,setImage] = useState("")

    const prev = '/categories'
    const next = '/colours'
    return (
        <div className='allPageLayout'>
            
                <h1 className='pageHeadings'>Select The Picture</h1>
                <h2 style={{marginTop:'20px'}} className="card-title">Preview</h2>
                {/* <div className='cardImagePrev' >
                    <h1 style={{fontWeight:'bold', fontStyle:'italic'}}>{wish}</h1>
                    <div className='selectedPicDiv'  style={{backgroundImage: `url(${image})`}}></div>

                </div> */}
                <CardPrev wish= {wish} image= {image}/>

                <h2 style={{marginTop:'20px'}} className="card-title">Select The Picture</h2>
                <div className='allPictures'>
                {
                    pictures && pictures.map(picture => <button onClick={() => {
                        setImage(picture)
                    }}
                    className='pictureDiv' style={{backgroundImage: `url(${picture})`}}>
                         </button> )   
                }
                </div>


                
                <Roadmap pageNo = {pageNo}/>
                <PrevNext prev={prev} next={next} />

                
          
        </div>
    )
}

export default Pictures