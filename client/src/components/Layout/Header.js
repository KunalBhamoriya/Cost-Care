import React , { useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { message } from 'antd';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const [loginUser, setLoginUser] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      setLoginUser(user);
    }
  },[]);

  const logoutHandler = () => {
    localStorage.removeItem('user');
    message.success("logout Successful")
    navigate("/login")
  }
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarTogglerDemo01" 
      aria-controls="navbarTogglerDemo01" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
       <AutoGraphIcon fontSize='large' className='mb-2 title-icons'/>
         <Link className="navbar-brand" to="/">
            <p className='ms-2 mt-3 title-icons'>
              CostCare
            </p>
         </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       <PersonIcon fontSize='large' className='title-icons'/>
        <li className="nav-item">
          {" "}
            <p className="nav-link me-3 title-icons" >{loginUser && loginUser.name}</p>
        </li>
        <li className="nav-item">
          <button className="btn btn-dark"
           onClick={logoutHandler}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}

export default Header