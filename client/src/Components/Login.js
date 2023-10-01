import React from 'react'
import { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import bloodcontext from '../Context/Bloodcontext';
function Login() {
    const apis = useContext(bloodcontext);
    let navigate = useNavigate();

    const [creds, setCreds] = useState({email:"", password:""});

    const handleChange = (event)=>{
        setCreds({...creds, [event.target.name]: event.target.value});
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const result = await apis.login(creds);
        if(result.success)
        {
            alert("Login Successful")
            navigate('/', {replace:true});
        }
        else{
            alert("Invalid Credentials");
        }
        
    }
  return (
   <>
   <center>
        <form>
            <fieldset className="login">
            <center>
                <legend style= {{color: "red", fontWeight: "bold", fontSize:"larger", textAlign:"center"}}>LOG-IN</legend>
                <br /><br />
                    <label htmlFor = "email">E-MAIL:</label>
                    <input type="email" name="email" value = {creds.email} onChange={(event)=>handleChange(event)}/><br /><br />

                    <label htmlFor="password">PASSWORD: </label>
                    <input type="password" name="password" value = {creds.password} onChange={(event)=>handleChange(event)}/><br /><br />

                    <button type="submit" class="button" onClick={handleSubmit}>LOGIN</button>
                <br /><br /><br />
            </center>
            </fieldset>  
        </form>
    </center>
   </>
  )
}

export default Login;