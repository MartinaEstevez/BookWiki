import React from 'react'

const Tittle = (props) => {
    return (
        <div style={{margin: 50}}>
            <h1>{ props.tittle }</h1>
            <h2>{ props.subtittle }</h2>
            <button className='btn btn-secondary' onClick={props.greeting}> Greet </button>
        </div>
    )
}

export default Tittle;
