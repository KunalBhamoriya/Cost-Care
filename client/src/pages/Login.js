import React,{useState , useEffect} from 'react';
import {Form,Input, message} from 'antd'
import { Link , useNavigate} from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Footer from '../components/Layout/Footer';



const Login = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const submitHandler =  async (values) => {
        try{
            setLoading(true)
            const { data } =  await axios.post('/users/login/', values);
            setLoading(false)
            message.success('login Success')
            localStorage.setItem('user', JSON.stringify({...data.user,password:''}))
            navigate('/')
        } catch(error){
            setLoading(false)
            message.error('somthing went wrong')
        }
    }; 
    useEffect(() => {
        if(localStorage.getItem('user')){
            navigate('/')
        }
    },[navigate]);
    return (
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
       <AutoGraphIcon fontSize='large'/>
         <Link className="navbar-brand" to="/">
            <p className='ms-2 mt-3 title-font'>CostCare</p>
         </Link>
    </div>
  </div>
</nav>
         

         <div className="register-page">
            {loading && <Spinner/>}
                <Form layout='vertical' className='border border-5 p-5 log-reg-Card' onFinish={submitHandler}>
                    <h1>Login to CostCare</h1>
                    <Form.Item label = "Email" name="email">
                        <Input type='email' required />
                    </Form.Item>
                    <Form.Item label = "Password" name="password">
                        <Input type='password' required/>
                    </Form.Item>
                    <div className="d-flex justify-content-between">
                        <Link to="/register" className='text-danger'>Not a user ? Click to Register</Link>
                        <button className='btn log-res-button ms-3'>Login</button>
                    </div>
                </Form>  
            </div>
            <Footer/>
            </>
    )
}

export default Login