import React, { useState } from 'react'
import BloodContext from './Bloodcontext';
import axios from 'axios';
function Bloodstates(props) {
  const authToken = localStorage.getItem('token');
  // eslint-disable-next-line
  const head = {headers:{"authToken":authToken, "Content-Type": "application/json"}}
  const host = "http://localhost:4000";
  const [av, setAv] = useState([]);
  const [used, setUsed] = useState([]);
  const signup = async(payload)=>{
    try{
        const data = await axios.post(`${host}/user/createuser`, payload);
        localStorage.setItem('token', data.data.authToken);
        console.log(data);
    }
    catch(error)
    {
      console.log(error);
    }
  }
  const login = async(payload)=>{
    try{
        const data = await axios.post(`${host}/user/login`, payload);
        console.log(data);
        if(data.data.success)
        {
          localStorage.setItem('token', data.data.authToken);
        }
        return data.data;
        
    }
    catch(error)
    {
      console.log(error);
    }
  }
  const summaryUsed = async()=>{
    try{
        const data = await axios.get(`${host}/bloodrecord/summaryused`);
        setUsed([...data.data]);
    }
    catch(error)
    {
      console.log(error);
    }
  }
  const summaryAv = async()=>{
    try{
        const data = await axios.get(`${host}/bloodrecord/summaryav`);
        setAv([...data.data]);
    }
    catch(error)
    {
      console.log(error);
    }
  }
  const donate = async(payload)=>{
    try{
        const data = await axios.post(`${host}/donate/`, payload, head);
    }
    catch(error)
    {
      console.log(error);
    }
  }
  const request = async(payload)=>{
    try{
        const data = await axios.post(`${host}/bloodrequest`, payload, head);
    }
    catch(error)
    {
      console.log(error);
    }
  }
  const search = async(payload)=>{
    try{
        const data = await fetch(`${host}/bloodrecord/search`, {
          method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(payload)
        });
        const aa = await data.json()
        return aa;
       
    }
    catch(error)
    {
      console.log(error);
    }
  }
  return (
    <BloodContext.Provider value = {{signup , login, summaryAv, summaryUsed, av, used, donate, request, search}}>
    {props.children}
    </BloodContext.Provider>
  )
}
export default Bloodstates;
