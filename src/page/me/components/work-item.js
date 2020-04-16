import React from 'react'

function WorkList(props) {
    const { name, desc, time } = props
    
    return (
        <li>
            <div>
                <span>{ name }</span>
                <p>{ desc }</p>
                <em>{ time }</em>
            </div>
        </li>
    )
}

export default WorkList