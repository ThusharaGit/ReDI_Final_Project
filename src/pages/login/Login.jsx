import React from 'react'
import './login.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'




function Login() {
    
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")


  return (
    <div className='allPageLayout'>
       <h1 className='nameBoard'>Welcome {userName}</h1>

      

    <form className='loginForm' onSubmit={(e) => {
      e.preventDefault();
      setUserName(e.target.username.value)
      setPassword(e.target.password.value)
      console.log(userName);
      console.log(password);
      e.target.username.value = ""
      e.target.password.value = ""
      
    }} action="">
        
        <h1 className='login'>Login</h1>
        <label htmlFor=""> UserName</label>
        <input className='inputBox' type="text" name="username" id="username" placeholder='User Name' />
        <label htmlFor=""> Password</label>
        <input className='inputBox' type="password" name="password" id="password" placeholder='password' />
        <button className='loginBtn' type="submit">login</button>
    </form>
    <h1 className='nameBoard'>New to WaldCards? Create an account....</h1>
     
    <form className='loginForm' action="">
        <h1 className='login'>Your Details</h1>
        <label htmlFor=""> First Name</label>
        <input className='inputbox' type="text" name="firstname" id="firstname" placeholder='First Name' />
        <label htmlFor=""> Last Name</label>
        <input className='inputbox' type="text" name="lastname" id="lastname" placeholder='Last Name' />
        <label htmlFor=""> Phone Number</label>
        <input className='inputbox' type="number" name="number" id="number" placeholder='Number' />
        <label htmlFor=""> Email Address</label>
        <input className='inputbox' type="email" name="email" id="email" placeholder='Email' />
        <label htmlFor="">Postal Address</label>
        <input className='inputbox' type="text" name="fullname" id="fullname" placeholder='Full Name' />
        <input className='inputbox' type="text" name="fullname" id="fullname" placeholder='Full Name' />
        <label htmlFor=""> Password</label>
        <input className='inputbox' type="password" name="password" id="password" placeholder='password' />
        <button className='loginBtn' type="submit">Submit</button>
    </form>

      <Link to= {'/'}> <button className="btn btn-secondary">Home</button></Link>
       <br />
       <br />
    
        
    </div>
  )
}

export default Login