import React, { useContext, useEffect } from 'react'
import "./Home.css";
import pic1 from "./pic/posterr3-01.jpg";
import pic2 from "./pic/homepage1.jpg"
import pic3 from "./pic/homepage3.jpg"
import pic4 from "./pic/download (2).png"
import pic5 from "./pic/homepage2.jpg";
import bloodcontext from '../Context/Bloodcontext';
function Home() {
    const apis = useContext(bloodcontext);
    useEffect(
        ()=>{
            const fet = async ()=>{
                const result = await apis.summaryUsed();
                const result2 = await apis.summaryAv();
                console.log("av" + apis.av);
                console.log("used" + apis.used);
            }
            fet();
        
    },
     // eslint-disable-next-line
    []);
    
  return (
    <>
    <div className="row">
            <div className="column left">
                <img src={pic1} width={"100%"} alt = {"img"} /><br />
                <img src={pic2} width={"100%"} alt = {"img"}/>         
            </div>
        <div className="column middle">
        
            <div className = "intro">
        <center><h1>ONLINE BLOOD DONATION</h1></center>

        <p>Welcome to Online Blood Donation, a digital platform dedicated to making blood donation accessible, efficient, and lifesaving. In a 
            world that's more connected than ever, we believe in leveraging technology to connect donors with those in urgent need of blood.Our 
            platform serves as a virtual bridge between generous donors and individuals, hospitals, and organizations requiring blood. 
            With just a few clicks, you can become a part of a life-saving network that transcends geographical boundaries.<br /><br />
            
            At Online Blood Donation, 
            we understand the critical importance of timely blood supply, and we are committed to ensuring that no request goes unanswered. 
            Our digital blood inventory is meticulously managed to provide real-time information on available blood 
            types, making the donation process seamless and transparent.<br /><br />
        
        
            We are not just a platform: we are a community of caring individuals who recognize the impact a single donation can have on 
            someone's life. Through education and outreach programs, we strive to raise awareness about the constant need for blood 
            donations and encourage a culture of regular giving.<br /><br />
        
            Join us in our mission to save lives, one click at a time. Whether you're a first-time donor or a seasoned advocate for blood 
            donation, Online Blood Donation welcomes you to be a part of this life-affirming journey.<br /><br /><br />
        
            Thank you for choosing to make a difference with us.</p>
            </div>
            <br /><br />
            <img src={pic3} width={"100%"} alt = {"img"}/>
            <h4>Realtime Blood Availability</h4>
            <h6>Available Component</h6>
            <table className= "av">
                <tr>
                    <th>Blood Group</th>
                    <th>Component</th>
                    <th>Quantity</th>
                </tr>
                {apis.av.map((elem, i)=>{
                    return (<tr key = {i}>
                        <td>{elem.bloodgroup}</td>
                        <td>{elem.donatetype}</td>
                        <td>{elem.totalQuantity}</td>
                    </tr>);
                })}
            </table>
            <br />
            <h6>Used Component</h6>
            <table className= "used">
                <tr>
                    <th>Blood Group</th>
                    <th>Component</th>
                    <th>Quantity</th>
                </tr>
                {apis.used.map((elem, i)=>{
                    return (<tr key = {i}>
                        <td>{elem.bloodgroup}</td>
                        <td>{elem.donatetype}</td>
                        <td>{elem.totalQuantity}</td>
                    </tr>);
                })}
            </table>
             </div>
        <div className="column right">
            <img src={pic4} width={"100%"} alt = {"img"}/><br />
            <img src={pic5} width={"100%"} alt = {"img"}/> 
        </div>
        </div>
        
        </>
  )
}

export default Home;