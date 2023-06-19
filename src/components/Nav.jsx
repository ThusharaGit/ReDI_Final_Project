import React from 'react'
import Roadmap from './Roadmap'



function Nav() {
  return (
    <div>
        <div className="navbar bg-primary text-primary-content navGradient">
  <div className="navbar-start">
    <div style={{zIndex:'10'}} className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>About</a></li>
        {/* <li>
          <a>Contact</a>
          <ul className="p-2">
            <li><a><ion-icon name="call-outline"></ion-icon>: +49 011 123 1234</a></li>
            <li><a><ion-icon name="mail-outline"></ion-icon>:  abc.cd@gmail.com</a></li>
          </ul>
        </li> */}
        <li><a>Photo Gallery</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Wald Cards</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>About</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Contact</summary>
          <ul className="p-2">
            <li><a><ion-icon name="call-outline"></ion-icon>: +49 011 123 1234</a></li>
            <li><a><ion-icon name="mail-outline"></ion-icon>:  abc.cd@gmail.com</a></li>
          </ul>
        </details>
      </li>
      <li><a>Photo Gallery</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>

    </div>
  )
}

export default Nav