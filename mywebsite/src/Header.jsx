import React from 'react'
import Services from "./Services"

function Header () {
    return (
        <div>
            <h1>SERVICES</h1>
            <h3>The place where we can help you</h3>
            <form action="">
                <label htmlFor="search">Search</label>
                <input type="search" name="search" id="search" placeholder="I am looking for..." />
            </form>
            <hr />
        </div>
    )
}

export default Header 