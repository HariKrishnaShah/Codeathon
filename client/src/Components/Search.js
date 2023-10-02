import React, { useState } from 'react'
import bloodcontext from '../Context/Bloodcontext';
import { useContext } from 'react';

function Search() {
    const[searchR, setSearchR]= useState(null);
    const apis = useContext(bloodcontext);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const xg = document.getElementById("xg").value;
    const xt = document.getElementById("xt").value;
    const xpayload = {bloodgroup:xg, type:xt};
    const xresult = await apis.search(xpayload);
    setSearchR(xresult);
  }
  return (
    <>
    <form>
    <center><h2>Blood Search Form</h2></center>

    <label for="bloodgroup">Your Blood Group:</label>
    <select name="bloodgroup" required id ="xg" >
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
    </select>

    <label hmtlfor="bloodtype">Type of Blood:</label>
    <select name="bloodtype" required id ="xt" >
      <option value="plasma">PLASMA</option>
      <option value="rbc">RBC</option>
      <option value="blood">BLOOD</option>
      <option value="platelet">PLATLET</option>
    </select><br /><br />
    <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
  </form>
  {searchR === 0?<div><h4>Sorry, the searched item is not available with us at the moment.</h4></div>:""}
  {searchR !== 0 && searchR!== null?<div><h4>Total Available Quantity for searched blood at your location is :{searchR} ml</h4></div>:""}
  </>
  )
}

export default Search