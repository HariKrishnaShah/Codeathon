import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div style = {{marginTop:"10px", marginBottom:"10px"}}>
        <nav>
			<ul>
				<li><Link to = "/" className='a'>HOME</Link></li>                                                                
				<li ><Link to = "/donate" className='a'>DONATE BLOOD</Link></li>
				<li ><Link to = "/request" className='a'>REQUEST BLOOD</Link></li>
        <li ><Link to = "/org" className='a'>DONOR ORGANIZATION</Link></li>
        <li ><Link to = "/search" className='a'>Search</Link></li>
        <li ><Link to = "/eligible" className='a'>Eligibility</Link></li>
			</ul>
		</nav>
    </div>
  )
}

export default Navbar;