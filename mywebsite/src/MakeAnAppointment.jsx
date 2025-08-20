import React from 'react'

function MakeAnAppointment () {
    
    return (
        <>
        <form action="">
            <input type="text" name="firstName" id="firstName" placeholder="First Name ..."/>
            <br />
            <input type="text" name="lastName" id="lastName" placeholder="Last Name ..."/>
            <br />
            <input type="text" name="info" id="info" placeholder="How we can help you ..."/>
            <br />
            <input type="datetime-local" name="date" id="date" />
            <br />
            <input type="phone" name="phone" id="phone" placeholder="Phone Number"/>
            <br />
            <input type="email" name="email" id="email" placeholder="Email"/>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default MakeAnAppointment