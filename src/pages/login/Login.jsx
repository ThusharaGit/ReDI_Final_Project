import React from 'react'
import './login.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'




function Login() {
    
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")


  return (
    <div className='allPageLayout'>

    <form onSubmit={(e) => {
      e.preventDefault();
      setUserName(e.target.username.value)
      setPassword(e.target.password.value)
      console.log(userName);
      console.log(password);
      e.target.username.value = ""
      e.target.password.value = ""
      
    }} action="">
         <h1>Welcome  {userName}</h1>
        <h1>Login</h1>
        <label htmlFor=""> UserName</label>
        <input type="text" name="username" id="username" placeholder='User Name' />
        <label htmlFor=""> Password</label>
        <input type="password" name="password" id="password" placeholder='password' />
        <button type="submit">Submit</button>
    </form>
        
    </div>
  )
}

export default Login