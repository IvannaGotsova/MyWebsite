import React from "react";
import db from "./db.json";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

function Services() {

  return (
    <div>
      <div className="service-box">
        {db.services.map((service) => (
            <div className="service-item" key={service.id}>
              <h2>{service.type}</h2>
              <img
                className="service-image"
                src={new URL(`${service.photo}`, import.meta.url).href}
                alt=""
              />
              <p>{service.description}</p>
              <p>Duration: {service.time} minutes</p>
              <p>Price: {service.price} USD</p>
              <button onClick={() => window.open(`${window.location.origin}/viewmore/${service.id}`)}>View more ...</button>
              <button onClick={() => window.location.href = (`${window.location.origin}/makeanappointment`)}>Make an appointment</button>
              <br />
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Services;

