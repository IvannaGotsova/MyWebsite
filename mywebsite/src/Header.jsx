import React from 'react'
import data from "./db.json";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header () {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
       navigate('/viewmore/:id'); 
    };

    const handleSearch = () => {
      const filteredData = data.services.filter(item =>
        item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredData);
    };
  
    return (
        <div>
            <h1>SERVICES</h1>
            <h3>The place where we can help you</h3>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search...</button>

            <ul>
              {results.map(item => (
                  <li key={item.id}>
                    {item.type} ({item.description}) <br />
                    <button onClick={() => window.open(`${window.location.origin}/viewmore/${item.id}`, '_blank')}>
                      View More
                    </button>
                  </li>
                ))}
            </ul>


        </div>
  );
    
}

export default Header 