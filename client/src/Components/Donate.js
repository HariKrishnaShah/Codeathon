import React, { useContext } from 'react'
import "./Donate.css";
import { Link } from 'react-router-dom'
import bloodcontext from '../Context/Bloodcontext';

function Donate() {
  const apis = useContext(bloodcontext);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const bg = document.getElementById("bg").value;
    const bt = document.getElementById("bt").value;
    const loca = document.getElementById("location").value;
    const payload = {bloodgroup:bg, donatetype:bt, location:loca};
    await apis.donate(payload);
    alert("Request Submitted Sucessfully");
  }
  return (
    <>
    <div>
    <center><h1 style={{color:"red"}}>DONATE BLOOD</h1></center>

<h2>Be a Hero: Donate Blood Today</h2>

<h3>Introduction:</h3>
<p>Welcome to APK Raktbeej, your trusted partner in saving lives. Blood donation is a selfless act that can 
    make a significant difference in the lives of those in need. Join us in our mission to provide a lifeline to those facing 
    medical emergencies by becoming a blood donor. Here, we'll explain the importance of blood donation and how you can get 
    involved.</p>

<h3>Why Donate Blood?</h3>
<p>Every day, countless individuals, from accident victims to cancer patients, rely on blood transfusions to survive. 
        By donating blood, you can directly contribute to their recovery and well-being. Here are some compelling reasons to donate:</p>

        1. <b>Save Lives:</b> Your single donation can save up to three lives by providing essential components like red blood cells, plasma, 
        and platelets.<br />
        
        <b>2. Emergency Preparedness: </b>Blood is needed in emergencies, natural disasters, and during surgeries. Your donation helps ensure 
        that hospitals have an adequate supply of blood to respond promptly.<br />
        
        <b>3. Cancer Patients: </b>People undergoing chemotherapy and radiation therapy often require blood and platelet transfusions to combat 
        the side effects of treatment.<br />
        
        <b>4. Accident Victims:</b> Trauma patients, such as those injured in accidents, often require large quantities of blood to stabilise 
        their condition.<br />
        
        <b>5. Chronic Illnesses:</b> Those with chronic illnesses, like sickle cell disease, depend on regular blood transfusions for a better 
        quality of life.<br />


<h3>The Donation Process:</h3>
<p>
Donating blood is a straightforward and safe process. Here's what you can expect:<br />

1. Registration: You'll start by providing some basic information and undergoing a quick health screening to ensure you're 
eligible to donate.<br />

2. Donation: A skilled phlebotomist will insert a sterile needle into a vein to collect your blood. The process usually 
takes about 10-15 minutes.<br />

3. Refreshments: After donation, you'll be offered snacks and beverages to help you recover.<br />

4. Rest: It's essential to rest for a short while before you leave to ensure you're feeling well.<br />

</p>

<h3>Who Can Donate?</h3>
<p>
Most healthy adults can donate blood. However, eligibility criteria may vary by location and blood type. Generally, donors should:<br /><br />

- Be at least 17 years old age requirements may vary by location.<br />
- Weigh at least 110 pounds.<br />
- Be in good health with no infectious diseases.<br />
- Not have certain medical conditions or medications that may affect donation.<br />
</p>
<h3>Donation Benefits:</h3>
<p>Apart from the satisfaction of saving lives, blood donation also offers personal benefits:<br />

1. Health Check: Before each donation, you'll receive a mini-health check, including a check of your blood pressure, 
pulse, and haemoglobin levels.<br />

2. Reduced Risk: Regular blood donation can help reduce the risk of certain diseases by lowering iron levels in the body.<br />

3. Community Engagement: You become an integral part of your community by contributing to its well-being.<br />
</p>


<h3>Contact Us:</h3>
<p>Have questions or ready to donate? Contact us at email or visit our Website Link to find a donation centre 
    near you. Together, we can create a healthier and safer community.
</p>
</div>
{localStorage.getItem('token') === null?
    <div><h6>Login or Register to continue</h6><br /><form className="d-flex" role="search">
    <Link to = "/login" className='a'>Login</Link>
    <Link to = "/signup" className='a'>Register</Link>
    </form></div>
        :(<div className="try">
  <form>
    <center><h2>Blood Donation Form</h2></center>
    <label for="location">Location:</label>
    <input type="text" name="location" id ="location" required />

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
)}

export default Donate