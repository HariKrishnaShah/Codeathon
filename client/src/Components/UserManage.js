import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate} from 'react-router-dom';
import "./UserManage.css";
import { useNavigate } from 'react-router-dom';

function UserManage(props) {
    let navigate = useNavigate();
  const handleLogout = ()=>
  {
    localStorage.removeItem('token');
    navigate('/', {replace:true});
  }
  return (
    <>
    {localStorage.getItem('token') === null?
        <form className="d-flex" role="search">
        <Link to = "/login" className='a'>Login</Link>
        <Link to = "/signup" className='a'>Register</Link>
        </form>
        :<form className="d-flex" role="search"><div className='a'>{localStorage.getItem('token').slice(-4)}</div><div className='a' onClick={handleLogout}>Logout</div></form>}

    </>
  )
}

export default UserManage;