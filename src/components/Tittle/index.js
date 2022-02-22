import React from 'react'

const Tittle = ({ tittle , subtittle , greeting }) => {
    return (
        <div className='container-fluid'>
            <h1>{ tittle }</h1>
            <h2>{ subtittle }</h2>
            <button className='btn btn-secondary' onClick={greeting}> Greet </button>
        </div>
    )
}

export default Tittle;
