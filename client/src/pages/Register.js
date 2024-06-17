import React,{useState, useEffect} from 'react'
import {Form,Input, message} from 'antd'
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import Spinner from '../components/Spinner';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Footer from '../components/Layout/Footer';


const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    //from submit
    const submitHandler = async (values) => {
      try {
        setLoading(true);
        await axios.post("/users/register", values);
        message.success("Registeration Successfull");
        setLoading(false);
        navigate("/login");
      } catch (error) {
        setLoading(false);
        message.error("something went wrong");
      }
    };
    //prevent for login user
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



            <div className="register-page ">
                {loading && <Spinner/>}
                <Form layout='vertical' className='border border-5 dark p-5 log-reg-Card' onFinish={submitHandler}>
                    <h1>Register to CostCare</h1>
                    <Form.Item label = "Name" name="name">
                        <Input type='text' required />
                    </Form.Item>
                    <Form.Item label = "Email" name="email">
                        <Input type='email' required/>
                    </Form.Item>
                    <Form.Item label = "Password" name="password">
                        <Input type='password' required/>
                    </Form.Item>
                    <div className="d-flex justify-content-between">
                        <Link to="/login" className='text-danger'>Already Registerd ? Click to login</Link>
                        <button className='btn log-res-button ms-3'>Register</button>
                    </div>
                </Form>  
            </div>
            <Footer/>
        </>
    );
};

export default Register;