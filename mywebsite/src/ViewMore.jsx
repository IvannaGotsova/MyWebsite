import React from 'react';

function ViewMore () {

    <div>
        <h4>Details</h4>
        <p>Location: Online, Live</p>
        <p>Workdays: Monday - Saturday</p>
        <p>More about us</p>
        <p>Contacts: Ivan Ivanov</p>
        <p>Address: Aaaaaaa</p>
        <p>Phone Number: 0000000000</p>
        <p>Email: aaa@aaa.com</p>
        <br />
        <button onClick={() => window.location.href = (`${window.location.origin}/makeanappointment`)}>Make an appointment</button>
      </div>
}

export default ViewMore