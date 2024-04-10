import React from "react"
import db from "./db.json"

function Services () {

    return (
        <div>
            <h1>Services</h1>
            {db.services.map((service) => (
                <div key={service.id}>
                <h2>{service.type}</h2>
                <p>{service.description}</p>
                <p>{service.time}</p>
                <p>{service.price}</p>
                </div>
      ))}
    </div>
    )
}

export default Services