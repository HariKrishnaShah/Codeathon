import React from 'react'
import "./Eligible.css"

function Eligibility() {
  return (
    <>
    <center>
<form>
    <fieldset className="eligible">
        <legend style={{color:"red", fontWeight:"bold", fontSize:"larger", textAlign:"center"}}>ELIGIBILITY</legend>
    <label>
        <input type="checkbox" name="age" id="ageCheckbox" /> Age (18-65 years)
    </label><br />

    <label>
        <input type="checkbox" name="weight" id="weightCheckbox" /> Weight (Above 50 kg) 
    </label><br />

    <label>
        <input type="checkbox" name="health" id="healthCheckbox" /> Good Health
    </label><br />

    <label>
        <input type="checkbox" name="travel" id="travelCheckbox" /> No recent travel to high-risk areas
    </label><br />

    <label>
        <input type="checkbox" name="medicalCondition" id="medicalConditionCheckbox" /> No chronic medical conditions
    </label><br />

    <label>
        <input type="checkbox" name="haemoglobin" id="haemoglobin" /> Adequate haemoglobin levels
    </label><br />

    <label>
        <input type="checkbox" name="medications" id="medications" /> No current medications
    </label><br />

    <label>
        <input type="checkbox" name="tattoo" id="tattoo" /> No Tattoos
    </label><br />

    <label>
        <input type="checkbox" name="behaviour" id="behaviour" /> Not engaged in high-risk behaviour (drug use, unprotected sex)
    </label><br />

    <label>
        <input type="checkbox" name="pregnancy" id="pregnancy" /> Not pregnant or given birth recently
    </label><br />

    <label>
        <input type="checkbox" name="disease" id="disease" /> No blood-borne diseases
    </label><br />

    <center>
    <button type="button" className="button" >Check Eligibility</button>
    </center>
    </fieldset>

</form>
</center>
    </>
  )
}

export default Eligibility