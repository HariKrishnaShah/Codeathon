import React, { useContext, useState } from 'react'
import bloodcontext from '../Context/Bloodcontext';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const apis = useContext(bloodcontext);
    let navigate = useNavigate();

    const [creds, setCreds] = useState({name:"", email:"", password:""});

    const handleChange = (event)=>{
        setCreds({...creds, [event.target.name]: event.target.value});
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const rol = document.getElementById("org").checked?"org":"user";
        setCreds({...creds, role:rol});
        await apis.signup(creds);
        navigate('/', {replace:true});
    }
  return (
    <>
    <center>
        <form>
            <fieldset className="signup">
                <legend style={{color:"red", fontWeight:"bold", fontSize:"larger", textAlign:"center"}}>SIGN-UP</legend>
                <div className="ro">
                <div className="col">
                    <label htmlFor="user">ENTER NAME / ORGANIZATION NAME:</label><br />
                    <input type="text" name="name" value = {creds.name} onChange={(event)=>handleChange(event)}/><br /><br />

                    <label hmtlfor = "email">E-MAIL:</label><br />
                    <input type="email" name="email" value = {creds.email} onChange={(event)=>handleChange(event)}/><br /><br />

                    <label htmlFor="phone">PHONE NO:</label><br />
                    <input type="text" name="phone" value = {creds.phone} onChange={(event)=>handleChange(event)}/><br /><br /><br />
                </div>

                <div className="col">
                    <label htmlFor="password">ENTER PASSWORD: </label><br />
                    <input type="password" name="password" value = {creds.password} onChange={(event)=>handleChange(event)}/><br /><br />
                    Select Role:<br />
                    <input type="radio" name="role" value = "user" id = "user" defaultChecked/>User<br />
                    <input type="radio" name="role" value = "org" id = "org" />Organization<br /><br />
                </div>
                </div>
                <center>
                <button type="submit" className="button" onClick={handleSubmit}>Submit</button>
                <button type="reset" className="button">RESET</button>
                </center>
            </fieldset>
        </form>
        </center>
    </>
  )
}

export default Signup