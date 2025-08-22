import React from 'react'
import { useState } from 'react';


function MakeAnAppointment () {

    const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const searchedInfo = event.target.info.value;
    const date = event.target.date.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;

    const message = `${firstName} ${lastName} you were looking for ${searchedInfo}.
    \n The day for your appoinment is ${date}.
    \n Your constacts are:\n Phone: ${phone}.
    \n Email: ${email}.`;
    alert(message); 
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
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