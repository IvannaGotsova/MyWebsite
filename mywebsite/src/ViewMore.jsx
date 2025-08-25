import React from 'react';
import { useParams } from 'react-router-dom';
import data from "./db.json";

function ViewMore () {

  const { id } = useParams();

  const foundItem = data.services.find(item => item.id === id);

    if (!foundItem) {
        return <div>No Services found!</div>;
    }

  return (
    <>
      <div>
        <h4>Details about {foundItem.type}</h4>
        <img
          className="service-image"
          src={new URL(`${foundItem.photo}`, import.meta.url).href}
          alt=""
        />
        <h6>Description: {foundItem.description}</h6>
        <h6>Price: {foundItem.price}</h6>
        <h6>Time: {foundItem.time}</h6>
        <p>Location: Online</p>
        <p>Workdays: Monday - Saturday</p>
        <p>More about us</p>
        <p>Contacts: Ivan Ivanov</p>
        <p>Address: Aaaaaaa</p>
        <p>Phone Number: 0000000000</p>
        <p>Email: aaa@aaa.com</p>
        <br />
        <button onClick={() => window.location.href = (`${window.location.origin}/makeanappointment`)}>Make an appointment</button>
      </div>
    </>
  )
}

export default ViewMore