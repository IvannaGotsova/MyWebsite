import React from 'react'

function Error () {
    return (
        <>
            Something go wrong!!!
              <div>
                <button onClick={() => window.open(`${window.location.origin}/ `, '_blank')}>GO BACK</button>
              </div>              
        </>
    )
}

export default Error