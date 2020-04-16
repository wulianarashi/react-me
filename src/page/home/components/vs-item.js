import React from 'react'

function Vs(props) {
    const { title, time } = props
    
    return (
        <li>
            <div className='context-list'>
            <span>{ time }</span>
            </div>
            <h4>{ title }</h4>
        </li>
    )
}

export default Vs