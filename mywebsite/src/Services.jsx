import React from "react";
import db from "./db.json";
import { Link } from 'react-router-dom';

function Services() {

  return (
    <div>
      <div className="service-box">
        {db.services.map((service) => (
            <div className="service-item" key={service.id}>
              <h2>{service.type}</h2>
              <img
                className="service-image"
                src={require(`${service.photo}`)}
                alt=""
              />
              <p>{service.description}</p>
              <p>Duration: {service.time} minutes</p>
              <p>Price: {service.price} USD</p>
              <Link to="/viewmore"><button>View more ...</button></Link>
              <Link to="/makeanappointment"><button>VMake an appointment</button></Link>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Services;

