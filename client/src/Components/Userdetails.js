import React from 'react'

function Userdetails() {
  return (
    <div>
        <center>
        <form>
            <fieldset class="signup">
                <legend style= {{color: "red", fontWeight: "bold", fontSize:"larger", textAlign:"center"}}>USER PERSONAL DETAILS</legend>

                <div class="ro">
                <div class="col">
                    <label for="dob">Enter D.O.B:</label><br />
                    <input type="date" name="date" /><br /><br />

                    <label for = "weight">Enter Weight:</label><br />
                    <input type="number" name="weight" /><br /><br />

                    <label for="gender">Gender? :</label><br />
                    <input type="radio" name="gender" />MALE
                    <input type="radio" name="gender" />FEMALE
                    <br /><br />
                </div>

                <div class="col">
                    <label for="allergies">Allergies</label><br />
                    <input type="text" name="allergies" />

                    <br /><br />

                    <label for="medications">Currently medications :</label><br />
                    <input type="text" name="medications" />

                    <br /><br />
                </div>
                </div>

                <center>
                <button type="submit" class="button">CONFIRM</button>
                <button type="reset" class="button">RESET</button>
                </center>
                
            </fieldset>
        </form>
        </center>
    </div>
  )
}

export default Userdetails