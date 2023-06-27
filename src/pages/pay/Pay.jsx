import React from 'react'
import './pay.css'
import PrevNext from '../../components/PrevNext'
import Roadmap from '../../components/Roadmap'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Pay() {
    const [pageNo,setPageNo] = useState(6)
    const prev = '/message'
    const next = '/download'
  return (
    <div className='allPageLayout'>
        <h1 className='pageHeadings'>Make Your Payment to download the Card</h1>
        
        <form className='paymentForm' action="">
        <h1 className='login'>Your Payment Details</h1>
        <label htmlFor=""> First Name:</label>
        <input className='inputBox' type="text" name="firstname" id="firstname" placeholder='First Name' />
        <label htmlFor=""> Last Name:</label>
        <input className='inputBox' type="text" name="lastname" id="lastname" placeholder='Last Name' />
        <label htmlFor=""> Phone Number:</label>
        <input className='inputBox' type="number" name="number" id="number" placeholder='Number' />
        <label htmlFor=""> Email Address:</label>
        <input className='inputBox' type="email" name="email" id="email" placeholder='Email' />
        <label htmlFor="">Postal Address:</label>
        <input className='inputBox' type="text" name="fullname" id="fullname" placeholder='Full Name' />
        <input className='inputBox' type="text" name="fullname" id="fullname" placeholder='Full Name' />
        <label htmlFor=""> Credit Card No:</label>
        <input className='inputBox' type="number" name="creditCardNo" id="creditCardNo" placeholder='Credit Card Number' />
        <label htmlFor=""> Card Expiry Date:</label>
        <input className='inputBox' type="date" name="date" id="date" placeholder='Card Expiry Date' />
        <button className='loginBtn' type="submit">Submit</button>
    </form>
    <Link to= {'/download'}><button className="btn btn-secondary">Download Card</button></Link>

    <Link to= {'/download'}><a>Login</a></Link>

            <Roadmap pageNo = {pageNo} />
            <PrevNext prev={prev} next={next} />
    </div>
  )
}

export default Pay