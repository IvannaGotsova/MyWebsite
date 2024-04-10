import React from "react"
import db from "./db.json"

function Services () {

    return (
        <div>
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