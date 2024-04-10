import React from "react"
import db from "./db.json"

function Services () {

    return (
        <div>
            <h1>SERVICES</h1>
            <h3>The place where we can help you</h3>
            <hr />
            <div className="service-box">
            {db.services.map((service) => (
                <div key={service.id}>
                <h2>{service.type}</h2>
                <img src={service.photo} alt="" />
                <p>{service.description}</p>
                <p>{service.time}</p>
                <p>{service.price}</p>
                </div>
      ))}
            </div>
    </div>
    )
}

export default Services