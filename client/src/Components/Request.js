import React from 'react'
import { Link } from 'react-router-dom'
import bloodcontext from '../Context/Bloodcontext';
import { useContext } from 'react';

function Request() {
  const apis = useContext(bloodcontext);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const bg = document.getElementById("bg").value;
    const bt = document.getElementById("bt").value;
    const loca = document.getElementById("location").value;
    const qt = document.getElementById("qt").value;
    const payload = {bloodgroup:bg, donatetype:bt, location:loca, quantity:qt};
    await apis.request(payload);
    alert("Request Submitted Sucessfully");
  }
  return (
    <>
    <div>
         <h1>Request Blood: Find the Lifesaving Match You Need</h1>

<h3>Introduction:</h3>
<p>Welcome to [Your Blood Donation Agent Name], your trusted partner in connecting individuals in need with the blood donors 
    who can make a difference. We understand that finding the right blood type is crucial in emergencies and medical treatments. 
    This page is designed to help you request blood and provide you with essential information about blood types and the request 
    process.</p>

<h3>Understanding Blood Types:</h3>
<p>Blood is classified into different types based on the presence or absence of specific antigens on the surface of red blood 
    cells. The most important blood typing systems are the ABO system and the Rh factor (positive or negative).</p>

<h3>Here are the primary blood types:</h3>
<p>
1. Type A: Has A antigens on red blood cells and B antibodies in plasma. Can receive blood from Type A and Type O donors.<br />

2. Type B: Has B antigens on red blood cells and A antibodies in plasma. Can receive blood from Type B and Type O donors.<br />

3. Type AB: Has both A and B antigens on red blood cells and no antibodies in plasma (universal recipient). Can receive 
blood from Type A, Type B, Type AB, and Type O donors.<br />

4. Type O: Has no A or B antigens on red blood cells and both A and B antibodies in plasma (universal donor). Can only 
receive blood from Type O donors.<br />

5. Rh Factor: Blood is further classified as either Rh-positive (+) or Rh-negative (-) based on the presence or absence 
of the Rh antigen.<br />
</p>

<h3>How to Request Blood:</h3>
<p>
If you or someone you know needs blood, follow these steps to request blood through our platform:<br /><br />

1. Create an Account: Register on our website and provide accurate information about the patient and the required blood 
type.<br />

2. Blood Type Selection: Specify the needed blood type (e.g., A+, B-, AB-), as well as the quantity required.<br />

3. Urgency: Indicate the urgency of your request, whether it's for an immediate emergency or a planned medical procedure.<br />

4. Contact Information: Provide your contact details so that potential donors can reach out to you.<br />

5. Medical Documentation: Depending on the nature of the request, upload relevant medical documents or prescriptions to 
validate the need for blood.<br />
</p>

<h3>Finding a Match:</h3>
<p>Our platform will match your blood type request with registered donors who match the criteria. You'll be notified 
when a potential donor is found.</p>

<h3>Contacting Donors:</h3>
<p>Once a match is made, you'll have the option to contact the donor directly or have our team facilitate the connection.</p>

<h3>Safety and Privacy:</h3>
<p>Rest assured that your personal and medical information is handled with the utmost care and confidentiality. We adhere to 
strict data protection standards.</p>

<h3>Donor Verification:</h3> 
<p>Before any blood is provided, we verify the eligibility and authenticity of the donors to ensure safe and secure transactions.</p>

<h3>Conclusion:</h3>
<p>At Raktbeej, our mission is to bridge the gap between those in need and generous blood donors. 
Requesting blood is a critical step in saving lives, and we are here to support you throughout the process. Register now to make 
your request, and together, we can make a lifesaving difference.</p>

<h3>Contact Us:</h3>
<p>For any inquiries or assistance, please don't hesitate to contact us at mail. Your well-being is our priority, 
and we are here to help you find the blood you need.</p>
    </div>

    {localStorage.getItem('token') === null?
    <div><h6>Login or Register to continue</h6><br /><form className="d-flex" role="search">
    <Link to = "/login" className='a'>Login</Link>
    <Link to = "/signup" className='a'>Register</Link>
    </form></div>
        :(<div className="try">
  <form>
    <center><h2>Blood Request Form</h2></center>
    <label for="location">Location:</label>
    <input type="text" name="qt" id ="location" required />
    <label for="location">Quantity:</label>
    <input type="text" name="qt" id ="qt" required /><br />

    <label for="bloodgroup">Your Blood Group:</label>
    <select name="bloodgroup" required id ="bg" >
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
    </select>

    <label for="bloodtype">Type of Blood:</label>
    <select name="bloodtype" required id ="bt" >
      <option value="plasma">PLASMA</option>
      <option value="rbc">RBC</option>
      <option value="blood">BLOOD</option>
      <option value="platelet">PLATLET</option>
    </select><br /><br />
    <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
  </form>
</div>)}
    </>
  )
}

export default Request;