import React from "react";
import db from "./db.json";


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
              <button onclick="myViewMoreButtonFunction()">View more</button>
              <br />
              <button onclick="myMakeAnAppointmentButtonFunction()">Make an appointment</button>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Services;
